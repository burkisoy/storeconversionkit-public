/*
  # Add testimonial-carousel section
  
  1. Changes
    - Add testimonial-carousel section to sections table
*/

-- Insert the testimonial-carousel section if it doesn't exist
INSERT INTO sections (id, name, customize_count)
VALUES ('testimonial-carousel', 'Testimonial Carousel', 0)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  customize_count = COALESCE(sections.customize_count, 0);