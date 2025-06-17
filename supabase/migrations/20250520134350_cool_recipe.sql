/*
  # Add star-rating-badge section
  
  1. Changes
    - Add star-rating-badge section to sections table
*/

-- Insert the star-rating-badge section if it doesn't exist
INSERT INTO sections (id, name, customize_count)
VALUES ('star-rating-badge', 'Star Rating Badge with Liquid', 0)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  customize_count = COALESCE(sections.customize_count, 0);