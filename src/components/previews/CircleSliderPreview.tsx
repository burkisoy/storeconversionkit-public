import React from 'react';
import { sanitizeText, withSecureErrorBoundary } from './utils/securityUtils';

const SecureCircleSlider: React.FC = () => {
  // Secure data matching editor preview
  const secureData = {
    items: [
      { title: sanitizeText('Mugs', 20), emoji: '☕' },
      { title: sanitizeText('Hats', 20), emoji: '🧢' },
      { title: sanitizeText('Stools', 20), emoji: '🪑' },
      { title: sanitizeText('Bags', 20), emoji: '👜' },
      { title: sanitizeText('Jackets', 20), emoji: '🧥' }
    ]
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-2">
      <div className="flex gap-2 overflow-x-auto">
        {secureData.items.map((item, index) => (
          <div key={index} className="flex-shrink-0 text-center">
            {/* Circle with gradient border */}
            <div 
              className="w-10 h-10 rounded-full p-0.5 mb-1"
              style={{
                background: 'linear-gradient(133deg, #fadc36 11%, #fe6292 49%, #fadc36 87%)'
              }}
            >
              <div className="w-full h-full rounded-full bg-white border-2 border-white flex items-center justify-center">
                <span className="text-[12px]">{item.emoji}</span>
              </div>
            </div>
            
            {/* Label */}
            <p className="text-[6px] text-gray-800 font-medium">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CircleSliderPreview = withSecureErrorBoundary(SecureCircleSlider);

export default CircleSliderPreview;