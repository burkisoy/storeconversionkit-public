-- Insert the tabs section if it doesn't exist
INSERT INTO sections (id, name, usage_count)
VALUES ('tabs', 'Tabs Component', 0)
ON CONFLICT (id) DO NOTHING;