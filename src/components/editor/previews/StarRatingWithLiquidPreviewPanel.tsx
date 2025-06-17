import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const StarRatingWithLiquidPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    // Parse the rating value
    const rating = parseFloat(customValues.rating || '4.7');
    const fullStars = Math.floor(rating);
    const partial = rating - fullStars;
    const hasHalfStar = partial >= 0.25 && partial < 0.75;
    const nextStarIndex = fullStars + 1;

    const html = `
      <div style="
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: ${customValues.alignment || 'start'};
        text-align: left;
        gap: ${customValues.gap || '8px'}
      ">
        <div style="display: flex; gap: 2px;">
          ${Array(5).fill(0).map((_, i) => {
            if (i < fullStars) {
              return `
                <div>
                  <svg width="${customValues.star_size || '16px'}" height="${customValues.star_size || '16px'}" fill="${customValues.star_color || '#f43f5e'}" viewBox="0 0 24 24">
                    <path d="M12 2l2.9 6.6L22 9.2l-5 4.9 1.2 7L12 17.8 5.8 21l1.2-7-5-4.9 7.1-0.6z"/>
                  </svg>
                </div>
              `;
            } else if (hasHalfStar && i === fullStars) {
              return `
                <div>
                  <svg width="${customValues.star_size || '16px'}" height="${customValues.star_size || '16px'}" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="half-grad">
                        <stop offset="50%" stop-color="${customValues.star_color || '#f43f5e'}"/>
                        <stop offset="50%" stop-color="${customValues.empty_star_color || '#e5e7eb'}"/>
                      </linearGradient>
                    </defs>
                    <path fill="url(#half-grad)" d="M12 2l2.9 6.6L22 9.2l-5 4.9 1.2 7L12 17.8 5.8 21l1.2-7-5-4.9 7.1-0.6z"/>
                  </svg>
                </div>
              `;
            } else {
              return `
                <div>
                  <svg width="${customValues.star_size || '16px'}" height="${customValues.star_size || '16px'}" fill="${customValues.empty_star_color || '#e5e7eb'}" viewBox="0 0 24 24">
                    <path d="M12 2l2.9 6.6L22 9.2l-5 4.9 1.2 7L12 17.8 5.8 21l1.2-7-5-4.9 7.1-0.6z"/>
                  </svg>
                </div>
              `;
            }
          }).join('')}
        </div>

        <div style="
          font-size: ${customValues.font_size || '14px'};
          font-weight: ${customValues.font_weight || '400'};
          color: ${customValues.text_color || '#000000'}
        ">
          <strong>Rated ${rating}</strong>
          <span style="color: ${customValues.review_count_color || 'gray'};">(${customValues.review_count || '137'})</span>
        </div>

        <div style="
          background: ${customValues.badge_bg || '#ffe4e6'};
          color: ${customValues.badge_text_color || '#f43f5e'};
          padding: ${customValues.badge_padding || '2px 6px'};
          border-radius: ${customValues.badge_border_radius || '4px'};
          font-size: ${customValues.badge_font_size || '13px'};
        ">
          ${customValues.badge_text || 'Happy Customers'}
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default StarRatingWithLiquidPreviewPanel;