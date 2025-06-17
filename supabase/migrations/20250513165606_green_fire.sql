-- Create a trigger to automatically add new users to users_public table
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO users_public (id, is_premium)
  VALUES (NEW.id, false)
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger on auth.users table
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();

-- Create a function to set premium status
CREATE OR REPLACE FUNCTION set_user_premium_status(user_uuid uuid, is_premium_status boolean)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO users_public (id, is_premium)
  VALUES (user_uuid, is_premium_status)
  ON CONFLICT (id) DO UPDATE SET
    is_premium = is_premium_status;
END;
$$;