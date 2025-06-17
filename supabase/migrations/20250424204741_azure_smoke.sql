/*
  # Restore page_views table and functions

  1. New Tables
    - `page_views`
      - `id` (uuid, primary key)
      - `session_id` (text)
      - `user_agent` (text)
      - `ip_address` (text)
      - `viewed_at` (timestamptz)
      - `country` (text)
      - `device_type` (text)
      - `is_new_visitor` (boolean)
      - `is_logged_in` (boolean)

  2. Functions
    - get_device_type() - Determines device type from user agent
    - track_page_view() - Records a page view

  3. Security
    - Enable RLS
    - Allow public insert
    - Allow authenticated read
*/

-- Create page_views table
CREATE TABLE IF NOT EXISTS page_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  user_agent text,
  ip_address text,
  viewed_at timestamptz DEFAULT now(),
  country text,
  device_type text,
  is_new_visitor boolean DEFAULT true,
  is_logged_in boolean DEFAULT false
);

-- Enable RLS
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

-- Create policies
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

-- Create function to determine device type
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

-- Create function to track page views
CREATE OR REPLACE FUNCTION track_page_view(
  p_session_id text,
  p_user_agent text,
  p_ip_address text,
  p_country text DEFAULT NULL,
  p_is_logged_in boolean DEFAULT false
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_id uuid;
BEGIN
  INSERT INTO page_views (
    session_id,
    user_agent,
    ip_address,
    country,
    device_type,
    is_logged_in,
    is_new_visitor
  )
  VALUES (
    p_session_id,
    p_user_agent,
    p_ip_address,
    p_country,
    get_device_type(p_user_agent),
    p_is_logged_in,
    NOT EXISTS (
      SELECT 1 FROM page_views 
      WHERE session_id = p_session_id
    )
  )
  RETURNING id INTO v_id;

  RETURN v_id;
END;
$$;