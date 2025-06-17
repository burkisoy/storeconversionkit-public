import React from 'react';

const ScrollingTextBannerPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full overflow-hidden border-y-2 border-black py-2 bg-white">
        <div className="flex whitespace-nowrap animate-[marquee_15s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-10">
              <div className="text-xl font-bold">USE EMOJIS</div>
              <div className="text-xl font-bold">🔥</div>
              <div className="text-xl font-bold">USE EMOJIS</div>
              <div className="text-xl font-bold">🔥</div>
              <div className="text-xl font-bold">USE EMOJIS</div>
              <div className="text-xl font-bold">🔥</div>
              <div className="text-xl font-bold">USE EMOJIS</div>
              <div className="text-xl font-bold">🔥</div>
              <div className="text-xl font-bold">USE EMOJIS</div>
              <div className="text-xl font-bold">🔥</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default ScrollingTextBannerPreview;