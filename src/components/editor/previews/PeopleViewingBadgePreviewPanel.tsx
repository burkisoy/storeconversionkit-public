import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const PeopleViewingBadgePreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="
        background-color: ${customValues.background_color || '#fdeee8'};
        color: ${customValues.text_color || '#000'};
        border-radius: ${customValues.border_radius || '999px'};
        padding: ${customValues.padding || '5px 12px'};
        display: inline-flex;
        align-items: center;
        font-size: ${customValues.font_size || '13px'};
        font-family: ${customValues.font_family || 'Arial, sans-serif'};
        box-shadow: ${customValues.box_shadow || '0 1px 3px rgba(0, 0, 0, 0.05)'};
        line-height: 1;
      ">
        <img src="${customValues.icon_url || 'https://img.icons8.com/emoji/48/000000/fire.png'}" alt="fire" style="
          width: ${customValues.icon_size || '15px'};
          height: ${customValues.icon_size || '15px'};
          margin-right: ${customValues.icon_margin || '6px'};
          display: block;
        " />
        <span>
          <strong>${customValues.view_count || '2594'}</strong> people have viewed this in the last
          <span style="white-space: nowrap;"><strong> ${customValues.time_period || '24 hours'}</strong></span>
        </span>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default PeopleViewingBadgePreviewPanel;