-- Insert the tiktok-slider section if it doesn't exist
INSERT INTO sections (id, name, usage_count)
VALUES ('tiktok-slider', 'TikTok Video Slider', 0)
ON CONFLICT (id) DO NOTHING;