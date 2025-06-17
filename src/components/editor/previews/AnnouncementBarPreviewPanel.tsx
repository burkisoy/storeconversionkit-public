import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const AnnouncementBarPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        width: 100%;
        padding: ${customValues.padding || '20px 0'};
        overflow: hidden;
        position: relative;
        border-top: ${customValues.border || '1px solid #2e2f3c'};
        border-bottom: ${customValues.border || '1px solid #2e2f3c'};
        background-color: ${customValues.background_color || '#f9f9f9'};
        display: flex;
        flex-direction: column;
        align-items: center;
      ">
        <span style="
          text-align: center;
          font-weight: ${customValues.header_font_weight || '500'};
          color: ${customValues.header_color || '#2e2f3c'};
          margin-bottom: ${customValues.header_margin || '15px'};
          font-size: ${customValues.header_font_size || '16px'};
          width: 100%;
          display: inline-flex;
          justify-content: center;
        ">${customValues.header_text || 'NO MORE'}</span>
        
        <div style="
          display: flex;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
        ">
          <div style="
            display: flex;
            animation: scroll 15s linear infinite;
            color: ${customValues.text_color || '#2e2f3c'};
            font-size: ${customValues.text_font_size || '20px'};
            font-weight: ${customValues.text_font_weight || 'bold'};
            letter-spacing: ${customValues.letter_spacing || '-0.5px'};
          ">
            ${Array(2).fill(["LESS TANGLES", "LESS ACNES", "IRRITATED SKIN", "PSORIASIS", "HARD WATER"]).flat().map(text => `
              <span style="margin: 0 ${customValues.text_spacing || '25px'}">${text}</span>
              <span style="margin: 0 ${customValues.text_spacing || '25px'}">-</span>
            `).join('')}
          </div>
        </div>
      </div>

      <style>
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      </style>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default AnnouncementBarPreviewPanel;