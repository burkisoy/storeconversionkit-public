/*
  # Add active visitors tracking

  1. New Tables
    - `active_visitors`
      - `id` (uuid, primary key)
      - `session_id` (text) - Unique session identifier
      - `last_seen` (timestamptz) - Last activity timestamp
      - `is_logged_in` (boolean) - Whether visitor is logged in
      - `page` (text) - Current page path
      - `created_at` (timestamptz) - When visitor first arrived

  2. Functions
    - track_visitor() - Updates or creates visitor record
    - cleanup_visitors() - Removes inactive visitors
    - get_active_visitors() - Returns count of active visitors

  3. Security
    - Enable RLS
    - Allow public insert/update
    - Allow authenticated read
*/

-- Create active_visitors table
CREATE TABLE IF NOT EXISTS active_visitors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL UNIQUE,
  last_seen timestamptz DEFAULT now(),
  is_logged_in boolean DEFAULT false,
  page text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE active_visitors ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public insert" ON active_visitors
  FOR INSERT TO public
  WITH CHECK (true);

CREATE POLICY "Allow public update" ON active_visitors
  FOR UPDATE TO public
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated read" ON active_visitors
  FOR SELECT TO authenticated
  USING (true);

-- Function to track/update visitor
CREATE OR REPLACE FUNCTION track_visitor(
  p_session_id text,
  p_page text,
  p_is_logged_in boolean DEFAULT false
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- First cleanup old records
  DELETE FROM active_visitors
  WHERE last_seen < NOW() - INTERVAL '5 minutes';

  -- Then insert or update the current visitor
  INSERT INTO active_visitors (session_id, page, is_logged_in, last_seen)
  VALUES (p_session_id, p_page, p_is_logged_in, now())
  ON CONFLICT (session_id) 
  DO UPDATE SET 
    last_seen = now(),
    page = EXCLUDED.page,
    is_logged_in = EXCLUDED.is_logged_in;
END;
$$;

-- Function to get active visitors count
CREATE OR REPLACE FUNCTION get_active_visitors()
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  visitor_count integer;
BEGIN
  -- First cleanup old records
  DELETE FROM active_visitors
  WHERE last_seen < NOW() - INTERVAL '5 minutes';
  
  -- Then get the count
  SELECT COUNT(*)
  INTO visitor_count
  FROM active_visitors;
  
  RETURN visitor_count;
END;
$$;