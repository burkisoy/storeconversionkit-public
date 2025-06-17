import { ComponentWithCustomization } from '../../types';

export const peopleViewingBadge: ComponentWithCustomization = {
  id: 'people-viewing-badge',
  title: 'People Viewing Badge',
  description: 'Display how many people have viewed your product recently',
  category: 'FOMO',
  tags: ['badge', 'fomo', 'social proof', 'views'],
  free: true,
  code: `<div style="
  background-color: {{ background_color | default: '#fdeee8' }};
  color: {{ text_color | default: '#000' }};
  border-radius: {{ border_radius | default: '999px' }};
  padding: {{ padding | default: '5px 12px' }};
  display: inline-flex;
  align-items: center;
  font-size: {{ font_size | default: '13px' }};
  font-family: {{ font_family | default: 'Arial, sans-serif' }};
  box-shadow: {{ box_shadow | default: '0 1px 3px rgba(0, 0, 0, 0.05)' }};
  line-height: 1;
">
  <img src="{{ icon_url | default: 'https://img.icons8.com/emoji/48/000000/fire.png' }}" alt="fire" style="
    width: {{ icon_size | default: '15px' }};
    height: {{ icon_size | default: '15px' }};
    margin-right: {{ icon_margin | default: '6px' }};
    display: block;
  " />
  <span>
    <strong>{{ view_count | default: '2594' }}</strong> people have viewed this in the last
    <span style="white-space: nowrap;"><strong>{{ time_period | default: '24 hours' }}</strong></span>
  </span>
</div>`,
  customizationOptions: [
    {
      id: 'view_count',
      label: 'View Count',
      type: 'text',
      defaultValue: '2594'
    },
    {
      id: 'time_period',
      label: 'Time Period',
      type: 'text',
      defaultValue: '24 hours'
    },
    {
      id: 'background_color',
      label: 'Background Color',
      type: 'color',
      defaultValue: '#fdeee8'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#000'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '999px'
    },
    {
      id: 'padding',
      label: 'Padding',
      type: 'text',
      defaultValue: '5px 12px'
    },
    {
      id: 'font_size',
      label: 'Font Size',
      type: 'text',
      defaultValue: '13px'
    },
    {
      id: 'box_shadow',
      label: 'Box Shadow',
      type: 'text',
      defaultValue: '0 1px 3px rgba(0, 0, 0, 0.05)'
    },
    {
      id: 'icon_url',
      label: 'Icon URL',
      type: 'text',
      defaultValue: 'https://img.icons8.com/emoji/48/000000/fire.png'
    },
    {
      id: 'icon_size',
      label: 'Icon Size',
      type: 'text',
      defaultValue: '15px'
    },
    {
      id: 'icon_margin',
      label: 'Icon Margin',
      type: 'text',
      defaultValue: '6px'
    }
  ]
};