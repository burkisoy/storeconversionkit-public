import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const OfferBoxPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="text-align: center; padding: 20px; font-family: Arial, sans-serif;">
        <div style="
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 20px;
          color: ${customValues.title_color || '#333333'};
          text-transform: uppercase;
        ">${customValues.routine_section_title || 'Special Offer Today'}</div>

        <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
          <div style="
            background-color: ${customValues.highlight_box_bg || '#f9e4b7'};
            border: 1px solid ${customValues.highlight_box_border || '#000000'};
            border-radius: 10px;
            width: 220px;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            position: relative;
            height: 300px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-top: 30px;
          ">
            <div style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              background-color: ${customValues.badge_bg || '#000000'};
              color: ${customValues.badge_text_color || '#ffffff'};
              font-size: 12px;
              font-weight: 600;
              padding: 5px 0;
              border-radius: 5px 5px 0 0;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              box-sizing: border-box;
            ">${customValues.highlight_badge_text || 'Stay Smoother Longer'}</div>

            <img 
              src="${customValues.product_1_image || 'https://cdn.shopify.com/s/files/1/0591/6521/2734/files/Nood_Flasher_Pro-Nood_Serumx2_Trans.png?v=1743681267'}"
              alt="${customValues.product_1_title || 'Flasher Pro + 2 Nood Serums'}"
              style="width: 100%; height: 150px; margin: 20px 0 10px 0; object-fit: contain;"
            />

            <div style="margin-bottom: 15px;">
              <h3 style="
                font-size: 14px;
                font-weight: 600;
                margin: 0 0 5px 0;
                color: ${customValues.product_title_color || '#333333'};
                line-height: 1.4;
              ">${customValues.product_1_title || 'Flasher Pro + 2 Nood Serums'}</h3>
              <p style="font-size: 16px; font-weight: 700; color: ${customValues.product_price_color || '#333333'};">
                ${customValues.product_1_price || '$399'}
                <span style="text-decoration: line-through; color: ${customValues.original_price_color || '#999999'}; margin-left: 5px;">
                  ${customValues.product_1_original_price || '$477'}
                </span>
              </p>
            </div>
          </div>

          <div style="
            background-color: ${customValues.product_box_bg || '#ffffff'};
            border: 1px solid ${customValues.product_box_border || '#e0e0e0'};
            border-radius: 10px;
            width: 220px;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            position: relative;
            height: 300px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          ">
            <img 
              src="${customValues.product_2_image || 'https://cdn.shopify.com/s/files/1/0591/6521/2734/files/20250130-NS-Nood-3qtr-transparent-59.png?v=1743681267'}"
              alt="${customValues.product_2_title || 'Flasher Pro'}"
              style="width: 100%; height: 150px; margin: 20px 0 10px 0; object-fit: contain;"
            />

            <div style="margin-bottom: 15px;">
              <h3 style="
                font-size: 14px;
                font-weight: 600;
                margin: 0 0 5px 0;
                color: ${customValues.product_title_color || '#333333'};
                line-height: 1.4;
              ">${customValues.product_2_title || 'Flasher Pro'}</h3>
              <p style="font-size: 16px; font-weight: 700; color: ${customValues.product_price_color || '#333333'};">
                ${customValues.product_2_price || '$399'}
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default OfferBoxPreviewPanel;