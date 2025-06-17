import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const StarRatingBadgePreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    // Parse rating value
    const rating = parseFloat(customValues.rating || '4.7');
    const fullStars = Math.floor(rating);

    // Generate stars HTML
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        starsHTML += `
          <svg width="${customValues.star_size || '16px'}" height="${customValues.star_size || '16px'}" fill="${customValues.star_color || '#f43f5e'}" viewBox="0 0 24 24">
            <path d="M12 2l2.9 6.6L22 9.2l-5 4.9 1.2 7L12 17.8 5.8 21l1.2-7-5-4.9 7.1-0.6z"/>
          </svg>
        `;
      } else {
        starsHTML += `
          <svg width="${customValues.star_size || '16px'}" height="${customValues.star_size || '16px'}" fill="${customValues.empty_star_color || '#e5e7eb'}" viewBox="0 0 24 24">
            <path d="M12 2l2.9 6.6L22 9.2l-5 4.9 1.2 7L12 17.8 5.8 21l1.2-7-5-4.9 7.1-0.6z"/>
          </svg>
        `;
      }
    }

    const html = `
      <div style="
        margin-top: ${customValues.margin_top || '8px'};
        margin-bottom: ${customValues.margin_bottom || '8px'};
        width: 100%;
      ">
        <div style="
          display: flex;
          align-items: center;
          justify-content: ${customValues.alignment || 'start'};
          gap: ${customValues.gap || '8px'};
        ">
          <div style="display: flex; gap: 2px;">
            ${starsHTML}
          </div>

          <div style="font-size: ${customValues.font_size || '14px'}; color: ${customValues.text_color || '#000000'};">
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
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default StarRatingBadgePreviewPanel;