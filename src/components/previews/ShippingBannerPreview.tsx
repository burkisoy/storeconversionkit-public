import React from 'react';

const ShippingBannerPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full bg-pink-50 py-2 px-4 rounded-lg">
        <div className="flex justify-center items-center gap-3">
          <div className="text-lg">🚚</div>
          <span className="text-pink-900 text-xs font-medium tracking-wide">FREE SHIPPING ON ALL ORDERS</span>
        </div>
      </div>
    </div>
  );
};

export default ShippingBannerPreview;