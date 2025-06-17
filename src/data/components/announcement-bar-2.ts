import { ComponentWithCustomization } from '../../types';

export const announcementBar2: ComponentWithCustomization = {
  id: 'announcement-bar-2',
  title: 'Announcement Bar 3',
  description: 'Display announcements with blinking dot indicator',
  category: 'Promotions',
  tags: ['announcement', 'banner', 'notification'],
  code: `<div class="announcement-bar">
  <p>{{ announcement_text | default: 'Order by Mar. 25th for guaranteed FREE GIFTS' }}</p>

  {% style %}
  :root {
    --background-color: {{ background_color | default: '#fff5f5' }};
    --border-color: {{ border_color | default: '#ff9999' }};
    --text-color: {{ text_color | default: '#333333' }};
    --font-family: {{ font_family | default: 'Arial, sans-serif' }};
    --font-size: {{ font_size | default: '8px' }};
    --font-weight: {{ font_weight | default: 'bold' }};
    --padding: {{ padding | default: '8px 16px' }};
    --border-radius: {{ border_radius | default: '5px' }};
    --max-width: {{ max_width | default: '1200px' }};
    
    /* Mobile Settings */
    --mobile-font-size: {{ mobile_font_size | default: '14px' }};
    --mobile-padding: {{ mobile_padding | default: '6px 12px' }};
    --mobile-border-radius: {{ mobile_border_radius | default: '4px' }};
    
    --small-font-size: {{ small_font_size | default: '12px' }};
    --small-padding: {{ small_padding | default: '4px 8px' }};
    --small-border-radius: {{ small_border_radius | default: '3px' }};
    
    /* Blinking dot */
    --dot-color: {{ dot_color | default: '#ff9999' }};
    --dot-size: {{ dot_size | default: '10px' }};
    --dot-margin-right: {{ dot_margin_right | default: '8px' }};
    --mobile-dot-size: {{ mobile_dot_size | default: '8px' }};
    --mobile-dot-margin-right: {{ mobile_dot_margin_right | default: '6px' }};
    --small-dot-size: {{ small_dot_size | default: '6px' }};
    --small-dot-margin-right: {{ small_dot_margin_right | default: '5px' }};
  }

  .announcement-bar {
    background-color: var(--background-color);
    border: 1px dashed var(--border-color);
    border-radius: var(--border-radius);
    padding: var(--padding);
    text-align: center;
    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    color: var(--text-color);
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    max-width: var(--max-width);
  }

  .announcement-bar p {
    margin: 0;
    display: inline-flex;
    align-items: center;
    line-height: 1.5;
  }

  .announcement-bar p::before {
    content: "";
    display: inline-block;
    width: var(--dot-size);
    height: var(--dot-size);
    background-color: var(--dot-color);
    border-radius: 50%;
    margin-right: var(--dot-margin-right);
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }

  /* Tablet */
  @media (max-width: 768px) {
    .announcement-bar {
      padding: var(--mobile-padding);
      font-size: var(--mobile-font-size);
      border-radius: var(--mobile-border-radius);
    }
    .announcement-bar p::before {
      width: var(--mobile-dot-size);
      height: var(--mobile-dot-size);
      margin-right: var(--mobile-dot-margin-right);
    }
  }

  /* Mobile */
  @media (max-width: 480px) {
    .announcement-bar {
      padding: var(--small-padding);
      font-size: var(--small-font-size);
      border-radius: var(--small-border-radius);
    }
    .announcement-bar p::before {
      width: var(--small-dot-size);
      height: var(--small-dot-size);
      margin-right: var(--small-dot-margin-right);
    }
  }
  {% endstyle %}
</div>`,
  customizationOptions: [
    {
      id: 'announcement_text',
      label: 'Announcement Text',
      type: 'text',
      defaultValue: 'Order by Mar. 25th for guaranteed FREE GIFTS'
    },
    {
      id: 'background_color',
      label: 'Background Color',
      type: 'color',
      defaultValue: '#fff5f5'
    },
    {
      id: 'border_color',
      label: 'Border Color',
      type: 'color',
      defaultValue: '#ff9999'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#333333'
    },
    {
      id: 'dot_color',
      label: 'Dot Color',
      type: 'color',
      defaultValue: '#ff9999'
    },
    {
      id: 'font_size',
      label: 'Font Size',
      type: 'text',
      defaultValue: '8px'
    },
    {
      id: 'font_weight',
      label: 'Font Weight',
      type: 'text',
      defaultValue: 'bold'
    },
    {
      id: 'padding',
      label: 'Padding',
      type: 'text',
      defaultValue: '8px 16px'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '5px'
    },
    {
      id: 'max_width',
      label: 'Max Width',
      type: 'text',
      defaultValue: '1200px'
    },
    {
      id: 'dot_size',
      label: 'Dot Size',
      type: 'text',
      defaultValue: '10px'
    },
    {
      id: 'dot_margin_right',
      label: 'Dot Margin Right',
      type: 'text',
      defaultValue: '8px'
    }
  ]
};