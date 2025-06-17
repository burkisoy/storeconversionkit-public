import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const SocialBadgePreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        margin-top: ${customValues.margin_top || '0.25rem'};
        margin-bottom: ${customValues.margin_bottom || '0.25rem'};
        width: 100%
      ">
        <div style="
          display: flex;
          align-items: center;
          justify-content: ${customValues.alignment || 'center'};
          width: 100%;
          gap: ${customValues.gap || '8px'};
          font-weight: ${customValues.font_weight || '500'};
          font-size: ${customValues.font_size || '14px'}
        ">
          <img 
            src="${customValues.icon_url || 'https://img.icons8.com/?size=100&id=118640&format=png&color=000000'}"
            alt="Social"
            style="
              height: ${customValues.icon_size || '20px'};
              width: ${customValues.icon_size || '20px'};
              filter: ${customValues.icon_filter || 'none'}
            "
          />
          <span style="color: ${customValues.text_color || '#000000'}">
            ${customValues.text || 'As seen on TikTok'}
          </span>
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default SocialBadgePreviewPanel;