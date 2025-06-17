import React from 'react';

const SocialBadge2Preview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-center gap-2">
        <img 
          src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
          alt="Social"
          className="w-5 h-5"
        />
        <span className="text-sm font-medium">As seen on Instagram</span>
      </div>
    </div>
  );
};

export default SocialBadge2Preview;