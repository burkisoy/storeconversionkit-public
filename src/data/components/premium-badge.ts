import { ComponentWithCustomization } from '../../types';

export const premiumBadge: ComponentWithCustomization = {
  id: 'premium-badge',
  title: 'Premium Badge',
  description: 'Display badges with icons for shipping, support, and returns',
  category: 'Trust',
  tags: ['badge', 'shipping', 'support', 'returns'],
  code: `<div class="badge-container">
  <!-- Badge 1 -->
  <div class="badge-item">
    <img src="{{ badge_1_icon | default: 'https://www.svgrepo.com/show/474295/plane.svg' }}" alt="{{ badge_1_text | default: 'Fast Shipping' }}" width="{{ icon_size | default: '12' }}" height="{{ icon_size | default: '12' }}">
    {{ badge_1_text | default: 'Fast Shipping' }}
  </div>

  <!-- Badge 2 -->
  <div class="badge-item">
    <img src="{{ badge_2_icon | default: 'https://www.svgrepo.com/show/486865/support.svg' }}" alt="{{ badge_2_text | default: '24/7 Support' }}" width="{{ icon_size | default: '12' }}" height="{{ icon_size | default: '12' }}">
    {{ badge_2_text | default: '24/7 Support' }}
  </div>

  <!-- Badge 3 -->
  <div class="badge-item">
    <img src="{{ badge_3_icon | default: 'https://www.svgrepo.com/show/457232/return.svg' }}" alt="{{ badge_3_text | default: '30 Days Return' }}" width="{{ icon_size | default: '12' }}" height="{{ icon_size | default: '12' }}">
    {{ badge_3_text | default: '30 Days Return' }}
  </div>

  {% style %}
  :root {
    /* Container settings */
    --gap-between-badges: {{ badge_gap | default: '5px' }};

    /* Badge item settings */
    --badge-padding: {{ badge_padding | default: '3px 7px' }};
    --badge-border-radius: {{ badge_border_radius | default: '12px' }};
    --badge-font-size: {{ badge_font_size | default: '10px' }};
    --badge-font-weight: {{ badge_font_weight | default: 'bold' }};
    --badge-text-color: {{ badge_text_color | default: '#000000' }};
    --badge-background-color: {{ badge_background_color | default: 'rgba(0, 0, 0, 0.05)' }};
    
    /* Icon settings */
    --icon-brightness: {{ icon_brightness | default: '0.5' }};
  }

  .badge-container {
    display: flex;
    gap: var(--gap-between-badges);
    flex-wrap: wrap;
  }

  .badge-item {
    display: flex;
    align-items: center;
    padding: var(--badge-padding);
    border-radius: var(--badge-border-radius);
    font-size: var(--badge-font-size);
    font-weight: var(--badge-font-weight);
    color: var(--badge-text-color);
    background-color: var(--badge-background-color);
  }

  .badge-item img {
    margin-right: 3px;
    filter: brightness(var(--icon-brightness));
  }
  {% endstyle %}
</div>`,
  customizationOptions: [
    {
      id: 'badge_1_text',
      label: 'Badge 1 Text',
      type: 'text',
      defaultValue: 'Fast Shipping'
    },
    {
      id: 'badge_2_text',
      label: 'Badge 2 Text',
      type: 'text',
      defaultValue: '24/7 Support'
    },
    {
      id: 'badge_3_text',
      label: 'Badge 3 Text',
      type: 'text',
      defaultValue: '30 Days Return'
    },
    {
      id: 'badge_1_icon',
      label: 'Badge 1 Icon URL',
      type: 'text',
      defaultValue: 'https://www.svgrepo.com/show/474295/plane.svg'
    },
    {
      id: 'badge_2_icon',
      label: 'Badge 2 Icon URL',
      type: 'text',
      defaultValue: 'https://www.svgrepo.com/show/486865/support.svg'
    },
    {
      id: 'badge_3_icon',
      label: 'Badge 3 Icon URL',
      type: 'text',
      defaultValue: 'https://www.svgrepo.com/show/457232/return.svg'
    },
    {
      id: 'badge_gap',
      label: 'Gap Between Badges',
      type: 'text',
      defaultValue: '5px'
    },
    {
      id: 'badge_padding',
      label: 'Badge Padding',
      type: 'text',
      defaultValue: '3px 7px'
    },
    {
      id: 'badge_border_radius',
      label: 'Badge Border Radius',
      type: 'text',
      defaultValue: '12px'
    },
    {
      id: 'badge_font_size',
      label: 'Badge Font Size',
      type: 'text',
      defaultValue: '10px'
    },
    {
      id: 'badge_font_weight',
      label: 'Badge Font Weight',
      type: 'text',
      defaultValue: 'bold'
    },
    {
      id: 'badge_text_color',
      label: 'Badge Text Color',
      type: 'color',
      defaultValue: '#000000'
    },
    {
      id: 'badge_background_color',
      label: 'Badge Background Color',
      type: 'color',
      defaultValue: 'rgba(0, 0, 0, 0.05)'
    },
    {
      id: 'icon_size',
      label: 'Icon Size',
      type: 'text',
      defaultValue: '12'
    },
    {
      id: 'icon_brightness',
      label: 'Icon Brightness',
      type: 'text',
      defaultValue: '0.5'
    }
  ]
};