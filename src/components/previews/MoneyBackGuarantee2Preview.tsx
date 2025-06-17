import React from 'react';

const MoneyBackGuarantee2Preview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="bg-gradient-to-b from-blue-50 to-white p-4 text-center max-w-xs">
        <div className="flex justify-center gap-2 mb-4">
          {[1, 2, 3].map((i, index) => (
            <div 
              key={i}
              className="w-16 h-16 rounded-lg bg-gray-200 shadow-md"
              style={{
                transform: index === 0 ? 'rotate(-8deg)' : 
                          index === 1 ? 'scale(1.1)' : 'rotate(8deg)',
                zIndex: index === 1 ? 10 : 'auto'
              }}
            />
          ))}
        </div>
        
        <h3 className="text-sm font-bold text-blue-900 mb-1">
          Money-Back <span className="text-blue-400">Guarantee</span>
        </h3>
        
        <p className="text-[8px] text-blue-900 mb-3 line-clamp-2">
          We're so confident in the quality of our product that we offer a satisfaction guarantee.
        </p>
        
        <button className="bg-blue-500 text-white text-[8px] font-bold py-1.5 px-3 rounded-md">
          ADD TO CART
        </button>
        
        <div className="mt-2 text-[7px] text-blue-900 flex justify-center gap-2">
          <span className="flex items-center">
            <svg className="w-2 h-2 text-blue-600 mr-0.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.292 5.708a1 1 0 0 1 0 1.414L9 18.414l-5.292-5.292a1 1 0 0 1 1.414-1.414L9 15.586l10.292-10.292a1 1 0 0 1 1.414 0z"/>
            </svg>
            100% Satisfaction
          </span>
          <span className="flex items-center">
            <svg className="w-2 h-2 text-blue-600 mr-0.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.292 5.708a1 1 0 0 1 0 1.414L9 18.414l-5.292-5.292a1 1 0 0 1 1.414-1.414L9 15.586l10.292-10.292a1 1 0 0 1 1.414 0z"/>
            </svg>
            Fast Shipping
          </span>
        </div>
      </div>
    </div>
  );
};

export default MoneyBackGuarantee2Preview;