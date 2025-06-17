import React from 'react';
import { sanitizeText, sanitizeColor, withSecureErrorBoundary } from './utils/securityUtils';

const SecureCountdownBadge: React.FC = () => {
  // Secure data matching editor preview
  const secureData = {
    badgeText: sanitizeText('Black Friday Special:', 50),
    timerText: sanitizeText('00:45:00', 20),
    badgeBgColor: sanitizeColor('#ffdede') || '#ffdede',
    badgeTextColor: sanitizeColor('#b22222') || '#b22222',
    timerColor: sanitizeColor('#b22222') || '#b22222'
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-3">
      <div className="flex items-center gap-1.5">
        {/* Badge with Clock Icon */}
        <div 
          className="inline-flex items-center px-2 py-1 rounded text-[8px] font-bold"
          style={{ 
            backgroundColor: secureData.badgeBgColor,
            color: secureData.badgeTextColor
          }}
        >
          <span className="flex items-center gap-1">
            {/* Spinning Clock Icon */}
            <svg 
              className="w-3 h-3 animate-spin" 
              viewBox="0 0 24 24"
              style={{ color: secureData.badgeTextColor }}
            >
              <circle 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none"
              />
              <line 
                x1="12" 
                y1="12" 
                x2="12" 
                y2="6" 
                stroke="currentColor" 
                strokeWidth="2"
              />
              <line 
                x1="12" 
                y1="12" 
                x2="16" 
                y2="12" 
                stroke="currentColor" 
                strokeWidth="2"
              />
            </svg>
            {secureData.badgeText}
          </span>
        </div>
        
        {/* Timer */}
        <div 
          className="text-[8px] font-bold"
          style={{ color: secureData.timerColor }}
        >
          {secureData.timerText}
        </div>
      </div>
    </div>
  );
};

const CountdownBadgePreview = withSecureErrorBoundary(SecureCountdownBadge);

export default CountdownBadgePreview;