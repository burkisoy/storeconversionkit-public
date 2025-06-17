import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const PremiumBadgePreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        display: flex;
        gap: ${customValues.badge_gap || '5px'};
        flex-wrap: wrap;
      ">
        <div style="
          display: flex;
          align-items: center;
          padding: ${customValues.badge_padding || '3px 7px'};
          border-radius: ${customValues.badge_border_radius || '12px'};
          font-size: ${customValues.badge_font_size || '10px'};
          font-weight: ${customValues.badge_font_weight || 'bold'};
          color: ${customValues.badge_text_color || '#000000'};
          background-color: ${customValues.badge_background_color || 'rgba(0, 0, 0, 0.05)'};
        ">
          <img 
            src="${customValues.badge_1_icon || 'https://www.svgrepo.com/show/474295/plane.svg'}"
            alt="${customValues.badge_1_text || 'Fast Shipping'}"
            width="${customValues.icon_size || '12'}"
            height="${customValues.icon_size || '12'}"
            style="margin-right: 3px; filter: brightness(${customValues.icon_brightness || '0.5'})"
          />
          ${customValues.badge_1_text || 'Fast Shipping'}
        </div>

        <div style="
          display: flex;
          align-items: center;
          padding: ${customValues.badge_padding || '3px 7px'};
          border-radius: ${customValues.badge_border_radius || '12px'};
          font-size: ${customValues.badge_font_size || '10px'};
          font-weight: ${customValues.badge_font_weight || 'bold'};
          color: ${customValues.badge_text_color || '#000000'};
          background-color: ${customValues.badge_background_color || 'rgba(0, 0, 0, 0.05)'};
        ">
          <img 
            src="${customValues.badge_2_icon || 'https://www.svgrepo.com/show/486865/support.svg'}"
            alt="${customValues.badge_2_text || '24/7 Support'}"
            width="${customValues.icon_size || '12'}"
            height="${customValues.icon_size || '12'}"
            style="margin-right: 3px; filter: brightness(${customValues.icon_brightness || '0.5'})"
          />
          ${customValues.badge_2_text || '24/7 Support'}
        </div>

        <div style="
          display: flex;
          align-items: center;
          padding: ${customValues.badge_padding || '3px 7px'};
          border-radius: ${customValues.badge_border_radius || '12px'};
          font-size: ${customValues.badge_font_size || '10px'};
          font-weight: ${customValues.badge_font_weight || 'bold'};
          color: ${customValues.badge_text_color || '#000000'};
          background-color: ${customValues.badge_background_color || 'rgba(0, 0, 0, 0.05)'};
        ">
          <img 
            src="${customValues.badge_3_icon || 'https://www.svgrepo.com/show/457232/return.svg'}"
            alt="${customValues.badge_3_text || '30 Days Return'}"
            width="${customValues.icon_size || '12'}"
            height="${customValues.icon_size || '12'}"
            style="margin-right: 3px; filter: brightness(${customValues.icon_brightness || '0.5'})"
          />
          ${customValues.badge_3_text || '30 Days Return'}
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default PremiumBadgePreviewPanel;