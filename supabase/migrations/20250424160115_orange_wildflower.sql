/*
  # Add page views tracking

  1. New Tables
    - `page_views`
      - `id` (uuid, primary key)
      - `session_id` (text)
      - `user_agent` (text)
      - `ip_address` (text) 
      - `viewed_at` (timestamptz)

  2. Security
    - Enable RLS on `page_views` table
    - Add policy for inserting page views
    - Add policy for reading page views
*/

CREATE TABLE IF NOT EXISTS page_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  user_agent text,
  ip_address text,
  viewed_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

-- Allow public to insert page views
CREATE POLICY "Allow public insert page views"
  ON page_views
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow authenticated users to read page views
CREATE POLICY "Allow authenticated read page views"
  ON page_views
  FOR SELECT
  TO authenticated
  USING (true);