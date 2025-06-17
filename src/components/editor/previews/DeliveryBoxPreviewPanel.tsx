import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const DeliveryBoxPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        border: 2px solid ${customValues.border_color || '#d4d4d4'};
        border-radius: ${customValues.border_radius || '8px'};
        padding: ${customValues.padding || '12px 15px'};
        font-family: Arial, sans-serif;
        background-color: ${customValues.background_color || '#ffffff'};
      ">
        <div style="
          display: flex;
          flex-direction: column;
          gap: 5px;
          justify-content: center;
        ">
          <div style="
            font-size: ${customValues.title_font_size || '14px'};
            font-weight: ${customValues.title_font_weight || 'bold'};
            margin: 0;
            color: ${customValues.title_font_color || '#474747'};
            line-height: 15px;
          ">
            ${customValues.delivery_title || 'Free Delivery and Returns'}
          </div>

          <div style="
            font-size: ${customValues.subtext_font_size || '13px'};
            color: ${customValues.subtext_font_color || '#474747'};
            line-height: 20px;
          ">
            ${customValues.delivery_subtext || 'Free no contact delivery for all orders'}<br />
            ${customValues.delivery_time_text?.replace('<span>', `<span style="font-weight: bold; color: ${customValues.highlight_color || '#039903'}">`) || 'Delivered in: <span style="font-weight: bold; color: #039903">2 - 5 working days</span>'}
          </div>
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default DeliveryBoxPreviewPanel;