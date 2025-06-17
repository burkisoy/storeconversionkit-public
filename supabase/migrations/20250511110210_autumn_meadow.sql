-- Insert the money-back-guarantee-2 section if it doesn't exist
INSERT INTO sections (id, name, customize_count)
VALUES ('money-back-guarantee-2', 'Money Back Guarantee Banner', 0)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  customize_count = COALESCE(sections.customize_count, 0);