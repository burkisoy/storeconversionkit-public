import { ComponentWithCustomization } from '../../types';

export const lowStock: ComponentWithCustomization = {
  id: 'low-stock',
  title: 'Low Stock Badge',
  description: 'Animated low stock indicator with pulsing dot',
  category: 'FOMO',
  tags: ['stock', 'inventory', 'badge', 'fomo'],
  stars: 1,
  code: `<div style="
  margin-top: {{ margin_top | default: '0.25rem' }};
  margin-bottom: {{ margin_bottom | default: '0.25rem' }};
  width: fit-content;
">
  <div style="
    background: {{ background_color | default: '#fff2f2' }};
    color: {{ text_color | default: '#dc2525' }};
    padding: {{ padding | default: '3px 10px' }};
    border-radius: {{ border_radius | default: '6px' }};
    font-weight: {{ font_weight | default: '700' }};
    margin-right: {{ margin_right | default: '0' }};
    font-size: {{ font_size | default: '12px' }};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: {{ gap | default: '10px' }};
  ">
    <div style="position: relative;">
      <div style="
        width: {{ dot_size | default: '8px' }};
        height: {{ dot_size | default: '8px' }};
        background: {{ dot_color | default: '#dc2525' }};
        border-radius: 50%;
        position: absolute;
        animation: lc-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        display: block !important;
      "></div>
      <style>
        @keyframes lc-ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      </style>
      <div style="
        width: {{ dot_size | default: '8px' }};
        height: {{ dot_size | default: '8px' }};
        background: {{ dot_color | default: '#dc2525' }};
        border-radius: 50%;
        display: block !important;
      "></div>
    </div>
    {{ text | default: 'LOW STOCK' }}
  </div>
</div>`,
  customizationOptions: [
    {
      id: 'text',
      label: 'Badge Text',
      type: 'text',
      defaultValue: 'LOW STOCK'
    },
    {
      id: 'background_color',
      label: 'Background Color',
      type: 'color',
      defaultValue: '#fff2f2'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#dc2525'
    },
    {
      id: 'dot_color',
      label: 'Dot Color',
      type: 'color',
      defaultValue: '#dc2525'
    },
    {
      id: 'dot_size',
      label: 'Dot Size',
      type: 'text',
      defaultValue: '8px'
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
      id: 'gap',
      label: 'Gap',
      type: 'text',
      defaultValue: '10px'
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