import React from 'react';
import { sanitizeText, sanitizeColor, withSecureErrorBoundary } from './utils/securityUtils';

const SecureComparisonTable: React.FC = () => {
  // Secure data matching editor preview
  const secureData = {
    heading: {
      prefix: sanitizeText('Why Do Our Customers', 30),
      highlight: sanitizeText('Choose Us', 20),
      suffix: sanitizeText('?', 5)
    },
    columns: [
      sanitizeText('Features', 20),
      sanitizeText('Morning Recovery', 30),
      sanitizeText('Hydration Powder', 30)
    ],
    features: [
      sanitizeText('Clinically Proven**', 30),
      sanitizeText('Electrolytes', 20),
      sanitizeText('No Artificial Colors or Sweeteners', 50),
      sanitizeText('Patent-Pending Technology', 40),
      sanitizeText('Proprietary Herbal Blend', 40)
    ]
  };

  const secureStyles = {
    gradientColor1: sanitizeColor('#24A06F') || '#24A06F',
    gradientColor2: sanitizeColor('#1B774F') || '#1B774F',
    checkColor: sanitizeColor('#34a853') || '#34a853',
    xColor: sanitizeColor('#ea4335') || '#ea4335'
  };

  return (
    <div className="w-full h-full p-2 overflow-auto">
      {/* Header */}
      <h2 className="text-center mb-2 text-[8px]">
        <span className="text-gray-800">{secureData.heading.prefix} </span>
        <span 
          className="font-bold"
          style={{ 
            background: `linear-gradient(135deg, ${secureStyles.gradientColor1}, ${secureStyles.gradientColor2})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          {secureData.heading.highlight}
        </span>
        <span style={{ color: secureStyles.gradientColor1 }}>{secureData.heading.suffix}</span>
      </h2>

      {/* Table */}
      <div className="bg-white rounded-lg overflow-hidden shadow-sm">
        {/* Header Row */}
        <div 
          className="grid grid-cols-3 text-[6px] font-bold text-white p-1"
          style={{ 
            background: `linear-gradient(135deg, ${secureStyles.gradientColor1}, ${secureStyles.gradientColor2})`
          }}
        >
          <div className="text-left">{secureData.columns[0]}</div>
          <div className="text-center">{secureData.columns[1]}</div>
          <div className="text-center">{secureData.columns[2]}</div>
        </div>

        {/* Feature Rows */}
        {secureData.features.map((feature, index) => (
          <div 
            key={index}
            className={`grid grid-cols-3 text-[6px] p-1 border-b border-gray-200 ${
                              index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-r from-gray-50 to-slate-50'
            }`}
          >
            <div className="text-left">{feature}</div>
            <div className="text-center">
              {/* Check mark */}
              <svg width="8" height="8" fill={secureStyles.checkColor} viewBox="0 0 24 24">
                <path d="M20.292 5.708a1 1 0 0 1 0 1.414L9 18.414l-5.292-5.292a1 1 0 0 1 1.414-1.414L9 15.586l10.292-10.292a1 1 0 0 1 1.414 0z"/>
              </svg>
            </div>
            <div className="text-center">
              {/* X mark */}
              <svg width="8" height="8" fill={secureStyles.xColor} viewBox="0 0 24 24">
                <path d="M18.364 5.636a1 1 0 0 1 0 1.414L13.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 0 1-1.414-1.414L10.586 12l-4.95-4.95a1 1 0 0 1 1.414-1.414L12 10.586l4.95-4.95a1 1 0 0 1 1.414 0z"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ComparisonTablePreview = withSecureErrorBoundary(SecureComparisonTable);

export default ComparisonTablePreview;