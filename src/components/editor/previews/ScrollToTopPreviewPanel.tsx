import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const ScrollToTopPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 20px;
      ">
        <button style="
          padding: ${customValues.padding || '10px'};
          margin-top: ${customValues.margin_top || '10px'};
          color: ${customValues.text_color || '#ffffff'};
          background-color: ${customValues.button_color || '#1cbcc3'};
          border: ${customValues.border_color ? `1px solid ${customValues.border_color}` : '1px solid #2e2f3c'};
          border-radius: ${customValues.border_radius || '8px'};
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: system-ui, -apple-system, sans-serif;
          font-size: 14px;
        ">${customValues.button_text || 'Scroll to the top'}</button>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default ScrollToTopPreviewPanel;