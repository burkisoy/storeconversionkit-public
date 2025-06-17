-- Insert the scrolling-reviews section if it doesn't exist
INSERT INTO sections (id, name, usage_count)
VALUES ('scrolling-reviews', 'Scrolling Reviews', 0)
ON CONFLICT (id) DO NOTHING;