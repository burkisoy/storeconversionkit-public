/*
  # Add analytics columns and policies

  1. New Columns
    - country (text) - if not exists
    - device_type (text) - if not exists
    - is_new_visitor (boolean) - if not exists

  2. Security
    - Enable RLS
    - Add policies for public insert
    - Add policies for authenticated read
*/

-- Add new columns to page_views table if they don't exist
DO $$ 
BEGIN 
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'page_views' AND column_name = 'country'
  ) THEN
    ALTER TABLE page_views ADD COLUMN country text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'page_views' AND column_name = 'device_type'
  ) THEN
    ALTER TABLE page_views ADD COLUMN device_type text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'page_views' AND column_name = 'is_new_visitor'
  ) THEN
    ALTER TABLE page_views ADD COLUMN is_new_visitor boolean DEFAULT true;
  END IF;
END $$;

-- Create or replace function to determine device type
CREATE OR REPLACE FUNCTION get_device_type(user_agent text)
RETURNS text
LANGUAGE plpgsql
AS $$
BEGIN
  IF user_agent ~* 'Mobile|Android|iPhone|iPad|iPod' THEN
    RETURN 'Mobile';
  ELSE
    RETURN 'Desktop';
  END IF;
END;
$$;

-- Enable RLS if not already enabled
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public insert page views" ON page_views;
DROP POLICY IF EXISTS "Allow authenticated read page views" ON page_views;

-- Create new policies
CREATE POLICY "Allow public insert page views"
ON page_views
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Allow authenticated read page views"
ON page_views
FOR SELECT
TO authenticated
USING (true);