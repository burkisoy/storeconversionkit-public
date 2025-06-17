import React from 'react';

const StarRatingBadgePreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <svg
              key={i}
              width="16"
              height="16"
              fill={i < 4 ? "#f43f5e" : "#e5e7eb"}
              viewBox="0 0 24 24"
            >
              <path d="M12 2l2.9 6.6L22 9.2l-5 4.9 1.2 7L12 17.8 5.8 21l1.2-7-5-4.9 7.1-0.6z" />
            </svg>
          ))}
        </div>

        <div className="text-sm">
          <strong>Rated 4.7</strong>
          <span className="text-gray-500">(137)</span>
        </div>

        <div className="bg-pink-100 text-pink-600 px-1.5 py-0.5 rounded text-xs">
          Happy Customers
        </div>
      </div>
    </div>
  );
};

export default StarRatingBadgePreview;