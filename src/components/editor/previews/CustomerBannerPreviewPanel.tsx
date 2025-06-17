import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const CustomerBannerPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        display: flex;
        align-items: center;
        padding: ${customValues.padding || '6px 16px'};
        border-radius: ${customValues.border_radius || '6px'};
        background: ${customValues.background_gradient || 'linear-gradient(45deg, #1cbcc3, #4abf8f 80%)'};
        color: ${customValues.text_color || '#ffffff'};
        font-family: Arial, sans-serif;
        font-size: 12px;
        box-shadow: ${customValues.shadow || '0 4px 6px rgba(0, 0, 0, 0.1)'};
      ">
        <div style="
          display: flex;
          gap: 0;
          margin-right: 10px;
          margin-left: 10px;
        ">
          <img 
            src="https://img.freepik.com/free-photo/stylish-african-american-woman-smiling_23-2148770405.jpg"
            style="
              width: ${customValues.avatar_size || '22px'};
              height: ${customValues.avatar_size || '22px'};
              border-radius: 50%;
              border: ${customValues.avatar_border || '2px solid #ffffff'};
              margin-left: -7px;
              object-fit: cover;
            "
          />
          <img 
            src="https://thumbs.dreamstime.com/b/beautiful-african-american-woman-relaxing-outside-happy-middle-aged-smiling-46298787.jpg"
            style="
              width: ${customValues.avatar_size || '22px'};
              height: ${customValues.avatar_size || '22px'};
              border-radius: 50%;
              border: ${customValues.avatar_border || '2px solid #ffffff'};
              margin-left: -7px;
              object-fit: cover;
            "
          />
          <img 
            src="https://img.freepik.com/free-photo/stylish-african-american-woman-smiling_23-2148770405.jpg"
            style="
              width: ${customValues.avatar_size || '22px'};
              height: ${customValues.avatar_size || '22px'};
              border-radius: 50%;
              border: ${customValues.avatar_border || '2px solid #ffffff'};
              margin-left: -7px;
              object-fit: cover;
            "
          />
        </div>
        <span style="
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
        ">${customValues.customer_count || '1,000,000+ Happy Customers'}</span>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default CustomerBannerPreviewPanel;