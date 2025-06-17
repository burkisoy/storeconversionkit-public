import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const CustomerReviewsPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        background: ${customValues.background_color || '#f9f9f9'}; 
        padding: ${customValues.container_padding || '40px 20px'}; 
        font-family: ${customValues.font_family || '-apple-system, BlinkMacSystemFont, sans-serif'};
      ">
        <div style="text-align: center; margin-bottom: 20px;">
          <div style="
            display: inline-block; 
            padding: 4px 12px; 
            background: ${customValues.rating_badge_bg || '#ffe6ef'}; 
            color: ${customValues.rating_badge_text_color || '#000'}; 
            border-radius: 9999px; 
            font-size: 13px;
          ">
            ${customValues.rating_badge_icon || '★'} <strong>${customValues.rating_text || 'Rated 4.8/5'}</strong> ${customValues.rating_subtext || 'based on +137,135 reviews'}
          </div>
          <h2 style="
            font-size: ${customValues.heading_font_size || '28px'}; 
            font-weight: ${customValues.heading_font_weight || '700'}; 
            margin-top: 10px;
          ">
            <span style="color: ${customValues.heading_highlight_color || '#e91e63'};">${customValues.heading_highlight_text || 'Customer'}</span> ${customValues.heading_text || 'Reviews'}
          </h2>
        </div>

        <div style="
          display: flex; 
          gap: ${customValues.review_gap || '20px'}; 
          justify-content: flex-start; 
          flex-wrap: nowrap; 
          overflow-x: auto; 
          -webkit-overflow-scrolling: touch; 
          max-width: ${customValues.container_max_width || '1000px'}; 
          margin: 0 auto; 
          padding-bottom: 10px;
        ">
        
          <!-- Review 1 -->
          <div style="
            background: ${customValues.review_bg || '#fff'}; 
            border-radius: ${customValues.review_border_radius || '12px'}; 
            box-shadow: ${customValues.review_box_shadow || '0 0 0 1px #eee'}; 
            padding: ${customValues.review_padding || '16px'}; 
            min-width: ${customValues.review_min_width || '280px'}; 
            max-width: ${customValues.review_max_width || '320px'}; 
            flex-shrink: 0;
          ">
            <img src="${customValues.review_1_image || 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Screenshot_2025-05-07_at_15.58.00.png?v=1746622733'}" style="
              width: 100%; 
              border-radius: ${customValues.image_border_radius || '8px'};
            " alt="Review Photo">
            <div style="
              margin-top: 12px; 
              color: ${customValues.stars_color || '#e91e63'}; 
              font-size: ${customValues.stars_font_size || '14px'};
            ">★★★★★</div>
            <div style="margin-top: 6px; font-size: 13px;">
              <span style="
                background: ${customValues.reviewer_badge_bg || '#ffe6ef'}; 
                padding: 3px 8px; 
                border-radius: 9999px;
              ">${customValues.review_1_name || 'Ashley, 30'} ${customValues.verified_badge || '💎 Verified Buyer'}</span>
            </div>
            <p style="
              font-size: ${customValues.review_text_font_size || '14px'}; 
              color: ${customValues.review_text_color || '#333'}; 
              margin-top: 10px; 
              line-height: 1.5;
            ">
              ${customValues.review_1_text || 'I was skeptical at first, but this product completely transformed my routine with zero pain or irritation...'}
            </p>
            <div style="
              display: flex; 
              align-items: center; 
              background: ${customValues.product_box_bg || '#f8f8f8'}; 
              padding: 10px; 
              border-radius: 8px; 
              margin-top: 16px;
            ">
              <img src="${customValues.product_image || 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Screenshot_2025-05-07_at_15.57.34.png?v=1746622735'}" style="
                width: 60px; 
                height: 60px; 
                object-fit: contain; 
                margin-right: 10px; 
                border-radius: 8px;
              " alt="Product">
              <div>
                <div style="font-weight: 600; font-size: 14px;">${customValues.product_name || 'Super Product'}</div>
                <div style="font-size: 14px; color: ${customValues.price_color || '#e91e63'};">${customValues.product_price || '$39'} <span style="text-decoration: line-through; color: #999;">${customValues.product_original_price || '$49'}</span></div>
                <div style="font-size: 12px; color: #666;">${customValues.purchase_text || '📦 Purchased on March'}</div>
              </div>
            </div>
          </div>

          <!-- Review 2 -->
          <div style="
            background: ${customValues.review_bg || '#fff'}; 
            border-radius: ${customValues.review_border_radius || '12px'}; 
            box-shadow: ${customValues.review_box_shadow || '0 0 0 1px #eee'}; 
            padding: ${customValues.review_padding || '16px'}; 
            min-width: ${customValues.review_min_width || '280px'}; 
            max-width: ${customValues.review_max_width || '320px'}; 
            flex-shrink: 0;
          ">
            <img src="${customValues.review_2_image || 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Screenshot_2025-05-07_at_15.58.00.png?v=1746622733'}" style="
              width: 100%; 
              border-radius: ${customValues.image_border_radius || '8px'};
            " alt="Review Photo">
            <div style="
              margin-top: 12px; 
              color: ${customValues.stars_color || '#e91e63'}; 
              font-size: ${customValues.stars_font_size || '14px'};
            ">★★★★★</div>
            <div style="margin-top: 6px; font-size: 13px;">
              <span style="
                background: ${customValues.reviewer_badge_bg || '#ffe6ef'}; 
                padding: 3px 8px; 
                border-radius: 9999px;
              ">${customValues.review_2_name || 'Julia, 27'} ${customValues.verified_badge || '💎 Verified Buyer'}</span>
            </div>
            <p style="
              font-size: ${customValues.review_text_font_size || '14px'}; 
              color: ${customValues.review_text_color || '#333'}; 
              margin-top: 10px; 
              line-height: 1.5;
            ">
              ${customValues.review_2_text || 'Honestly better than I expected. I used to use razors but this leaves no bumps or redness. I have already told 3 of my friends to get one.'}
            </p>
            <div style="
              display: flex; 
              align-items: center; 
              background: ${customValues.product_box_bg || '#f8f8f8'}; 
              padding: 10px; 
              border-radius: 8px; 
              margin-top: 16px;
            ">
              <img src="${customValues.product_image || 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Screenshot_2025-05-07_at_15.57.34.png?v=1746622735'}" style="
                width: 60px; 
                height: 60px; 
                object-fit: contain; 
                margin-right: 10px; 
                border-radius: 8px;
              " alt="Product">
              <div>
                <div style="font-weight: 600; font-size: 14px;">${customValues.product_name || 'Super Product'}</div>
                <div style="font-size: 14px; color: ${customValues.price_color || '#e91e63'};">${customValues.product_price || '$39'} <span style="text-decoration: line-through; color: #999;">${customValues.product_original_price || '$49'}</span></div>
                <div style="font-size: 12px; color: #666;">${customValues.purchase_text || '📦 Purchased on March'}</div>
              </div>
            </div>
          </div>

          <!-- Review 3 -->
          <div style="
            background: ${customValues.review_bg || '#fff'}; 
            border-radius: ${customValues.review_border_radius || '12px'}; 
            box-shadow: ${customValues.review_box_shadow || '0 0 0 1px #eee'}; 
            padding: ${customValues.review_padding || '16px'}; 
            min-width: ${customValues.review_min_width || '280px'}; 
            max-width: ${customValues.review_max_width || '320px'}; 
            flex-shrink: 0;
          ">
            <img src="${customValues.review_3_image || 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Screenshot_2025-05-07_at_15.58.00.png?v=1746622733'}" style="
              width: 100%; 
              border-radius: ${customValues.image_border_radius || '8px'};
            " alt="Review Photo">
            <div style="
              margin-top: 12px; 
              color: ${customValues.stars_color || '#e91e63'}; 
              font-size: ${customValues.stars_font_size || '14px'};
            ">★★★★★</div>
            <div style="margin-top: 6px; font-size: 13px;">
              <span style="
                background: ${customValues.reviewer_badge_bg || '#ffe6ef'}; 
                padding: 3px 8px; 
                border-radius: 9999px;
              ">${customValues.review_3_name || 'Taylor, 33'} ${customValues.verified_badge || '💎 Verified Buyer'}</span>
            </div>
            <p style="
              font-size: ${customValues.review_text_font_size || '14px'}; 
              color: ${customValues.review_text_color || '#333'}; 
              margin-top: 10px; 
              line-height: 1.5;
            ">
              ${customValues.review_3_text || 'Surprised by how effective this little thing is. It is compact, clean, and works fast. Zero irritation, which is rare for my skin.'}
            </p>
            <div style="
              display: flex; 
              align-items: center; 
              background: ${customValues.product_box_bg || '#f8f8f8'}; 
              padding: 10px; 
              border-radius: 8px; 
              margin-top: 16px;
            ">
              <img src="${customValues.product_image || 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Screenshot_2025-05-07_at_15.57.34.png?v=1746622735'}" style="
                width: 60px; 
                height: 60px; 
                object-fit: contain; 
                margin-right: 10px; 
                border-radius: 8px;
              " alt="Product">
              <div>
                <div style="font-weight: 600; font-size: 14px;">${customValues.product_name || 'Super Product'}</div>
                <div style="font-size: 14px; color: ${customValues.price_color || '#e91e63'};">${customValues.product_price || '$39'} <span style="text-decoration: line-through; color: #999;">${customValues.product_original_price || '$49'}</span></div>
                <div style="font-size: 12px; color: #666;">${customValues.purchase_text || '📦 Purchased on March'}</div>
              </div>
            </div>
          </div>

        </div>

        <style>
          /* Hide scrollbar but keep functionality */
          div[style*="overflow-x: auto"] {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE and Edge */
          }
          div[style*="overflow-x: auto"]::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
        </style>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default CustomerReviewsPreviewPanel;