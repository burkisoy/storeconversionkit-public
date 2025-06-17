import React from 'react';

const TiktokSliderPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-1">
      <div className="flex gap-5 overflow-x-auto">
        {[
          { gradient: 'from-pink-500 to-purple-600' },
          { gradient: 'from-blue-500 to-cyan-400' },
          { gradient: 'from-orange-500 to-red-500' }
        ].map((video, index) => (
          <div
            key={index}
            className="flex-shrink-0 relative"
          >
            {/* TikTok Border Effect - Thinner */}
            <div className="w-20 h-36 p-0.5 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              <div className={`w-full h-full rounded-xl bg-gradient-to-br ${video.gradient} relative overflow-hidden`}>
                
                {/* Video Content Simulation */}
                <div className="absolute inset-0 bg-black bg-opacity-20" />
                
                {/* TikTok Logo */}
                <div className="absolute top-2 right-2">
                  <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                    <span className="text-[10px] font-bold text-black">♪</span>
                  </div>
                </div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white bg-opacity-95 flex items-center justify-center shadow-lg">
                    <div className="w-0 h-0 ml-1 border-l-[10px] border-l-gray-800 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TiktokSliderPreview;