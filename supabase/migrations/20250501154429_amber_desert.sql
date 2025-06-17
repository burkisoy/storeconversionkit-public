-- Insert the best-seller-badge section if it doesn't exist
INSERT INTO sections (id, name, customize_count)
VALUES ('best-seller-badge', 'Best Seller Badge', 0)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  customize_count = COALESCE(sections.customize_count, 0);