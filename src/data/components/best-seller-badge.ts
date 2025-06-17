import { ComponentWithCustomization } from '../../types';

export const bestSellerBadge: ComponentWithCustomization = {
  id: 'best-seller-badge',
  title: 'Best Seller Badge',
  description: 'Display a premium best seller badge with fire icon and sales count',
  category: 'FOMO',
  tags: ['badge', 'best seller', 'sales', 'fomo'],
  free: false,
  code: `<div style="
  background-color: {{ background_color | default: '#f4f4f4' }};
  border-radius: {{ border_radius | default: '30px' }};
  padding: {{ padding | default: '6px 16px' }};
  display: flex;
  align-items: center;
  box-shadow: {{ box_shadow | default: '0 4px 10px rgba(0,0,0,0.08)' }};
  max-width: fit-content;
  font-family: {{ font_family | default: 'Arial, sans-serif' }};
">
  <div style="
    background-color: {{ icon_bg_color | default: '#fff' }};
    border-radius: 50%;
    width: {{ icon_container_size | default: '26px' }};
    height: {{ icon_container_size | default: '26px' }};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: {{ icon_margin | default: '8px' }};
    box-shadow: {{ icon_shadow | default: '0 2px 4px rgba(0,0,0,0.1)' }};
  ">
    <img src="{{ icon_url | default: 'https://img.icons8.com/fluency-systems-filled/24/fa314a/fire-element.png' }}" alt="Fire Icon" style="
      width: {{ icon_size | default: '16px' }};
      height: {{ icon_size | default: '16px' }};
    ">
  </div>
  <div style="
    font-size: {{ font_size | default: '14px' }};
    color: {{ text_color | default: '#000' }};
  ">
    <span style="
      color: {{ highlight_color | default: '#e53935' }};
      font-weight: {{ highlight_weight | default: 'bold' }};
    ">{{ highlight_text | default: 'Best Seller' }}</span>{{ separator | default: ' - ' }}{{ sales_text | default: 'Over 500 sold this week!' }}
  </div>
</div>`,
  customizationOptions: [
    {
      id: 'highlight_text',
      label: 'Highlight Text',
      type: 'text',
      defaultValue: 'Best Seller'
    },
    {
      id: 'sales_text',
      label: 'Sales Text',
      type: 'text',
      defaultValue: 'Over 500 sold this week!'
    },
    {
      id: 'separator',
      label: 'Separator',
      type: 'text',
      defaultValue: ' - '
    },
    {
      id: 'background_color',
      label: 'Background Color',
      type: 'color',
      defaultValue: '#f4f4f4'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#000'
    },
    {
      id: 'highlight_color',
      label: 'Highlight Color',
      type: 'color',
      defaultValue: '#e53935'
    },
    {
      id: 'highlight_weight',
      label: 'Highlight Weight',
      type: 'text',
      defaultValue: 'bold'
    },
    {
      id: 'icon_bg_color',
      label: 'Icon Background Color',
      type: 'color',
      defaultValue: '#fff'
    },
    {
      id: 'icon_url',
      label: 'Icon URL',
      type: 'text',
      defaultValue: 'https://img.icons8.com/fluency-systems-filled/24/fa314a/fire-element.png'
    },
    {
      id: 'icon_size',
      label: 'Icon Size',
      type: 'text',
      defaultValue: '16px'
    },
    {
      id: 'icon_container_size',
      label: 'Icon Container Size',
      type: 'text',
      defaultValue: '26px'
    },
    {
      id: 'icon_margin',
      label: 'Icon Margin',
      type: 'text',
      defaultValue: '8px'
    },
    {
      id: 'icon_shadow',
      label: 'Icon Shadow',
      type: 'text',
      defaultValue: '0 2px 4px rgba(0,0,0,0.1)'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '30px'
    },
    {
      id: 'padding',
      label: 'Padding',
      type: 'text',
      defaultValue: '6px 16px'
    },
    {
      id: 'box_shadow',
      label: 'Box Shadow',
      type: 'text',
      defaultValue: '0 4px 10px rgba(0,0,0,0.08)'
    },
    {
      id: 'font_size',
      label: 'Font Size',
      type: 'text',
      defaultValue: '14px'
    },
    {
      id: 'font_family',
      label: 'Font Family',
      type: 'text',
      defaultValue: 'Arial, sans-serif'
    }
  ]
};