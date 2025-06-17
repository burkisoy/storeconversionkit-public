import { ComponentWithCustomization } from '../../types';

export const announcementBar: ComponentWithCustomization = {
  id: 'announcement-bar',
  title: 'Scrolling Announcement Bar 2',
  description: 'Animated announcement bar with scrolling text',
  category: 'Promotions',
  tags: ['announcement', 'banner', 'scroll'],
  stars: 2,
  code: `<div class="unique-announcement-bar-v1">
  <span class="helps-with-text">{{ header_text | default: 'NO MORE' }}</span>
  <div class="unique-announcement-wrapper-v1">
    {% assign messages = "LESS TANGLES,LESS ACNES,IRRITATED SKIN,PSORIASIS,HARD WATER" | split: "," %}
    {% for i in (1..6) %}
      {% for message in messages %}
        <div class="unique-announcement-text-v1">{{ message }}</div>
        <div class="unique-announcement-text-v1"> - </div>
      {% endfor %}
    {% endfor %}
  </div>
</div>

{% style %}
.unique-announcement-bar-v1 {
  width: 100%;
  padding: {{ padding | default: '20px 0' }};
  overflow: hidden;
  position: relative;
  border: {{ border | default: '1px solid #2e2f3c' }};
  border-left: none;
  border-right: none;
  background-color: {{ background_color | default: '#f9f9f9' }};
  justify-content: center;
  align-items: center;
}

.helps-with-text {
  text-align: center;
  font-weight: {{ header_font_weight | default: '500' }};
  color: {{ header_color | default: '#2e2f3c' }};
  margin-bottom: {{ header_margin | default: '15px' }};
  font-size: {{ header_font_size | default: '16px' }};
  width: 100%;
  display: inline-flex;
  justify-content: center;
}

.unique-announcement-wrapper-v1 {
  display: flex;
  white-space: nowrap;
  animation: scroll-left {{ scroll_duration | default: '15' }}s linear infinite;
}

.unique-announcement-text-v1 {
  color: {{ text_color | default: '#2e2f3c' }};
  font-size: {{ text_font_size | default: '20px' }};
  font-weight: {{ text_font_weight | default: 'bold' }};
  margin-right: {{ text_spacing | default: '25px' }};
  letter-spacing: {{ letter_spacing | default: '-0.5px' }};
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@media (max-width: 768px) {
  .unique-announcement-wrapper-v1 {
    animation: scroll-left {{ mobile_scroll_duration | default: '12' }}s linear infinite;
  }
  .unique-announcement-text-v1 {
    font-size: {{ mobile_text_font_size | default: '20px' }};
  }
  .helps-with-text {
    font-size: {{ mobile_header_font_size | default: '16px' }};
  }
}
{% endstyle %}`,
  customizationOptions: [
    {
      id: 'header_text',
      label: 'Header Text',
      type: 'text',
      defaultValue: 'NO MORE'
    },
    {
      id: 'background_color',
      label: 'Background Color',
      type: 'color',
      defaultValue: '#f9f9f9'
    },
    {
      id: 'header_color',
      label: 'Header Text Color',
      type: 'color',
      defaultValue: '#2e2f3c'
    },
    {
      id: 'text_color',
      label: 'Scrolling Text Color',
      type: 'color',
      defaultValue: '#2e2f3c'
    },
    {
      id: 'border',
      label: 'Border',
      type: 'text',
      defaultValue: '1px solid #2e2f3c'
    },
    {
      id: 'padding',
      label: 'Padding',
      type: 'text',
      defaultValue: '20px 0'
    },
    {
      id: 'header_font_size',
      label: 'Header Font Size',
      type: 'text',
      defaultValue: '16px'
    },
    {
      id: 'header_font_weight',
      label: 'Header Font Weight',
      type: 'text',
      defaultValue: '500'
    },
    {
      id: 'header_margin',
      label: 'Header Margin Bottom',
      type: 'text',
      defaultValue: '15px'
    },
    {
      id: 'text_font_size',
      label: 'Text Font Size',
      type: 'text',
      defaultValue: '20px'
    },
    {
      id: 'text_font_weight',
      label: 'Text Font Weight',
      type: 'text',
      defaultValue: 'bold'
    },
    {
      id: 'text_spacing',
      label: 'Text Spacing',
      type: 'text',
      defaultValue: '25px'
    },
    {
      id: 'letter_spacing',
      label: 'Letter Spacing',
      type: 'text',
      defaultValue: '-0.5px'
    },
    {
      id: 'scroll_duration',
      label: 'Scroll Duration (s)',
      type: 'text',
      defaultValue: '15'
    },
    {
      id: 'mobile_scroll_duration',
      label: 'Mobile Scroll Duration (s)',
      type: 'text',
      defaultValue: '12'
    }
  ]
};