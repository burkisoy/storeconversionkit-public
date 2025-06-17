/*
  # Add TikTok Video Slider section

  1. Changes
    - Add tiktok-slider section to sections table if not exists
    - Ensure customize_count column exists
*/

-- Insert the tiktok-slider section if it doesn't exist
INSERT INTO sections (id, name, customize_count)
VALUES ('tiktok-slider', 'TikTok Video Slider', 0)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  customize_count = COALESCE(sections.customize_count, 0);