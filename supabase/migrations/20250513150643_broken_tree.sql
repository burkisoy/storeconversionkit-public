/*
  # Create users_public table for premium status tracking

  1. New Tables
    - `users_public`
      - `id` (uuid, primary key) - References auth.users
      - `is_premium` (boolean) - Whether user has premium access
      - `created_at` (timestamptz) - When record was created

  2. Security
    - Enable RLS on users_public table
    - Add policy for users to read/update their own records
    - Only service role can insert records (for Stripe webhook)
*/

-- Create users_public table
CREATE TABLE IF NOT EXISTS users_public (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  is_premium boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users_public ENABLE ROW LEVEL SECURITY;

-- Create policy for users to read their own records
CREATE POLICY "User can access own record"
  ON users_public
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Create policy for users to update their own records
CREATE POLICY "User can update own record"
  ON users_public
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- No INSERT policy for regular users - only service role can insert
-- This ensures only our backend (Stripe webhook) can create records