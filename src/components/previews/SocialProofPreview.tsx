import React from 'react';

const SocialProofPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="flex items-center gap-3 bg-gradient-to-r from-cyan-50 to-blue-50 px-4 py-2 rounded-lg">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-base shadow-sm">
          📱
        </div>
        <span className="text-gray-800 text-sm font-medium">As seen on TikTok</span>
      </div>
    </div>
  );
};

export default SocialProofPreview;