import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const TiktokSliderPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div class="slider-containerv8" style="
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        overflow-x: auto;
      ">
        <div style="
          display: flex;
          gap: 16px;
          padding: 10px;
        ">
          ${[1, 2, 3, 4, 5].map(() => `
            <div style="
              position: relative;
              flex-shrink: 0;
              width: 200px;
              aspect-ratio: 9/16;
              border-radius: ${customValues.border_radius || '10px'};
              overflow: hidden;
              padding: ${customValues.border_padding || '4px'};
              background: ${customValues.border_gradient || 'linear-gradient(0deg, #fe2d52, #28ffff)'};
            ">
              <div style="
                position: absolute;
                inset: ${customValues.border_padding || '4px'};
                background: #000;
                border-radius: ${customValues.video_border_radius || '10px'};
              "></div>
              <div style="
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
              ">
                <div style="
                  width: ${customValues.control_button_size || '50px'};
                  height: ${customValues.control_button_size || '50px'};
                  border-radius: 50%;
                  background: ${customValues.control_button_bg || 'rgba(0, 0, 0, 0.6)'};
                  color: ${customValues.control_button_color || 'white'};
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: ${customValues.control_button_font_size || '20px'};
                ">▷</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default TiktokSliderPreviewPanel;