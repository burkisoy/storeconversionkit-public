-- Insert the money-back-guarantee section if it doesn't exist
INSERT INTO sections (id, name, usage_count)
VALUES ('money-back-guarantee', 'Money Back Guarantee', 0)
ON CONFLICT (id) DO NOTHING;