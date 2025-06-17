/*
  # Create section usage tracking tables

  1. New Tables
    - `sections`
      - `id` (text, primary key) - Section identifier
      - `name` (text) - Section name
      - `usage_count` (integer) - Number of times used
      - `created_at` (timestamp) - Creation timestamp
      - `updated_at` (timestamp) - Last update timestamp

  2. Security
    - Enable RLS on sections table
    - Add policy for public read access
    - Add policy for authenticated users to increment usage count
*/

CREATE TABLE IF NOT EXISTS sections (
  id text PRIMARY KEY,
  name text NOT NULL,
  usage_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE sections ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access"
  ON sections
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to increment usage count
CREATE POLICY "Allow authenticated increment"
  ON sections
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert initial data for existing sections
INSERT INTO sections (id, name, usage_count)
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
  ('features-list-component', 'Features List', 0)
ON CONFLICT (id) DO NOTHING;