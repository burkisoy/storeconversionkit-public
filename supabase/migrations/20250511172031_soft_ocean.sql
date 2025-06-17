/*
  # Add single-device session management
  
  1. New Tables
    - `user_sessions` - Stores active user sessions
      - `id` (uuid, primary key)
      - `user_id` (uuid) - References auth.users
      - `session_token` (text) - Unique token for the session
      - `created_at` (timestamptz) - When session was created
      - `last_active` (timestamptz) - Last activity timestamp
      - `user_agent` (text) - Browser/device info
      - `ip_address` (text) - IP address
  
  2. Functions
    - `create_user_session` - Creates or updates a user's session
    - `validate_user_session` - Checks if a session is valid
    - `invalidate_user_sessions` - Invalidates all sessions for a user
  
  3. Security
    - Enable RLS
    - Add policies for session management
*/

-- Create user_sessions table
CREATE TABLE IF NOT EXISTS user_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  session_token text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now(),
  last_active timestamptz DEFAULT now(),
  user_agent text,
  ip_address text
);

-- Create index on user_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_user_sessions_user_id ON user_sessions(user_id);

-- Enable RLS
ALTER TABLE user_sessions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own sessions"
  ON user_sessions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own sessions"
  ON user_sessions
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Function to create or update a user session
CREATE OR REPLACE FUNCTION create_user_session(
  p_user_id uuid,
  p_session_token text,
  p_user_agent text DEFAULT NULL,
  p_ip_address text DEFAULT NULL
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_session_id uuid;
BEGIN
  -- First, invalidate any existing sessions for this user
  DELETE FROM user_sessions
  WHERE user_id = p_user_id;
  
  -- Then create a new session
  INSERT INTO user_sessions (
    user_id,
    session_token,
    user_agent,
    ip_address
  )
  VALUES (
    p_user_id,
    p_session_token,
    p_user_agent,
    p_ip_address
  )
  RETURNING id INTO v_session_id;
  
  RETURN v_session_id;
END;
$$;

-- Function to validate a user session
CREATE OR REPLACE FUNCTION validate_user_session(
  p_user_id uuid,
  p_session_token text
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_valid boolean;
BEGIN
  SELECT EXISTS (
    SELECT 1 
    FROM user_sessions
    WHERE user_id = p_user_id
    AND session_token = p_session_token
  ) INTO v_valid;
  
  -- Update last_active timestamp if session is valid
  IF v_valid THEN
    UPDATE user_sessions
    SET last_active = now()
    WHERE user_id = p_user_id
    AND session_token = p_session_token;
  END IF;
  
  RETURN v_valid;
END;
$$;

-- Function to invalidate all sessions for a user
CREATE OR REPLACE FUNCTION invalidate_user_sessions(
  p_user_id uuid
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  DELETE FROM user_sessions
  WHERE user_id = p_user_id;
END;
$$;

-- Create a trigger to handle session management on auth events
CREATE OR REPLACE FUNCTION handle_auth_user_session()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- When a user signs out, remove their sessions
  IF TG_OP = 'DELETE' THEN
    DELETE FROM user_sessions WHERE user_id = OLD.id;
  END IF;
  
  RETURN NULL;
END;
$$;

-- Create the trigger on auth.users
DROP TRIGGER IF EXISTS on_auth_user_change ON auth.users;
CREATE TRIGGER on_auth_user_change
  AFTER DELETE ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_auth_user_session();