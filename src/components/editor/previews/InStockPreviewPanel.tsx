import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const InStockPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        display: flex;
        align-items: center;
        gap: ${customValues.gap || '8px'};
        padding: ${customValues.padding || '8px 12px'};
        background: ${customValues.wrapper_bg || '#ffffff'};
        border-radius: ${customValues.border_radius || '8px'};
        width: fit-content;
      ">
        <svg width="15" height="15" aria-hidden="true">
          <circle cx="7.5" cy="7.5" r="7.5" fill="${customValues.background_color || 'rgb(62,214,96, 0.3)'}"></circle>
          <circle cx="7.5" cy="7.5" r="5" stroke="${customValues.stroke_color || '#ffffff'}" stroke-width="1" fill="${customValues.dot_color || 'rgb(62,214,96)'}"></circle>
        </svg>
        <span style="
          color: ${customValues.text_color || '#333333'};
          font-size: ${customValues.font_size || '14px'};
          font-weight: ${customValues.font_weight || '500'};
        ">${customValues.status_text || 'In stock'}</span>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default InStockPreviewPanel;