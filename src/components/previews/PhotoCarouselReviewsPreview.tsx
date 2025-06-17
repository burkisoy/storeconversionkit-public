import React from 'react';

const PhotoCarouselReviewsPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="bg-[#d4f1ff] p-4 rounded-lg w-full h-full flex flex-col items-center justify-center">
        <div className="flex gap-2 overflow-x-auto mb-2 w-full">
          {[1, 2, 3, 4, 5].map((index) => (
            <div 
              key={index}
              className="w-16 h-20 flex-shrink-0 rounded-lg bg-white overflow-hidden"
            >
              <img 
                src="https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274"
                alt={`Photo ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-[10px] font-bold text-gray-900 mb-1">Look At How Others Are Loving Their Product!</h3>
          <p className="text-[8px] text-gray-600 mb-2">Real Reviews From Real People</p>
          <button className="bg-[#3dbff3] text-white text-[8px] font-semibold px-3 py-1 rounded-md mb-1">
            CLAIM OFFER
          </button>
          <div className="text-[7px] text-gray-500">
            <span className="text-[#3dbff3]">★</span> Rated 4.8/5 by 1,319+ Happy Customers
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCarouselReviewsPreview;