import { ComponentWithCustomization } from '../../types';

export const socialBadge: ComponentWithCustomization = {
  id: 'social-badge',
  title: 'Social Proof Badge',
  description: 'Display social media proof with custom icon',
  category: 'Social Proof',
  tags: ['social', 'badge', 'tiktok', 'proof'],
  code: `<link rel="preload" as="image" href="{{ icon_url | default: 'https://img.icons8.com/?size=100&id=118640&format=png&color=000000' }}"/>

<div style="
  margin-top: {{ margin_top | default: '0.25rem' }};
  margin-bottom: {{ margin_bottom | default: '0.25rem' }};
  width: 100%
">
  <div style="
    display: flex;
    align-items: center;
    justify-content: {{ alignment | default: 'center' }};
    width: 100%;
    gap: {{ gap | default: '8px' }};
    font-weight: {{ font_weight | default: '500' }};
    font-size: {{ font_size | default: '14px' }}
  ">
    <img 
      src="{{ icon_url | default: 'https://img.icons8.com/?size=100&id=118640&format=png&color=000000' }}"
      alt="Social"
      style="
        height: {{ icon_size | default: '20px' }};
        width: {{ icon_size | default: '20px' }};
        filter: {{ icon_filter | default: 'none' }}
      "
    />
    <span style="color: {{ text_color | default: '#000000' }}">
      {{ text | default: 'As seen on TikTok' }}
    </span>
  </div>
</div>`,
  customizationOptions: [
    {
      id: 'text',
      label: 'Badge Text',
      type: 'text',
      defaultValue: 'As seen on TikTok'
    },
    {
      id: 'icon_url',
      label: 'Icon URL',
      type: 'text',
      defaultValue: 'https://img.icons8.com/?size=100&id=118640&format=png&color=000000'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#000000'
    },
    {
      id: 'icon_size',
      label: 'Icon Size',
      type: 'text',
      defaultValue: '20px'
    },
    {
      id: 'font_size',
      label: 'Font Size',
      type: 'text',
      defaultValue: '14px'
    },
    {
      id: 'font_weight',
      label: 'Font Weight',
      type: 'text',
      defaultValue: '500'
    },
    {
      id: 'gap',
      label: 'Gap',
      type: 'text',
      defaultValue: '8px'
    },
    {
      id: 'alignment',
      label: 'Alignment',
      type: 'select',
      defaultValue: 'center',
      options: [
        { value: 'flex-start', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'flex-end', label: 'Right' }
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
      id: 'icon_filter',
      label: 'Icon Filter',
      type: 'select',
      defaultValue: 'none',
      options: [
        { value: 'none', label: 'None' },
        { value: 'grayscale(100%)', label: 'Grayscale' },
        { value: 'brightness(0)', label: 'Black' },
        { value: 'brightness(0) invert(1)', label: 'White' }
      ]
    }
  ]
};