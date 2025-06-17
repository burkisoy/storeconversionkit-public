import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const ShippingBadgePreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${customValues.background_color || '#ffffff'};
        border-radius: ${customValues.border_radius || '9999px'};
        padding: ${customValues.padding || '8px 20px'};
        box-shadow: ${customValues.box_shadow || '0 2px 8px rgba(0,0,0,0.1)'};
        font-family: ${customValues.font_family || "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"};
        font-size: ${customValues.font_size || '14px'};
        color: ${customValues.text_color || '#222222'};
        gap: ${customValues.gap || '25px'};
        width: fit-content;
        margin: 0 auto;
      ">
        <div style="
          display: flex;
          align-items: center;
          gap: ${customValues.item_gap || '8px'};
          white-space: nowrap;
        ">
          <div style="
            width: ${customValues.dot_size || '10px'};
            height: ${customValues.dot_size || '10px'};
            background-color: ${customValues.dot_color || '#00c851'};
            border-radius: 50%;
            flex-shrink: 0;
          "></div>
          <div>Ships by <span style="font-weight: ${customValues.bold_weight || '600'};">${customValues.delivery_date || 'Wed, April 27'}</span></div>
        </div>
        <div style="
          display: flex;
          align-items: center;
          gap: ${customValues.item_gap || '8px'};
          white-space: nowrap;
        ">
          <img 
            src="${customValues.flag_url || 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg'}"
            alt="${customValues.flag_alt || 'US Flag'}"
            style="
              width: ${customValues.flag_size || '18px'};
              height: ${customValues.flag_size || '18px'};
              border-radius: 50%;
              object-fit: cover;
              flex-shrink: 0;
            "
          >
          <div><span style="font-weight: ${customValues.bold_weight || '600'};">${customValues.shipping_text || 'FREE'}</span> ${customValues.country_text || 'US Shipping'}</div>
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default ShippingBadgePreviewPanel;