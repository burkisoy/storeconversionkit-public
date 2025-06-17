import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const CircleSliderPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div class="circle-slider-wrapper" style="overflow-x: auto; padding: 20px 10px;">
        <div class="circle-slider" style="overflow-x: auto; -webkit-overflow-scrolling: touch;">
          <div class="circle-track" style="display: flex; flex-wrap: nowrap; gap: 16px; min-width: max-content;">
            
            <div class="circle-slide" style="flex: 0 0 auto; width: 66px; text-align: center;">
              <a href="${customValues.item1_link || '#'}" class="circle-icon" style="width: 66px; height: 66px; border-radius: 50%; overflow: hidden; background-image: linear-gradient(133deg, #fadc36 11%, #fe6292 49%, #fadc36 87%); padding: 2px; display: block;">
                <img src="${customValues.item1_image || 'https://section.store/cdn/shop/products/mug.jpg?v=1663855357'}" alt="${customValues.item1_title || 'Mugs'}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover; border: 4px solid white; display: block;">
              </a>
              <p style="margin-top: 6px; font-size: 10px; color: #121212;">${customValues.item1_title || 'Mugs'}</p>
            </div>

            <div class="circle-slide" style="flex: 0 0 auto; width: 66px; text-align: center;">
              <a href="${customValues.item2_link || '#'}" class="circle-icon" style="width: 66px; height: 66px; border-radius: 50%; overflow: hidden; background-image: linear-gradient(133deg, #fadc36 11%, #fe6292 49%, #fadc36 87%); padding: 2px; display: block;">
                <img src="${customValues.item2_image || 'https://section.store/cdn/shop/files/5-panel-hat_4ee20a27-8d5a-490e-a2fc-1f9c3beb7bf5.webp?v=1663859540'}" alt="${customValues.item2_title || 'Hats'}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover; border: 4px solid white; display: block;">
              </a>
              <p style="margin-top: 6px; font-size: 10px; color: #121212;">${customValues.item2_title || 'Hats'}</p>
            </div>

            <div class="circle-slide" style="flex: 0 0 auto; width: 66px; text-align: center;">
              <a href="${customValues.item3_link || '#'}" class="circle-icon" style="width: 66px; height: 66px; border-radius: 50%; overflow: hidden; background-image: linear-gradient(133deg, #fadc36 11%, #fe6292 49%, #fadc36 87%); padding: 2px; display: block;">
                <img src="${customValues.item3_image || 'https://section.store/cdn/shop/files/campstool-1.webp?v=1663859592'}" alt="${customValues.item3_title || 'Stools'}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover; border: 4px solid white; display: block;">
              </a>
              <p style="margin-top: 6px; font-size: 10px; color: #121212;">${customValues.item3_title || 'Stools'}</p>
            </div>

            <div class="circle-slide" style="flex: 0 0 auto; width: 66px; text-align: center;">
              <a href="${customValues.item4_link || '#'}" class="circle-icon" style="width: 66px; height: 66px; border-radius: 50%; overflow: hidden; background-image: linear-gradient(133deg, #fadc36 11%, #fe6292 49%, #fadc36 87%); padding: 2px; display: block;">
                <img src="${customValues.item4_image || 'https://section.store/cdn/shop/files/Lunchbag_Khaki_Front_8ae0e1f4-407d-4ac0-89e6-961b306ef351.jpg?v=1663859624'}" alt="${customValues.item4_title || 'Bags'}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover; border: 4px solid white; display: block;">
              </a>
              <p style="margin-top: 6px; font-size: 10px; color: #121212;">${customValues.item4_title || 'Bags'}</p>
            </div>

            <div class="circle-slide" style="flex: 0 0 auto; width: 66px; text-align: center;">
              <a href="${customValues.item5_link || '#'}" class="circle-icon" style="width: 66px; height: 66px; border-radius: 50%; overflow: hidden; background-image: linear-gradient(133deg, #fadc36 11%, #fe6292 49%, #fadc36 87%); padding: 2px; display: block;">
                <img src="${customValues.item5_image || 'https://section.store/cdn/shop/files/woolfill-jacket_6c39ae23-c0c8-4821-85f4-4b5d64333c62.webp?v=1663859701'}" alt="${customValues.item5_title || 'Jackets'}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover; border: 4px solid white; display: block;">
              </a>
              <p style="margin-top: 6px; font-size: 10px; color: #121212;">${customValues.item5_title || 'Jackets'}</p>
            </div>

            <div class="circle-slide" style="flex: 0 0 auto; width: 66px; text-align: center;">
              <a href="${customValues.item6_link || '#'}" class="circle-icon" style="width: 66px; height: 66px; border-radius: 50%; overflow: hidden; background-image: linear-gradient(133deg, #fadc36 11%, #fe6292 49%, #fadc36 87%); padding: 2px; display: block;">
                <img src="${customValues.item6_image || 'https://section.store/cdn/shop/products/1_637c75a8-33f9-4c38-aebf-5a3dc31162dc.png?v=1706026914'}" alt="${customValues.item6_title || 'Throws'}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover; border: 4px solid white; display: block;">
              </a>
              <p style="margin-top: 6px; font-size: 10px; color: #121212;">${customValues.item6_title || 'Throws'}</p>
            </div>

            <div class="circle-slide" style="flex: 0 0 auto; width: 66px; text-align: center;">
              <a href="${customValues.item7_link || '#'}" class="circle-icon" style="width: 66px; height: 66px; border-radius: 50%; overflow: hidden; background-image: linear-gradient(133deg, #fadc36 11%, #fe6292 49%, #fadc36 87%); padding: 2px; display: block;">
                <img src="${customValues.item7_image || 'https://section.store/cdn/shop/products/2_c196c504-dfa8-41e9-b151-1094c4962009.png?v=1706026914'}" alt="${customValues.item7_title || 'Rugs'}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover; border: 4px solid white; display: block;">
              </a>
              <p style="margin-top: 6px; font-size: 10px; color: #121212;">${customValues.item7_title || 'Rugs'}</p>
            </div>

          </div>
        </div>
      </div>

      <style>
        @media screen and (min-width: 768px) {
          .circle-slide {
            width: 80px !important;
          }
          .circle-icon {
            width: 80px !important;
            height: 80px !important;
          }
          .circle-label {
            font-size: 12px !important;
          }
        }
      </style>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default CircleSliderPreviewPanel;