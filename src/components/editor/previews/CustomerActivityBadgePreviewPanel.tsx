import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const CustomerActivityBadgePreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        background-color: ${customValues.background_color || '#fdf3e8'};
        border-radius: ${customValues.border_radius || '20px'};
        display: flex;
        align-items: center;
        padding: ${customValues.padding || '8px 15px'};
        max-width: ${customValues.max_width || '400px'};
        box-shadow: ${customValues.box_shadow || '0 2px 6px rgba(0,0,0,0.1)'};
        font-family: ${customValues.font_family || 'Arial, sans-serif'};
      ">
        <!-- Profile Images -->
        <div style="display: flex; margin-right: ${customValues.images_margin_right || '15px'};">
          <img src="${customValues.profile_image_1 || 'https://randomuser.me/api/portraits/women/1.jpg'}" style="
            width: ${customValues.profile_image_size || '35px'};
            height: ${customValues.profile_image_size || '35px'};
            border-radius: 50%;
            border: ${customValues.profile_image_border || '2px solid white'};
            margin-left: 0;
            z-index: 5;
            position: relative;
          " />
          <img src="${customValues.profile_image_2 || 'https://randomuser.me/api/portraits/women/2.jpg'}" style="
            width: ${customValues.profile_image_size || '35px'};
            height: ${customValues.profile_image_size || '35px'};
            border-radius: 50%;
            border: ${customValues.profile_image_border || '2px solid white'};
            margin-left: ${customValues.profile_image_offset || '-8px'};
            z-index: 4;
            position: relative;
          " />
          <img src="${customValues.profile_image_3 || 'https://randomuser.me/api/portraits/men/3.jpg'}" style="
            width: ${customValues.profile_image_size || '35px'};
            height: ${customValues.profile_image_size || '35px'};
            border-radius: 50%;
            border: ${customValues.profile_image_border || '2px solid white'};
            margin-left: ${customValues.profile_image_offset || '-8px'};
            z-index: 3;
            position: relative;
          " />
          <img src="${customValues.profile_image_4 || 'https://randomuser.me/api/portraits/men/4.jpg'}" style="
            width: ${customValues.profile_image_size || '35px'};
            height: ${customValues.profile_image_size || '35px'};
            border-radius: 50%;
            border: ${customValues.profile_image_border || '2px solid white'};
            margin-left: ${customValues.profile_image_offset || '-8px'};
            z-index: 2;
            position: relative;
          " />
          <img src="${customValues.profile_image_5 || 'https://randomuser.me/api/portraits/women/5.jpg'}" style="
            width: ${customValues.profile_image_size || '35px'};
            height: ${customValues.profile_image_size || '35px'};
            border-radius: 50%;
            border: ${customValues.profile_image_border || '2px solid white'};
            margin-left: ${customValues.profile_image_offset || '-8px'};
            z-index: 1;
            position: relative;
          " />
        </div>

        <!-- Text Content -->
        <div>
          <div style="
            font-weight: bold;
            font-size: ${customValues.title_font_size || '14px'};
            color: ${customValues.title_color || '#000'};
          ">${customValues.title_text || 'Limited Stock!'}</div>
          <div style="
            font-size: ${customValues.subtitle_font_size || '12px'};
            color: ${customValues.subtitle_color || '#333'};
          ">${customValues.subtitle_text || 'Bought 160 Times Today'}</div>
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default CustomerActivityBadgePreviewPanel;