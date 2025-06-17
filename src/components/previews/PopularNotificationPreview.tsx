import React from 'react';

const PopularNotificationPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="flex items-center gap-2 p-2.5 rounded bg-white shadow-sm max-w-md">
        <div className="text-2xl animate-[bounce_1.5s_infinite] select-none">👀</div>
        <div className="text-sm text-gray-700">
          Popular product! In the last 24 hours,{' '}
          <span className="text-[#5f4b8b] font-bold">6,269 people</span>{' '}
          viewed it!
        </div>
      </div>
    </div>
  );
};

export default PopularNotificationPreview;