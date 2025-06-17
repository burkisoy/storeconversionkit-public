import React from 'react';

const FeaturesListPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full bg-[#f8e1fa] p-4 rounded-lg">
        <ul className="space-y-2">
          {['High quality materials', '90% Polymer, 10% Plastic', '100% Recyclable'].map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center text-white text-[10px] shadow-sm">
                ✓
              </div>
              <span className="text-gray-800 text-xs">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeaturesListPreview;