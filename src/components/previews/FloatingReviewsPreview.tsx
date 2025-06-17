import React from 'react';
import { sanitizeText, getSecureImageUrl, withSecureErrorBoundary } from './utils/securityUtils';

const SecureFloatingReviews: React.FC = () => {
  // Secure review data matching editor preview
  const secureReviews = [
    {
      text: sanitizeText('The perfect fall slippers!', 100),
      avatar: getSecureImageUrl('https://randomuser.me/api/portraits/women/1.jpg')
    },
    {
      text: sanitizeText('My new favorite pair of shoes!', 100),
      avatar: getSecureImageUrl('https://randomuser.me/api/portraits/women/2.jpg')
    },
    {
      text: sanitizeText('A MUST buy for fall!', 100),
      avatar: getSecureImageUrl('https://randomuser.me/api/portraits/women/3.jpg')
    },
    {
      text: sanitizeText('10/10 Worth every penny', 100),
      avatar: getSecureImageUrl('https://randomuser.me/api/portraits/men/4.jpg')
    },
    {
      text: sanitizeText('I absolutely love them!', 100),
      avatar: getSecureImageUrl('https://randomuser.me/api/portraits/women/5.jpg')
    }
  ];

  return (
    <div className="w-full h-full bg-gray-50 p-2 overflow-hidden relative">
      <style>
        {`
          @keyframes shakeIn {
            0% { opacity: 0; transform: scale(0.9) rotate(0deg); }
            10% { opacity: 1; transform: scale(1.05) rotate(2deg); }
            15% { transform: scale(0.98) rotate(-2deg); }
            20% { transform: scale(1) rotate(0deg); }
            70% { opacity: 1; }
            100% { opacity: 0; transform: translateY(-10px); }
          }
        `}
      </style>
      
      <div className="grid grid-cols-2 gap-1 h-full">
        {secureReviews.slice(0, 4).map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-2 shadow-sm flex items-center gap-2 text-[6px] opacity-0"
            style={{
              animation: `shakeIn 8s infinite ease-in-out`,
              animationDelay: `${index * 1.5}s`
            }}
          >
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div 
                className="w-4 h-4 rounded-full bg-yellow-400 border border-yellow-500 flex items-center justify-center text-[8px]"
              >
                👤
              </div>
            </div>
            
            {/* Review Text */}
            <span className="text-gray-800 font-medium leading-tight">
              {review.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const FloatingReviewsPreview = withSecureErrorBoundary(SecureFloatingReviews);

export default FloatingReviewsPreview;