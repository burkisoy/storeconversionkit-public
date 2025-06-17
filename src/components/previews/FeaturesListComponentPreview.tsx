import React from 'react';
import { sanitizeText, sanitizeColor, withSecureErrorBoundary } from './utils/securityUtils';

const SecureFeaturesListComponent: React.FC = () => {
  // Secure data matching editor preview
  const secureData = {
    features: [
      sanitizeText('High quality materials', 40),
      sanitizeText('90% Polymer, 10% Plastic', 40),
      sanitizeText('100% Recyclable', 30)
    ]
  };

  const secureStyles = {
    iconColor: sanitizeColor('#701a75') || '#701a75',
    textColor: sanitizeColor('#701a75') || '#701a75'
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-2">
      <div className="w-full max-w-[180px] space-y-1">
        {secureData.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            {/* Checkbox Icon */}
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 512 512" 
              fill="currentColor"
              style={{ color: secureStyles.iconColor }}
            >
              <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z"/>
            </svg>
            
            {/* Feature Text */}
            <span 
              className="text-[8px] font-medium"
              style={{ color: secureStyles.textColor }}
            >
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const FeaturesListComponentPreview = withSecureErrorBoundary(SecureFeaturesListComponent);

export default FeaturesListComponentPreview;