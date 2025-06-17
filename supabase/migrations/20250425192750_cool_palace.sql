/*
  # Add gift-box section
  
  1. New Data
    - Add 'gift-box' section to sections table
*/

-- Insert the gift-box section if it doesn't exist
INSERT INTO sections (id, name, usage_count)
VALUES ('gift-box', 'Gift Box', 0)
ON CONFLICT (id) DO NOTHING;