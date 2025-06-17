-- Update the star-rating-badge section name
UPDATE sections 
SET name = 'Star Rating Badge 2'
WHERE id = 'star-rating-badge';

-- If it doesn't exist, insert it
INSERT INTO sections (id, name, customize_count)
VALUES ('star-rating-badge', 'Star Rating Badge 2', 0)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  customize_count = COALESCE(sections.customize_count, 0);