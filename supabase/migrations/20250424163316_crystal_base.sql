-- Add is_logged_in column to page_views if it doesn't exist
ALTER TABLE page_views 
ADD COLUMN IF NOT EXISTS is_logged_in boolean DEFAULT false;

-- Create function to track page views
CREATE OR REPLACE FUNCTION track_page_view(
  p_session_id text,
  p_user_agent text,
  p_ip_address text,
  p_country text DEFAULT NULL,
  p_is_logged_in boolean DEFAULT false
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_id uuid;
BEGIN
  INSERT INTO page_views (
    session_id,
    user_agent,
    ip_address,
    country,
    device_type,
    is_logged_in,
    is_new_visitor
  )
  VALUES (
    p_session_id,
    p_user_agent,
    p_ip_address,
    p_country,
    get_device_type(p_user_agent),
    p_is_logged_in,
    NOT EXISTS (
      SELECT 1 FROM page_views 
      WHERE session_id = p_session_id
    )
  )
  RETURNING id INTO v_id;

  RETURN v_id;
END;
$$;