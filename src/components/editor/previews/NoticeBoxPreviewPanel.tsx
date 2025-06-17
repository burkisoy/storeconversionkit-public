import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const NoticeBoxPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 20px;
        background-color: ${customValues.page_background_color || '#f5f5f5'};
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
      ">
        <div style="
          width: 100%;
          max-width: ${customValues.max_width || '600px'};
          padding: ${customValues.padding || '10px'};
          margin-bottom: ${customValues.margin_bottom || '15px'};
          border-radius: ${customValues.border_radius || '10px'};
          background-color: ${customValues.warning_background_color || '#fff0f0'};
          border: ${customValues.warning_border || '2px solid #ff9999'};
          color: ${customValues.warning_text_color || '#ff6666'};
          font-size: ${customValues.font_size || '13px'};
          line-height: ${customValues.line_height || '1.5'};
          box-sizing: border-box;
        ">
          ${customValues.warning_text || 'BEWARE of cheap replicas - PilatesMove offers the only authentic and high-quality Pilates Board to ensure you get real results.'}
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default NoticeBoxPreviewPanel;