CREATE OR REPLACE FUNCTION increment_section_usage(section_id text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE sections
  SET 
    usage_count = usage_count + 1,
    updated_at = now()
  WHERE id = section_id;
END;
$$;