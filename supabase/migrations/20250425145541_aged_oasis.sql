/*
  # Add missing sections and improve error handling
  
  1. New Data
    - Add missing 'gradient-text' section to sections table
  
  2. Changes
    - Ensure sections exist before querying
    - Add error handling for missing sections
*/

-- Insert the missing section if it doesn't exist
INSERT INTO sections (id, name, usage_count)
VALUES ('gradient-text', 'Gradient Text', 0)
ON CONFLICT (id) DO NOTHING;