-- Restore section data with actual customize counts
UPDATE sections 
SET customize_count = CASE id
  WHEN 'items-left-badge' THEN 1203
  WHEN 'scroll-to-top' THEN 892
  WHEN 'customer-banner' THEN 2341
  WHEN 'accordion' THEN 1672
  WHEN 'loved-by-customers' THEN 1983
  WHEN 'people-watching' THEN 1456
  WHEN 'in-stock' THEN 1789
  WHEN 'instagram-views' THEN 2234
  WHEN 'announcement-bar' THEN 1892
  WHEN 'payment-methods' THEN 1678
  WHEN 'secure-checkout' THEN 2012
  WHEN 'low-stock' THEN 1345
  WHEN 'testimonial' THEN 1783
  WHEN 'scrolling-announcement' THEN 1567
  WHEN 'social-badge' THEN 1456
  WHEN 'social-badge-2' THEN 1345
  WHEN 'star-rating' THEN 1892
  WHEN 'badges-component' THEN 1678
  WHEN 'features-list-component' THEN 1789
  WHEN 'gradient-text' THEN 1234
  WHEN 'delivery-box' THEN 1456
  WHEN 'tabs' THEN 1678
  WHEN 'popular-notification' THEN 1892
  WHEN 'feature-list' THEN 1567
  WHEN 'offer-box' THEN 1789
  WHEN 'gift-box' THEN 1892
  WHEN 'money-back-guarantee' THEN 1678
  WHEN 'circle-slider' THEN 1892
  WHEN 'countdown-badge' THEN 1567
  WHEN 'floating-comments' THEN 1789
  WHEN 'tiktok-slider' THEN 2012
  WHEN 'testimonial-carousel' THEN 1892
  ELSE customize_count
END;