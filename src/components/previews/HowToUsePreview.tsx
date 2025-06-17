import React from 'react';

// Secure component-based approach
interface StepProps {
  stepNumber: number;
  title: string;
  description: string;
  imageUrl?: string;
}

interface SecureStyleProps {
  background?: string;
  headingColor?: string;
  textColor?: string;
  borderColor?: string;
  numberBgColor?: string;
}

// Sanitize and validate style values
const sanitizeStyle = (value: string | undefined, allowedValues?: string[]): string | undefined => {
  if (!value) return undefined;
  
  // Remove any potentially dangerous characters
  const cleaned = value.replace(/[<>'"]/g, '');
  
  // If allowedValues provided, check against whitelist
  if (allowedValues && !allowedValues.includes(cleaned)) {
    return undefined;
  }
  
  return cleaned;
};

// Secure image proxy (placeholder for now - would connect to your image service)
const getSecureImageUrl = (originalUrl?: string): string => {
  if (!originalUrl) return '';
  
  // In production, this would proxy through your secure image service
  // For now, we'll use a placeholder or the original if it's from your domain
  const isSecureUrl = originalUrl.startsWith('https://cdn.shopify.com/') || 
                     originalUrl.startsWith('https://your-domain.com/');
  
  return isSecureUrl ? originalUrl : '/placeholder-image.jpg';
};

// Secure Step Component
const SecureStep: React.FC<StepProps> = ({ stepNumber, title, description, imageUrl }) => {
  const secureImageUrl = getSecureImageUrl(imageUrl);
  
  return (
    <div className="flex-shrink-0 w-20 bg-white rounded-lg border border-dashed border-blue-300 overflow-hidden relative">
      {/* Step Number - Hardcoded safe values */}
      <div className="absolute top-1.5 left-1.5 w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center z-10">
        <span className="text-[8px] text-white font-bold">
          {Math.max(1, Math.min(9, stepNumber))} {/* Clamp between 1-9 */}
        </span>
      </div>
      
      {/* Image Area */}
      <div className="h-12 bg-gradient-to-b from-blue-100 to-blue-200 relative flex items-center justify-center">
        {secureImageUrl ? (
          <img 
            src={secureImageUrl}
            alt={`Step ${stepNumber}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to placeholder on error
              (e.target as HTMLImageElement).src = '/placeholder-image.jpg';
            }}
            loading="lazy"
          />
        ) : (
          // Fallback content
          <div className="w-6 h-8 bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm shadow-sm flex items-center justify-center">
              <span className="text-[4px] text-blue-600 font-bold">
                {stepNumber}
              </span>
            </div>
          </div>
        )}
      </div>
      
      {/* Content Area */}
      <div className="p-2 bg-white">
        <h3 className="text-[7px] font-semibold text-slate-700 mb-1 leading-tight truncate">
          {title.substring(0, 20)} {/* Limit title length */}
        </h3>
        <div className="space-y-1">
          <div className="h-0.5 bg-gray-300 rounded-full w-full"></div>
          <div className="h-0.5 bg-gray-200 rounded-full w-4/5"></div>
          <div className="h-0.5 bg-gray-200 rounded-full w-3/5"></div>
        </div>
      </div>
    </div>
  );
};

// Main secure preview component
const HowToUsePreview: React.FC = () => {
  // Secure, validated data
  const secureData = {
    title: 'How to Use',
    subtitle: 'Follow these 3 simple steps to get the best experience.',
    steps: [
      {
        stepNumber: 1,
        title: 'Place the Pillow',
        description: 'Place the pillow on your bed. Its unique shape supports your neck and head naturally.',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'
      },
      {
        stepNumber: 2,
        title: 'Feel the Memory Foam',
        description: 'Gently press down and feel the foam adjust to your hand—just like it will to your head.',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'
      },
      {
        stepNumber: 3,
        title: 'Enjoy Better Sleep',
        description: 'Lay your head down and relax. Wake up refreshed, aligned, and pain-free.',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'
      }
    ]
  };

  // Secure style props
  const secureStyles: SecureStyleProps = {
    background: sanitizeStyle('linear-gradient(to bottom, #e6f6ff, #ffffff)'),
    headingColor: sanitizeStyle('#1a3d6d'),
    textColor: sanitizeStyle('#4a4a4a'),
    borderColor: sanitizeStyle('#94c3ff'),
    numberBgColor: sanitizeStyle('#3b82f6')
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <div 
        className="h-full flex flex-col justify-center p-4"
        style={{
          background: secureStyles.background || 'linear-gradient(to bottom, #e6f6ff, #ffffff)'
        }}
      >
        <div className="max-w-full mx-auto text-center">
          {/* Secure Header */}
          <div className="mb-4">
            <h2 
              className="text-sm font-bold mb-1"
              style={{ color: secureStyles.headingColor || '#1a3d6d' }}
            >
              {secureData.title}
            </h2>
            <p 
              className="text-[10px]"
              style={{ color: secureStyles.textColor || '#4a4a4a' }}
            >
              {secureData.subtitle}
            </p>
          </div>

          {/* Secure Steps Container */}
          <div className="flex gap-2 justify-center overflow-x-auto pb-2">
            {secureData.steps.map((step) => (
              <SecureStep
                key={step.stepNumber}
                stepNumber={step.stepNumber}
                title={step.title}
                description={step.description}
                imageUrl={step.imageUrl}
              />
            ))}
          </div>

          {/* Secure Bottom Indicator */}
          <div className="flex items-center justify-center mt-3 gap-1">
            {secureData.steps.map((_, index) => (
              <React.Fragment key={index}>
                <div 
                  className="w-1.5 h-0.5 rounded-full"
                  style={{ backgroundColor: secureStyles.borderColor || '#94c3ff' }}
                />
                {index < secureData.steps.length - 1 && (
                  <div 
                    className="text-[8px]"
                    style={{ color: secureStyles.borderColor || '#94c3ff' }}
                  >
                    •
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUsePreview;