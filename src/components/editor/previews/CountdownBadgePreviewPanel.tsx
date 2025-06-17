import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const CountdownBadgePreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="display: flex; align-items: center; gap: 6px; padding-left: 20px;">
        <div style="
          display: inline-flex;
          align-items: center;
          background-color: ${customValues.badge_bg_color || '#ffdede'};
          color: ${customValues.badge_text_color || '#b22222'};
          padding: ${customValues.badge_padding || '6px 10px'};
          border-radius: ${customValues.badge_radius || '4px'};
          font-size: ${customValues.badge_font_size || '12px'};
          font-weight: bold;
        ">
          <span style="display: flex; align-items: center; gap: 6px;">
            <svg style="
              width: ${customValues.icon_size || '16px'};
              height: ${customValues.icon_size || '16px'};
              animation: spin-hand 2s linear infinite;
            " viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
              <line x1="12" y1="12" x2="12" y2="6" stroke="currentColor" stroke-width="2"/>
              <line x1="12" y1="12" x2="16" y2="12" stroke="currentColor" stroke-width="2"/>
            </svg>
            ${customValues.countdown_text || 'Black Friday Special:'}
          </span>
        </div>
        <div style="
          font-weight: bold;
          font-size: ${customValues.timer_font_size || '12px'};
          color: ${customValues.timer_color || '#b22222'};
        ">00:45:00</div>
      </div>

      <style>
        @keyframes spin-hand {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default CountdownBadgePreviewPanel;