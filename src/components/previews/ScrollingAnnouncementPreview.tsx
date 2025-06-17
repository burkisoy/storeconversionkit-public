import React from 'react';

const ScrollingAnnouncementPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full bg-pink-400 text-white py-1 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-[scroll_15s_linear_infinite]">
          <div className="flex gap-20 font-medium">
            <div>🎉 50% OFF YOUR FIRST ORDER</div>
            <div>🚚 FREE SHIPPING ON ALL ORDERS</div>
            <div>✅ 30 DAY MONEYBACK GUARANTEE</div>
            <div>🎉 50% OFF YOUR FIRST ORDER</div>
            <div>🚚 FREE SHIPPING ON ALL ORDERS</div>
            <div>✅ 30 DAY MONEYBACK GUARANTEE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingAnnouncementPreview;