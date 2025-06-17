import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const AccordionPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        max-width: ${customValues.max_width || '700px'};
        margin: 0 auto;
        padding: ${customValues.wrapper_padding || '20px'};
      ">
        <div style="margin-bottom: ${customValues.item_spacing || '20px'};">
          <div style="
            background: ${customValues.title_bg || '#ffffff'};
            padding: ${customValues.title_padding || '20px'};
            border-radius: ${customValues.border_radius || '12px'};
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: ${customValues.title_shadow || '0 4px 15px rgba(0, 0, 0, 0.05)'};
            transition: all 0.3s ease;
          ">
            <span style="color: ${customValues.title_color || '#333333'};">
              ${customValues.section1_title || 'Product Description'}
            </span>
            <span style="color: ${customValues.icon_color || '#718096'};">▼</span>
          </div>
        </div>

        <div style="margin-bottom: ${customValues.item_spacing || '20px'};">
          <div style="
            background: ${customValues.title_bg || '#ffffff'};
            padding: ${customValues.title_padding || '20px'};
            border-radius: ${customValues.border_radius || '12px'};
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: ${customValues.title_shadow || '0 4px 15px rgba(0, 0, 0, 0.05)'};
            transition: all 0.3s ease;
          ">
            <span style="color: ${customValues.title_color || '#333333'};">
              ${customValues.section2_title || 'Shipping & Returns'}
            </span>
            <span style="color: ${customValues.icon_color || '#718096'};">▼</span>
          </div>
        </div>

        <div>
          <div style="
            background: ${customValues.title_bg || '#ffffff'};
            padding: ${customValues.title_padding || '20px'};
            border-radius: ${customValues.border_radius || '12px'};
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: ${customValues.title_shadow || '0 4px 15px rgba(0, 0, 0, 0.05)'};
            transition: all 0.3s ease;
          ">
            <span style="color: ${customValues.title_color || '#333333'};">
              ${customValues.section3_title || 'Secure Payment'}
            </span>
            <span style="color: ${customValues.icon_color || '#718096'};">▼</span>
          </div>
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default AccordionPreviewPanel;