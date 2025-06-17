import React, { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const ComparisonTablePreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="background: transparent; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, sans-serif; color: #333;">
        <h2 style="text-align: center; margin-bottom: 15px; font-size: 16px;">
          <span style="color: #333;">${customValues.heading_prefix || 'Why Do Our Customers'}</span>
          <span style="font-family: Pacifico, cursive; background: linear-gradient(135deg, ${customValues.gradient_color_1 || '#24A06F'}, ${customValues.gradient_color_2 || '#1B774F'}); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${customValues.heading_highlight || 'Choose Us'}</span>
          <span style="color: ${customValues.accent_color || '#24A06F'};">${customValues.heading_suffix || '?'}</span>
        </h2>

        <table style="width: 100%; border-spacing: 0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1); background: #fff;">
          <thead style="background: linear-gradient(135deg, ${customValues.gradient_color_1 || '#24A06F'}, ${customValues.gradient_color_2 || '#1B774F'}); color: #fff; text-transform: uppercase;">
            <tr>
              <th style="padding: 8px; font-size: 10px; letter-spacing: 0.5px; text-align: left;">${customValues.features_column_title || 'Features'}</th>
              <th style="padding: 8px; font-size: 10px; text-align: center;">${customValues.column_1_title || 'Morning Recovery'}</th>
              <th style="padding: 8px; font-size: 10px; text-align: center;">${customValues.column_2_title || 'Hydration Powder'}</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background: #ffffff;">
              <td style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd; font-size: 10px;">${customValues.feature_1 || 'Clinically Proven**'}</td>
              <td style="padding: 8px; text-align: center; border-bottom: 1px solid #ddd;">
                <svg width="12" height="12" fill="${customValues.check_color || '#34a853'}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.292 5.708a1 1 0 0 1 0 1.414L9 18.414l-5.292-5.292a1 1 0 0 1 1.414-1.414L9 15.586l10.292-10.292a1 1 0 0 1 1.414 0z"/>
                </svg>
              </td>
              <td style="padding: 8px; text-align: center; border-bottom: 1px solid #ddd;">
                <svg width="12" height="12" fill="${customValues.x_color || '#ea4335'}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.364 5.636a1 1 0 0 1 0 1.414L13.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 0 1-1.414-1.414L10.586 12l-4.95-4.95a1 1 0 0 1 1.414-1.414L12 10.586l4.95-4.95a1 1 0 0 1 1.414 0z"/>
                </svg>
              </td>
            </tr>
            <tr style="background: #f7f7f7;">
              <td style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd; font-size: 10px;">${customValues.feature_2 || 'Electrolytes'}</td>
              <td style="padding: 8px; text-align: center; border-bottom: 1px solid #ddd;">
                <svg width="12" height="12" fill="${customValues.check_color || '#34a853'}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.292 5.708a1 1 0 0 1 0 1.414L9 18.414l-5.292-5.292a1 1 0 0 1 1.414-1.414L9 15.586l10.292-10.292a1 1 0 0 1 1.414 0z"/>
                </svg>
              </td>
              <td style="padding: 8px; text-align: center; border-bottom: 1px solid #ddd;">
                <svg width="12" height="12" fill="${customValues.x_color || '#ea4335'}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.364 5.636a1 1 0 0 1 0 1.414L13.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 0 1-1.414-1.414L10.586 12l-4.95-4.95a1 1 0 0 1 1.414-1.414L12 10.586l4.95-4.95a1 1 0 0 1 1.414 0z"/>
                </svg>
              </td>
            </tr>
            <tr style="background: #ffffff;">
              <td style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd; font-size: 10px;">${customValues.feature_3 || 'No Artificial Colors or Sweeteners'}</td>
              <td style="padding: 8px; text-align: center; border-bottom: 1px solid #ddd;">
                <svg width="12" height="12" fill="${customValues.check_color || '#34a853'}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.292 5.708a1 1 0 0 1 0 1.414L9 18.414l-5.292-5.292a1 1 0 0 1 1.414-1.414L9 15.586l10.292-10.292a1 1 0 0 1 1.414 0z"/>
                </svg>
              </td>
              <td style="padding: 8px; text-align: center; border-bottom: 1px solid #ddd;">
                <svg width="12" height="12" fill="${customValues.x_color || '#ea4335'}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.364 5.636a1 1 0 0 1 0 1.414L13.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 0 1-1.414-1.414L10.586 12l-4.95-4.95a1 1 0 0 1 1.414-1.414L12 10.586l4.95-4.95a1 1 0 0 1 1.414 0z"/>
                </svg>
              </td>
            </tr>
            <tr style="background: #f7f7f7;">
              <td style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd; font-size: 10px;">${customValues.feature_4 || 'Patent-Pending Technology'}</td>
              <td style="padding: 8px; text-align: center; border-bottom: 1px solid #ddd;">
                <svg width="12" height="12" fill="${customValues.check_color || '#34a853'}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.292 5.708a1 1 0 0 1 0 1.414L9 18.414l-5.292-5.292a1 1 0 0 1 1.414-1.414L9 15.586l10.292-10.292a1 1 0 0 1 1.414 0z"/>
                </svg>
              </td>
              <td style="padding: 8px; text-align: center; border-bottom: 1px solid #ddd;">
                <svg width="12" height="12" fill="${customValues.x_color || '#ea4335'}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.364 5.636a1 1 0 0 1 0 1.414L13.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 0 1-1.414-1.414L10.586 12l-4.95-4.95a1 1 0 0 1 1.414-1.414L12 10.586l4.95-4.95a1 1 0 0 1 1.414 0z"/>
                </svg>
              </td>
            </tr>
            <tr style="background: #ffffff;">
              <td style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd; font-size: 10px;">${customValues.feature_5 || 'Proprietary Herbal Blend'}</td>
              <td style="padding: 8px; text-align: center; border-bottom: 1px solid #ddd;">
                <svg width="12" height="12" fill="${customValues.check_color || '#34a853'}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.292 5.708a1 1 0 0 1 0 1.414L9 18.414l-5.292-5.292a1 1 0 0 1 1.414-1.414L9 15.586l10.292-10.292a1 1 0 0 1 1.414 0z"/>
                </svg>
              </td>
              <td style="padding: 8px; text-align: center; border-bottom: 1px solid #ddd;">
                <svg width="12" height="12" fill="${customValues.x_color || '#ea4335'}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.364 5.636a1 1 0 0 1 0 1.414L13.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 0 1-1.414-1.414L10.586 12l-4.95-4.95a1 1 0 0 1 1.414-1.414L12 10.586l4.95-4.95a1 1 0 0 1 1.414 0z"/>
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default ComparisonTablePreviewPanel;