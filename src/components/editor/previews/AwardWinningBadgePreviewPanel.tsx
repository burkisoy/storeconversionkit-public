import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const AwardWinningBadgePreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        display: inline-flex; 
        align-items: center; 
        background-color: ${customValues.background_color || '#fff4d6'}; 
        border-radius: ${customValues.border_radius || '9999px'}; 
        padding: ${customValues.padding || '6px 14px'}; 
        font-family: ${customValues.font_family || '-apple-system, BlinkMacSystemFont, sans-serif'}; 
        margin: 0 !important;
      ">
        <span style="
          font-size: ${customValues.icon_size || '16px'}; 
          margin-right: ${customValues.icon_margin || '8px'};
        ">${customValues.icon || '🏆'}</span>
        <span style="
          font-size: ${customValues.text_size || '14px'}; 
          font-weight: ${customValues.text_weight || '600'}; 
          color: ${customValues.text_color || '#9c7700'};
        ">${customValues.text || '#1 Award-Winning Product'}</span>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default AwardWinningBadgePreviewPanel;