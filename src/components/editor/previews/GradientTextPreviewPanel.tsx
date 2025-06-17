import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const GradientTextPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        max-width: ${customValues.container_width || '1200px'};
        margin: 0 auto;
        padding: ${customValues.container_padding || '0 20px'};
      ">
        <h2 style="
          background-image: linear-gradient(${customValues.gradient_angle || '45deg'}, ${customValues.gradient_color_1 || '#1cbcc3'}, ${customValues.gradient_color_1 || '#1cbcc3'}, ${customValues.gradient_color_2 || '#4abf8f'}, ${customValues.gradient_color_2 || '#4abf8f'} 80%);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          font-weight: ${customValues.font_weight || '900'};
          text-align: center;
          font-size: ${customValues.title_font_size || '25px'};
          padding: ${customValues.padding || '20px 0'};
          margin: ${customValues.margin || '0'};
        ">${customValues.title_text || 'Gradient text title goes here'}</h2>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default GradientTextPreviewPanel;