import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const TrustpilotRatingBadgePreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        display: inline-flex;
        align-items: center;
        background-color: ${customValues.background_color || '#fff'};
        border-radius: ${customValues.border_radius || '9999px'};
        padding: ${customValues.padding || '4px 10px'};
        font-family: ${customValues.font_family || "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"};
        font-size: ${customValues.font_size || '12px'};
        color: ${customValues.text_color || '#1c1c1c'};
        font-weight: ${customValues.font_weight || '500'};
        box-shadow: ${customValues.box_shadow || '0 1px 3px rgba(0,0,0,0.08)'};
      ">
        <div style="
          display: flex;
          gap: ${customValues.stars_gap || '3px'};
          margin-right: ${customValues.stars_margin_right || '8px'};
        ">
          <!-- Five stars inside flatter green rectangles -->
          ${[...Array(5)].map(() => `
            <div style="
              background-color: ${customValues.star_bg_color || '#00B67A'};
              border-radius: ${customValues.star_border_radius || '3px'};
              padding: ${customValues.star_padding || '1px 2px'};
            ">
              <svg width="${customValues.star_size || '12'}" height="${customValues.star_size || '12'}" viewBox="0 0 24 24" fill="${customValues.star_color || '#FFFFFF'}" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l2.39 6.91H22l-5.43 3.94L18.74 22 12 17.56 5.26 22l1.43-9.15L2 8.91h7.61L12 2z"/>
              </svg>
            </div>
          `).join('')}
        </div>
        <div style="line-height: 1;">
          ${customValues.rating_text || 'Excellent'} <strong style="font-weight: ${customValues.rating_weight || '600'};">${customValues.rating_score || '4,6'}</strong> | <strong style="font-weight: ${customValues.rating_weight || '600'};">${customValues.review_count || '14,500+'}</strong> ${customValues.reviews_text || 'reviews'}
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default TrustpilotRatingBadgePreviewPanel;