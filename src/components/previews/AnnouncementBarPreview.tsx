import React from 'react';
import { sanitizeText, sanitizeColor, withSecureErrorBoundary } from './utils/securityUtils';

const SecureAnnouncementBar: React.FC = () => {
  // Secure data matching editor preview
  const secureData = {
    headerText: sanitizeText('NO MORE', 20),
    scrollingTexts: [
      sanitizeText('LESS TANGLES', 30),
      sanitizeText('LESS ACNES', 30),
      sanitizeText('IRRITATED SKIN', 30),
      sanitizeText('PSORIASIS', 30),
      sanitizeText('HARD WATER', 30)
    ]
  };

  const secureStyles = {
    backgroundColor: sanitizeColor('#f9f9f9') || '#f9f9f9',
    borderColor: sanitizeColor('#2e2f3c') || '#2e2f3c',
    headerColor: sanitizeColor('#2e2f3c') || '#2e2f3c',
    textColor: sanitizeColor('#2e2f3c') || '#2e2f3c'
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 10s linear infinite;
          }
        `}
      </style>
      
      <div 
        className="w-full py-2 border-t border-b flex flex-col items-center overflow-hidden"
        style={{ 
          backgroundColor: secureStyles.backgroundColor,
          borderColor: secureStyles.borderColor
        }}
      >
        {/* Header */}
        <span 
          className="text-[8px] font-medium mb-1"
          style={{ color: secureStyles.headerColor }}
        >
          {secureData.headerText}
        </span>
        
        {/* Scrolling Text */}
        <div className="w-full overflow-hidden">
          <div 
            className="flex whitespace-nowrap animate-scroll"
            style={{ color: secureStyles.textColor }}
          >
            {/* Duplicate for seamless scroll */}
            {[...secureData.scrollingTexts, ...secureData.scrollingTexts].map((text, index) => (
              <React.Fragment key={index}>
                <span className="text-[6px] font-bold mx-2">{text}</span>
                <span className="text-[6px] font-bold mx-2">-</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AnnouncementBarPreview = withSecureErrorBoundary(SecureAnnouncementBar);

export default AnnouncementBarPreview;