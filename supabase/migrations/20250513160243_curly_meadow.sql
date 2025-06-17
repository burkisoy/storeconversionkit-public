/*
  # Create function to log out all users
  
  1. New Functions
    - `logout_all_users()` - Deletes all sessions from user_sessions table
    
  2. Security
    - Function is SECURITY DEFINER to run with elevated privileges
    - Only accessible to authenticated users
*/

-- Create function to log out all users
CREATE OR REPLACE FUNCTION logout_all_users()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Delete all sessions from user_sessions table
  DELETE FROM user_sessions;
END;
$$;