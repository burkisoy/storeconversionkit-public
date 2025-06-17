import React from 'react';

const GiftBoxPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="bg-[#fcfcfc] p-3 w-full">
        <div className="text-[10px] font-bold text-center uppercase tracking-wide text-gray-800 mb-2">
          FREE GIFTS WITH YOUR FIRST ORDER
        </div>
        
        <div className="flex justify-center gap-2">
          {[
            {
              badge: 'FREE',
              price: '$10',
              image: 'https://cdn.shopify.com/s/files/1/0591/6521/2734/files/input_kopyasi_32.png?v=1742817671',
              label: 'The Hand Book'
            },
            {
              badge: 'FREE',
              price: '$6',
              image: 'https://cdn.shopify.com/s/files/1/0591/6521/2734/files/input_kopyasi_31.png?v=1742817524',
              label: 'Free Shipping'
            },
            {
              badge: 'FREE',
              price: '$19',
              image: 'https://cdn.shopify.com/s/files/1/0591/6521/2734/files/input_kopyasi_33.png?v=1742817767',
              label: 'Lash Curler'
            }
          ].map((gift, index) => (
            <div 
              key={index}
              className="relative bg-[#fce1ec] border-2 border-dashed border-black rounded-md w-[80px] p-1 flex flex-col items-center"
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#ff5c8d] text-white text-[6px] font-bold px-2 py-0.5 rounded w-14 text-center">
                {gift.badge} <span className="line-through">{gift.price}</span>
              </div>
              <img 
                src={gift.image}
                alt={gift.label}
                className="w-10 h-10 object-contain my-2"
              />
              <div className="text-[6px] font-bold uppercase text-gray-800">
                {gift.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiftBoxPreview;