/*
  # Add product-features section to sections table
  
  1. Changes
    - Add 'product-features' to sections table
*/

-- Insert the product-features section if it doesn't exist
INSERT INTO sections (id, name, customize_count)
VALUES ('product-features', 'Product Features Premium', 0)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  customize_count = COALESCE(sections.customize_count, 0); 