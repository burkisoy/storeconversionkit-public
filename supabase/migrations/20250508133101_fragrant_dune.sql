/*
  # Add photo-carousel-reviews section
  
  1. Changes
    - Add photo-carousel-reviews section to sections table
*/

-- Insert the photo-carousel-reviews section if it doesn't exist
INSERT INTO sections (id, name, customize_count)
VALUES ('photo-carousel-reviews', 'Photo Carousel Reviews', 0)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  customize_count = COALESCE(sections.customize_count, 0);