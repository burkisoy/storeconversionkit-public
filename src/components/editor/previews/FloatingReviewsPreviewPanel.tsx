import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const FloatingReviewsPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="background: ${customValues.background_color || '#f8f8f8'}; padding: ${customValues.container_padding || '40px 20px'}; font-family: ${customValues.font_family || '-apple-system, BlinkMacSystemFont, sans-serif'};">
        <div style="display: flex; flex-wrap: wrap; gap: ${customValues.gap || '16px'}; justify-content: center;">
          <div style="display: contents;">
            <!-- Review 1 -->
            <div class="review-box" style="background: ${customValues.review_bg || 'white'}; border-radius: ${customValues.border_radius || '24px'}; padding: ${customValues.review_padding || '16px 20px'}; width: 100%; max-width: ${customValues.review_max_width || '300px'}; box-shadow: ${customValues.box_shadow || '0 4px 10px rgba(0,0,0,0.05)'}; display: flex; align-items: center; gap: ${customValues.avatar_gap || '12px'}; opacity: 0; animation: shakeIn 12s infinite ease-in-out; animation-delay: 0s;">
              <img src="${customValues.avatar_1 || 'https://randomuser.me/api/portraits/women/1.jpg'}" style="width: ${customValues.avatar_size || '40px'}; height: ${customValues.avatar_size || '40px'}; border-radius: 9999px; border: ${customValues.avatar_border || '2px solid #fbc02d'};">
              <span style="font-size: ${customValues.text_size || '14px'}; color: ${customValues.text_color || '#333'};">${customValues.text_1 || 'The perfect fall slippers!'}</span>
            </div>

            <!-- Review 2 -->
            <div class="review-box" style="background: ${customValues.review_bg || 'white'}; border-radius: ${customValues.border_radius || '24px'}; padding: ${customValues.review_padding || '16px 20px'}; width: 100%; max-width: ${customValues.review_max_width || '300px'}; box-shadow: ${customValues.box_shadow || '0 4px 10px rgba(0,0,0,0.05)'}; display: flex; align-items: center; gap: ${customValues.avatar_gap || '12px'}; opacity: 0; animation: shakeIn 12s infinite ease-in-out; animation-delay: 2.6s;">
              <img src="${customValues.avatar_2 || 'https://randomuser.me/api/portraits/women/2.jpg'}" style="width: ${customValues.avatar_size || '40px'}; height: ${customValues.avatar_size || '40px'}; border-radius: 9999px; border: ${customValues.avatar_border || '2px solid #fbc02d'};">
              <span style="font-size: ${customValues.text_size || '14px'}; color: ${customValues.text_color || '#333'};">${customValues.text_2 || 'My new favorite pair of shoes!'}</span>
            </div>

            <!-- Review 3 -->
            <div class="review-box" style="background: ${customValues.review_bg || 'white'}; border-radius: ${customValues.border_radius || '24px'}; padding: ${customValues.review_padding || '16px 20px'}; width: 100%; max-width: ${customValues.review_max_width || '300px'}; box-shadow: ${customValues.box_shadow || '0 4px 10px rgba(0,0,0,0.05)'}; display: flex; align-items: center; gap: ${customValues.avatar_gap || '12px'}; opacity: 0; animation: shakeIn 12s infinite ease-in-out; animation-delay: 1.4s;">
              <img src="${customValues.avatar_3 || 'https://randomuser.me/api/portraits/women/3.jpg'}" style="width: ${customValues.avatar_size || '40px'}; height: ${customValues.avatar_size || '40px'}; border-radius: 9999px; border: ${customValues.avatar_border || '2px solid #fbc02d'};">
              <span style="font-size: ${customValues.text_size || '14px'}; color: ${customValues.text_color || '#333'};">${customValues.text_3 || 'A MUST buy for fall!'}</span>
            </div>

            <!-- Review 4 -->
            <div class="review-box" style="background: ${customValues.review_bg || 'white'}; border-radius: ${customValues.border_radius || '24px'}; padding: ${customValues.review_padding || '16px 20px'}; width: 100%; max-width: ${customValues.review_max_width || '300px'}; box-shadow: ${customValues.box_shadow || '0 4px 10px rgba(0,0,0,0.05)'}; display: flex; align-items: center; gap: ${customValues.avatar_gap || '12px'}; opacity: 0; animation: shakeIn 12s infinite ease-in-out; animation-delay: 3.8s;">
              <img src="${customValues.avatar_4 || 'https://randomuser.me/api/portraits/men/4.jpg'}" style="width: ${customValues.avatar_size || '40px'}; height: ${customValues.avatar_size || '40px'}; border-radius: 9999px; border: ${customValues.avatar_border || '2px solid #fbc02d'};">
              <span style="font-size: ${customValues.text_size || '14px'}; color: ${customValues.text_color || '#333'};">${customValues.text_4 || '10/10 Worth every penny'}</span>
            </div>

            <!-- Review 5 -->
            <div class="review-box" style="background: ${customValues.review_bg || 'white'}; border-radius: ${customValues.border_radius || '24px'}; padding: ${customValues.review_padding || '16px 20px'}; width: 100%; max-width: ${customValues.review_max_width || '300px'}; box-shadow: ${customValues.box_shadow || '0 4px 10px rgba(0,0,0,0.05)'}; display: flex; align-items: center; gap: ${customValues.avatar_gap || '12px'}; opacity: 0; animation: shakeIn 12s infinite ease-in-out; animation-delay: 0.8s;">
              <img src="${customValues.avatar_5 || 'https://randomuser.me/api/portraits/women/5.jpg'}" style="width: ${customValues.avatar_size || '40px'}; height: ${customValues.avatar_size || '40px'}; border-radius: 9999px; border: ${customValues.avatar_border || '2px solid #fbc02d'};">
              <span style="font-size: ${customValues.text_size || '14px'}; color: ${customValues.text_color || '#333'};">${customValues.text_5 || 'I absolutely love them!'}</span>
            </div>

            <!-- Review 6 - Hidden on mobile -->
            <div class="review-box hide-on-mobile" style="background: ${customValues.review_bg || 'white'}; border-radius: ${customValues.border_radius || '24px'}; padding: ${customValues.review_padding || '16px 20px'}; width: 100%; max-width: ${customValues.review_max_width || '300px'}; box-shadow: ${customValues.box_shadow || '0 4px 10px rgba(0,0,0,0.05)'}; display: flex; align-items: center; gap: ${customValues.avatar_gap || '12px'}; opacity: 0; animation: shakeIn 12s infinite ease-in-out; animation-delay: 5s;">
              <img src="${customValues.avatar_6 || 'https://randomuser.me/api/portraits/women/6.jpg'}" style="width: ${customValues.avatar_size || '40px'}; height: ${customValues.avatar_size || '40px'}; border-radius: 9999px; border: ${customValues.avatar_border || '2px solid #fbc02d'};">
              <span style="font-size: ${customValues.text_size || '14px'}; color: ${customValues.text_color || '#333'};">${customValues.text_6 || 'Stylish and super comfy!'}</span>
            </div>

            <!-- Review 7 - Hidden on mobile -->
            <div class="review-box hide-on-mobile" style="background: ${customValues.review_bg || 'white'}; border-radius: ${customValues.border_radius || '24px'}; padding: ${customValues.review_padding || '16px 20px'}; width: 100%; max-width: ${customValues.review_max_width || '300px'}; box-shadow: ${customValues.box_shadow || '0 4px 10px rgba(0,0,0,0.05)'}; display: flex; align-items: center; gap: ${customValues.avatar_gap || '12px'}; opacity: 0; animation: shakeIn 12s infinite ease-in-out; animation-delay: 1.2s;">
              <img src="${customValues.avatar_7 || 'https://randomuser.me/api/portraits/men/7.jpg'}" style="width: ${customValues.avatar_size || '40px'}; height: ${customValues.avatar_size || '40px'}; border-radius: 9999px; border: ${customValues.avatar_border || '2px solid #fbc02d'};">
              <span style="font-size: ${customValues.text_size || '14px'}; color: ${customValues.text_color || '#333'};">${customValues.text_7 || 'OMG! Best autumn shoe!'}</span>
            </div>

            <!-- Review 8 - Hidden on mobile -->
            <div class="review-box hide-on-mobile" style="background: ${customValues.review_bg || 'white'}; border-radius: ${customValues.border_radius || '24px'}; padding: ${customValues.review_padding || '16px 20px'}; width: 100%; max-width: ${customValues.review_max_width || '300px'}; box-shadow: ${customValues.box_shadow || '0 4px 10px rgba(0,0,0,0.05)'}; display: flex; align-items: center; gap: ${customValues.avatar_gap || '12px'}; opacity: 0; animation: shakeIn 12s infinite ease-in-out; animation-delay: 4.6s;">
              <img src="${customValues.avatar_8 || 'https://randomuser.me/api/portraits/women/8.jpg'}" style="width: ${customValues.avatar_size || '40px'}; height: ${customValues.avatar_size || '40px'}; border-radius: 9999px; border: ${customValues.avatar_border || '2px solid #fbc02d'};">
              <span style="font-size: ${customValues.text_size || '14px'}; color: ${customValues.text_color || '#333'};">${customValues.text_8 || 'Perfect for comfort!'}</span>
            </div>
          </div>
        </div>

        <style>
          @keyframes shakeIn {
            0% { opacity: 0; transform: scale(0.9) rotate(0deg); }
            10% { opacity: 1; transform: scale(1.05) rotate(2deg); }
            15% { transform: scale(0.98) rotate(-2deg); }
            20% { transform: scale(1) rotate(0deg); }
            70% { opacity: 1; }
            100% { opacity: 0; transform: translateY(-10px); }
          }

          @media (min-width: 640px) {
            .review-box {
              width: calc(50% - 12px) !important;
            }
          }

          @media (min-width: 900px) {
            .review-box {
              width: calc(33.333% - 12px) !important;
            }
          }

          @media (max-width: 639px) {
            .hide-on-mobile {
              display: none !important;
            }
          }
        </style>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default FloatingReviewsPreviewPanel;