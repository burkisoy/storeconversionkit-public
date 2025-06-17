import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const FeatureListPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        max-width: 600px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-family: ${customValues.font_family || "'Helvetica Neue', Arial, sans-serif"};
        margin: 20px auto;
      ">
        <div class="feature-item" style="
          display: flex;
          align-items: center;
          padding: 5px 0;
          border-radius: 8px;
          transition: all ${customValues.transition_duration || '0.3s'} ease;
          cursor: default;
        ">
          <img 
            src="${customValues.feature_1_icon || 'https://www.svgrepo.com/show/507980/check-badge.svg'}"
            alt="Check Icon"
            style="
              width: ${customValues.icon_size || '24px'};
              height: ${customValues.icon_size || '24px'};
              margin-right: 10px;
              transition: filter ${customValues.transition_duration || '0.3s'};
            "
            class="feature-icon"
          />
          <div style="
            font-size: ${customValues.font_size || '16px'};
            color: ${customValues.text_color || '#333'};
            transition: color ${customValues.transition_duration || '0.3s'};
          ">${customValues.feature_1_text || 'Easily Changeable 6 Different Heads'}</div>
        </div>

        <div class="feature-item" style="
          display: flex;
          align-items: center;
          padding: 5px 0;
          border-radius: 8px;
          transition: all ${customValues.transition_duration || '0.3s'} ease;
          cursor: default;
        ">
          <img 
            src="${customValues.feature_2_icon || 'https://www.svgrepo.com/show/507980/check-badge.svg'}"
            alt="Check Icon"
            style="
              width: ${customValues.icon_size || '24px'};
              height: ${customValues.icon_size || '24px'};
              margin-right: 10px;
              transition: filter ${customValues.transition_duration || '0.3s'};
            "
            class="feature-icon"
          />
          <div style="
            font-size: ${customValues.font_size || '16px'};
            color: ${customValues.text_color || '#333'};
            transition: color ${customValues.transition_duration || '0.3s'};
          ">${customValues.feature_2_text || 'Waterproof Charging Unit'}</div>
        </div>

        <div class="feature-item" style="
          display: flex;
          align-items: center;
          padding: 5px 0;
          border-radius: 8px;
          transition: all ${customValues.transition_duration || '0.3s'} ease;
          cursor: default;
        ">
          <img 
            src="${customValues.feature_3_icon || 'https://www.svgrepo.com/show/507980/check-badge.svg'}"
            alt="Check Icon"
            style="
              width: ${customValues.icon_size || '24px'};
              height: ${customValues.icon_size || '24px'};
              margin-right: 10px;
              transition: filter ${customValues.transition_duration || '0.3s'};
            "
            class="feature-icon"
          />
          <div style="
            font-size: ${customValues.font_size || '16px'};
            color: ${customValues.text_color || '#333'};
            transition: color ${customValues.transition_duration || '0.3s'};
          ">${customValues.feature_3_text || '3.5 hours continuous operation time'}</div>
        </div>
      </div>

      <style>
        .feature-item {
          position: relative;
          overflow: hidden;
        }

        .feature-item:hover {
          background-color: ${customValues.hover_bg_color || '#f1f1f1'};
          transform: translateX(10px);
        }
        
        .feature-item:hover .feature-icon {
          filter: brightness(0) invert(0);
        }
        
        .feature-item:hover div {
          color: ${customValues.highlight_color || '#000'};
        }

        @media (max-width: 600px) {
          .feature-item div {
            font-size: ${customValues.font_size_mobile || '14px'};
          }
        }
      </style>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default FeatureListPreviewPanel;