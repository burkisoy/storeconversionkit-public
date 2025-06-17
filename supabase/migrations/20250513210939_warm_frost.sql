-- Drop existing triggers and functions
DROP TRIGGER IF EXISTS on_auth_user_change ON auth.users;
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS handle_auth_user_session();
DROP FUNCTION IF EXISTS handle_new_user();
DROP FUNCTION IF EXISTS safe_delete_user(uuid);
DROP FUNCTION IF EXISTS logout_all_users();

-- First, drop the existing function that's causing the error
DROP FUNCTION IF EXISTS set_user_premium_status(uuid, boolean);

-- First, ensure the CASCADE behavior is properly set on user_sessions
ALTER TABLE IF EXISTS user_sessions 
DROP CONSTRAINT IF EXISTS user_sessions_user_id_fkey;

-- Recreate the constraint with explicit CASCADE
ALTER TABLE IF EXISTS user_sessions
ADD CONSTRAINT user_sessions_user_id_fkey 
FOREIGN KEY (user_id) 
REFERENCES auth.users(id) 
ON DELETE CASCADE;

-- Ensure the CASCADE behavior is properly set on users_public
ALTER TABLE IF EXISTS users_public
DROP CONSTRAINT IF EXISTS users_public_id_fkey;

-- Recreate the constraint with explicit CASCADE
ALTER TABLE IF EXISTS users_public
ADD CONSTRAINT users_public_id_fkey 
FOREIGN KEY (id) 
REFERENCES auth.users(id) 
ON DELETE CASCADE;

-- Create a new function to handle new users with better error handling
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Insert with better error handling
  BEGIN
    INSERT INTO public.users_public (id, is_premium)
    VALUES (NEW.id, false)
    ON CONFLICT (id) DO NOTHING;
  EXCEPTION WHEN OTHERS THEN
    -- Log error but don't fail the transaction
    RAISE WARNING 'Error in handle_new_user trigger: %', SQLERRM;
  END;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a new function to handle user deletion with better error handling
CREATE OR REPLACE FUNCTION handle_auth_user_session()
RETURNS TRIGGER AS $$
BEGIN
  -- When a user is deleted, ensure all related records are deleted
  IF TG_OP = 'DELETE' THEN
    -- These should be handled by CASCADE, but we'll be explicit
    BEGIN
      DELETE FROM user_sessions WHERE user_id = OLD.id;
    EXCEPTION WHEN OTHERS THEN
      RAISE WARNING 'Error deleting from user_sessions: %', SQLERRM;
    END;
    
    BEGIN
      DELETE FROM users_public WHERE id = OLD.id;
    EXCEPTION WHEN OTHERS THEN
      RAISE WARNING 'Error deleting from users_public: %', SQLERRM;
    END;
  END IF;
  
  RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the triggers
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();

CREATE TRIGGER on_auth_user_change
  AFTER DELETE ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_auth_user_session();

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
  BEGIN
    DELETE FROM users_public WHERE id = user_uuid;
  EXCEPTION WHEN OTHERS THEN
    RAISE WARNING 'Error deleting from users_public: %', SQLERRM;
  END;
  
  -- Then delete from user_sessions
  BEGIN
    DELETE FROM user_sessions WHERE user_id = user_uuid;
  EXCEPTION WHEN OTHERS THEN
    RAISE WARNING 'Error deleting from user_sessions: %', SQLERRM;
  END;
  
  -- Finally delete from auth.users
  BEGIN
    DELETE FROM auth.users WHERE id = user_uuid;
    
    -- Check if user was deleted
    IF NOT EXISTS (SELECT 1 FROM auth.users WHERE id = user_uuid) THEN
      success := true;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    RAISE WARNING 'Error deleting from auth.users: %', SQLERRM;
    RETURN false;
  END;
  
  RETURN success;
END;
$$;

-- Create a function to log out all users
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

-- Create or replace the set_user_premium_status function with better error handling
-- Now with boolean return type
CREATE OR REPLACE FUNCTION set_user_premium_status(user_uuid uuid, is_premium_status boolean)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  success boolean := false;
BEGIN
  -- Try to update first
  BEGIN
    UPDATE users_public
    SET is_premium = is_premium_status
    WHERE id = user_uuid;
    
    -- If no rows were updated, try to insert
    IF NOT FOUND THEN
      INSERT INTO users_public (id, is_premium)
      VALUES (user_uuid, is_premium_status)
      ON CONFLICT (id) DO UPDATE
      SET is_premium = is_premium_status;
    END IF;
    
    success := true;
  EXCEPTION WHEN OTHERS THEN
    RAISE WARNING 'Error setting premium status: %', SQLERRM;
    success := false;
  END;
  
  RETURN success;
END;
$$;