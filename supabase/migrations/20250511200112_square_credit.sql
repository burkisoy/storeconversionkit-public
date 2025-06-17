/*
  # Update session management to allow multiple devices
  
  1. Changes
    - Update create_user_session function to allow multiple sessions per user
    - Update validate_user_session function to validate specific session token
*/

-- Drop existing function
DROP FUNCTION IF EXISTS create_user_session;

-- Create updated function to allow multiple sessions
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

-- Update validate_user_session function to check specific token
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