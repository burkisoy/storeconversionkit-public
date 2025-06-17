import React from 'react';

const LowStockPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="bg-[#fff2f2] text-[#dc2525] px-2.5 py-0.5 rounded-md font-bold text-xs flex items-center justify-center gap-2.5">
        <div className="relative">
          <div className="w-2 h-2 bg-[#dc2525] rounded-full absolute animate-ping"></div>
          <div className="w-2 h-2 bg-[#dc2525] rounded-full"></div>
        </div>
        LOW STOCK
      </div>
    </div>
  );
};

export default LowStockPreview;