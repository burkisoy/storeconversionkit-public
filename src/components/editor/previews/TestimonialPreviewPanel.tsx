import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const TestimonialPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        margin-top: ${customValues.margin_top || '0.3rem'};
        margin-bottom: ${customValues.margin_bottom || '0.3rem'};
        width: 100%
      ">
        <div style="
          width: 100%;
          gap: ${customValues.gap || '4px'};
          font-weight: ${customValues.font_weight || '500'};
          font-size: ${customValues.font_size || '20px'};
          background-color: ${customValues.background_color || '#ffffff'};
          border-radius: ${customValues.border_radius || '12px'};
          padding: ${customValues.padding || '1.5rem'};
          border: ${customValues.border || '1px solid #e5e5e5'};
          color: ${customValues.text_color || '#333333'};
          line-height: ${customValues.line_height || '1.5'}
        ">
          <div style="
            font-weight: ${customValues.quote_font_weight || '500'};
            font-size: ${customValues.quote_font_size || '20px'}
          ">"${customValues.quote_text || 'I love this! It was easy to setup and fast shipping'}"</div>
          
          <div style="
            margin-top: ${customValues.name_margin_top || '6px'};
            font-size: ${customValues.name_font_size || '16px'}
          ">${customValues.customer_name || 'John D.'}</div>
          
          <div style="
            font-size: ${customValues.verification_font_size || '14px'};
            font-weight: ${customValues.verification_font_weight || '400'};
            display: flex;
            gap: ${customValues.verification_gap || '4px'};
            align-items: center;
            color: ${customValues.verification_color || '#333333'}
          ">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path>
            </svg>
            ${customValues.verification_text || 'Verified Buyer'}
          </div>
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default TestimonialPreviewPanel;