/*
  # Fix Sections Table RLS Policies

  1. Security Changes
    - Enable RLS on sections table
    - Add policy for public read access to usage counts
    - Add policy for authenticated users to insert new sections
    - Add policy for authenticated users to update usage counts

  2. Changes
    - Drop existing policies and recreate them with proper permissions
    - Ensure public read access for usage statistics
    - Allow authenticated users to manage sections
*/

-- Enable RLS
ALTER TABLE sections ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Allow public read access" ON sections;
DROP POLICY IF EXISTS "Allow authenticated increment" ON sections;

-- Create new policies
CREATE POLICY "Allow public read access"
ON sections
FOR SELECT
TO public
USING (true);

CREATE POLICY "Allow authenticated insert sections"
ON sections
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Allow authenticated update sections"
ON sections
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);