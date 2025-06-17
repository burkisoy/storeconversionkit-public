import React from 'react';

const PeopleWatchingPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-center bg-white px-3 py-1.5 rounded-2xl shadow-sm">
        <div className="relative mr-2">
          <div className="w-4 h-4 rounded-full border-2 border-[#8dc3e6] flex items-center justify-center animate-[pulse_1.5s_infinite]">
            <div className="w-2 h-2 rounded-full bg-[#8dc3e6] animate-[pulse_1.5s_infinite]"></div>
          </div>
        </div>
        <span className="text-sm text-gray-800">
          <strong>154 People</strong> are watching this product
        </span>
      </div>
    </div>
  );
};

export default PeopleWatchingPreview;