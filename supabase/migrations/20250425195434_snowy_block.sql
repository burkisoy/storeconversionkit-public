-- Insert the circle-slider section if it doesn't exist
INSERT INTO sections (id, name, usage_count)
VALUES ('circle-slider', 'Circle Slider', 0)
ON CONFLICT (id) DO NOTHING;