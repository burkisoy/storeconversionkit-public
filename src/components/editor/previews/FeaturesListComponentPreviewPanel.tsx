import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const FeaturesListComponentPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        margin-top: ${customValues.margin_top || '0.25rem'};
        margin-bottom: ${customValues.margin_bottom || '0.25rem'};
        width: 100%
      ">
        <div style="
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: ${customValues.gap || '6px'};
          text-align: left
        ">
          <div style="
            display: flex;
            align-items: center;
            gap: ${customValues.icon_gap || '8px'};
            font-weight: ${customValues.font_weight || '500'};
            font-size: ${customValues.font_size || '16px'}
          ">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" style="
              color: ${customValues.icon_color || '#701a75'};
              height: ${customValues.icon_size || '18px'};
              width: ${customValues.icon_size || '18px'}
            " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z"></path>
            </svg>
            <span style="color: ${customValues.text_color || '#701a75'}">${customValues.feature_1 || 'High quality materials'}</span>
          </div>

          <div style="
            display: flex;
            align-items: center;
            gap: ${customValues.icon_gap || '8px'};
            font-weight: ${customValues.font_weight || '500'};
            font-size: ${customValues.font_size || '16px'}
          ">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" style="
              color: ${customValues.icon_color || '#701a75'};
              height: ${customValues.icon_size || '18px'};
              width: ${customValues.icon_size || '18px'}
            " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z"></path>
            </svg>
            <span style="color: ${customValues.text_color || '#701a75'}">${customValues.feature_2 || '90% Polymer, 10% Plastic'}</span>
          </div>

          <div style="
            display: flex;
            align-items: center;
            gap: ${customValues.icon_gap || '8px'};
            font-weight: ${customValues.font_weight || '500'};
            font-size: ${customValues.font_size || '16px'}
          ">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" style="
              color: ${customValues.icon_color || '#701a75'};
              height: ${customValues.icon_size || '18px'};
              width: ${customValues.icon_size || '18px'}
            " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z"></path>
            </svg>
            <span style="color: ${customValues.text_color || '#701a75'}">${customValues.feature_3 || '100% Recyclable'}</span>
          </div>
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default FeaturesListComponentPreviewPanel;