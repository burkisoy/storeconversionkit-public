/*
  # Add missing sections
  
  1. Changes
    - Add missing sections to sections table
    - Ensure all 34 sections are present
*/

-- Insert missing sections if they don't exist
INSERT INTO sections (id, name, customize_count)
VALUES 
  ('announcement-bar-2', 'Announcement Bar 3', 0),
  ('notice-box', 'Notice Box', 0),
  ('feature-list', 'Feature List', 0)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  customize_count = COALESCE(sections.customize_count, 0);

-- Verify all sections exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM sections WHERE id = 'announcement-bar-2') THEN
    RAISE EXCEPTION 'Missing section: announcement-bar-2';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM sections WHERE id = 'notice-box') THEN
    RAISE EXCEPTION 'Missing section: notice-box';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM sections WHERE id = 'feature-list') THEN
    RAISE EXCEPTION 'Missing section: feature-list';
  END IF;
END $$;