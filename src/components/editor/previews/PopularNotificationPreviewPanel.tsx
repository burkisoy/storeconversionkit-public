import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const PopularNotificationPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        display: flex;
        align-items: center;
        gap: 8px;
        padding: ${customValues.notification_padding || '10px'};
        border-radius: ${customValues.notification_radius || '5px'};
        background-color: ${customValues.background_color || '#ffffff'};
        box-shadow: ${customValues.box_shadow || '0 1px 2px rgba(0, 0, 0, 0.05)'};
        font-family: Arial, sans-serif;
      ">
        <div style="
          font-size: ${customValues.icon_size || '24px'};
          animation: bounce-icon ${customValues.animation_duration || '1.5s'} infinite;
          user-select: none;
        ">
          ${customValues.notification_icon || '👀'}
        </div>
        <div style="
          font-size: ${customValues.notification_font_size || '14px'};
          color: ${customValues.notification_text_color || '#333'};
        ">
          ${customValues.notification_text_start || 'Popular product! In the last 24 hours,'}
          <span style="
            color: ${customValues.highlight_color || '#5f4b8b'};
            font-weight: ${customValues.highlight_weight || 'bold'};
          ">
            ${customValues.notification_count || '6,269 people'}
          </span>
          ${customValues.notification_text_end || ' viewed it!'}
        </div>
      </div>

      <style>
        @keyframes bounce-icon {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      </style>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default PopularNotificationPreviewPanel;