import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const ScrollingTextBannerPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        overflow: hidden; 
        box-sizing: border-box; 
        width: 100%; 
        padding: ${customValues.padding || '8px 0'}; 
        background: ${customValues.background_color || '#ffffff'}; 
        border-top: ${customValues.border_top || '2px solid #000000'}; 
        border-bottom: ${customValues.border_bottom || '2px solid #000000'};
      ">
        <div style="
          display: flex; 
          width: max-content; 
          animation: marquee-loop ${customValues.animation_duration || '30'}s linear infinite; 
          font-weight: ${customValues.font_weight || '700'}; 
          font-size: ${customValues.font_size || '20px'}; 
          color: ${customValues.text_color || '#000000'}; 
          font-family: ${customValues.font_family || '-apple-system, BlinkMacSystemFont, sans-serif'}; 
          gap: ${customValues.gap || '40px'};
        ">
          <div>${customValues.text_1 || 'USE EMOJIS'}</div>
          <div>${customValues.emoji_1 || '🔥'}</div>
          <div>${customValues.text_2 || 'USE EMOJIS'}</div>
          <div>${customValues.emoji_2 || '🔥'}</div>
          <div>${customValues.text_3 || 'USE EMOJIS'}</div>
          <div>${customValues.emoji_3 || '🔥'}</div>
          <div>${customValues.text_4 || 'USE EMOJIS'}</div>
          <div>${customValues.emoji_4 || '🔥'}</div>
          <div>${customValues.text_5 || 'USE EMOJIS'}</div>
          <div>${customValues.emoji_5 || '🔥'}</div>
          <div>${customValues.text_1 || 'USE EMOJIS'}</div>
          <div>${customValues.emoji_1 || '🔥'}</div>
          <div>${customValues.text_2 || 'USE EMOJIS'}</div>
          <div>${customValues.emoji_2 || '🔥'}</div>
          <div>${customValues.text_3 || 'USE EMOJIS'}</div>
          <div>${customValues.emoji_3 || '🔥'}</div>
          <div>${customValues.text_4 || 'USE EMOJIS'}</div>
          <div>${customValues.emoji_4 || '🔥'}</div>
          <div>${customValues.text_5 || 'USE EMOJIS'}</div>
          <div>${customValues.emoji_5 || '🔥'}</div>
        </div>
      </div>

      <style>
        @keyframes marquee-loop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      </style>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default ScrollingTextBannerPreviewPanel;