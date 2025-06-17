import React from 'react';

const SocialBadgePreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-center gap-2">
        <img 
          src="https://img.icons8.com/?size=100&id=118640&format=png&color=000000"
          alt="Social"
          className="w-5 h-5"
        />
        <span className="text-sm font-medium">As seen on TikTok</span>
      </div>
    </div>
  );
};

export default SocialBadgePreview;