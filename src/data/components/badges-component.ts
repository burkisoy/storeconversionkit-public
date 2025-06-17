import { ComponentWithCustomization } from '../../types';

export const badgesComponent: ComponentWithCustomization = {
  id: 'badges-component',
  title: 'Premium Badges',
  description: 'Display premium and popular badges',
  category: 'Product',
  tags: ['badge', 'premium', 'popular'],
  free: true,
  code: `<div style="
  margin-top: {{ margin_top | default: '0.25rem' }};
  margin-bottom: {{ margin_bottom | default: '0.25rem' }};
  width: 100%
">
  <div style="
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: {{ gap | default: '10px' }};
    align-items: center;
    justify-content: {{ alignment | default: 'start' }};
    text-align: left;
    color: {{ text_color | default: '#ffffff' }}
  ">
    <div style="
      background: {{ badge_bg | default: '#f97316' }};
      color: {{ text_color | default: '#ffffff' }};
      padding: {{ padding | default: '3px 10px' }};
      border-radius: {{ border_radius | default: '6px' }};
      font-weight: {{ font_weight | default: '700' }};
      margin-right: {{ margin_right | default: '0' }};
      font-size: {{ font_size | default: '12px' }}
    ">{{ best_value_text | default: 'BEST VALUE' }}</div>
    
    <div style="
      background: {{ badge_bg | default: '#f97316' }};
      color: {{ text_color | default: '#ffffff' }};
      padding: {{ padding | default: '3px 10px' }};
      border-radius: {{ border_radius | default: '6px' }};
      font-weight: {{ font_weight | default: '700' }};
      margin-right: {{ margin_right | default: '0' }};
      font-size: {{ font_size | default: '12px' }}
    ">{{ popular_text | default: 'POPULAR' }}</div>
  </div>
</div>`,
  customizationOptions: [
    {
      id: 'best_value_text',
      label: 'Best Value Text',
      type: 'text',
      defaultValue: 'BEST VALUE'
    },
    {
      id: 'popular_text',
      label: 'Popular Text',
      type: 'text',
      defaultValue: 'POPULAR'
    },
    {
      id: 'badge_bg',
      label: 'Badge Background',
      type: 'color',
      defaultValue: '#f97316'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#ffffff'
    },
    {
      id: 'font_size',
      label: 'Font Size',
      type: 'text',
      defaultValue: '12px'
    },
    {
      id: 'font_weight',
      label: 'Font Weight',
      type: 'text',
      defaultValue: '700'
    },
    {
      id: 'padding',
      label: 'Padding',
      type: 'text',
      defaultValue: '3px 10px'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '6px'
    },
    {
      id: 'gap',
      label: 'Gap Between Badges',
      type: 'text',
      defaultValue: '10px'
    },
    {
      id: 'alignment',
      label: 'Alignment',
      type: 'select',
      defaultValue: 'start',
      options: [
        { value: 'start', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'end', label: 'Right' }
      ]
    },
    {
      id: 'margin_top',
      label: 'Margin Top',
      type: 'text',
      defaultValue: '0.25rem'
    },
    {
      id: 'margin_bottom',
      label: 'Margin Bottom',
      type: 'text',
      defaultValue: '0.25rem'
    },
    {
      id: 'margin_right',
      label: 'Margin Right',
      type: 'text',
      defaultValue: '0'
    }
  ]
};