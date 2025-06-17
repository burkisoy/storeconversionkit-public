import { ComponentWithCustomization } from '../../types';

export const peopleWatching: ComponentWithCustomization = {
  id: 'people-watching',
  title: 'People Watching',
  description: 'Show how many people are viewing the product',
  category: 'FOMO',
  tags: ['social proof', 'fomo', 'watching'],
  stars: 1,
  code: `<div class="watching-box">
  <div class="watching-icon">
    <div class="circle">
      <div class="inner-circle"></div>
    </div>
  </div>
  <span class="watching-text">
    <strong>{{ people_count | default: '154' }} People</strong> {{ watching_text | default: 'are watching this product' }}
  </span>
</div>

{% style %}
.watching-box {
  display: flex;
  align-items: center;
  background: {{ background_color | default: '#ffffff' }};
  padding: {{ padding | default: '6px 12px' }};
  border-radius: {{ border_radius | default: '16px' }};
  box-shadow: {{ box_shadow | default: '0px 2px 6px rgba(0, 0, 0, 0.1)' }};
  font-family: Arial, sans-serif;
  font-size: {{ font_size | default: '14px' }};
  color: {{ text_color | default: '#333' }};
  font-weight: 400;
  max-width: fit-content;
  margin: auto;
}

.watching-icon {
  display: flex;
  align-items: center;
  margin-right: {{ icon_margin | default: '6px' }};
}

.circle {
  width: {{ circle_size | default: '16px' }};
  height: {{ circle_size | default: '16px' }};
  border-radius: 50%;
  border: 2px solid {{ circle_color | default: '#8dc3e6' }};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 1.5s infinite;
}

.inner-circle {
  width: {{ inner_circle_size | default: '8px' }};
  height: {{ inner_circle_size | default: '8px' }};
  border-radius: 50%;
  background: {{ circle_color | default: '#8dc3e6' }};
  animation: pulse-inner 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes pulse-inner {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.watching-text {
  font-size: {{ font_size | default: '14px' }};
  color: {{ text_color | default: '#222' }};
}

.watching-text strong {
  font-weight: bold;
}
{% endstyle %}`,
  customizationOptions: [
    {
      id: 'people_count',
      label: 'Number of People',
      type: 'text',
      defaultValue: '154'
    },
    {
      id: 'watching_text',
      label: 'Watching Text',
      type: 'text',
      defaultValue: 'are watching this product'
    },
    {
      id: 'background_color',
      label: 'Background Color',
      type: 'color',
      defaultValue: '#ffffff'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#333'
    },
    {
      id: 'circle_color',
      label: 'Circle Color',
      type: 'color',
      defaultValue: '#8dc3e6'
    },
    {
      id: 'padding',
      label: 'Padding',
      type: 'text',
      defaultValue: '6px 12px'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '16px'
    },
    {
      id: 'box_shadow',
      label: 'Box Shadow',
      type: 'text',
      defaultValue: '0px 2px 6px rgba(0, 0, 0, 0.1)'
    },
    {
      id: 'font_size',
      label: 'Font Size',
      type: 'text',
      defaultValue: '14px'
    },
    {
      id: 'circle_size',
      label: 'Circle Size',
      type: 'text',
      defaultValue: '16px'
    },
    {
      id: 'inner_circle_size',
      label: 'Inner Circle Size',
      type: 'text',
      defaultValue: '8px'
    },
    {
      id: 'icon_margin',
      label: 'Icon Margin',
      type: 'text',
      defaultValue: '6px'
    }
  ]
};