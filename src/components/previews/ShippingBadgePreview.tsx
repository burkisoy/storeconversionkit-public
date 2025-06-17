import React from 'react';

const ShippingBadgePreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="flex items-center justify-center bg-white rounded-full px-5 py-2 shadow-sm gap-6 text-sm">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full flex-shrink-0"></div>
          <div>Ships by <span className="font-semibold">Wed, April 27</span></div>
        </div>
        <div className="flex items-center gap-2 whitespace-nowrap">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
            alt="US Flag"
            className="w-[18px] h-[18px] rounded-full object-cover flex-shrink-0"
          />
          <div><span className="font-semibold">FREE</span> US Shipping</div>
        </div>
      </div>
    </div>
  );
};

export default ShippingBadgePreview;