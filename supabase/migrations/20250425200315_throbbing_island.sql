-- Insert the countdown-badge section if it doesn't exist
INSERT INTO sections (id, name, usage_count)
VALUES ('countdown-badge', 'Countdown Badge', 0)
ON CONFLICT (id) DO NOTHING;