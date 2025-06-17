import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const SellingFastPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        background: ${customValues.background_color || '#f5f0ff'};
        color: ${customValues.text_color || '#1a1a1a'};
        border-radius: ${customValues.border_radius || '20px'};
        font-family: ${customValues.font_family || "'Helvetica Neue', sans-serif"};
        font-size: ${customValues.font_size || '13px'};
        padding: ${customValues.padding || '6px 14px'};
        display: inline-flex;
        align-items: center;
        gap: ${customValues.gap || '6px'};
        box-shadow: ${customValues.box_shadow || '0 1px 2px rgba(0, 0, 0, 0.08)'};
        margin: ${customValues.margin || '16px 0'};
      ">
        <span style="
          width: ${customValues.dot_size || '10px'};
          height: ${customValues.dot_size || '10px'};
          border-radius: 50%;
          background: ${customValues.dot_color || '#7c3aed'};
          display: inline-block;
          animation: pulse 2s infinite;
        "></span>
        <strong>${customValues.title_text || 'Selling Fast!'}</strong>&nbsp;${customValues.viewer_text || '28 people are looking at this'}
      </div>

      <style>
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      </style>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default SellingFastPreviewPanel;