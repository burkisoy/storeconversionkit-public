import React from 'react';

const PremiumReviewBadgePreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="max-w-[300px] p-4 border border-dashed border-gray-300 rounded-xl bg-gradient-to-b from-white to-gray-50 flex gap-3 items-start">
        <img 
          src="https://randomuser.me/api/portraits/women/44.jpg" 
          alt="Avatar" 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="flex items-center gap-1.5 flex-wrap">
            <strong className="text-sm">Lauren J.</strong>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 4.99 3.062 9.246 7.437 11.004L12 24l4.563-0.996C20.938 21.246 24 16.99 24 12c0-6.627-5.373-12-12-12zm-1 17l-4-4 1.41-1.42L11 14.17l6.59-6.59L19 9l-8 8z"/>
            </svg>
            <span className="text-rose-500 text-sm">★★★★★</span>
          </div>
          <p className="mt-1.5 text-xs text-gray-600 line-clamp-2">
            This product exceeded my expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PremiumReviewBadgePreview;