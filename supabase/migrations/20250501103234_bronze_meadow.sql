-- Drop tables and functions safely
DO $$ 
BEGIN
  -- Drop tables if they exist
  IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'active_visitors') THEN
    DROP TABLE public.active_visitors CASCADE;
  END IF;

  IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'page_views') THEN
    DROP TABLE public.page_views CASCADE;
  END IF;

  -- Drop functions if they exist
  IF EXISTS (SELECT FROM pg_proc WHERE proname = 'track_visitor') THEN
    DROP FUNCTION track_visitor;
  END IF;

  IF EXISTS (SELECT FROM pg_proc WHERE proname = 'get_active_visitors') THEN
    DROP FUNCTION get_active_visitors;
  END IF;

  IF EXISTS (SELECT FROM pg_proc WHERE proname = 'get_device_type') THEN
    DROP FUNCTION get_device_type;
  END IF;

  IF EXISTS (SELECT FROM pg_proc WHERE proname = 'track_page_view') THEN
    DROP FUNCTION track_page_view;
  END IF;
END $$;

-- Keep only the essential sections table
CREATE TABLE IF NOT EXISTS sections (
  id text PRIMARY KEY,
  name text NOT NULL,
  customize_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE sections ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access"
ON sections
FOR SELECT
TO public
USING (true);

CREATE POLICY "Allow authenticated update sections"
ON sections
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Create index for sorting
CREATE INDEX IF NOT EXISTS sections_customize_count_idx ON sections (customize_count DESC);

-- Recreate the increment function
CREATE OR REPLACE FUNCTION increment_customize_count(section_id text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE sections
  SET 
    customize_count = COALESCE(customize_count, 0) + 1,
    updated_at = now()
  WHERE id = section_id;
END;
$$;