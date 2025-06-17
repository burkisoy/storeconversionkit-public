import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const SecureCheckoutPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        margin-top: ${customValues.margin_top || '0.25rem'};
        margin-bottom: ${customValues.margin_bottom || '1rem'};
        width: 100%;
      ">
        <div style="
          display: flex;
          align-items: center;
          justify-content: ${customValues.alignment || 'center'};
          width: 100%;
          gap: ${customValues.gap || '8px'};
          font-weight: ${customValues.font_weight || '500'};
          font-size: ${customValues.font_size || '14px'};
        ">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" style="
            color: ${customValues.icon_color || '#172554'};
            height: ${customValues.icon_size || '16px'};
            width: ${customValues.icon_size || '16px'};
          " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M376 192h-24v-46.7c0-52.7-42-96.5-94.7-97.3-53.4-.7-97.3 42.8-97.3 96v48h-24c-22 0-40 18-40 40v192c0 22 18 40 40 40h240c22 0 40-18 40-40V232c0-22-18-40-40-40zM270 316.8v68.8c0 7.5-5.8 14-13.3 14.4-8 .4-14.7-6-14.7-14v-69.2c-11.5-5.6-19.1-17.8-17.9-31.7 1.4-15.5 14.1-27.9 29.6-29 18.7-1.3 34.3 13.5 34.3 31.9 0 12.7-7.3 23.6-18 28.8zM324 192H188v-48c0-18.1 7.1-35.1 20-48s29.9-20 48-20 35.1 7.1 48 20 20 29.9 20 48v48z"></path>
          </svg>
          <div style="color: ${customValues.text_color || '#172554'}">
            ${customValues.text || 'Safe & Secure Checkout'}
          </div>
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default SecureCheckoutPreviewPanel;