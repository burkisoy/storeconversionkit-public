import React from 'react';

const InstagramViewsPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-center px-5 py-2 bg-[#f8f8f8] rounded-full border border-[#e0e0e0] shadow-sm">
        <img 
          src="https://www.svgrepo.com/show/521711/instagram.svg" 
          alt="Instagram Icon" 
          className="w-5 h-5 mr-2.5"
        />
        <span className="text-sm font-semibold">Over 7M Views on Instagram</span>
      </div>
    </div>
  );
};

export default InstagramViewsPreview;