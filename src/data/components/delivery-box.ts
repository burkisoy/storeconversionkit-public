import { ComponentWithCustomization } from '../../types';

export const deliveryBox: ComponentWithCustomization = {
  id: 'delivery-box',
  title: 'Delivery Box',
  description: 'Display delivery information with customizable styles',
  category: 'Trust',
  tags: ['delivery', 'shipping', 'trust'],
  free: true,
  code: `<div class="delivery-box">
  <div class="text-wrapper">
    <div class="title">
      {{ delivery_title | default: "Free Delivery and Returns" }}
    </div>

    <div class="delivery-time">
      {{ delivery_subtext | default: "Free no contact delivery for all orders" }}<br />
      {{ delivery_time_text | default: 'Delivered in: <span>2 - 5 working days</span>' }}
    </div>
  </div>

  {% style %}
  :root {
    /* General settings */
    --border-color: {{ border_color | default: '#d4d4d4' }};
    --border-radius: {{ border_radius | default: '8px' }};
    --padding: {{ padding | default: '12px 15px' }};
    --background-color: {{ background_color | default: '#ffffff' }};
    --font-family: {{ font_family | default: 'Arial, sans-serif' }};
    
    /* Title settings */
    --title-font-size: {{ title_font_size | default: '14px' }};
    --title-font-color: {{ title_font_color | default: '#474747' }};
    --title-font-weight: {{ title_font_weight | default: 'bold' }};
    
    /* Subtext settings */
    --subtext-font-size: {{ subtext_font_size | default: '13px' }};
    --subtext-font-color: {{ subtext_font_color | default: '#474747' }};
    
    /* Highlight text (like delivery time) */
    --highlight-color: {{ highlight_color | default: '#039903' }};
  }

  .delivery-box {
    border: 2px solid var(--border-color);
    border-radius: var(--border-radius);
    padding: var(--padding);
    font-family: var(--font-family);
    background-color: var(--background-color);
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
  }

  .title {
    font-size: var(--title-font-size);
    font-weight: var(--title-font-weight);
    margin: 0;
    color: var(--title-font-color);
    line-height: 15px;
  }

  .delivery-time {
    font-size: var(--subtext-font-size);
    color: var(--subtext-font-color);
    line-height: 20px;
  }

  .delivery-time span {
    font-weight: bold;
    color: var(--highlight-color);
  }
  {% endstyle %}
</div>`,
  customizationOptions: [
    {
      id: 'delivery_title',
      label: 'Title',
      type: 'text',
      defaultValue: 'Free Delivery and Returns'
    },
    {
      id: 'delivery_subtext',
      label: 'Subtext',
      type: 'text',
      defaultValue: 'Free no contact delivery for all orders'
    },
    {
      id: 'delivery_time_text',
      label: 'Delivery Time Text',
      type: 'text',
      defaultValue: 'Delivered in: <span>2 - 5 working days</span>'
    },
    {
      id: 'border_color',
      label: 'Border Color',
      type: 'color',
      defaultValue: '#d4d4d4'
    },
    {
      id: 'background_color',
      label: 'Background Color',
      type: 'color',
      defaultValue: '#ffffff'
    },
    {
      id: 'title_font_color',
      label: 'Title Color',
      type: 'color',
      defaultValue: '#474747'
    },
    {
      id: 'subtext_font_color',
      label: 'Subtext Color',
      type: 'color',
      defaultValue: '#474747'
    },
    {
      id: 'highlight_color',
      label: 'Highlight Color',
      type: 'color',
      defaultValue: '#039903'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '8px'
    },
    {
      id: 'padding',
      label: 'Padding',
      type: 'text',
      defaultValue: '12px 15px'
    },
    {
      id: 'title_font_size',
      label: 'Title Font Size',
      type: 'text',
      defaultValue: '14px'
    },
    {
      id: 'subtext_font_size',
      label: 'Subtext Font Size',
      type: 'text',
      defaultValue: '13px'
    }
  ]
};