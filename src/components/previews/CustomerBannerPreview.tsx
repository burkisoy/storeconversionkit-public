import React from 'react';

const CustomerBannerPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-center px-4 py-1.5 rounded-md bg-gradient-to-r from-[#1cbcc3] to-[#4abf8f]">
        <div className="flex -space-x-2 mr-3">
          {[
            "https://img.freepik.com/free-photo/stylish-african-american-woman-smiling_23-2148770405.jpg",
            "https://thumbs.dreamstime.com/b/beautiful-african-american-woman-relaxing-outside-happy-middle-aged-smiling-46298787.jpg",
            "https://img.freepik.com/free-photo/stylish-african-american-woman-smiling_23-2148770405.jpg"
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Customer ${index + 1}`}
              className="w-[22px] h-[22px] rounded-full border-2 border-white object-cover"
            />
          ))}
        </div>
        <span className="text-white text-xs font-bold uppercase tracking-wider">
          1,000,000+ Happy Customers
        </span>
      </div>
    </div>
  );
};

export default CustomerBannerPreview;