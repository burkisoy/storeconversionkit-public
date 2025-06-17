import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const PaymentMethodsPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        margin-top: ${customValues.margin_top || '0.25rem'};
        margin-bottom: ${customValues.margin_bottom || '0.25rem'};
        width: 100%;
      ">
        <div style="
          display: flex;
          align-items: center;
          justify-content: ${customValues.alignment || 'center'};
          width: 100%;
          gap: ${customValues.gap || '6px'};
          padding: ${customValues.padding || '12px'};
          background: ${customValues.background_color || 'transparent'};
          border-radius: ${customValues.border_radius || '8px'};
        ">
          ${['visa', 'master', 'american_express', 'paypal', 'apple_pay']
            .map(provider => `
              <img 
                src="https://raw.githubusercontent.com/activemerchant/payment_icons/refs/heads/master/app/assets/images/payment_icons/${provider}.svg" 
                alt="${provider}" 
                style="
                  height: ${customValues.icon_height || '28px'};
                  width: auto;
                  filter: ${customValues.icon_filter || 'none'};
                "
              />
            `).join('')}
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default PaymentMethodsPreviewPanel;