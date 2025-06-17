import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const GiftBoxPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        background-color: ${customValues.background_color || '#fcfcfc'};
        padding: ${customValues.container_padding || '20px 10px'};
        text-align: center;
      ">
        <div style="
          font-size: ${customValues.title_font_size || '14px'};
          font-weight: ${customValues.title_font_weight || '700'};
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: ${customValues.title_color || '#333'};
          margin-bottom: 20px;
        ">
          ${customValues.exclusive_sale_title || 'FREE GIFTS WITH YOUR FIRST ORDER'}
        </div>

        <div style="
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: ${customValues.gift_gap || '8px'};
        ">
          <!-- Gift 1 -->
          <div style="
            position: relative;
            background-color: ${customValues.gift_box_bg || '#fce1ec'};
            border: ${customValues.gift_box_border || '2px dashed #000'};
            border-radius: ${customValues.gift_box_radius || '6px'};
            width: 120px;
            padding: 6px;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;
          ">
            <div style="
              position: absolute;
              top: -10px;
              left: 50%;
              transform: translateX(-50%);
              background-color: ${customValues.badge_bg || '#ff5c8d'};
              color: ${customValues.badge_text_color || 'white'};
              font-size: 10px;
              font-weight: 700;
              padding: 3px 12px;
              border-radius: 4px;
              width: 80px;
              box-sizing: border-box;
              text-transform: uppercase;
            ">
              ${customValues.gift_1_badge_text || 'FREE'} <span style="text-decoration: line-through">${customValues.gift_1_price || '$10'}</span>
            </div>
            <img 
              src="${customValues.gift_1_image || 'https://cdn.shopify.com/s/files/1/0591/6521/2734/files/input_kopyasi_32.png?v=1742817671'}"
              alt="${customValues.gift_1_label || 'The Hand Book'}"
              style="width: 65px; height: 65px; object-fit: contain; margin: 14px 0 5px;"
            />
            <div style="
              font-size: ${customValues.label_font_size || '10px'};
              font-weight: ${customValues.label_font_weight || '700'};
              color: ${customValues.label_color || '#333'};
              text-transform: uppercase;
              margin-top: 4px;
            ">${customValues.gift_1_label || 'The Hand Book'}</div>
          </div>

          <!-- Gift 2 -->
          <div style="
            position: relative;
            background-color: ${customValues.gift_box_bg || '#fce1ec'};
            border: ${customValues.gift_box_border || '2px dashed #000'};
            border-radius: ${customValues.gift_box_radius || '6px'};
            width: 120px;
            padding: 6px;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;
          ">
            <div style="
              position: absolute;
              top: -10px;
              left: 50%;
              transform: translateX(-50%);
              background-color: ${customValues.badge_bg || '#ff5c8d'};
              color: ${customValues.badge_text_color || 'white'};
              font-size: 10px;
              font-weight: 700;
              padding: 3px 12px;
              border-radius: 4px;
              width: 80px;
              box-sizing: border-box;
              text-transform: uppercase;
            ">
              ${customValues.gift_2_badge_text || 'FREE'} <span style="text-decoration: line-through">${customValues.gift_2_price || '$6'}</span>
            </div>
            <img 
              src="${customValues.gift_2_image || 'https://cdn.shopify.com/s/files/1/0591/6521/2734/files/input_kopyasi_31.png?v=1742817524'}"
              alt="${customValues.gift_2_label || 'Free Shipping'}"
              style="width: 65px; height: 65px; object-fit: contain; margin: 14px 0 5px;"
            />
            <div style="
              font-size: ${customValues.label_font_size || '10px'};
              font-weight: ${customValues.label_font_weight || '700'};
              color: ${customValues.label_color || '#333'};
              text-transform: uppercase;
              margin-top: 4px;
            ">${customValues.gift_2_label || 'Free Shipping'}</div>
          </div>

          <!-- Gift 3 -->
          <div style="
            position: relative;
            background-color: ${customValues.gift_box_bg || '#fce1ec'};
            border: ${customValues.gift_box_border || '2px dashed #000'};
            border-radius: ${customValues.gift_box_radius || '6px'};
            width: 120px;
            padding: 6px;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;
          ">
            <div style="
              position: absolute;
              top: -10px;
              left: 50%;
              transform: translateX(-50%);
              background-color: ${customValues.badge_bg || '#ff5c8d'};
              color: ${customValues.badge_text_color || 'white'};
              font-size: 10px;
              font-weight: 700;
              padding: 3px 12px;
              border-radius: 4px;
              width: 80px;
              box-sizing: border-box;
              text-transform: uppercase;
            ">
              ${customValues.gift_3_badge_text || 'FREE'} <span style="text-decoration: line-through">${customValues.gift_3_price || '$19'}</span>
            </div>
            <img 
              src="${customValues.gift_3_image || 'https://cdn.shopify.com/s/files/1/0591/6521/2734/files/input_kopyasi_33.png?v=1742817767'}"
              alt="${customValues.gift_3_label || 'Lash Curler'}"
              style="width: 65px; height: 65px; object-fit: contain; margin: 14px 0 5px;"
            />
            <div style="
              font-size: ${customValues.label_font_size || '10px'};
              font-weight: ${customValues.label_font_weight || '700'};
              color: ${customValues.label_color || '#333'};
              text-transform: uppercase;
              margin-top: 4px;
            ">${customValues.gift_3_label || 'Lash Curler'}</div>
          </div>
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default GiftBoxPreviewPanel;