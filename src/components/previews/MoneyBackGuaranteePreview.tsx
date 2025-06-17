import React from 'react';

const MoneyBackGuaranteePreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="flex items-center bg-[#f8f1de] rounded-xl border-2 border-dashed border-[#6c4e22] p-3 shadow-md max-w-md">
        <div className="flex-shrink-0 mr-3">
          <img 
            src="https://i.hizliresim.com/a0c8xe3.png"
            alt="Money Back Guarantee"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div>
          <h3 className="text-[10px] font-bold text-[#6c4e22] mb-0.5">
            100% 14-Day Money Back Guarantee
          </h3>
          <p className="text-[8px] text-[#4f4f4f]">
            We're so confident in our products that if you're not satisfied, you have the right to get a full 14-day refund.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoneyBackGuaranteePreview;