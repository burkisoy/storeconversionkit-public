import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const BestsellerBadgePreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        display: flex; 
        border: 2px solid ${customValues.border_color || '#e94e77'}; 
        border-radius: ${customValues.border_radius || '8px'}; 
        font-family: ${customValues.font_family || '-apple-system, BlinkMacSystemFont, sans-serif'}; 
        overflow: hidden; 
        background-color: ${customValues.background_color || '#ffffff'}; 
        max-width: ${customValues.max_width || '320px'};
      ">
        <div style="
          background-color: ${customValues.badge_bg_color || '#e94e77'}; 
          color: ${customValues.badge_text_color || '#ffffff'}; 
          font-weight: ${customValues.badge_font_weight || '700'}; 
          font-size: ${customValues.badge_font_size || '14px'}; 
          padding: ${customValues.badge_padding || '12px 16px'}; 
          display: flex; 
          align-items: center; 
          border-right: 2px solid ${customValues.border_color || '#e94e77'};
        ">
          ${customValues.badge_number || '#1'}
        </div>
        <div style="padding: ${customValues.content_padding || '10px 14px'};">
          <div style="
            font-size: ${customValues.title_font_size || '14px'}; 
            font-weight: ${customValues.title_font_weight || '700'}; 
            color: ${customValues.title_color || '#000000'};
          ">${customValues.title_text || 'BESTSELLER OF 2024'}</div>
          <div style="
            font-size: ${customValues.subtitle_font_size || '13px'}; 
            font-style: ${customValues.subtitle_font_style || 'italic'}; 
            color: ${customValues.subtitle_color || '#6b6b6b'}; 
            margin-top: ${customValues.subtitle_margin_top || '2px'};
          ">${customValues.subtitle_text || 'The best against the cold'}</div>
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default BestsellerBadgePreviewPanel;