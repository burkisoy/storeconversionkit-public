import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const ItemsLeftBadgePreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="display: flex; gap: 10px; transform: scale(0.8);">
        <div style="
          display: inline-flex;
          align-items: center;
          background-color: ${customValues.badge_bg_color || '#ffdede'};
          color: ${customValues.badge_text_color || '#b22222'};
          padding: 3px 5px;
          border-radius: 5px;
          font-size: 10px;
          font-weight: bold;
          text-align: center;
        ">
          <span style="
            display: flex;
            align-items: center;
          ">
            <svg style="
              width: 12px;
              height: 12px;
              margin-right: 4px;
              color: ${customValues.icon_color || '#b22222'};
              animation: flame 2s infinite;
            " viewBox="0 0 64 64">
              <path fill="currentColor" d="M32 2C19 15 9 26 9 38c0 8 6 14 14 14s14-6 14-14c0-8-6-14-14-14s-14 6-14 14c0 8 6 14 14 14s14-6 14-14c0-8-6-14-14-14S18 22 18 30c0 8 6 14 14 14s14-6 14-14c0-8-6-14-14-14z"/>
            </svg>
            ${customValues.badge_text || '8 items left at this price'}
          </span>
        </div>

        <div style="
          display: inline-flex;
          align-items: center;
          background-color: ${customValues.badge_bg_color || '#ffdede'};
          color: ${customValues.badge_text_color || '#b22222'};
          padding: 3px 5px;
          border-radius: 5px;
          font-size: 10px;
          font-weight: bold;
          text-align: center;
        ">
          <span style="
            display: flex;
            align-items: center;
          ">
            <svg style="
              width: 12px;
              height: 12px;
              margin-right: 4px;
              color: ${customValues.icon_color || '#b22222'};
              animation: clock 2s infinite;
            " viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="30" stroke="currentColor" stroke-width="4" fill="none"/>
              <line x1="32" y1="32" x2="32" y2="12" stroke="currentColor" stroke-width="4"/>
              <line x1="32" y1="32" x2="44" y2="32" stroke="currentColor" stroke-width="4"/>
            </svg>
            ${customValues.limited_stock_text || 'Limited stock available!'}
          </span>
        </div>
      </div>

      <style>
        @keyframes flame {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        @keyframes clock {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(360deg); }
        }
      </style>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default ItemsLeftBadgePreviewPanel;