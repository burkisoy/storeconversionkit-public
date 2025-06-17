import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const PhotoCarouselReviewsPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="background: ${customValues.background_color || '#d4f1ff'}; padding: ${customValues.container_padding || '40px 20px'}; text-align: center; font-family: ${customValues.font_family || '-apple-system, BlinkMacSystemFont, sans-serif'};">

        <!-- Photo Carousel -->
        <div style="display: flex; gap: ${customValues.photo_gap || '16px'}; overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; padding-bottom: 20px; margin-bottom: 30px;">
          <img src="${customValues.photo_1 || 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'}" style="min-width: ${customValues.photo_width || '240px'}; height: ${customValues.photo_height || '320px'}; object-fit: cover; border-radius: ${customValues.photo_border_radius || '16px'}; scroll-snap-align: center;" alt="Review 1" />
          <img src="${customValues.photo_2 || 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'}" style="min-width: ${customValues.photo_width || '240px'}; height: ${customValues.photo_height || '320px'}; object-fit: cover; border-radius: ${customValues.photo_border_radius || '16px'}; scroll-snap-align: center;" alt="Review 2" />
          <img src="${customValues.photo_3 || 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'}" style="min-width: ${customValues.photo_width || '240px'}; height: ${customValues.photo_height || '320px'}; object-fit: cover; border-radius: ${customValues.photo_border_radius || '16px'}; scroll-snap-align: center;" alt="Review 3" />
        </div>

        <!-- Title -->
        <h2 style="font-size: ${customValues.title_font_size || '22px'}; font-weight: ${customValues.title_font_weight || '700'}; color: ${customValues.title_color || '#111'}; margin-bottom: 10px;">
          ${customValues.title_text || 'Look At How Others Are Loving Their Product!'}
        </h2>
        <p style="color: ${customValues.subtitle_color || '#444'}; font-size: ${customValues.subtitle_font_size || '15px'}; margin-bottom: 30px;">
          ${customValues.subtitle_text || 'Real Reviews From Real People'}
        </p>

        <!-- CTA Button -->
        <a href="${customValues.cta_link || '#'}" style="display: inline-block; background: ${customValues.cta_bg_color || '#3dbff3'}; color: ${customValues.cta_text_color || 'white'}; font-weight: ${customValues.cta_font_weight || '600'}; padding: ${customValues.cta_padding || '14px 28px'}; border-radius: ${customValues.cta_border_radius || '12px'}; font-size: ${customValues.cta_font_size || '15px'}; text-decoration: none; margin-bottom: 20px;">
          ${customValues.cta_text || 'CLAIM OFFER'}
        </a>

        <!-- Rating -->
        <div style="font-size: ${customValues.rating_font_size || '14px'}; color: ${customValues.rating_text_color || '#555'};">
          <span style="color: ${customValues.rating_star_color || '#3dbff3'};">★</span> ${customValues.rating_text || 'Rated 4.8/5 by 1,319+ Happy Customers'}
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

export default PhotoCarouselReviewsPreviewPanel;