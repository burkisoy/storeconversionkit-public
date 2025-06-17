import React from 'react';

const SellingFastPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="inline-flex items-center gap-1.5 bg-[#f5f0ff] text-[#1a1a1a] rounded-[20px] px-3.5 py-1.5 text-sm shadow-sm">
        <span className="w-2.5 h-2.5 rounded-full bg-[#7c3aed] animate-pulse" />
        <strong>Selling Fast!</strong>
        <span>28 people are looking at this</span>
      </div>
    </div>
  );
};

export default SellingFastPreview;