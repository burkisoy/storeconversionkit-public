/*
  # Add shipping-badge section
  
  1. Changes
    - Add shipping-badge section to sections table
*/

-- Insert the shipping-badge section if it doesn't exist
INSERT INTO sections (id, name, customize_count)
VALUES ('shipping-badge', 'Premium Shipping Badge', 0)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  customize_count = COALESCE(sections.customize_count, 0);