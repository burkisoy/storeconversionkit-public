import React from 'react';
import { sanitizeText, sanitizeColor, withSecureErrorBoundary } from './utils/securityUtils';

const SecureBadgesComponent: React.FC = () => {
  // Secure data matching editor preview
  const secureData = {
    badges: [
      sanitizeText('BEST VALUE', 20),
      sanitizeText('POPULAR', 20)
    ]
  };

  const secureStyles = {
    badgeColor: sanitizeColor('#f97316') || '#f97316',
    textColor: sanitizeColor('#ffffff') || '#ffffff'
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-2">
      <div className="flex flex-wrap gap-2 items-center">
        {secureData.badges.map((badge, index) => (
          <div
            key={index}
            className="px-2 py-1 rounded text-[8px] font-bold"
            style={{
              backgroundColor: secureStyles.badgeColor,
              color: secureStyles.textColor
            }}
          >
            {badge}
          </div>
        ))}
      </div>
    </div>
  );
};

const BadgesComponentPreview = withSecureErrorBoundary(SecureBadgesComponent);

export default BadgesComponentPreview;