import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const MoneyBackGuaranteePreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        display: flex;
        align-items: center;
        background-color: ${customValues.guarantee_background_color || '#f8f1de'};
        border-radius: ${customValues.border_radius || '12px'};
        padding: ${customValues.container_padding || '15px'};
        box-shadow: ${customValues.box_shadow || '0 4px 6px rgba(0, 0, 0, 0.1)'};
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        border: ${customValues.border || '2px dashed #6c4e22'};
        margin: 0 auto;
        font-family: Arial, sans-serif;
      ">
        <div style="margin-right: ${customValues.badge_margin || '15px'};">
          <img 
            src="${customValues.guarantee_badge_image || 'https://i.hizliresim.com/a0c8xe3.png'}"
            alt="${customValues.guarantee_badge_alt || 'Guarantee Badge'}"
            style="display: block; width: ${customValues.badge_size || '100px'}; height: auto;"
          />
        </div>
        <div>
          <h3 style="
            margin: 0;
            font-size: ${customValues.title_font_size || '13px'};
            color: ${customValues.guarantee_title_color || '#6c4e22'};
            font-weight: ${customValues.title_font_weight || 'bold'};
            text-align: left;
          ">${customValues.guarantee_title || '100% 14-Day Money Back Guarantee'}</h3>
          <p style="
            margin: 5px 0 0;
            font-size: ${customValues.description_font_size || '11px'};
            color: ${customValues.guarantee_text_color || '#4f4f4f'};
            text-align: left;
          ">${customValues.guarantee_description || "We're so confident in our products that if you're not satisfied, you have the right to get a full 14-day refund."}</p>
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default MoneyBackGuaranteePreviewPanel;