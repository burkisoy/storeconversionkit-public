import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const TestimonialCarouselPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        display: flex;
        overflow-x: auto;
        gap: ${customValues.gap || '12px'};
        padding: ${customValues.padding || '8px 0'};
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
      ">
        <div style="
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          background-color: ${customValues.card_bg || '#fff7e6'};
          padding: ${customValues.card_padding || '12px 16px'};
          border-radius: ${customValues.border_radius || '12px'};
          box-shadow: ${customValues.box_shadow || '0 4px 8px rgba(0, 0, 0, 0.1)'};
          min-width: ${customValues.card_min_width || '250px'};
          scroll-snap-align: start;
          font-family: sans-serif;
        ">
          <div style="flex-shrink: 0;">
            <img 
              src="${customValues.profile_1_image || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80'}" 
              alt="${customValues.profile_1_name || 'Jenna R.'}"
              style="
                width: ${customValues.profile_image_size || '50px'};
                height: ${customValues.profile_image_size || '50px'};
                border-radius: 50%;
                border: ${customValues.profile_image_border || '2px solid #f5c66e'};
                object-fit: cover;
              "
            />
          </div>
          <div style="margin-left: ${customValues.content_margin || '12px'};">
            <div style="
              display: flex;
              align-items: center;
              margin-bottom: ${customValues.name_stars_margin || '4px'};
            ">
              <span style="
                font-weight: ${customValues.name_font_weight || '600'};
                font-size: ${customValues.name_font_size || '14px'};
                margin-right: ${customValues.name_margin_right || '8px'};
                color: ${customValues.name_color || '#333333'};
              ">${customValues.profile_1_name || 'Jenna R.'}</span>
              <span style="
                background: ${customValues.stars_bg || '#fca311'};
                color: ${customValues.stars_color || '#ffffff'};
                padding: ${customValues.stars_padding || '1px 6px'};
                border-radius: ${customValues.stars_border_radius || '6px'};
                font-size: ${customValues.stars_font_size || '12px'};
              ">★★★★★</span>
            </div>
            <p style="
              font-size: ${customValues.text_font_size || '13px'};
              color: ${customValues.text_color || '#333333'};
              line-height: ${customValues.text_line_height || '1.3'};
              margin: 0;
            ">${customValues.profile_1_text || 'I really love this, arrived in 2 days exactly what I needed!'}</p>
          </div>
        </div>

        <div style="
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          background-color: ${customValues.card_bg || '#fff7e6'};
          padding: ${customValues.card_padding || '12px 16px'};
          border-radius: ${customValues.border_radius || '12px'};
          box-shadow: ${customValues.box_shadow || '0 4px 8px rgba(0, 0, 0, 0.1)'};
          min-width: ${customValues.card_min_width || '250px'};
          scroll-snap-align: start;
          font-family: sans-serif;
        ">
          <div style="flex-shrink: 0;">
            <img 
              src="${customValues.profile_2_image || 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80'}" 
              alt="${customValues.profile_2_name || 'Samantha L.'}"
              style="
                width: ${customValues.profile_image_size || '50px'};
                height: ${customValues.profile_image_size || '50px'};
                border-radius: 50%;
                border: ${customValues.profile_image_border || '2px solid #f5c66e'};
                object-fit: cover;
              "
            />
          </div>
          <div style="margin-left: ${customValues.content_margin || '12px'};">
            <div style="
              display: flex;
              align-items: center;
              margin-bottom: ${customValues.name_stars_margin || '4px'};
            ">
              <span style="
                font-weight: ${customValues.name_font_weight || '600'};
                font-size: ${customValues.name_font_size || '14px'};
                margin-right: ${customValues.name_margin_right || '8px'};
                color: ${customValues.name_color || '#333333'};
              ">${customValues.profile_2_name || 'Samantha L.'}</span>
              <span style="
                background: ${customValues.stars_bg || '#fca311'};
                color: ${customValues.stars_color || '#ffffff'};
                padding: ${customValues.stars_padding || '1px 6px'};
                border-radius: ${customValues.stars_border_radius || '6px'};
                font-size: ${customValues.stars_font_size || '12px'};
              ">★★★★★</span>
            </div>
            <p style="
              font-size: ${customValues.text_font_size || '13px'};
              color: ${customValues.text_color || '#333333'};
              line-height: ${customValues.text_line_height || '1.3'};
              margin: 0;
            ">${customValues.profile_2_text || 'Amazing quality! Looks exactly like the photos!'}</p>
          </div>
        </div>

        <div style="
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          background-color: ${customValues.card_bg || '#fff7e6'};
          padding: ${customValues.card_padding || '12px 16px'};
          border-radius: ${customValues.border_radius || '12px'};
          box-shadow: ${customValues.box_shadow || '0 4px 8px rgba(0, 0, 0, 0.1)'};
          min-width: ${customValues.card_min_width || '250px'};
          scroll-snap-align: start;
          font-family: sans-serif;
        ">
          <div style="flex-shrink: 0;">
            <img 
              src="${customValues.profile_3_image || 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80'}" 
              alt="${customValues.profile_3_name || 'Emily G.'}"
              style="
                width: ${customValues.profile_image_size || '50px'};
                height: ${customValues.profile_image_size || '50px'};
                border-radius: 50%;
                border: ${customValues.profile_image_border || '2px solid #f5c66e'};
                object-fit: cover;
              "
            />
          </div>
          <div style="margin-left: ${customValues.content_margin || '12px'};">
            <div style="
              display: flex;
              align-items: center;
              margin-bottom: ${customValues.name_stars_margin || '4px'};
            ">
              <span style="
                font-weight: ${customValues.name_font_weight || '600'};
                font-size: ${customValues.name_font_size || '14px'};
                margin-right: ${customValues.name_margin_right || '8px'};
                color: ${customValues.name_color || '#333333'};
              ">${customValues.profile_3_name || 'Emily G.'}</span>
              <span style="
                background: ${customValues.stars_bg || '#fca311'};
                color: ${customValues.stars_color || '#ffffff'};
                padding: ${customValues.stars_padding || '1px 6px'};
                border-radius: ${customValues.stars_border_radius || '6px'};
                font-size: ${customValues.stars_font_size || '12px'};
              ">★★★★★</span>
            </div>
            <p style="
              font-size: ${customValues.text_font_size || '13px'};
              color: ${customValues.text_color || '#333333'};
              line-height: ${customValues.text_line_height || '1.3'};
              margin: 0;
            ">${customValues.profile_3_text || 'Fast shipping and super cute. Will buy again!'}</p>
          </div>
        </div>
      </div>

      <style>
        ::-webkit-scrollbar {
          display: none;
        }
        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      </style>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default TestimonialCarouselPreviewPanel;