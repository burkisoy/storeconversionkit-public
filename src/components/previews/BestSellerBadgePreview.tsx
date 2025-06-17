import React from 'react';

const BestSellerBadgePreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-center bg-[#f4f4f4] rounded-[30px] px-4 py-1.5 shadow-md">
        <div className="bg-white rounded-full w-[26px] h-[26px] flex items-center justify-center mr-2 shadow-sm">
          <img 
            src="https://img.icons8.com/fluency-systems-filled/24/fa314a/fire-element.png" 
            alt="Fire Icon" 
            className="w-4 h-4"
          />
        </div>
        <div className="text-sm">
          <span className="text-[#e53935] font-bold">Best Seller</span> - Over 500 sold this week!
        </div>
      </div>
    </div>
  );
};

export default BestSellerBadgePreview;