import { createClient, Session } from '@supabase/supabase-js';
import { createSession, validateSession, clearSession, SESSION_TOKEN_KEY } from './sessionManager';

// Cache durations
const AUTH_CACHE_DURATION = 30 * 60 * 1000; // 30 minutes (increased from 5 minutes)
const VISITOR_CACHE_DURATION = 60 * 1000; // 1 minute

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
);

// Cache management
const getCache = (key: string) => {
  const item = localStorage.getItem(key);
  if (!item) return null;

  const { value, timestamp } = JSON.parse(item);
  const now = Date.now();

  if (now - timestamp > (key.includes('auth') ? AUTH_CACHE_DURATION : VISITOR_CACHE_DURATION)) {
    localStorage.removeItem(key);
    return null;
  }

  return value;
};

const setCache = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify({
    value,
    timestamp: Date.now()
  }));
};

// Handle session refresh
export const refreshSession = async () => {
  try {
    // First check if we have a current session
    const { data: { session: currentSession }, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError) {
      console.error('Session error:', sessionError);
      await handleAuthError();
      return null;
    }
    
    // If no current session exists, clear auth state and return
    if (!currentSession) {
      await handleAuthError();
      return null;
    }

    // Set a timeout for the validation
    const validationPromise = validateSession();
    const timeoutPromise = new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(false), 10000); // 10 seconds timeout
    });
    
    // Race the validation against the timeout
    const isValid = await Promise.race([validationPromise, timeoutPromise]);
    
    if (!isValid) {
      console.log('Session invalidated or validation timed out');
      await handleAuthError();
      return null;
    }

    // Only attempt refresh if we have a current session
    const { data: { session: refreshedSession }, error: refreshError } = 
      await supabase.auth.refreshSession();
    
    if (refreshError) {
      console.error('Refresh error:', refreshError);
      await handleAuthError();
      return null;
    }

    // Check if user has premium access
    const isPremium = await checkPremiumStatus(refreshedSession?.user?.id);
    
    // Update cached auth status with the new session state and premium status
    setCachedAuthStatus(isPremium);
    
    // Update the session token in our session manager
    if (refreshedSession?.access_token) {
      localStorage.setItem(SESSION_TOKEN_KEY, refreshedSession.access_token);
    }
    
    return refreshedSession;
  } catch (error) {
    console.error('Session refresh error:', error);
    await handleAuthError();
    return null;
  }
};

// Centralized auth error handling
const handleAuthError = async () => {
  try {
    // Clear auth cache
    setCachedAuthStatus(false);
    clearSession();
    
    // Sign out user
    await supabase.auth.signOut();
  } catch (error) {
    console.error('Error during auth cleanup:', error);
  }
};

// Check if user has premium access
export const checkPremiumStatus = async (userId?: string): Promise<boolean> => {
  if (!userId) return false;
  
  try {
    // First check cached status
    const cachedStatus = getCache(`premium_status_${userId}`);
    if (cachedStatus !== null) {
      return cachedStatus;
    }
    
    // Set a timeout for the request
    const fetchPromise = supabase
      .from('users_public')
      .select('is_premium')
      .eq('id', userId)
      .single();
      
    const timeoutPromise = new Promise<{data: null, error: Error}>((resolve) => {
      setTimeout(() => resolve({
        data: null, 
        error: new Error('Premium status check timed out')
      }), 10000); // 10 seconds timeout
    });
    
    // Race the fetch against the timeout
    const { data, error } = await Promise.race([fetchPromise, timeoutPromise]);
    
    if (error) {
      console.error('Error checking premium status:', error);
      return false;
    }
    
    const isPremium = data?.is_premium || false;
    
    // Cache the result
    setCache(`premium_status_${userId}`, isPremium);
    
    return isPremium;
  } catch (error) {
    console.error('Unexpected error checking premium status:', error);
    return false;
  }
};

export const incrementSectionUsage = async (sectionId: string) => {
  try {
    const { data, error } = await supabase.rpc('increment_section_usage', {
      section_id: sectionId
    });
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error incrementing section usage:', error);
    return null;
  }
};

export const incrementCustomizeCount = async (sectionId: string) => {
  try {
    const { data, error } = await supabase.rpc('increment_customize_count', {
      section_id: sectionId
    });
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error incrementing customize count:', error);
    return null;
  }
};

// Generate a unique session ID if not exists
const getSessionId = () => {
  let sessionId = localStorage.getItem('visitor_session_id');
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    localStorage.setItem('visitor_session_id', sessionId);
  }
  return sessionId;
};

// Throttle function
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return (...args: any[]) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Track visitor activity with throttling
export const trackVisitor = throttle(async (page: string) => {
  try {
    const cacheKey = `visitor_tracking_${page}`;
    const cachedTracking = getCache(cacheKey);
    if (cachedTracking) return;

    const sessionId = getSessionId();
    const { data: { user } } = await supabase.auth.getUser();
    
    await supabase.rpc('track_page_view', {
      p_session_id: sessionId,
      p_user_agent: navigator.userAgent,
      p_ip_address: null,
      p_country: null,
      p_is_logged_in: !!user
    });

    setCache(cacheKey, true);

    const channel = supabase.channel('active_visitors')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'active_visitors'
      }, (payload) => {
        console.log('Visitors updated:', payload);
      })
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  } catch (error) {
    console.error('Error tracking visitor:', error);
  }
}, 60000); // Throttle to once per minute

// Get active visitors count with caching
export const getActiveVisitors = async () => {
  try {
    const cacheKey = 'active_visitors_count';
    const cachedCount = getCache(cacheKey);
    if (cachedCount !== null) return cachedCount;

    const { count, error } = await supabase
      .from('active_visitors')
      .select('*', { count: 'exact', head: true })
      .gte('last_seen', new Date(Date.now() - 5 * 60 * 1000).toISOString());

    if (error) throw error;
    
    const visitorCount = count || 0;
    setCache(cacheKey, visitorCount);
    return visitorCount;
  } catch (error) {
    console.error('Error getting active visitors:', error);
    return 0;
  }
};

// Get cached auth status
export const getCachedAuthStatus = () => {
  return getCache('auth_status');
};

// Set cached auth status
export const setCachedAuthStatus = (isPremium: boolean) => {
  setCache('auth_status', isPremium);
};

// Log out all users
export const logoutAllUsers = async (): Promise<boolean> => {
  try {
    const { error } = await supabase.functions.invoke('logout-all-users', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('sb-wwbbrufqrimlnfnhoqom-auth-token')}`
      }
    });
    
    if (error) {
      console.error('Error logging out all users:', error);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Unexpected error logging out all users:', error);
    return false;
  }
};