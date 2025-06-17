import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const InstagramViewsPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        display: flex;
        justify-content: center;
        align-items: center;
        padding: ${customValues.wrapper_padding || '0'};
        margin: ${customValues.wrapper_margin || '0'};
        background-color: transparent;
      ">
        <div style="
          display: flex;
          align-items: center;
          background-color: ${customValues.badge_bg || '#f8f8f8'};
          border-radius: ${customValues.border_radius || '25px'};
          color: ${customValues.text_color || '#000'};
          font-size: ${customValues.font_size || '14px'};
          font-weight: ${customValues.font_weight || 'bold'};
          padding: ${customValues.badge_padding || '10px 20px'};
          text-decoration: none;
          box-shadow: ${customValues.box_shadow || '0 4px 6px rgba(0, 0, 0, 0.1)'};
          border: ${customValues.border || '1px solid #e0e0e0'};
          height: ${customValues.height || '35px'};
          margin: ${customValues.badge_margin || '0'};
        ">
          <img 
            src="${customValues.icon_url || 'https://www.svgrepo.com/show/521711/instagram.svg'}"
            style="
              width: ${customValues.icon_size || '20px'};
              height: ${customValues.icon_size || '20px'};
              margin-right: ${customValues.icon_margin || '10px'};
            "
            alt="Instagram Icon"
          />
          <span>${customValues.views_text || 'Over 7M Views on Instagram'}</span>
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default InstagramViewsPreviewPanel;