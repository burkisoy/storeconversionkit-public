import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const TabsPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        max-width: 500px;
        margin: 30px auto;
        font-family: Arial, sans-serif;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        border-radius: ${customValues.tab_border_radius || '10px'};
        overflow: hidden;
      ">
        <div style="
          display: flex;
          gap: ${customValues.tab_gap || '0'};
        ">
          <div style="
            flex: 1;
            padding: ${customValues.tab_padding || '10px 0'};
            text-align: center;
            font-size: ${customValues.tab_font_size || '13px'};
            font-weight: ${customValues.tab_font_weight || 'bold'};
            color: ${customValues.tab_active_text_color || '#1b3a57'};
            background-color: ${customValues.tab_active_background_color || '#ffffff'};
            cursor: pointer;
            transition: all 0.3s ease;
            border-top-left-radius: ${customValues.tab_border_radius || '10px'};
          ">${customValues.tab_1_title || 'Tab 1'}</div>
          
          <div style="
            flex: 1;
            padding: ${customValues.tab_padding || '10px 0'};
            text-align: center;
            font-size: ${customValues.tab_font_size || '13px'};
            font-weight: ${customValues.tab_font_weight || 'bold'};
            color: ${customValues.tab_text_color || '#ffffff'};
            background-color: ${customValues.tab_background_color || '#1cbcc3'};
            cursor: pointer;
            transition: all 0.3s ease;
          ">${customValues.tab_2_title || 'Tab 2'}</div>
          
          <div style="
            flex: 1;
            padding: ${customValues.tab_padding || '10px 0'};
            text-align: center;
            font-size: ${customValues.tab_font_size || '13px'};
            font-weight: ${customValues.tab_font_weight || 'bold'};
            color: ${customValues.tab_text_color || '#ffffff'};
            background-color: ${customValues.tab_background_color || '#1cbcc3'};
            cursor: pointer;
            transition: all 0.3s ease;
            border-top-right-radius: ${customValues.tab_border_radius || '10px'};
          ">${customValues.tab_3_title || 'Tab 3'}</div>
        </div>

        <div style="
          padding: 15px;
          font-size: ${customValues.content_font_size || '13px'};
          background-color: ${customValues.content_background_color || '#ffffff'};
          color: ${customValues.content_text_color || '#333333'};
          border-bottom-left-radius: ${customValues.tab_border_radius || '10px'};
          border-bottom-right-radius: ${customValues.tab_border_radius || '10px'};
        ">
          <p style="margin: 0;">${customValues.tab_1_content || 'Content for Tab 1 goes here.'}</p>
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default TabsPreviewPanel;