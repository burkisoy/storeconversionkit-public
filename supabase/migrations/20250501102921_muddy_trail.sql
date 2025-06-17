/*
  # Fix sections table and data

  1. Changes
    - Drop and recreate sections table with proper structure
    - Add necessary indexes
    - Insert all sections with proper data
*/

-- Drop existing table if exists
DROP TABLE IF EXISTS sections CASCADE;

-- Create sections table
CREATE TABLE sections (
  id text PRIMARY KEY,
  name text NOT NULL,
  customize_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

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

-- Insert all sections
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
  ('tiktok-slider', 'TikTok Video Slider', 0),
  ('testimonial-carousel', 'Testimonial Carousel', 0)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  customize_count = COALESCE(sections.customize_count, 0);