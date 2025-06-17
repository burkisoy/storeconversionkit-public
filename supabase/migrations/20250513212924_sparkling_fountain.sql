-- Create a function to get user ID by email
CREATE OR REPLACE FUNCTION get_user_id_by_email(email_param text)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  user_id uuid;
BEGIN
  -- Get the user ID from auth.users
  SELECT id INTO user_id
  FROM auth.users
  WHERE email = email_param;
  
  RETURN user_id;
END;
$$;