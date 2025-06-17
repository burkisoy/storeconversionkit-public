import React from 'react';
import { sanitizeText, sanitizeColor, withSecureErrorBoundary } from './utils/securityUtils';

const SecureFeatureList: React.FC = () => {
  // Secure data matching editor preview
  const secureData = {
    features: [
      sanitizeText('Easily Changeable 6 Different Heads', 50),
      sanitizeText('Waterproof Charging Unit', 40),
      sanitizeText('3.5 hours continuous operation time', 50)
    ]
  };

  const secureStyles = {
    textColor: sanitizeColor('#333') || '#333',
    iconColor: sanitizeColor('#22c55e') || '#22c55e'
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-2">
      <div className="w-full max-w-[200px] space-y-1">
        {secureData.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 py-1">
            {/* Check Icon */}
            <div className="flex-shrink-0">
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none"
                style={{ color: secureStyles.iconColor }}
              >
                <path 
                  d="M20 6L9 17L4 12" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            {/* Feature Text */}
            <div 
              className="text-[7px] leading-tight"
              style={{ color: secureStyles.textColor }}
            >
              {feature}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FeatureListPreview = withSecureErrorBoundary(SecureFeatureList);

export default FeatureListPreview;