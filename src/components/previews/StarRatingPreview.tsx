import React from 'react';
import { sanitizeText, sanitizeColor, withSecureErrorBoundary } from './utils/securityUtils';

const SecureStarRating: React.FC = () => {
  // Secure data matching editor preview
  const secureData = {
    ratingText: sanitizeText('4.9/5 (1k+ Reviews)', 50),
    starColor: sanitizeColor('#000000') || '#000000',
    textColor: sanitizeColor('#000000') || '#000000',
    starCount: 5
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-2">
      <div className="flex items-center gap-1">
        {/* Stars */}
        <div className="flex items-center">
          {Array.from({ length: secureData.starCount }, (_, index) => (
            <svg
              key={index}
              className="w-3 h-3"
              fill={secureData.starColor}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" />
            </svg>
          ))}
        </div>
        
        {/* Rating Text */}
        <span 
          className="text-[8px] font-normal"
          style={{ color: secureData.textColor }}
        >
          {secureData.ratingText}
        </span>
      </div>
    </div>
  );
};

const StarRatingPreview = withSecureErrorBoundary(SecureStarRating);

export default StarRatingPreview;