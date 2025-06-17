import React from 'react';

const TrustpilotRatingBadgePreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="inline-flex items-center bg-white rounded-full px-2.5 py-1 text-xs font-medium text-gray-800 shadow-sm">
        <div className="flex gap-0.5 mr-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-[#00B67A] rounded px-0.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l2.39 6.91H22l-5.43 3.94L18.74 22 12 17.56 5.26 22l1.43-9.15L2 8.91h7.61L12 2z"/>
              </svg>
            </div>
          ))}
        </div>
        <div className="leading-none">
          Excellent <strong className="font-semibold">4,6</strong> | <strong className="font-semibold">14,500+</strong> reviews
        </div>
      </div>
    </div>
  );
};

export default TrustpilotRatingBadgePreview;