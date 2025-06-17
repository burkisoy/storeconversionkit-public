import React from 'react';

const AwardWinningBadgePreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="inline-flex items-center bg-[#fff4d6] rounded-full px-3.5 py-1.5">
        <span className="text-base mr-2">🏆</span>
        <span className="text-sm font-semibold text-[#9c7700]">#1 Award-Winning Product</span>
      </div>
    </div>
  );
};

export default AwardWinningBadgePreview;