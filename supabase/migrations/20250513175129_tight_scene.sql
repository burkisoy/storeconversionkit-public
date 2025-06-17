-- Create admin function to get all users with premium status
CREATE OR REPLACE FUNCTION admin_get_users()
RETURNS TABLE (
  id uuid,
  email text,
  is_premium boolean,
  last_sign_in_at timestamptz
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Check if the calling user is an admin
  IF (SELECT email FROM auth.users WHERE id = auth.uid()) <> 'admin@storeconversionkit.com' THEN
    RAISE EXCEPTION 'Only admin can access this function';
  END IF;

  RETURN QUERY
  SELECT 
    au.id,
    au.email,
    COALESCE(up.is_premium, false) as is_premium,
    au.last_sign_in_at
  FROM 
    auth.users au
  LEFT JOIN 
    users_public up ON au.id = up.id
  ORDER BY 
    au.email;
END;
$$;