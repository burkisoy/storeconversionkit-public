/*
  # Fix user deletion issues
  
  1. Changes
    - Ensure proper CASCADE behavior for user_sessions and users_public tables
    - Add explicit ON DELETE CASCADE to all foreign key references
    - Create a function to safely delete users
*/

-- First, ensure the CASCADE behavior is properly set on user_sessions
ALTER TABLE IF EXISTS user_sessions 
DROP CONSTRAINT IF EXISTS user_sessions_user_id_fkey;

ALTER TABLE IF EXISTS user_sessions
ADD CONSTRAINT user_sessions_user_id_fkey 
FOREIGN KEY (user_id) 
REFERENCES auth.users(id) 
ON DELETE CASCADE;

-- Ensure the CASCADE behavior is properly set on users_public
ALTER TABLE IF EXISTS users_public
DROP CONSTRAINT IF EXISTS users_public_id_fkey;

ALTER TABLE IF EXISTS users_public
ADD CONSTRAINT users_public_id_fkey 
FOREIGN KEY (id) 
REFERENCES auth.users(id) 
ON DELETE CASCADE;

-- Create a function to safely delete users
CREATE OR REPLACE FUNCTION safe_delete_user(user_uuid uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  success boolean := false;
BEGIN
  -- First delete from users_public
  DELETE FROM users_public WHERE id = user_uuid;
  
  -- Then delete from user_sessions
  DELETE FROM user_sessions WHERE user_id = user_uuid;
  
  -- Finally delete from auth.users
  DELETE FROM auth.users WHERE id = user_uuid;
  
  -- Check if user was deleted
  IF NOT EXISTS (SELECT 1 FROM auth.users WHERE id = user_uuid) THEN
    success := true;
  END IF;
  
  RETURN success;
END;
$$;