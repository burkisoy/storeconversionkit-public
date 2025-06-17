import React from 'react';

const BadgesPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center gap-3">
      <span className="px-3 py-1.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-semibold rounded-lg shadow-sm">
        BEST VALUE
      </span>
      <span className="px-3 py-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-semibold rounded-lg shadow-sm">
        POPULAR
      </span>
    </div>
  );
};

export default BadgesPreview;