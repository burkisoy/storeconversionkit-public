import React from 'react';

const InStockPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-center gap-2">
        <div className="relative">
          <svg width="15" height="15" aria-hidden="true">
            <circle cx="7.5" cy="7.5" r="7.5" fill="rgb(62,214,96, 0.3)"></circle>
            <circle cx="7.5" cy="7.5" r="5" stroke="rgb(255, 255, 255)" strokeWidth="1" fill="rgb(62,214,96)"></circle>
          </svg>
        </div>
        <span>In stock</span>
      </div>
    </div>
  );
};

export default InStockPreview;