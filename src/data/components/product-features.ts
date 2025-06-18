import { ComponentWithCustomization } from '../../types';

export const productFeatures: ComponentWithCustomization = {
  id: 'product-features',
  title: 'Product Features Premium',
  description: 'Display product features with image and detailed feature list in a premium layout',
  category: 'Product',
  tags: ['features', 'product', 'premium', 'showcase'],
  free: false,
  code: `<div style="display:flex; flex-wrap:wrap; justify-content:center; align-items:stretch; background:{{ background_color | default: '#f0f9ff' }}; border-radius:{{ border_radius | default: '20px' }}; padding:{{ container_padding | default: '40px 20px' }}; font-family:inherit; margin-top:{{ margin_top | default: '20px' }}; margin-bottom:{{ margin_bottom | default: '20px' }};">

  <!-- Sol: Görsel -->
  <div style="flex:1 1 50%; max-width:100%; padding:{{ image_padding | default: '20px' }}; box-sizing:border-box; display:flex; justify-content:center; align-items:center;">
    <img src="{{ product_image | default: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274' }}" alt="{{ image_alt | default: 'Product Image' }}" style="width:100%; max-width:{{ image_max_width | default: '500px' }}; height:auto; border-radius:{{ image_border_radius | default: '16px' }};">
  </div>

  <!-- Sağ: Özellik Kutusu -->
  <div style="flex:1 1 50%; max-width:100%; padding:{{ content_padding | default: '20px' }}; box-sizing:border-box; display:flex; justify-content:center; align-items:center;">
    <div style="width:100%; max-width:{{ content_max_width | default: '500px' }}; background:{{ content_background | default: 'white' }}; border:{{ content_border | default: '1px solid #bae6fd' }}; border-radius:{{ content_border_radius | default: '16px' }}; padding:{{ content_inner_padding | default: '24px' }}; box-sizing:border-box;">

      <!-- Başlık -->
      <h2 style="font-size:{{ title_font_size | default: '24px' }}; font-weight:{{ title_font_weight | default: '700' }}; color:{{ title_color | default: '#0ea5e9' }}; margin-bottom:{{ title_margin_bottom | default: '8px' }};">
        {{ main_title | default: 'Product Features' }} <span style="font-style:italic; color:{{ subtitle_color | default: '#38bdf8' }};">{{ subtitle | default: 'Premium' }}</span>
      </h2>
      <p style="margin-bottom:{{ description_margin_bottom | default: '24px' }}; color:{{ description_color | default: '#555' }};">{{ description | default: 'Discover the outstanding features that make our product stand out from the competition.' }}</p>

      <!-- Özellik 1 -->
      <div style="display:flex; gap:{{ feature_gap | default: '12px' }}; margin-bottom:{{ feature_margin_bottom | default: '20px' }}; align-items:flex-start;">
        <div style="width:{{ icon_size | default: '20px' }}; height:{{ icon_size | default: '20px' }}; margin-top:4px;">
          <svg width="{{ icon_size | default: '20px' }}" height="{{ icon_size | default: '20px' }}" viewBox="0 0 24 24" fill="{{ icon_color | default: '#0ea5e9' }}">
            <path d="M9 16.2l-3.5-3.6-1.4 1.4L9 19 20 8l-1.4-1.4z"/>
          </svg>
        </div>
        <div style="flex:1;">
          <strong style="color:{{ feature_title_color | default: '#333' }};">{{ feature_1_title | default: 'High Quality Materials' }}</strong>
          <p style="margin:4px 0 0; color:{{ feature_text_color | default: '#555' }};">
            {{ feature_1_text | default: 'Made with premium materials that are built to last and deliver exceptional performance.' }}
          </p>
        </div>
      </div>

      <!-- Özellik 2 -->
      <div style="display:flex; gap:{{ feature_gap | default: '12px' }}; margin-bottom:{{ feature_margin_bottom | default: '20px' }}; align-items:flex-start;">
        <div style="width:{{ icon_size | default: '20px' }}; height:{{ icon_size | default: '20px' }}; margin-top:4px;">
          <svg width="{{ icon_size | default: '20px' }}" height="{{ icon_size | default: '20px' }}" viewBox="0 0 24 24" fill="{{ icon_color | default: '#0ea5e9' }}">
            <circle cx="12" cy="12" r="8"/>
          </svg>
        </div>
        <div style="flex:1;">
          <strong style="color:{{ feature_title_color | default: '#333' }};">{{ feature_2_title | default: 'Easy to Use Design' }}</strong>
          <p style="margin:4px 0 0; color:{{ feature_text_color | default: '#555' }};">
            {{ feature_2_text | default: 'Intuitive design makes this product simple to use, saving you valuable time and effort.' }}
          </p>
        </div>
      </div>

      <!-- Özellik 3 -->
      <div style="display:flex; gap:{{ feature_gap | default: '12px' }}; margin-bottom:{{ feature_margin_bottom | default: '20px' }}; align-items:flex-start;">
        <div style="width:{{ icon_size | default: '20px' }}; height:{{ icon_size | default: '20px' }}; margin-top:4px;">
          <svg width="{{ icon_size | default: '20px' }}" height="{{ icon_size | default: '20px' }}" viewBox="0 0 24 24" fill="{{ icon_color | default: '#0ea5e9' }}">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
          </svg>
        </div>
        <div style="flex:1;">
          <strong style="color:{{ feature_title_color | default: '#333' }};">{{ feature_3_title | default: 'Multiple Configuration Options' }}</strong>
          <p style="margin:4px 0 0; color:{{ feature_text_color | default: '#555' }};">
            {{ feature_3_text | default: 'Customize your experience with various settings to meet your specific needs.' }}
          </p>
        </div>
      </div>

      <!-- Özellik 4 -->
      <div style="display:flex; gap:{{ feature_gap | default: '12px' }}; align-items:flex-start;">
        <div style="width:{{ icon_size | default: '20px' }}; height:{{ icon_size | default: '20px' }}; margin-top:4px;">
          <svg width="{{ icon_size | default: '20px' }}" height="{{ icon_size | default: '20px' }}" viewBox="0 0 24 24" fill="{{ icon_color | default: '#0ea5e9' }}">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
              2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 
              4.5 2.09C13.09 4.01 14.76 3 16.5 3 
              19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 
              11.54L12 21.35z"/>
          </svg>
        </div>
        <div style="flex:1;">
          <strong style="color:{{ feature_title_color | default: '#333' }};">{{ feature_4_title | default: 'Long-Term Value' }}</strong>
          <p style="margin:4px 0 0; color:{{ feature_text_color | default: '#555' }};">
            {{ feature_4_text | default: 'A smart investment that pays for itself over time with its durability and efficiency.' }}
          </p>
        </div>
      </div>

    </div>
  </div>
</div>`,
  customizationOptions: [
    {
      id: 'background_color',
      label: 'Background Color',
      type: 'color',
      defaultValue: '#f0f9ff'
    },
    {
      id: 'border_radius',
      label: 'Container Border Radius',
      type: 'text',
      defaultValue: '20px'
    },
    {
      id: 'container_padding',
      label: 'Container Padding',
      type: 'text',
      defaultValue: '40px 20px'
    },
    {
      id: 'margin_top',
      label: 'Top Margin',
      type: 'text',
      defaultValue: '20px'
    },
    {
      id: 'margin_bottom',
      label: 'Bottom Margin',
      type: 'text',
      defaultValue: '20px'
    },
    {
      id: 'product_image',
      label: 'Product Image URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'
    },
    {
      id: 'image_alt',
      label: 'Image Alt Text',
      type: 'text',
      defaultValue: 'Product Image'
    },
    {
      id: 'image_max_width',
      label: 'Image Max Width',
      type: 'text',
      defaultValue: '500px'
    },
    {
      id: 'image_border_radius',
      label: 'Image Border Radius',
      type: 'text',
      defaultValue: '16px'
    },
    {
      id: 'content_background',
      label: 'Content Background',
      type: 'color',
      defaultValue: 'white'
    },
    {
      id: 'content_border',
      label: 'Content Border',
      type: 'text',
      defaultValue: '1px solid #bae6fd'
    },
    {
      id: 'content_border_radius',
      label: 'Content Border Radius',
      type: 'text',
      defaultValue: '16px'
    },
    {
      id: 'main_title',
      label: 'Main Title',
      type: 'text',
      defaultValue: 'Product Features'
    },
    {
      id: 'subtitle',
      label: 'Subtitle',
      type: 'text',
      defaultValue: 'Premium'
    },
    {
      id: 'title_color',
      label: 'Title Color',
      type: 'color',
      defaultValue: '#0ea5e9'
    },
    {
      id: 'subtitle_color',
      label: 'Subtitle Color',
      type: 'color',
      defaultValue: '#38bdf8'
    },
    {
      id: 'title_font_size',
      label: 'Title Font Size',
      type: 'text',
      defaultValue: '24px'
    },
    {
      id: 'description',
      label: 'Description Text',
      type: 'text',
      defaultValue: 'Discover the outstanding features that make our product stand out from the competition.'
    },
    {
      id: 'description_color',
      label: 'Description Color',
      type: 'color',
      defaultValue: '#555'
    },
    {
      id: 'icon_color',
      label: 'Icon Color',
      type: 'color',
      defaultValue: '#0ea5e9'
    },
    {
      id: 'icon_size',
      label: 'Icon Size',
      type: 'text',
      defaultValue: '20px'
    },
    {
      id: 'feature_title_color',
      label: 'Feature Title Color',
      type: 'color',
      defaultValue: '#333'
    },
    {
      id: 'feature_text_color',
      label: 'Feature Text Color',
      type: 'color',
      defaultValue: '#555'
    },
    {
      id: 'feature_1_title',
      label: 'Feature 1 Title',
      type: 'text',
      defaultValue: 'High Quality Materials'
    },
    {
      id: 'feature_1_text',
      label: 'Feature 1 Description',
      type: 'text',
      defaultValue: 'Made with premium materials that are built to last and deliver exceptional performance.'
    },
    {
      id: 'feature_2_title',
      label: 'Feature 2 Title',
      type: 'text',
      defaultValue: 'Easy to Use Design'
    },
    {
      id: 'feature_2_text',
      label: 'Feature 2 Description',
      type: 'text',
      defaultValue: 'Intuitive design makes this product simple to use, saving you valuable time and effort.'
    },
    {
      id: 'feature_3_title',
      label: 'Feature 3 Title',
      type: 'text',
      defaultValue: 'Multiple Configuration Options'
    },
    {
      id: 'feature_3_text',
      label: 'Feature 3 Description',
      type: 'text',
      defaultValue: 'Customize your experience with various settings to meet your specific needs.'
    },
    {
      id: 'feature_4_title',
      label: 'Feature 4 Title',
      type: 'text',
      defaultValue: 'Long-Term Value'
    },
    {
      id: 'feature_4_text',
      label: 'Feature 4 Description',
      type: 'text',
      defaultValue: 'A smart investment that pays for itself over time with its durability and efficiency.'
    }
  ]
}; 