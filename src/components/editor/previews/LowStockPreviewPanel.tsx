import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const LowStockPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        margin-top: ${customValues.margin_top || '0.25rem'};
        margin-bottom: ${customValues.margin_bottom || '0.25rem'};
        width: fit-content;
      ">
        <div style="
          background: ${customValues.background_color || '#fff2f2'};
          color: ${customValues.text_color || '#dc2525'};
          padding: ${customValues.padding || '3px 10px'};
          border-radius: ${customValues.border_radius || '6px'};
          font-weight: ${customValues.font_weight || '700'};
          margin-right: ${customValues.margin_right || '0'};
          font-size: ${customValues.font_size || '12px'};
          display: flex;
          align-items: center;
          justify-content: center;
          gap: ${customValues.gap || '10px'};
        ">
          <div style="position: relative;">
            <div style="
              width: ${customValues.dot_size || '8px'};
              height: ${customValues.dot_size || '8px'};
              background: ${customValues.dot_color || '#dc2525'};
              border-radius: 50%;
              position: absolute;
              animation: lc-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
              display: block !important;
            "></div>
            <style>
              @keyframes lc-ping {
                75%, 100% {
                  transform: scale(2);
                  opacity: 0;
                }
              }
            </style>
            <div style="
              width: ${customValues.dot_size || '8px'};
              height: ${customValues.dot_size || '8px'};
              background: ${customValues.dot_color || '#dc2525'};
              border-radius: 50%;
              display: block !important;
            "></div>
          </div>
          ${customValues.text || 'LOW STOCK'}
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default LowStockPreviewPanel;