-- Create user_sessions table if it doesn't exist
CREATE TABLE IF NOT EXISTS user_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  session_token text NOT NULL,
  created_at timestamptz DEFAULT now(),
  last_active timestamptz DEFAULT now(),
  user_agent text,
  ip_address text
);

-- Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_user_sessions_user_id ON user_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_sessions_session_token ON user_sessions(session_token);

-- Enable RLS
ALTER TABLE user_sessions ENABLE ROW LEVEL SECURITY;

-- Create policies
DROP POLICY IF EXISTS "Users can view their own sessions" ON user_sessions;
CREATE POLICY "Users can view their own sessions"
  ON user_sessions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete their own sessions" ON user_sessions;
CREATE POLICY "Users can delete their own sessions"
  ON user_sessions
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

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

-- Create the trigger on auth.users if it doesn't exist
DROP TRIGGER IF EXISTS on_auth_user_change ON auth.users;
CREATE TRIGGER on_auth_user_change
  AFTER DELETE ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_auth_user_session();