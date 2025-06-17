import { supabase } from './supabase';
import { validateSession } from './sessionManager';

/**
 * Global session validator that checks if the current session is valid
 * and logs out the user if it's not.
 * 
 * This helps with cross-browser session management where a user might
 * be logged in on multiple browsers but should only have one active session.
 */
export const setupSessionValidator = () => {
  // Check session validity every 30 seconds
  const intervalId = setInterval(async () => {
    try {
      // First check if we have a current session
      const { data: { session } } = await supabase.auth.getSession();
      
      // If no session exists, no need to validate
      if (!session) return;
      
      // Validate the session against our custom session management
      const isValid = await validateSession();
      
      // If session is invalid, sign out and reload the page
      if (!isValid) {
        console.log('Session invalidated in another browser. Logging out...');
        await supabase.auth.signOut();
        window.location.reload();
      }
    } catch (error) {
      console.error('Error validating session:', error);
    }
  }, 30000); // Check every 30 seconds
  
  // Return a cleanup function to clear the interval
  return () => clearInterval(intervalId);
};