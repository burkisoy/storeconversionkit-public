import React from 'react';

const StockIndicatorPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="px-4 py-2 bg-red-50 rounded-lg inline-flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-gradient-to-br from-red-500 to-rose-500 animate-pulse shadow-sm"></span>
        <span className="text-gray-800 text-xs font-medium">LOW STOCK</span>
      </div>
    </div>
  );
};

export default StockIndicatorPreview;