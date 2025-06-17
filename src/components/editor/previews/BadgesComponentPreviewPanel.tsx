import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const BadgesComponentPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
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
          flex-wrap: wrap;
          gap: ${customValues.gap || '10px'};
          align-items: center;
          justify-content: ${customValues.alignment || 'start'};
          text-align: left;
          color: ${customValues.text_color || '#ffffff'}
        ">
          <div style="
            background: ${customValues.badge_bg || '#f97316'};
            color: ${customValues.text_color || '#ffffff'};
            padding: ${customValues.padding || '3px 10px'};
            border-radius: ${customValues.border_radius || '6px'};
            font-weight: ${customValues.font_weight || '700'};
            margin-right: ${customValues.margin_right || '0'};
            font-size: ${customValues.font_size || '12px'}
          ">${customValues.best_value_text || 'BEST VALUE'}</div>
          
          <div style="
            background: ${customValues.badge_bg || '#f97316'};
            color: ${customValues.text_color || '#ffffff'};
            padding: ${customValues.padding || '3px 10px'};
            border-radius: ${customValues.border_radius || '6px'};
            font-weight: ${customValues.font_weight || '700'};
            margin-right: ${customValues.margin_right || '0'};
            font-size: ${customValues.font_size || '12px'}
          ">${customValues.popular_text || 'POPULAR'}</div>
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default BadgesComponentPreviewPanel;