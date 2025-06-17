-- Insert the scrolling-text-banner section if it doesn't exist
INSERT INTO sections (id, name, customize_count)
VALUES ('scrolling-text-banner', 'Scrolling Text Banner', 0)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  customize_count = COALESCE(sections.customize_count, 0);