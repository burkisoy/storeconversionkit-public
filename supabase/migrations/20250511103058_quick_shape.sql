/*
  # Add premium-review-badge section
  
  1. Changes
    - Add premium-review-badge section to sections table
*/

-- Insert the premium-review-badge section if it doesn't exist
INSERT INTO sections (id, name, customize_count)
VALUES ('premium-review-badge', 'Premium Review Badge', 0)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  customize_count = COALESCE(sections.customize_count, 0);