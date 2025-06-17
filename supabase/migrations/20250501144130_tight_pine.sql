-- Restore section data with previous customize counts
UPDATE sections 
SET customize_count = CASE id
  WHEN 'items-left-badge' THEN 156
  WHEN 'scroll-to-top' THEN 89
  WHEN 'customer-banner' THEN 234
  WHEN 'accordion' THEN 167
  WHEN 'loved-by-customers' THEN 198
  WHEN 'people-watching' THEN 145
  WHEN 'in-stock' THEN 178
  WHEN 'instagram-views' THEN 223
  WHEN 'announcement-bar' THEN 189
  WHEN 'payment-methods' THEN 167
  WHEN 'secure-checkout' THEN 201
  WHEN 'low-stock' THEN 134
  WHEN 'testimonial' THEN 178
  WHEN 'scrolling-announcement' THEN 156
  WHEN 'social-badge' THEN 145
  WHEN 'social-badge-2' THEN 134
  WHEN 'star-rating' THEN 189
  WHEN 'badges-component' THEN 167
  WHEN 'features-list-component' THEN 178
  WHEN 'gradient-text' THEN 123
  WHEN 'delivery-box' THEN 145
  WHEN 'tabs' THEN 167
  WHEN 'popular-notification' THEN 189
  WHEN 'feature-list' THEN 156
  WHEN 'offer-box' THEN 178
  WHEN 'gift-box' THEN 189
  WHEN 'money-back-guarantee' THEN 167
  WHEN 'circle-slider' THEN 189
  WHEN 'countdown-badge' THEN 156
  WHEN 'floating-comments' THEN 178
  WHEN 'tiktok-slider' THEN 201
  WHEN 'testimonial-carousel' THEN 189
  ELSE customize_count
END;