-- Add new columns to page_views table
ALTER TABLE page_views
ADD COLUMN country text,
ADD COLUMN device_type text,
ADD COLUMN is_new_visitor boolean DEFAULT true;

-- Create function to determine device type
CREATE OR REPLACE FUNCTION get_device_type(user_agent text)
RETURNS text
LANGUAGE plpgsql
AS $$
BEGIN
  IF user_agent ~* 'Mobile|Android|iPhone|iPad|iPod' THEN
    RETURN 'Mobile';
  ELSE
    RETURN 'Desktop';
  END IF;
END;
$$;