import { useEffect, useState } from 'react';
import { PreviewPanelProps } from './types';
import { PreviewWrapper } from './PreviewWrapper';

const ProductFeaturesPreviewPanel: React.FC<PreviewPanelProps> = ({ customValues }) => {
  const [previewHTML, setPreviewHTML] = useState('');

  useEffect(() => {
    const html = `
      <div style="display:flex; flex-wrap:wrap; justify-content:center; align-items:stretch; background:${customValues.background_color || '#f0f9ff'}; border-radius:${customValues.border_radius || '20px'}; padding:${customValues.container_padding || '40px 20px'}; font-family:inherit; margin-top:${customValues.margin_top || '20px'}; margin-bottom:${customValues.margin_bottom || '20px'};">

        <!-- Sol: Görsel -->
        <div style="flex:1 1 50%; max-width:100%; padding:${customValues.image_padding || '20px'}; box-sizing:border-box; display:flex; justify-content:center; align-items:center;">
          <img src="${customValues.product_image || 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'}" alt="${customValues.image_alt || 'Product Image'}" style="width:100%; max-width:${customValues.image_max_width || '500px'}; height:auto; border-radius:${customValues.image_border_radius || '16px'};">
        </div>

        <!-- Sağ: Özellik Kutusu -->
        <div style="flex:1 1 50%; max-width:100%; padding:${customValues.content_padding || '20px'}; box-sizing:border-box; display:flex; justify-content:center; align-items:center;">
          <div style="width:100%; max-width:${customValues.content_max_width || '500px'}; background:${customValues.content_background || 'white'}; border:${customValues.content_border || '1px solid #bae6fd'}; border-radius:${customValues.content_border_radius || '16px'}; padding:${customValues.content_inner_padding || '24px'}; box-sizing:border-box;">

            <!-- Başlık -->
            <h2 style="font-size:${customValues.title_font_size || '24px'}; font-weight:${customValues.title_font_weight || '700'}; color:${customValues.title_color || '#0ea5e9'}; margin-bottom:${customValues.title_margin_bottom || '8px'};">
              ${customValues.main_title || 'Product Features'} <span style="font-style:italic; color:${customValues.subtitle_color || '#38bdf8'};">${customValues.subtitle || 'Premium'}</span>
            </h2>
            <p style="margin-bottom:${customValues.description_margin_bottom || '24px'}; color:${customValues.description_color || '#555'};">${customValues.description || 'Discover the outstanding features that make our product stand out from the competition.'}</p>

            <!-- Özellik 1 -->
            <div style="display:flex; gap:${customValues.feature_gap || '12px'}; margin-bottom:${customValues.feature_margin_bottom || '20px'}; align-items:flex-start;">
              <div style="width:${customValues.icon_size || '20px'}; height:${customValues.icon_size || '20px'}; margin-top:4px;">
                <svg width="${customValues.icon_size || '20px'}" height="${customValues.icon_size || '20px'}" viewBox="0 0 24 24" fill="${customValues.icon_color || '#0ea5e9'}">
                  <path d="M9 16.2l-3.5-3.6-1.4 1.4L9 19 20 8l-1.4-1.4z"/>
                </svg>
              </div>
              <div style="flex:1;">
                <strong style="color:${customValues.feature_title_color || '#333'};">${customValues.feature_1_title || 'High Quality Materials'}</strong>
                <p style="margin:4px 0 0; color:${customValues.feature_text_color || '#555'};">
                  ${customValues.feature_1_text || 'Made with premium materials that are built to last and deliver exceptional performance.'}
                </p>
              </div>
            </div>

            <!-- Özellik 2 -->
            <div style="display:flex; gap:${customValues.feature_gap || '12px'}; margin-bottom:${customValues.feature_margin_bottom || '20px'}; align-items:flex-start;">
              <div style="width:${customValues.icon_size || '20px'}; height:${customValues.icon_size || '20px'}; margin-top:4px;">
                <svg width="${customValues.icon_size || '20px'}" height="${customValues.icon_size || '20px'}" viewBox="0 0 24 24" fill="${customValues.icon_color || '#0ea5e9'}">
                  <circle cx="12" cy="12" r="8"/>
                </svg>
              </div>
              <div style="flex:1;">
                <strong style="color:${customValues.feature_title_color || '#333'};">${customValues.feature_2_title || 'Easy to Use Design'}</strong>
                <p style="margin:4px 0 0; color:${customValues.feature_text_color || '#555'};">
                  ${customValues.feature_2_text || 'Intuitive design makes this product simple to use, saving you valuable time and effort.'}
                </p>
              </div>
            </div>

            <!-- Özellik 3 -->
            <div style="display:flex; gap:${customValues.feature_gap || '12px'}; margin-bottom:${customValues.feature_margin_bottom || '20px'}; align-items:flex-start;">
              <div style="width:${customValues.icon_size || '20px'}; height:${customValues.icon_size || '20px'}; margin-top:4px;">
                <svg width="${customValues.icon_size || '20px'}" height="${customValues.icon_size || '20px'}" viewBox="0 0 24 24" fill="${customValues.icon_color || '#0ea5e9'}">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
                </svg>
              </div>
              <div style="flex:1;">
                <strong style="color:${customValues.feature_title_color || '#333'};">${customValues.feature_3_title || 'Multiple Configuration Options'}</strong>
                <p style="margin:4px 0 0; color:${customValues.feature_text_color || '#555'};">
                  ${customValues.feature_3_text || 'Customize your experience with various settings to meet your specific needs.'}
                </p>
              </div>
            </div>

            <!-- Özellik 4 -->
            <div style="display:flex; gap:${customValues.feature_gap || '12px'}; align-items:flex-start;">
              <div style="width:${customValues.icon_size || '20px'}; height:${customValues.icon_size || '20px'}; margin-top:4px;">
                <svg width="${customValues.icon_size || '20px'}" height="${customValues.icon_size || '20px'}" viewBox="0 0 24 24" fill="${customValues.icon_color || '#0ea5e9'}">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                    2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 
                    4.5 2.09C13.09 4.01 14.76 3 16.5 3 
                    19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 
                    11.54L12 21.35z"/>
                </svg>
              </div>
              <div style="flex:1;">
                <strong style="color:${customValues.feature_title_color || '#333'};">${customValues.feature_4_title || 'Long-Term Value'}</strong>
                <p style="margin:4px 0 0; color:${customValues.feature_text_color || '#555'};">
                  ${customValues.feature_4_text || 'A smart investment that pays for itself over time with its durability and efficiency.'}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    `;
    
    setPreviewHTML(html);
  }, [customValues]);

  return <PreviewWrapper previewHTML={previewHTML} />;
};

export default ProductFeaturesPreviewPanel; 