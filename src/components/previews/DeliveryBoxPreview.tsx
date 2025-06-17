import React from 'react';
import { sanitizeText, sanitizeColor, withSecureErrorBoundary } from './utils/securityUtils';

const SecureDeliveryBox: React.FC = () => {
  // Secure data matching editor preview
  const secureData = {
    title: sanitizeText('Free Delivery and Returns', 40),
    subtitle: sanitizeText('Free no contact delivery for all orders', 60),
    deliveryTime: sanitizeText('2 - 5 working days', 30)
  };

  const secureStyles = {
    borderColor: sanitizeColor('#d4d4d4') || '#d4d4d4',
    backgroundColor: sanitizeColor('#ffffff') || '#ffffff',
    titleColor: sanitizeColor('#474747') || '#474747',
    textColor: sanitizeColor('#474747') || '#474747',
    highlightColor: sanitizeColor('#039903') || '#039903'
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-2">
      <div 
        className="border-2 rounded-lg p-2 w-full max-w-[180px]"
        style={{ 
          borderColor: secureStyles.borderColor,
          backgroundColor: secureStyles.backgroundColor
        }}
      >
        <div className="flex flex-col gap-1">
          {/* Title */}
          <div 
            className="text-[8px] font-bold leading-tight"
            style={{ color: secureStyles.titleColor }}
          >
            {secureData.title}
          </div>

          {/* Content */}
          <div 
            className="text-[7px] leading-tight"
            style={{ color: secureStyles.textColor }}
          >
            {secureData.subtitle}
            <br />
            Delivered in: <span 
              className="font-bold"
              style={{ color: secureStyles.highlightColor }}
            >
              {secureData.deliveryTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const DeliveryBoxPreview = withSecureErrorBoundary(SecureDeliveryBox);

export default DeliveryBoxPreview;