import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const ScrollingAnnouncementPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        white-space: nowrap;
        overflow: hidden;
        box-sizing: border-box;
        width: 100%;
        color: white;
        padding: ${customValues.padding || '4px 0px'};
        will-change: transform;
        -webkit-font-smoothing: subpixel-antialiased;
        background: ${customValues.background_color || '#f472b6'}
      ">
        <div style="display: inline-block; animation: marquee ${customValues.scroll_duration || '50'}s linear infinite">
          <div style="
            display: flex;
            gap: ${customValues.gap || '80px'};
            font-weight: ${customValues.font_weight || '500'};
            font-size: ${customValues.font_size || '14px'};
            color: ${customValues.text_color || '#ffffff'}
          ">
            <div>${customValues.text_1 || '🎉 50% OFF YOUR FIRST ORDER'}</div>
            <div>${customValues.text_2 || '🚚 FREE SHIPPING ON ALL ORDERS'}</div>
            <div>${customValues.text_3 || '✅ 30 DAY MONEYBACK GUARANTEE'}</div>
            <div>${customValues.text_1 || '🎉 50% OFF YOUR FIRST ORDER'}</div>
            <div>${customValues.text_2 || '🚚 FREE SHIPPING ON ALL ORDERS'}</div>
            <div>${customValues.text_3 || '✅ 30 DAY MONEYBACK GUARANTEE'}</div>
            <div>${customValues.text_1 || '🎉 50% OFF YOUR FIRST ORDER'}</div>
            <div>${customValues.text_2 || '🚚 FREE SHIPPING ON ALL ORDERS'}</div>
            <div>${customValues.text_3 || '✅ 30 DAY MONEYBACK GUARANTEE'}</div>
          </div>
        </div>
      </div>

      <style>
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      </style>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default ScrollingAnnouncementPreviewPanel;