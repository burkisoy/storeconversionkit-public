-- Insert the trustpilot-rating-badge section if it doesn't exist
INSERT INTO sections (id, name, customize_count)
VALUES ('trustpilot-rating-badge', 'Trustpilot Rating Badge', 0)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  customize_count = COALESCE(sections.customize_count, 0);