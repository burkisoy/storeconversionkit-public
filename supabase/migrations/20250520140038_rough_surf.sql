/*
  # Add star-rating-with-liquid section
  
  1. Changes
    - Add star-rating-with-liquid section to sections table
*/

-- Insert the star-rating-with-liquid section if it doesn't exist
INSERT INTO sections (id, name, customize_count)
VALUES ('star-rating-with-liquid', 'Star Rating Badge with Liquid', 0)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  customize_count = COALESCE(sections.customize_count, 0);