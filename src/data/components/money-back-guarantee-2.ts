import { ComponentWithCustomization } from '../../types';

export const moneyBackGuarantee2: ComponentWithCustomization = {
  id: 'money-back-guarantee-2',
  title: 'Money Back Guarantee Banner',
  description: 'Display a beautiful money-back guarantee banner with images and call-to-action',
  category: 'Trust',
  tags: ['guarantee', 'trust', 'banner', 'refund', 'cta'],
  free: false,
  code: `<div style="background: {{ background | default: 'linear-gradient(to bottom, #e6f6fd, #ffffff)' }}; padding: {{ container_padding | default: '60px 20px' }}; text-align: center; font-family: {{ font_family | default: '-apple-system, BlinkMacSystemFont, sans-serif' }};">
  <div style="display: flex; justify-content: center; gap: {{ image_gap | default: '16px' }}; margin-bottom: {{ images_margin_bottom | default: '40px' }}; flex-wrap: wrap;">
    <img src="{{ image_1 | default: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274' }}" alt="photo" style="width: {{ image_width | default: '100px' }}; height: auto; border-radius: {{ image_border_radius | default: '8px' }}; transform: rotate(-8deg); box-shadow: {{ image_shadow | default: '0 4px 10px rgba(0,0,0,0.2)' }};">
    <img src="{{ image_2 | default: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274' }}" alt="photo" style="width: {{ image_width | default: '100px' }}; height: auto; border-radius: {{ image_border_radius | default: '8px' }}; transform: scale(1.1); z-index: 2; box-shadow: {{ image_shadow | default: '0 4px 10px rgba(0,0,0,0.2)' }};">
    <img src="{{ image_3 | default: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274' }}" alt="photo" style="width: {{ image_width | default: '100px' }}; height: auto; border-radius: {{ image_border_radius | default: '8px' }}; transform: rotate(8deg); box-shadow: {{ image_shadow | default: '0 4px 10px rgba(0,0,0,0.2)' }};">
  </div>

  <div style="font-size: {{ title_font_size | default: '22px' }}; font-weight: bold; color: {{ title_color | default: '#1e3a8a' }}; margin-bottom: {{ title_margin_bottom | default: '12px' }};">
    {{ title_first_part | default: 'Money-Back' }} <span style="color: {{ title_highlight_color | default: '#60a5fa' }};">{{ title_second_part | default: 'Guarantee' }}</span>
  </div>

  <div style="color: {{ description_color | default: '#1e3a8a' }}; font-size: {{ description_font_size | default: '15px' }}; max-width: {{ description_max_width | default: '600px' }}; margin: 0 auto {{ description_margin_bottom | default: '30px' }} auto;">
    {% if description_text %}
      {{ description_text }}
    {% else %}
      We're so confident in the quality of our product that we offer a satisfaction guarantee. If you're not completely satisfied with your purchase, simply return the item within 30 days for a full refund.
    {% endif %}
  </div>

  <div style="margin: {{ button_margin | default: '30px auto 20px' }};">
    <a href="{{ button_link | default: '#' }}" style="display: inline-block; background: {{ button_bg | default: '#3b82f6' }}; color: {{ button_text_color | default: 'white' }}; padding: {{ button_padding | default: '16px 40px' }}; border-radius: {{ button_border_radius | default: '12px' }}; font-weight: {{ button_font_weight | default: '700' }}; font-size: {{ button_font_size | default: '15px' }}; letter-spacing: 1px; text-decoration: none;">
      {{ button_text | default: 'ADD TO CART' }}
    </a>
  </div>

  <div style="margin-top: {{ features_margin_top | default: '24px' }}; font-size: {{ features_font_size | default: '14px' }}; color: {{ features_color | default: '#1e3a8a' }}; display: flex; gap: {{ features_gap | default: '16px' }}; justify-content: center; flex-wrap: wrap; align-items: center;">
    <span style="display: flex; align-items: center; gap: 6px;"><svg width="16" height="16" fill="{{ check_icon_color | default: '#2563eb' }}" viewBox="0 0 24 24"><path d="M20.292 5.708a1 1 0 0 1 0 1.414L9 18.414l-5.292-5.292a1 1 0 0 1 1.414-1.414L9 15.586l10.292-10.292a1 1 0 0 1 1.414 0z"/></svg>{{ feature_1_text | default: '100% Satisfaction' }}</span>
    <span style="display: flex; align-items: center; gap: 6px;"><svg width="16" height="16" fill="{{ check_icon_color | default: '#2563eb' }}" viewBox="0 0 24 24"><path d="M20.292 5.708a1 1 0 0 1 0 1.414L9 18.414l-5.292-5.292a1 1 0 0 1 1.414-1.414L9 15.586l10.292-10.292a1 1 0 0 1 1.414 0z"/></svg>{{ feature_2_text | default: 'Fast Shipping' }}</span>
    <span style="display: flex; align-items: center; gap: 6px;"><svg width="16" height="16" fill="{{ check_icon_color | default: '#2563eb' }}" viewBox="0 0 24 24"><path d="M20.292 5.708a1 1 0 0 1 0 1.414L9 18.414l-5.292-5.292a1 1 0 0 1 1.414-1.414L9 15.586l10.292-10.292a1 1 0 0 1 1.414 0z"/></svg>{{ feature_3_text | default: 'Easy Returns' }}</span>
  </div>
</div>`,
  customizationOptions: [
    {
      id: 'background',
      label: 'Background',
      type: 'text',
      defaultValue: 'linear-gradient(to bottom, #e6f6fd, #ffffff)'
    },
    {
      id: 'container_padding',
      label: 'Container Padding',
      type: 'text',
      defaultValue: '60px 20px'
    },
    {
      id: 'image_1',
      label: 'Image 1 URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'
    },
    {
      id: 'image_2',
      label: 'Image 2 URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'
    },
    {
      id: 'image_3',
      label: 'Image 3 URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'
    },
    {
      id: 'image_width',
      label: 'Image Width',
      type: 'text',
      defaultValue: '100px'
    },
    {
      id: 'image_border_radius',
      label: 'Image Border Radius',
      type: 'text',
      defaultValue: '8px'
    },
    {
      id: 'image_shadow',
      label: 'Image Shadow',
      type: 'text',
      defaultValue: '0 4px 10px rgba(0,0,0,0.2)'
    },
    {
      id: 'image_gap',
      label: 'Image Gap',
      type: 'text',
      defaultValue: '16px'
    },
    {
      id: 'images_margin_bottom',
      label: 'Images Margin Bottom',
      type: 'text',
      defaultValue: '40px'
    },
    {
      id: 'title_first_part',
      label: 'Title First Part',
      type: 'text',
      defaultValue: 'Money-Back'
    },
    {
      id: 'title_second_part',
      label: 'Title Second Part',
      type: 'text',
      defaultValue: 'Guarantee'
    },
    {
      id: 'title_color',
      label: 'Title Color',
      type: 'color',
      defaultValue: '#1e3a8a'
    },
    {
      id: 'title_highlight_color',
      label: 'Title Highlight Color',
      type: 'color',
      defaultValue: '#60a5fa'
    },
    {
      id: 'title_font_size',
      label: 'Title Font Size',
      type: 'text',
      defaultValue: '22px'
    },
    {
      id: 'title_margin_bottom',
      label: 'Title Margin Bottom',
      type: 'text',
      defaultValue: '12px'
    },
    {
      id: 'description_text',
      label: 'Description Text',
      type: 'text',
      defaultValue: "We're so confident in the quality of our product that we offer a satisfaction guarantee. If you're not completely satisfied with your purchase, simply return the item within 30 days for a full refund."
    },
    {
      id: 'description_color',
      label: 'Description Color',
      type: 'color',
      defaultValue: '#1e3a8a'
    },
    {
      id: 'description_font_size',
      label: 'Description Font Size',
      type: 'text',
      defaultValue: '15px'
    },
    {
      id: 'description_max_width',
      label: 'Description Max Width',
      type: 'text',
      defaultValue: '600px'
    },
    {
      id: 'description_margin_bottom',
      label: 'Description Margin Bottom',
      type: 'text',
      defaultValue: '30px'
    },
    {
      id: 'button_text',
      label: 'Button Text',
      type: 'text',
      defaultValue: 'ADD TO CART'
    },
    {
      id: 'button_link',
      label: 'Button Link',
      type: 'text',
      defaultValue: '#'
    },
    {
      id: 'button_bg',
      label: 'Button Background',
      type: 'color',
      defaultValue: '#3b82f6'
    },
    {
      id: 'button_text_color',
      label: 'Button Text Color',
      type: 'color',
      defaultValue: 'white'
    },
    {
      id: 'button_padding',
      label: 'Button Padding',
      type: 'text',
      defaultValue: '16px 40px'
    },
    {
      id: 'button_border_radius',
      label: 'Button Border Radius',
      type: 'text',
      defaultValue: '12px'
    },
    {
      id: 'button_font_weight',
      label: 'Button Font Weight',
      type: 'text',
      defaultValue: '700'
    },
    {
      id: 'button_font_size',
      label: 'Button Font Size',
      type: 'text',
      defaultValue: '15px'
    },
    {
      id: 'button_margin',
      label: 'Button Margin',
      type: 'text',
      defaultValue: '30px auto 20px'
    },
    {
      id: 'feature_1_text',
      label: 'Feature 1 Text',
      type: 'text',
      defaultValue: '100% Satisfaction'
    },
    {
      id: 'feature_2_text',
      label: 'Feature 2 Text',
      type: 'text',
      defaultValue: 'Fast Shipping'
    },
    {
      id: 'feature_3_text',
      label: 'Feature 3 Text',
      type: 'text',
      defaultValue: 'Easy Returns'
    },
    {
      id: 'features_color',
      label: 'Features Text Color',
      type: 'color',
      defaultValue: '#1e3a8a'
    },
    {
      id: 'features_font_size',
      label: 'Features Font Size',
      type: 'text',
      defaultValue: '14px'
    },
    {
      id: 'features_gap',
      label: 'Features Gap',
      type: 'text',
      defaultValue: '16px'
    },
    {
      id: 'features_margin_top',
      label: 'Features Margin Top',
      type: 'text',
      defaultValue: '24px'
    },
    {
      id: 'check_icon_color',
      label: 'Check Icon Color',
      type: 'color',
      defaultValue: '#2563eb'
    },
    {
      id: 'font_family',
      label: 'Font Family',
      type: 'text',
      defaultValue: '-apple-system, BlinkMacSystemFont, sans-serif'
    }
  ]
};