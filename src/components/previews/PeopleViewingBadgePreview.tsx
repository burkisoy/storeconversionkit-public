import React from 'react';

const PeopleViewingBadgePreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="inline-flex items-center bg-[#fdeee8] text-black rounded-full px-3 py-1.5 text-xs shadow-sm">
        <img 
          src="https://img.icons8.com/emoji/48/000000/fire.png" 
          alt="fire" 
          className="w-3.5 h-3.5 mr-1.5"
        />
        <span>
          <strong>2594</strong> people have viewed this in the last
          <span className="whitespace-nowrap"> <strong>24 hours</strong></span>
        </span>
      </div>
    </div>
  );
};

export default PeopleViewingBadgePreview;