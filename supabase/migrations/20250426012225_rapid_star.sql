/*
  # Fix customize count tracking

  1. Changes
    - Drop and recreate sections table with proper structure
    - Add customize_count column
    - Create index for sorting by customize count
    - Add function to increment customize count
    - Insert initial data for all sections
*/

-- Drop existing table if exists
DROP TABLE IF EXISTS sections CASCADE;

-- Create sections table
CREATE TABLE sections (
  id text PRIMARY KEY,
  name text NOT NULL,
  usage_count integer DEFAULT 0,
  customize_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE sections ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access"
ON sections
FOR SELECT
TO public
USING (true);

CREATE POLICY "Allow authenticated update sections"
ON sections
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Create index for sorting
CREATE INDEX sections_customize_count_idx ON sections (customize_count DESC);

-- Create function to increment customize count
CREATE OR REPLACE FUNCTION increment_customize_count(section_id text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE sections
  SET 
    customize_count = COALESCE(customize_count, 0) + 1,
    updated_at = now()
  WHERE id = section_id;
END;
$$;

-- Insert initial data for all sections
INSERT INTO sections (id, name, customize_count)
VALUES
  ('items-left-badge', 'Limited Stock + Limited Price', 0),
  ('scroll-to-top', 'Scroll to Top', 0),
  ('customer-banner', '1,000,000+ Happy Customers', 0),
  ('accordion', 'Product Information Accordion', 0),
  ('loved-by-customers', 'Loved by Customers Badge', 0),
  ('people-watching', 'People Watching', 0),
  ('in-stock', 'In Stock Indicator', 0),
  ('instagram-views', 'Instagram Views Badge', 0),
  ('announcement-bar', 'Scrolling Announcement Bar 2', 0),
  ('payment-methods', 'Payment Methods', 0),
  ('secure-checkout', 'Secure Checkout Badge', 0),
  ('low-stock', 'Low Stock Badge', 0),
  ('testimonial', 'Customer Testimonial', 0),
  ('scrolling-announcement', 'Scrolling Announcement Bar', 0),
  ('social-badge', 'Social Proof Badge', 0),
  ('social-badge-2', 'Social Proof Badge 2', 0),
  ('star-rating', 'Star Rating Badge', 0),
  ('badges-component', 'Premium Badges', 0),
  ('features-list-component', 'Features List', 0),
  ('gradient-text', 'Gradient Text', 0),
  ('delivery-box', 'Delivery Box', 0),
  ('tabs', 'Tabs Component', 0),
  ('popular-notification', 'Popular Product Notification', 0),
  ('feature-list', 'Feature List', 0),
  ('offer-box', 'Offer Box', 0),
  ('gift-box', 'Gift Box', 0),
  ('money-back-guarantee', 'Money Back Guarantee', 0),
  ('circle-slider', 'Circle Slider', 0),
  ('countdown-badge', 'Countdown Badge', 0),
  ('floating-comments', 'Floating Comments', 0),
  ('tiktok-slider', 'TikTok Video Slider', 0)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  customize_count = COALESCE(sections.customize_count, 0);