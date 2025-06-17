import React from 'react';

const TestimonialCarouselPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
        {[
          {
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80',
            name: 'Jenna R.',
            text: 'I really love this, arrived in 2 days exactly what I needed!'
          },
          {
            image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80',
            name: 'Samantha L.',
            text: 'Amazing quality! Looks exactly like the photos!'
          },
          {
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80',
            name: 'Emily G.',
            text: 'Fast shipping and super cute. Will buy again!'
          }
        ].map((testimonial, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 flex-none w-[250px] bg-[#fff7e6] rounded-xl p-4 shadow-md"
          >
            <div className="flex-shrink-0">
              <img 
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full border-2 border-[#f5c66e] object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-sm">{testimonial.name}</span>
                <span className="bg-[#fca311] text-white text-xs px-1.5 rounded">★★★★★</span>
              </div>
              <p className="text-xs text-gray-700 leading-snug">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarouselPreview;