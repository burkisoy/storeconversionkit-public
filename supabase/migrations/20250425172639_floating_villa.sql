-- Insert the popular-notification section if it doesn't exist
INSERT INTO sections (id, name, usage_count)
VALUES ('popular-notification', 'Popular Product Notification', 0)
ON CONFLICT (id) DO NOTHING;