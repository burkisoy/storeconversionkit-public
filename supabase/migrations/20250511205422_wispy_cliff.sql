/*
  # Remove unique constraint on user_sessions
  
  1. Changes
    - Remove unique constraint on user_id in user_sessions table
    - Allow multiple sessions per user
*/

-- Remove unique constraint on user_id if it exists
ALTER TABLE IF EXISTS user_sessions 
DROP CONSTRAINT IF EXISTS user_sessions_user_id_key;

-- Create a new migration to allow multiple sessions per user
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