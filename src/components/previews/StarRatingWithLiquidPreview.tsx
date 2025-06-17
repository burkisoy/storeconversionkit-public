import React from 'react';

const StarRatingWithLiquidPreview = () => {
  // Simulate the Liquid template rendering with a fixed rating
  const rating = 4.7;
  const fullStars = Math.floor(rating);
  const partial = rating - fullStars;
  const hasHalfStar = partial >= 0.25 && partial < 0.75;
  const nextStarIndex = fullStars + 1;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => {
            if (i < fullStars) {
              return (
                <svg 
                  key={i}
                  className="w-4 h-4 text-rose-500 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l2.9 6.6L22 9.2l-5 4.9 1.2 7L12 17.8 5.8 21l1.2-7-5-4.9 7.1-0.6z"/>
                </svg>
              );
            } else if (hasHalfStar && i === fullStars) {
              return (
                <svg 
                  key={i}
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <linearGradient id="half-grad">
                      <stop offset="50%" stopColor="#f43f5e"/>
                      <stop offset="50%" stopColor="#e5e7eb"/>
                    </linearGradient>
                  </defs>
                  <path fill="url(#half-grad)" d="M12 2l2.9 6.6L22 9.2l-5 4.9 1.2 7L12 17.8 5.8 21l1.2-7-5-4.9 7.1-0.6z"/>
                </svg>
              );
            } else {
              return (
                <svg 
                  key={i}
                  className="w-4 h-4 text-gray-200 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l2.9 6.6L22 9.2l-5 4.9 1.2 7L12 17.8 5.8 21l1.2-7-5-4.9 7.1-0.6z"/>
                </svg>
              );
            }
          })}
        </div>

        <div className="text-xs">
          <strong>Rated {rating}</strong>
          <span className="text-gray-500">(137)</span>
        </div>

        <div className="bg-rose-100 text-rose-500 px-1.5 py-0.5 rounded text-[10px]">
          Happy Customers
        </div>
      </div>
    </div>
  );
};

export default StarRatingWithLiquidPreview;