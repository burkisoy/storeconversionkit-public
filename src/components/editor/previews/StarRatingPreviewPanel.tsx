import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const StarRatingPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        margin-top: ${customValues.margin_top || '8px'};
        margin-bottom: ${customValues.margin_bottom || '8px'};
        width: 100%
      ">
        <div style="
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: ${customValues.alignment || 'start'};
          text-align: left;
          gap: ${customValues.gap || '8px'}
        ">
          <div style="display: flex; align-items: center;">
            ${Array(5).fill(0).map(() => `
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" style="
                fill: ${customValues.star_color || '#000000'};
                height: ${customValues.star_size || '16px'};
                width: ${customValues.star_size || '16px'}
              " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
              </svg>
            `).join('')}
          </div>
          <span style="
            font-size: ${customValues.font_size || '14px'};
            font-weight: ${customValues.font_weight || '400'};
            color: ${customValues.text_color || '#000000'}
          ">${customValues.text || '4.9/5 (1k+ Reviews)'}</span>
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default StarRatingPreviewPanel;