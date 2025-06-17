-- Update selling-fast section created_at to now
UPDATE sections 
SET created_at = now(), updated_at = now()
WHERE id = 'selling-fast';