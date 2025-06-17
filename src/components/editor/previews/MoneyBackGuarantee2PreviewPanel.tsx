import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const MoneyBackGuarantee2PreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="background: ${customValues.background || 'linear-gradient(to bottom, #e6f6fd, #ffffff)'}; padding: ${customValues.container_padding || '60px 20px'}; text-align: center; font-family: ${customValues.font_family || '-apple-system, BlinkMacSystemFont, sans-serif'};">
        <div style="display: flex; justify-content: center; gap: ${customValues.image_gap || '16px'}; margin-bottom: ${customValues.images_margin_bottom || '40px'}; flex-wrap: wrap;">
          <img src="${customValues.image_1 || 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'}" alt="photo" style="width: ${customValues.image_width || '100px'}; height: auto; border-radius: ${customValues.image_border_radius || '8px'}; transform: rotate(-8deg); box-shadow: ${customValues.image_shadow || '0 4px 10px rgba(0,0,0,0.2)'};">
          <img src="${customValues.image_2 || 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'}" alt="photo" style="width: ${customValues.image_width || '100px'}; height: auto; border-radius: ${customValues.image_border_radius || '8px'}; transform: scale(1.1); z-index: 2; box-shadow: ${customValues.image_shadow || '0 4px 10px rgba(0,0,0,0.2)'};">
          <img src="${customValues.image_3 || 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'}" alt="photo" style="width: ${customValues.image_width || '100px'}; height: auto; border-radius: ${customValues.image_border_radius || '8px'}; transform: rotate(8deg); box-shadow: ${customValues.image_shadow || '0 4px 10px rgba(0,0,0,0.2)'};">
        </div>

        <div style="font-size: ${customValues.title_font_size || '22px'}; font-weight: bold; color: ${customValues.title_color || '#1e3a8a'}; margin-bottom: ${customValues.title_margin_bottom || '12px'};">
          ${customValues.title_first_part || 'Money-Back'} <span style="color: ${customValues.title_highlight_color || '#60a5fa'};">${customValues.title_second_part || 'Guarantee'}</span>
        </div>

        <div style="color: ${customValues.description_color || '#1e3a8a'}; font-size: ${customValues.description_font_size || '15px'}; max-width: ${customValues.description_max_width || '600px'}; margin: 0 auto ${customValues.description_margin_bottom || '30px'} auto;">
          ${customValues.description_text || "We're so confident in the quality of our product that we offer a satisfaction guarantee. If you're not completely satisfied with your purchase, simply return the item within 30 days for a full refund."}
        </div>

        <div style="margin: ${customValues.button_margin || '30px auto 20px'};">
          <a href="${customValues.button_link || '#'}" style="display: inline-block; background: ${customValues.button_bg || '#3b82f6'}; color: ${customValues.button_text_color || 'white'}; padding: ${customValues.button_padding || '16px 40px'}; border-radius: ${customValues.button_border_radius || '12px'}; font-weight: ${customValues.button_font_weight || '700'}; font-size: ${customValues.button_font_size || '15px'}; letter-spacing: 1px; text-decoration: none;">
            ${customValues.button_text || 'ADD TO CART'}
          </a>
        </div>

        <div style="margin-top: ${customValues.features_margin_top || '24px'}; font-size: ${customValues.features_font_size || '14px'}; color: ${customValues.features_color || '#1e3a8a'}; display: flex; gap: ${customValues.features_gap || '16px'}; justify-content: center; flex-wrap: wrap; align-items: center;">
          <span style="display: flex; align-items: center; gap: 6px;"><svg width="16" height="16" fill="${customValues.check_icon_color || '#2563eb'}" viewBox="0 0 24 24"><path d="M20.292 5.708a1 1 0 0 1 0 1.414L9 18.414l-5.292-5.292a1 1 0 0 1 1.414-1.414L9 15.586l10.292-10.292a1 1 0 0 1 1.414 0z"/></svg>${customValues.feature_1_text || '100% Satisfaction'}</span>
          <span style="display: flex; align-items: center; gap: 6px;"><svg width="16" height="16" fill="${customValues.check_icon_color || '#2563eb'}" viewBox="0 0 24 24"><path d="M20.292 5.708a1 1 0 0 1 0 1.414L9 18.414l-5.292-5.292a1 1 0 0 1 1.414-1.414L9 15.586l10.292-10.292a1 1 0 0 1 1.414 0z"/></svg>${customValues.feature_2_text || 'Fast Shipping'}</span>
          <span style="display: flex; align-items: center; gap: 6px;"><svg width="16" height="16" fill="${customValues.check_icon_color || '#2563eb'}" viewBox="0 0 24 24"><path d="M20.292 5.708a1 1 0 0 1 0 1.414L9 18.414l-5.292-5.292a1 1 0 0 1 1.414-1.414L9 15.586l10.292-10.292a1 1 0 0 1 1.414 0z"/></svg>${customValues.feature_3_text || 'Easy Returns'}</span>
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default MoneyBackGuarantee2PreviewPanel;