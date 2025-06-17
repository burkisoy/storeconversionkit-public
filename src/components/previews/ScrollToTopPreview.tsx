import React from 'react';

const ScrollToTopPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <button className="px-4 py-2 bg-[#1cbcc3] text-white rounded-lg border border-[#2e2f3c] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        Scroll to the top
      </button>
    </div>
  );
};

export default ScrollToTopPreview;