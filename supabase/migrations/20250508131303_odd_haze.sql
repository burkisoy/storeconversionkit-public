/*
  # Add floating-reviews section
  
  1. Changes
    - Add floating-reviews section to sections table
*/

-- Insert the floating-reviews section if it doesn't exist
INSERT INTO sections (id, name, customize_count)
VALUES ('floating-reviews', 'Floating Reviews', 0)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  customize_count = COALESCE(sections.customize_count, 0);