-- Update the how-to-use section name
UPDATE sections 
SET name = 'How to Use 2'
WHERE id = 'how-to-use';

-- If it doesn't exist, insert it
INSERT INTO sections (id, name, customize_count)
VALUES ('how-to-use', 'How to Use 2', 0)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  customize_count = COALESCE(sections.customize_count, 0);