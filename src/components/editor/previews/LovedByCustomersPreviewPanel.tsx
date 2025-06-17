import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const LovedByCustomersPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        background: ${customValues.background || 'linear-gradient(#dddddd, #d8d8d8)'};
        color: ${customValues.text_color || '#121212'};
        text-align: center;
        padding: ${customValues.padding || '6px'};
        margin-top: ${customValues.margin_top || '20px'};
        border-radius: ${customValues.border_radius || '20px'};
        width: ${customValues.width || '300px'};
        margin-left: auto;
        margin-right: auto;
        font-size: ${customValues.font_size || '14px'};
        font-weight: ${customValues.font_weight || '500'};
        box-shadow: ${customValues.shadow || '0 2px 4px rgba(0, 0, 0, 0.1)'};
        transition: transform 0.2s ease;
      ">
        <span>${customValues.icon || '🖤'} ${customValues.text || 'Loved by 10,000 Customers'}</span>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default LovedByCustomersPreviewPanel;