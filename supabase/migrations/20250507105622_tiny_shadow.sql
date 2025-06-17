-- Insert the award-winning-badge section if it doesn't exist
INSERT INTO sections (id, name, customize_count)
VALUES ('award-winning-badge', 'Award-Winning Product Badge', 0)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  customize_count = COALESCE(sections.customize_count, 0);