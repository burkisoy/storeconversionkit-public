import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const AnnouncementBar2PreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        background-color: ${customValues.background_color || '#fff5f5'};
        border: 1px dashed ${customValues.border_color || '#ff9999'};
        border-radius: ${customValues.border_radius || '5px'};
        padding: ${customValues.padding || '8px 16px'};
        text-align: center;
        font-family: Arial, sans-serif;
        font-size: ${customValues.font_size || '8px'};
        font-weight: ${customValues.font_weight || 'bold'};
        color: ${customValues.text_color || '#333333'};
        margin: 0 auto;
        width: 100%;
        box-sizing: border-box;
        max-width: ${customValues.max_width || '1200px'};
      ">
        <p style="
          margin: 0;
          display: inline-flex;
          align-items: center;
          line-height: 1.5;
        ">
          <span style="
            display: inline-block;
            width: ${customValues.dot_size || '10px'};
            height: ${customValues.dot_size || '10px'};
            background-color: ${customValues.dot_color || '#ff9999'};
            border-radius: 50%;
            margin-right: ${customValues.dot_margin_right || '8px'};
            animation: blink 1s infinite;
          "></span>
          ${customValues.announcement_text || 'Order by Mar. 25th for guaranteed FREE GIFTS'}
        </p>
      </div>

      <style>
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      </style>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default AnnouncementBar2PreviewPanel;