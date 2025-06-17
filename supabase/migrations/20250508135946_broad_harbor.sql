/*
  # Add comparison-table section
  
  1. Changes
    - Add comparison-table section to sections table
*/

-- Insert the comparison-table section if it doesn't exist
INSERT INTO sections (id, name, customize_count)
VALUES ('comparison-table', 'Comparison Table', 0)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  customize_count = COALESCE(sections.customize_count, 0);