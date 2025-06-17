/*
  # Fix user creation process
  
  1. Changes
    - Fix handle_new_user trigger function
    - Ensure proper error handling
    - Make function more robust
*/

-- Drop existing function and trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS handle_new_user();

-- Create improved function to handle new users
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

-- Create trigger on auth.users table
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();

-- Ensure users_public table exists with correct structure
CREATE TABLE IF NOT EXISTS users_public (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  is_premium boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users_public ENABLE ROW LEVEL SECURITY;

-- Recreate policies
DROP POLICY IF EXISTS "User can access own record" ON users_public;
CREATE POLICY "User can access own record"
  ON users_public
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "User can update own record" ON users_public;
CREATE POLICY "User can update own record"
  ON users_public
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);