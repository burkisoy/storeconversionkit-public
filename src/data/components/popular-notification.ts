import { ComponentWithCustomization } from '../../types';

export const popularNotification: ComponentWithCustomization = {
  id: 'popular-notification',
  title: 'Popular Product Notification',
  description: 'Display real-time product popularity with animated counter',
  category: 'FOMO',
  tags: ['notification', 'counter', 'fomo', 'social proof'],
  code: `<div class="popular-notification">
  <div class="icon-wrapper">
    {{ notification_icon | default: "👀" }}
  </div>
  <div>
    {{ notification_text_start | default: "Popular product! In the last 24 hours," }}
    <span class="highlighted-number" id="view-count">
      {{ notification_count | default: "6,269 people" }}
    </span>
    {{ notification_text_end | default: "viewed it!" }}
  </div>

  {% style %}
  :root {
    --font-family: {{ notification_font_family | default: 'Arial, sans-serif' }};
    --font-size: {{ notification_font_size | default: '14px' }};
    --text-color: {{ notification_text_color | default: '#333' }};
    --icon-size: {{ icon_size | default: '24px' }};
    --highlight-color: {{ highlight_color | default: '#5f4b8b' }};
    --font-weight-highlight: {{ highlight_weight | default: 'bold' }};
    --animation-duration: {{ animation_duration | default: '1.5s' }};
    --padding: {{ notification_padding | default: '10px' }};
    --border-radius: {{ notification_radius | default: '5px' }};
    --background-color: {{ background_color | default: '#ffffff' }};
    --box-shadow: {{ box_shadow | default: '0 1px 2px rgba(0, 0, 0, 0.05)' }};
  }

  .popular-notification {
    font-family: var(--font-family);
    font-size: var(--font-size);
    color: var(--text-color);
    display: flex;
    align-items: center;
    padding: var(--padding);
    border-radius: var(--border-radius);
    background-color: var(--background-color);
    box-shadow: var(--box-shadow);
  }

  .icon-wrapper {
    margin-right: 8px;
    font-size: var(--icon-size);
    animation: bounce-icon var(--animation-duration) infinite;
  }

  .highlighted-number {
    color: var(--highlight-color);
    font-weight: var(--font-weight-highlight);
  }

  @keyframes bounce-icon {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
  {% endstyle %}
</div>

<script>
function animateValue(id, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start).toLocaleString();
    document.getElementById(id).innerText = \`\${value} people\`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", function() {
  animateValue("view-count", 0, {{ notification_animated_number | default: 6269 }}, {{ animation_duration_ms | default: 5000 }});
});
</script>`,
  customizationOptions: [
    {
      id: 'notification_icon',
      label: 'Notification Icon',
      type: 'text',
      defaultValue: '👀'
    },
    {
      id: 'notification_text_start',
      label: 'Text Start',
      type: 'text',
      defaultValue: 'Popular product! In the last 24 hours,'
    },
    {
      id: 'notification_count',
      label: 'View Count',
      type: 'text',
      defaultValue: '6,269 people'
    },
    {
      id: 'notification_text_end',
      label: 'Text End',
      type: 'text',
      defaultValue: 'viewed it!'
    },
    {
      id: 'notification_font_size',
      label: 'Font Size',
      type: 'text',
      defaultValue: '14px'
    },
    {
      id: 'notification_text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#333'
    },
    {
      id: 'icon_size',
      label: 'Icon Size',
      type: 'text',
      defaultValue: '24px'
    },
    {
      id: 'highlight_color',
      label: 'Highlight Color',
      type: 'color',
      defaultValue: '#5f4b8b'
    },
    {
      id: 'highlight_weight',
      label: 'Highlight Font Weight',
      type: 'text',
      defaultValue: 'bold'
    },
    {
      id: 'animation_duration',
      label: 'Animation Duration',
      type: 'text',
      defaultValue: '1.5s'
    },
    {
      id: 'notification_padding',
      label: 'Padding',
      type: 'text',
      defaultValue: '10px'
    },
    {
      id: 'notification_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '5px'
    },
    {
      id: 'background_color',
      label: 'Background Color',
      type: 'color',
      defaultValue: '#ffffff'
    },
    {
      id: 'box_shadow',
      label: 'Box Shadow',
      type: 'text',
      defaultValue: '0 1px 2px rgba(0, 0, 0, 0.05)'
    },
    {
      id: 'notification_animated_number',
      label: 'Animated Number',
      type: 'text',
      defaultValue: '6269'
    },
    {
      id: 'animation_duration_ms',
      label: 'Animation Duration (ms)',
      type: 'text',
      defaultValue: '5000'
    }
  ]
};