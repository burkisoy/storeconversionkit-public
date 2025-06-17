/*
  # Create users_public table for premium status tracking
  
  1. New Tables
    - `users_public` - Stores public user data including premium status
      - `id` (uuid, primary key) - References auth.users
      - `is_premium` (boolean) - Whether user has premium access
      - `created_at` (timestamptz) - When record was created
  
  2. Functions
    - `handle_new_user()` - Adds new users to users_public table
    - `set_user_premium_status()` - Sets premium status for a user
    - `admin_get_users()` - Admin function to get all users
  
  3. Security
    - Enable RLS
    - Add policies for user access
*/

-- Create users_public table if it doesn't exist
CREATE TABLE IF NOT EXISTS users_public (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  is_premium boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users_public ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DO $$ 
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'users_public' AND policyname = 'User can access own record'
  ) THEN
    DROP POLICY "User can access own record" ON users_public;
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'users_public' AND policyname = 'User can update own record'
  ) THEN
    DROP POLICY "User can update own record" ON users_public;
  END IF;
END $$;

-- Create policies
CREATE POLICY "User can access own record"
  ON users_public
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "User can update own record"
  ON users_public
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

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

-- Update existing users (only if they exist in auth.users)
INSERT INTO users_public (id, is_premium)
SELECT id, false
FROM auth.users
ON CONFLICT (id) DO NOTHING;

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

-- Set test users to premium for testing
DO $$
DECLARE
  user_id uuid;
BEGIN
  SELECT id INTO user_id FROM auth.users WHERE email = 'mymilliondollarcodes@gmail.com';
  
  IF user_id IS NOT NULL THEN
    PERFORM set_user_premium_status(user_id, true);
  END IF;
END $$;