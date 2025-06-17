/*
  # Create sections table for component usage tracking

  1. New Tables
    - `sections`
      - `id` (text, primary key) - Component identifier
      - `name` (text) - Component name
      - `usage_count` (integer) - Number of times component has been used
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `sections` table
    - Add policy for public read access
    - Add policy for authenticated users to update usage count
*/

CREATE TABLE IF NOT EXISTS sections (
  id text PRIMARY KEY,
  name text NOT NULL,
  usage_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE sections ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DO $$ 
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'sections' AND policyname = 'Allow public read access'
  ) THEN
    DROP POLICY "Allow public read access" ON sections;
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'sections' AND policyname = 'Allow authenticated increment'
  ) THEN
    DROP POLICY "Allow authenticated increment" ON sections;
  END IF;
END $$;

-- Create policies
CREATE POLICY "Allow public read access"
  ON sections
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated increment"
  ON sections
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert initial data for existing components
INSERT INTO sections (id, name) VALUES
  ('features-list-component', 'Features List'),
  ('announcement-bar', 'Announcement Bar'),
  ('badges-component', 'Badges'),
  ('customer-banner', 'Customer Banner'),
  ('free-delivery', 'Free Delivery'),
  ('instagram-views', 'Instagram Views'),
  ('items-left-badge', 'Items Left Badge'),
  ('loved-by-customers', 'Loved By Customers'),
  ('payment-methods', 'Payment Methods'),
  ('people-watching', 'People Watching'),
  ('scrolling-announcement', 'Scrolling Announcement'),
  ('secure-checkout', 'Secure Checkout'),
  ('shipping-banner', 'Shipping Banner'),
  ('social-badge', 'Social Badge'),
  ('social-badge-2', 'Social Badge 2'),
  ('social-proof', 'Social Proof'),
  ('star-rating', 'Star Rating'),
  ('stock-indicator', 'Stock Indicator'),
  ('testimonial', 'Testimonial'),
  ('scroll-to-top', 'Scroll To Top'),
  ('accordion', 'Accordion'),
  ('in-stock', 'In Stock'),
  ('low-stock', 'Low Stock')
ON CONFLICT (id) DO NOTHING;