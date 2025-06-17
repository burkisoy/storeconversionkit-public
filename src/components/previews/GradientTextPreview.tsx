import React from 'react';

const GradientTextPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <h2 
        className="text-2xl font-black text-transparent bg-clip-text"
        style={{
          backgroundImage: 'linear-gradient(45deg, #1cbcc3, #1cbcc3, #4abf8f, #4abf8f 80%)',
          WebkitBackgroundClip: 'text'
        }}
      >
        Gradient text title goes here
      </h2>
    </div>
  );
};

export default GradientTextPreview;