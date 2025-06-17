import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const HowToUsePreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="background: ${customValues.background || 'linear-gradient(to bottom, #e6f6ff, #ffffff)'}; padding: ${customValues.container_padding || '60px 20px'};">
        <div style="max-width: ${customValues.max_width || '1200px'}; margin: 0 auto; text-align: center;">

          <!-- Heading -->
          <h2 style="font-size: ${customValues.heading_font_size || '32px'}; font-weight: ${customValues.heading_font_weight || '800'}; margin-bottom: 10px; color: ${customValues.heading_color || '#1a3d6d'};">${customValues.heading_text || 'How to Use'}</h2>
          <p style="font-size: ${customValues.subheading_font_size || '16px'}; color: ${customValues.subheading_color || '#4a4a4a'}; margin-bottom: 40px;">${customValues.subheading_text || 'Follow these 3 simple steps to get the best experience.'}</p>

          <!-- Scrollable Wrapper -->
          <div style="overflow-x: auto;">
            <div style="
              display: flex;
              gap: ${customValues.step_gap || '20px'};
              padding-bottom: 10px;
              scroll-snap-type: x mandatory;
              justify-content: center;
              min-width: max-content;
            ">

              <!-- Step 1 -->
              <div style="flex: 0 0 ${customValues.step_width || '280px'}; scroll-snap-align: start;">
                <div style="background: ${customValues.step_bg || '#fff'}; border: ${customValues.step_border || '1px dashed #94c3ff'}; border-radius: ${customValues.step_border_radius || '12px'}; overflow: hidden; position: relative;">
                  <div style="position: absolute; top: 12px; left: 12px; background-color: ${customValues.step_number_bg || '#3b82f6'}; color: ${customValues.step_number_color || 'white'}; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px;">1</div>
                  <img src="${customValues.step_1_image || 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'}" alt="${customValues.step_1_alt || 'Step 1'}" style="width: 100%; height: auto;">
                  <div style="padding: 20px; text-align: left;">
                    <h3 style="font-size: ${customValues.step_title_font_size || '18px'}; font-weight: ${customValues.step_title_font_weight || '700'}; color: ${customValues.step_title_color || '#1a3d6d'}; margin-bottom: 8px;">${customValues.step_1_title || 'Place the Pillow'}</h3>
                    <p style="font-size: ${customValues.step_text_font_size || '14px'}; color: ${customValues.step_text_color || '#4a4a4a'};">${customValues.step_1_text || 'Place the pillow on your bed. Its unique shape supports your neck and head naturally.'}</p>
                  </div>
                </div>
              </div>

              <!-- Step 2 -->
              <div style="flex: 0 0 ${customValues.step_width || '280px'}; scroll-snap-align: start;">
                <div style="background: ${customValues.step_bg || '#fff'}; border: ${customValues.step_border || '1px dashed #94c3ff'}; border-radius: ${customValues.step_border_radius || '12px'}; overflow: hidden; position: relative;">
                  <div style="position: absolute; top: 12px; left: 12px; background-color: ${customValues.step_number_bg || '#3b82f6'}; color: ${customValues.step_number_color || 'white'}; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px;">2</div>
                  <img src="${customValues.step_2_image || 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'}" alt="${customValues.step_2_alt || 'Step 2'}" style="width: 100%; height: auto;">
                  <div style="padding: 20px; text-align: left;">
                    <h3 style="font-size: ${customValues.step_title_font_size || '18px'}; font-weight: ${customValues.step_title_font_weight || '700'}; color: ${customValues.step_title_color || '#1a3d6d'}; margin-bottom: 8px;">${customValues.step_2_title || 'Feel the Memory Foam'}</h3>
                    <p style="font-size: ${customValues.step_text_font_size || '14px'}; color: ${customValues.step_text_color || '#4a4a4a'};">${customValues.step_2_text || 'Gently press down and feel the foam adjust to your hand—just like it will to your head.'}</p>
                  </div>
                </div>
              </div>

              <!-- Step 3 -->
              <div style="flex: 0 0 ${customValues.step_width || '280px'}; scroll-snap-align: start;">
                <div style="background: ${customValues.step_bg || '#fff'}; border: ${customValues.step_border || '1px dashed #94c3ff'}; border-radius: ${customValues.step_border_radius || '12px'}; overflow: hidden; position: relative;">
                  <div style="position: absolute; top: 12px; left: 12px; background-color: ${customValues.step_number_bg || '#3b82f6'}; color: ${customValues.step_number_color || 'white'}; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px;">3</div>
                  <img src="${customValues.step_3_image || 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'}" alt="${customValues.step_3_alt || 'Step 3'}" style="width: 100%; height: auto;">
                  <div style="padding: 20px; text-align: left;">
                    <h3 style="font-size: ${customValues.step_title_font_size || '18px'}; font-weight: ${customValues.step_title_font_weight || '700'}; color: ${customValues.step_title_color || '#1a3d6d'}; margin-bottom: 8px;">${customValues.step_3_title || 'Enjoy Better Sleep'}</h3>
                    <p style="font-size: ${customValues.step_text_font_size || '14px'}; color: ${customValues.step_text_color || '#4a4a4a'};">${customValues.step_3_text || 'Lay your head down and relax. Wake up refreshed, aligned, and pain-free.'}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default HowToUsePreviewPanel;