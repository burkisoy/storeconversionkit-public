import { supabase } from './supabase';
import { makeSecureRequest, handleCorsError, CorsError } from './corsUtils';

// Session storage keys
export const SESSION_TOKEN_KEY = 'supabase_session_token';
export const SESSION_LAST_VALIDATED_KEY = 'supabase_session_last_validated';
export const SESSION_USER_ID_KEY = 'supabase_session_user_id';

// Validation interval (30 minutes instead of 5 minutes)
const VALIDATION_INTERVAL = 30 * 60 * 1000;

/**
 * Creates a new session for the user
 */
export const createSession = async (userId: string, sessionToken: string) => {
  try {
    // Store session info locally first (this is the most important part)
    localStorage.setItem(SESSION_TOKEN_KEY, sessionToken);
    localStorage.setItem(SESSION_USER_ID_KEY, userId);
    localStorage.setItem(SESSION_LAST_VALIDATED_KEY, Date.now().toString());
    
    // Try to call the edge function to create the session in the database
    // This is optional - if it fails, we still have local session
    try {
      const response = await makeSecureRequest(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-session`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
          },
          body: {
            userId,
            sessionToken,
            userAgent: navigator.userAgent,
            ipAddress: null // We can't get this client-side
          }
        }
      );
      
      if (!response.ok) {
        console.warn(`Session creation API failed: HTTP ${response.status}`);
        return true; // Still return true since local session is created
      }
      
      const data = await response.json();
      
      if (!data.success) {
        console.warn('Session creation API returned error:', data.error);
        return true; // Still return true since local session is created
      }
      
      return true;
    } catch (apiError) {
      console.warn('Session creation API failed, but local session created:', apiError);
      return true; // Local session is still valid
    }
  } catch (error) {
    console.error('Error creating local session:', error);
    return false;
  }
};

/**
 * Validates the current session
 */
export const validateSession = async (force = false): Promise<boolean> => {
  try {
    const sessionToken = localStorage.getItem(SESSION_TOKEN_KEY);
    const userId = localStorage.getItem(SESSION_USER_ID_KEY);
    const lastValidated = localStorage.getItem(SESSION_LAST_VALIDATED_KEY);
    
    // If we don't have a session, it's invalid
    if (!sessionToken || !userId) {
      return false;
    }
    
    // Only validate if forced or if it's been more than VALIDATION_INTERVAL since last validation
    if (!force && lastValidated) {
      const lastValidatedTime = parseInt(lastValidated, 10);
      if (Date.now() - lastValidatedTime < VALIDATION_INTERVAL) {
        return true; // Skip validation if we validated recently
      }
    }
    
    // Set a timeout for the validation request
    const timeoutPromise = new Promise<boolean>((_, reject) => {
      setTimeout(() => {
        reject(new Error('Session validation timed out'));
      }, 10000); // 10 seconds timeout
    });
    
    // Call the edge function to validate the session using secure request
    const validationPromise = makeSecureRequest(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/validate-session`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: {
          userId,
          sessionToken
        }
      }
    ).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      return response.json();
    });
    
    // Race the validation request against the timeout
    const data = await Promise.race([validationPromise, timeoutPromise]);
    
    // Update last validated time
    if (data.valid) {
      localStorage.setItem(SESSION_LAST_VALIDATED_KEY, Date.now().toString());
      return true;
    } else {
      // If session is invalid, clear local storage
      clearSession();
      return false;
    }
  } catch (error) {
    if (error instanceof CorsError) {
      handleCorsError(error);
    } else {
      console.error('Error validating session:', error);
    }
    clearSession();
    return false;
  }
};

/**
 * Clears the current session
 */
export const clearSession = () => {
  localStorage.removeItem(SESSION_TOKEN_KEY);
  localStorage.removeItem(SESSION_USER_ID_KEY);
  localStorage.removeItem(SESSION_LAST_VALIDATED_KEY);
  
  // Also clear any cached auth status
  localStorage.removeItem('auth_status');
  
  // Clear any premium status cache
  const keys = Object.keys(localStorage);
  for (const key of keys) {
    if (key.startsWith('premium_status_')) {
      localStorage.removeItem(key);
    }
  }
};

/**
 * Initializes session management
 * This should be called when the app starts
 */
export const initializeSessionManager = async () => {
  // Get the current session
  const { data: { session } } = await supabase.auth.getSession();
  
  if (session?.user) {
    // Create or update the session
    await createSession(session.user.id, session.access_token);
  } else {
    // Clear any existing session data
    clearSession();
  }
  
  // Set up auth state change listener
  supabase.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_IN' && session) {
      // Create a new session when user signs in
      await createSession(session.user.id, session.access_token);
    } else if (event === 'SIGNED_OUT') {
      // Clear session when user signs out
      clearSession();
    } else if (event === 'TOKEN_REFRESHED' && session) {
      // Update session token when refreshed
      localStorage.setItem(SESSION_TOKEN_KEY, session.access_token);
      localStorage.setItem(SESSION_LAST_VALIDATED_KEY, Date.now().toString());
    }
  });
};