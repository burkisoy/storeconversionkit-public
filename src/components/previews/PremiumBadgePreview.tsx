import React from 'react';

const PremiumBadgePreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="flex gap-1">
        <div className="flex items-center px-2 py-1 bg-black/5 rounded-xl text-[10px] font-bold">
          <img 
            src="https://www.svgrepo.com/show/474295/plane.svg" 
            alt="Fast Shipping"
            className="w-3 h-3 mr-1 brightness-50"
          />
          Fast Shipping
        </div>
        <div className="flex items-center px-2 py-1 bg-black/5 rounded-xl text-[10px] font-bold">
          <img 
            src="https://www.svgrepo.com/show/486865/support.svg" 
            alt="24/7 Support"
            className="w-3 h-3 mr-1 brightness-50"
          />
          24/7 Support
        </div>
        <div className="flex items-center px-2 py-1 bg-black/5 rounded-xl text-[10px] font-bold">
          <img 
            src="https://www.svgrepo.com/show/457232/return.svg" 
            alt="30 Days Return"
            className="w-3 h-3 mr-1 brightness-50"
          />
          30 Days Return
        </div>
      </div>
    </div>
  );
};

export default PremiumBadgePreview;