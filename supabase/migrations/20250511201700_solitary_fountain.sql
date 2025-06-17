-- Allow multiple sessions per user by removing unique constraint on session_token
-- This migration fixes the issue where users can't log back in after logging out

-- First, drop the existing unique constraint if it exists
ALTER TABLE IF EXISTS user_sessions 
DROP CONSTRAINT IF EXISTS user_sessions_session_token_key;

-- Create a new index that's not unique
CREATE INDEX IF NOT EXISTS idx_user_sessions_session_token ON user_sessions(session_token);

-- Update the create_user_session function to not delete existing sessions
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
  -- Create a new session without deleting existing ones
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