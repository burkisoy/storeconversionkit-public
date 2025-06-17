import React from 'react';

const FreeDeliveryPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-center gap-3 bg-[#d7f8e3] px-4 py-2 rounded-lg">
        <span className="text-lg">🚚</span>
        <span className="text-gray-800 text-sm font-medium">Free Delivery on all orders!</span>
      </div>
    </div>
  );
};

export default FreeDeliveryPreview;