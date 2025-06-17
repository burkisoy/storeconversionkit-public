import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const PeopleWatchingPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        display: flex;
        align-items: center;
        background: ${customValues.background_color || '#ffffff'};
        padding: ${customValues.padding || '6px 12px'};
        border-radius: ${customValues.border_radius || '16px'};
        box-shadow: ${customValues.box_shadow || '0px 2px 6px rgba(0, 0, 0, 0.1)'};
        font-family: Arial, sans-serif;
        font-size: ${customValues.font_size || '14px'};
        color: ${customValues.text_color || '#333'};
        font-weight: 400;
        max-width: fit-content;
        margin: auto;
      ">
        <div style="
          display: flex;
          align-items: center;
          margin-right: ${customValues.icon_margin || '6px'};
        ">
          <div style="
            width: ${customValues.circle_size || '16px'};
            height: ${customValues.circle_size || '16px'};
            border-radius: 50%;
            border: 2px solid ${customValues.circle_color || '#8dc3e6'};
            display: flex;
            align-items: center;
            justify-content: center;
            animation: pulse 1.5s infinite;
          ">
            <div style="
              width: ${customValues.inner_circle_size || '8px'};
              height: ${customValues.inner_circle_size || '8px'};
              border-radius: 50%;
              background: ${customValues.circle_color || '#8dc3e6'};
              animation: pulse-inner 1.5s infinite;
            "></div>
          </div>
        </div>
        <span style="
          font-size: ${customValues.font_size || '14px'};
          color: ${customValues.text_color || '#222'};
        ">
          <strong>${customValues.people_count || '154'} People</strong> ${customValues.watching_text || 'are watching this product'}
        </span>
      </div>

      <style>
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes pulse-inner {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      </style>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default PeopleWatchingPreviewPanel;