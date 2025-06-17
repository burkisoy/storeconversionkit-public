import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const PremiumReviewBadgePreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px dashed ${customValues.border_color || '#ddd'}; border-radius: ${customValues.border_radius || '12px'}; background: ${customValues.background || 'linear-gradient(to bottom, #fff, #fafafa)'}; font-family: ${customValues.font_family || '-apple-system, BlinkMacSystemFont, sans-serif'}; display: flex; gap: 16px; align-items: flex-start;">
        <!-- Profile Photo -->
        <img src="${customValues.avatar || 'https://randomuser.me/api/portraits/women/44.jpg'}" alt="Avatar" style="width: ${customValues.avatar_size || '64px'}; height: ${customValues.avatar_size || '64px'}; border-radius: 50%; object-fit: cover;">

        <!-- Content -->
        <div>
          <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
            <strong style="font-size: ${customValues.name_font_size || '16px'}; color: ${customValues.name_color || '#000'};">${customValues.name || 'Lauren J.'}</strong>
            <svg xmlns="http://www.w3.org/2000/svg" style="width: ${customValues.verified_icon_size || '16px'}; height: ${customValues.verified_icon_size || '16px'};" viewBox="0 0 24 24" fill="${customValues.verified_icon_color || '#000'}">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 4.99 3.062 9.246 7.437 11.004L12 24l4.563-0.996C20.938 21.246 24 16.99 24 12c0-6.627-5.373-12-12-12zm-1 17l-4-4 1.41-1.42L11 14.17l6.59-6.59L19 9l-8 8z"/>
            </svg>
            <span style="color: ${customValues.stars_color || '#f43f5e'}; font-size: ${customValues.stars_font_size || '18px'};">★★★★★</span>
          </div>
          <p style="margin-top: ${customValues.review_margin_top || '8px'}; font-size: ${customValues.review_font_size || '15px'}; color: ${customValues.review_color || '#555'}; line-height: ${customValues.line_height || '1.5'};">
            ${customValues.review || 'This product exceeded my expectations.'}
          </p>
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default PremiumReviewBadgePreviewPanel;