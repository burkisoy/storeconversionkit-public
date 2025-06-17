-- Insert the delivery-box section if it doesn't exist
INSERT INTO sections (id, name, usage_count)
VALUES ('delivery-box', 'Delivery Box', 0)
ON CONFLICT (id) DO NOTHING;