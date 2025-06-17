/*
  # Add how-to-use section
  
  1. Changes
    - Add how-to-use section to sections table
*/

-- Insert the how-to-use section if it doesn't exist
INSERT INTO sections (id, name, customize_count)
VALUES ('how-to-use', 'How to Use Section', 0)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  customize_count = COALESCE(sections.customize_count, 0);