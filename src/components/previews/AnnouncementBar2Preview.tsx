import React from 'react';

const AnnouncementBar2Preview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-[300px] bg-[#fff5f5] border border-dashed border-[#ff9999] rounded-md p-2 text-center">
        <p className="flex items-center justify-center gap-2 text-[#333333] text-[8px] font-bold">
          <span className="w-2 h-2 bg-[#ff9999] rounded-full animate-[blink_1s_infinite]"></span>
          Order by Mar. 25th for guaranteed FREE GIFTS
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBar2Preview;