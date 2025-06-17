-- Insert the floating-comments section if it doesn't exist
INSERT INTO sections (id, name, usage_count)
VALUES ('floating-comments', 'Floating Comments', 0)
ON CONFLICT (id) DO NOTHING;