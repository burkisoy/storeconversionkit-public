import { ComponentWithCustomization } from '../../types';

export const bestsellerBadge: ComponentWithCustomization = {
  id: 'bestseller-badge',
  title: 'Bestseller Badge',
  description: 'Display a prominent bestseller badge with customizable text',
  category: 'Product',
  tags: ['badge', 'bestseller', 'product', 'highlight'],
  free: true,
  code: `<div style="
  display: flex; 
  border: 2px solid {{ border_color | default: '#e94e77' }}; 
  border-radius: {{ border_radius | default: '8px' }}; 
  font-family: {{ font_family | default: '-apple-system, BlinkMacSystemFont, sans-serif' }}; 
  overflow: hidden; 
  background-color: {{ background_color | default: '#ffffff' }}; 
  max-width: {{ max_width | default: '320px' }};
">
  <div style="
    background-color: {{ badge_bg_color | default: '#e94e77' }}; 
    color: {{ badge_text_color | default: '#ffffff' }}; 
    font-weight: {{ badge_font_weight | default: '700' }}; 
    font-size: {{ badge_font_size | default: '14px' }}; 
    padding: {{ badge_padding | default: '12px 16px' }}; 
    display: flex; 
    align-items: center; 
    border-right: 2px solid {{ border_color | default: '#e94e77' }};
  ">
    {{ badge_number | default: '#1' }}
  </div>
  <div style="padding: {{ content_padding | default: '10px 14px' }};">
    <div style="
      font-size: {{ title_font_size | default: '14px' }}; 
      font-weight: {{ title_font_weight | default: '700' }}; 
      color: {{ title_color | default: '#000000' }};
    ">{{ title_text | default: 'BESTSELLER OF 2024' }}</div>
    <div style="
      font-size: {{ subtitle_font_size | default: '13px' }}; 
      font-style: {{ subtitle_font_style | default: 'italic' }}; 
      color: {{ subtitle_color | default: '#6b6b6b' }}; 
      margin-top: {{ subtitle_margin_top | default: '2px' }};
    ">{{ subtitle_text | default: 'The best against the cold' }}</div>
  </div>
</div>`,
  customizationOptions: [
    {
      id: 'badge_number',
      label: 'Badge Number',
      type: 'text',
      defaultValue: '#1'
    },
    {
      id: 'title_text',
      label: 'Title Text',
      type: 'text',
      defaultValue: 'BESTSELLER OF 2024'
    },
    {
      id: 'subtitle_text',
      label: 'Subtitle Text',
      type: 'text',
      defaultValue: 'The best against the cold'
    },
    {
      id: 'border_color',
      label: 'Border Color',
      type: 'color',
      defaultValue: '#e94e77'
    },
    {
      id: 'badge_bg_color',
      label: 'Badge Background Color',
      type: 'color',
      defaultValue: '#e94e77'
    },
    {
      id: 'badge_text_color',
      label: 'Badge Text Color',
      type: 'color',
      defaultValue: '#ffffff'
    },
    {
      id: 'background_color',
      label: 'Background Color',
      type: 'color',
      defaultValue: '#ffffff'
    },
    {
      id: 'title_color',
      label: 'Title Color',
      type: 'color',
      defaultValue: '#000000'
    },
    {
      id: 'subtitle_color',
      label: 'Subtitle Color',
      type: 'color',
      defaultValue: '#6b6b6b'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '8px'
    },
    {
      id: 'max_width',
      label: 'Max Width',
      type: 'text',
      defaultValue: '320px'
    },
    {
      id: 'badge_font_size',
      label: 'Badge Font Size',
      type: 'text',
      defaultValue: '14px'
    },
    {
      id: 'badge_font_weight',
      label: 'Badge Font Weight',
      type: 'text',
      defaultValue: '700'
    },
    {
      id: 'badge_padding',
      label: 'Badge Padding',
      type: 'text',
      defaultValue: '12px 16px'
    },
    {
      id: 'title_font_size',
      label: 'Title Font Size',
      type: 'text',
      defaultValue: '14px'
    },
    {
      id: 'title_font_weight',
      label: 'Title Font Weight',
      type: 'text',
      defaultValue: '700'
    },
    {
      id: 'subtitle_font_size',
      label: 'Subtitle Font Size',
      type: 'text',
      defaultValue: '13px'
    },
    {
      id: 'subtitle_font_style',
      label: 'Subtitle Font Style',
      type: 'text',
      defaultValue: 'italic'
    },
    {
      id: 'subtitle_margin_top',
      label: 'Subtitle Margin Top',
      type: 'text',
      defaultValue: '2px'
    },
    {
      id: 'content_padding',
      label: 'Content Padding',
      type: 'text',
      defaultValue: '10px 14px'
    },
    {
      id: 'font_family',
      label: 'Font Family',
      type: 'text',
      defaultValue: '-apple-system, BlinkMacSystemFont, sans-serif'
    }
  ]
};