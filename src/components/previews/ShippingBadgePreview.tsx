import React from 'react';

const ShippingBadgePreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="flex items-center justify-center bg-white rounded-full px-5 py-2 shadow-sm gap-3.5 text-sm max-w-[95vw] overflow-hidden">
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full flex-shrink-0 animate-pulse"></div>
          <div>Ships by <span className="font-semibold">Today</span></div>
        </div>
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
            alt="Flag"
            className="w-[18px] h-[18px] rounded-full object-cover flex-shrink-0"
          />
          <div className="font-semibold">FREE Shipping</div>
        </div>
      </div>
    </div>
  );
};

export default ShippingBadgePreview;