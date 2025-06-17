import React from 'react';

const AccordionPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-2">
        {['Product Description', 'Shipping & Returns', 'Secure Payment'].map((title, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between p-4">
              <span className="text-sm font-medium text-gray-900">{title}</span>
              <span className="text-gray-500">▼</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionPreview;