import React from 'react';

const CustomerActivityBadgePreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="bg-[#fdf3e8] rounded-[20px] flex items-center p-2 shadow-sm max-w-[300px]">
        {/* Profile Images */}
        <div className="flex mr-3">
          {[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/3.jpg',
            'https://randomuser.me/api/portraits/men/4.jpg',
            'https://randomuser.me/api/portraits/women/5.jpg'
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Customer ${index + 1}`}
              className="w-[30px] h-[30px] rounded-full border-2 border-white -ml-2 first:ml-0"
              style={{ zIndex: 5 - index }}
            />
          ))}
        </div>
        
        {/* Text Content */}
        <div>
          <div className="font-bold text-xs">Limited Stock!</div>
          <div className="text-[10px] text-gray-700">Bought 160 Times Today</div>
        </div>
      </div>
    </div>
  );
};

export default CustomerActivityBadgePreview;