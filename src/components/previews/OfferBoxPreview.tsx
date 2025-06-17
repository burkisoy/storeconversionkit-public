import React from 'react';

const OfferBoxPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="text-center scale-[0.65]">
        <h2 className="text-lg font-bold uppercase tracking-wide text-gray-900 mb-5">
          Special Offer Today
        </h2>
        <div className="flex gap-4 justify-center">
          <div className="relative w-[160px] bg-[#f9e4b7] border border-black rounded-lg shadow-md flex flex-col justify-between h-[220px] pt-8">
            <div className="absolute top-0 left-0 w-full bg-black text-white text-[10px] font-semibold py-1.5 uppercase tracking-wide rounded-t-lg">
              Stay Smoother Longer
            </div>
            <div className="flex-1 flex items-center justify-center px-4">
              <img 
                src="https://cdn.shopify.com/s/files/1/0591/6521/2734/files/Nood_Flasher_Pro-Nood_Serumx2_Trans.png?v=1743681267"
                alt="Flasher Pro + 2 Nood Serums"
                className="w-full h-auto max-h-[100px] object-contain"
              />
            </div>
            <div className="p-3 bg-[#f9e4b7]">
              <h3 className="text-xs font-semibold text-gray-900 mb-1">Flasher Pro + 2 Nood Serums</h3>
              <p className="font-bold text-sm">
                $399
                <span className="ml-2 text-gray-500 line-through">$477</span>
              </p>
            </div>
          </div>

          <div className="w-[160px] bg-white border border-gray-200 rounded-lg shadow-md flex flex-col justify-between h-[220px]">
            <div className="flex-1 flex items-center justify-center px-4">
              <img 
                src="https://cdn.shopify.com/s/files/1/0591/6521/2734/files/20250130-NS-Nood-3qtr-transparent-59.png?v=1743681267"
                alt="Flasher Pro"
                className="w-full h-auto max-h-[100px] object-contain"
              />
            </div>
            <div className="p-3 bg-white">
              <h3 className="text-xs font-semibold text-gray-900 mb-1">Flasher Pro</h3>
              <p className="font-bold text-sm">$399</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBoxPreview;