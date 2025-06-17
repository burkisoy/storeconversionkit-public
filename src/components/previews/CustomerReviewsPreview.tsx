import React from 'react';
import { sanitizeText, sanitizeColor, getSecureImageUrl, withSecureErrorBoundary } from './utils/securityUtils';

const SecureCustomerReviews: React.FC = () => {
  // Secure data matching editor preview
  const secureData = {
    headerText: sanitizeText('Customer Reviews', 30),
    headerHighlight: sanitizeText('Customer', 20),
    ratingBadge: sanitizeText('★ Rated 4.8/5 based on +137,135 reviews', 60),
    reviews: [
      {
        name: sanitizeText('Ashley, 30', 20),
        text: sanitizeText('I was skeptical at first, but this product completely transformed my routine...', 100),
        image: getSecureImageUrl('https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Screenshot_2025-05-07_at_15.58.00.png?v=1746622733'),
        verified: sanitizeText('💎 Verified Buyer', 30)
      },
      {
        name: sanitizeText('Julia, 27', 20),
        text: sanitizeText('Honestly better than I expected. I used to use razors but this leaves no bumps...', 100),
        image: getSecureImageUrl('https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Screenshot_2025-05-07_at_15.58.00.png?v=1746622733'),
        verified: sanitizeText('💎 Verified Buyer', 30)
      }
    ],
    productImage: getSecureImageUrl('https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Screenshot_2025-05-07_at_15.57.34.png?v=1746622735'),
    productName: sanitizeText('Super Product', 30),
    productPrice: sanitizeText('$39', 10),
    originalPrice: sanitizeText('$49', 10)
  };

  const secureStyles = {
    backgroundColor: sanitizeColor('#f9f9f9') || '#f9f9f9',
    highlightColor: sanitizeColor('#e91e63') || '#e91e63',
    badgeColor: sanitizeColor('#ffe6ef') || '#ffe6ef'
  };

  return (
    <div className="w-full h-full p-2 overflow-hidden" style={{ backgroundColor: secureStyles.backgroundColor }}>
      {/* Header */}
      <div className="text-center mb-2">
        <div className="inline-block px-2 py-1 rounded-full text-[6px] mb-1" style={{ backgroundColor: secureStyles.badgeColor }}>
          {secureData.ratingBadge}
        </div>
        <h2 className="text-[10px] font-bold">
          <span style={{ color: secureStyles.highlightColor }}>{secureData.headerHighlight}</span> Reviews
        </h2>
      </div>

      {/* Reviews */}
      <div className="flex gap-2 overflow-x-auto">
        {secureData.reviews.map((review, index) => (
          <div key={index} className="bg-white rounded-lg p-2 min-w-[120px] flex-shrink-0 shadow-sm">
            {/* Review Image */}
            <div className="w-full h-12 bg-gray-200 rounded mb-2 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                <span className="text-[8px] text-gray-500">📸</span>
              </div>
            </div>
            
            {/* Stars */}
            <div className="text-[8px] mb-1" style={{ color: secureStyles.highlightColor }}>
              ★★★★★
            </div>
            
            {/* Reviewer Info */}
            <div className="text-[6px] mb-1">
              <span className="px-1 py-0.5 rounded-full" style={{ backgroundColor: secureStyles.badgeColor }}>
                {review.name} {review.verified}
              </span>
            </div>
            
            {/* Review Text */}
            <p className="text-[6px] text-gray-700 mb-2 line-clamp-3">
              {review.text}
            </p>
            
            {/* Product Box */}
            <div className="bg-gray-50 rounded p-1 flex items-center gap-1">
              <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-[8px]">📦</span>
              </div>
              <div className="flex-1">
                <div className="text-[6px] font-semibold">{secureData.productName}</div>
                <div className="text-[6px]" style={{ color: secureStyles.highlightColor }}>
                  {secureData.productPrice} <span className="line-through text-gray-400">{secureData.originalPrice}</span>
                </div>
                <div className="text-[5px] text-gray-500">📦 Purchased on March</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CustomerReviewsPreview = withSecureErrorBoundary(SecureCustomerReviews);

export default CustomerReviewsPreview;