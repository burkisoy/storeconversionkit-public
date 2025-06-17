import { ComponentWithCustomization } from '../../types';

export const awardWinningBadge: ComponentWithCustomization = {
  id: 'award-winning-badge',
  title: 'Award-Winning Product Badge',
  description: 'Display a premium award-winning product badge with trophy icon',
  category: 'Product',
  tags: ['badge', 'award', 'product', 'trophy'],
  free: true,
  code: `<div style="
  display: inline-flex; 
  align-items: center; 
  background-color: {{ background_color | default: '#fff4d6' }}; 
  border-radius: {{ border_radius | default: '9999px' }}; 
  padding: {{ padding | default: '6px 14px' }}; 
  font-family: {{ font_family | default: '-apple-system, BlinkMacSystemFont, sans-serif' }}; 
  margin: 0 !important;
">
  <span style="
    font-size: {{ icon_size | default: '16px' }}; 
    margin-right: {{ icon_margin | default: '8px' }};
  ">{{ icon | default: '🏆' }}</span>
  <span style="
    font-size: {{ text_size | default: '14px' }}; 
    font-weight: {{ text_weight | default: '600' }}; 
    color: {{ text_color | default: '#9c7700' }};
  ">{{ text | default: '#1 Award-Winning Product' }}</span>
</div>`,
  customizationOptions: [
    {
      id: 'text',
      label: 'Badge Text',
      type: 'text',
      defaultValue: '#1 Award-Winning Product'
    },
    {
      id: 'icon',
      label: 'Icon',
      type: 'text',
      defaultValue: '🏆'
    },
    {
      id: 'background_color',
      label: 'Background Color',
      type: 'color',
      defaultValue: '#fff4d6'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#9c7700'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '9999px'
    },
    {
      id: 'padding',
      label: 'Padding',
      type: 'text',
      defaultValue: '6px 14px'
    },
    {
      id: 'text_size',
      label: 'Text Size',
      type: 'text',
      defaultValue: '14px'
    },
    {
      id: 'text_weight',
      label: 'Text Weight',
      type: 'text',
      defaultValue: '600'
    },
    {
      id: 'icon_size',
      label: 'Icon Size',
      type: 'text',
      defaultValue: '16px'
    },
    {
      id: 'icon_margin',
      label: 'Icon Margin',
      type: 'text',
      defaultValue: '8px'
    },
    {
      id: 'font_family',
      label: 'Font Family',
      type: 'text',
      defaultValue: '-apple-system, BlinkMacSystemFont, sans-serif'
    }
  ]
};