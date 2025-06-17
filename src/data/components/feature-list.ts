import { ComponentWithCustomization } from '../../types';

export const featureList: ComponentWithCustomization = {
  id: 'feature-list',
  title: 'Feature List',
  description: 'Display product features with icons and hover effects',
  category: 'Product',
  tags: ['features', 'list', 'product'],
  code: `<div class="feature-container">
  <div class="feature-item">
    <img src="{{ feature_1_icon | default: 'https://www.svgrepo.com/show/507980/check-badge.svg' }}" alt="Check Icon" class="feature-icon">
    <div class="feature-text">{{ feature_1_text | default: "Easily Changeable 6 Different Heads" }}</div>
  </div>

  <div class="feature-item">
    <img src="{{ feature_2_icon | default: 'https://www.svgrepo.com/show/507980/check-badge.svg' }}" alt="Check Icon" class="feature-icon">
    <div class="feature-text">{{ feature_2_text | default: "Waterproof Charging Unit" }}</div>
  </div>

  <div class="feature-item">
    <img src="{{ feature_3_icon | default: 'https://www.svgrepo.com/show/507980/check-badge.svg' }}" alt="Check Icon" class="feature-icon">
    <div class="feature-text">{{ feature_3_text | default: "3.5 hours continuous operation time" }}</div>
  </div>

  {% style %}
  :root {
    --text-color: {{ text_color | default: '#333' }};
    --hover-bg-color: {{ hover_bg_color | default: '#f1f1f1' }};
    --highlight-color: {{ highlight_color | default: '#000' }};
    --transition-duration: {{ transition_duration | default: '0.3s' }};
    --font-family: {{ font_family | default: "'Helvetica Neue', Arial, sans-serif" }};
    --icon-size: {{ icon_size | default: '24px' }};
    --font-size: {{ font_size | default: '16px' }};
    --font-size-mobile: {{ font_size_mobile | default: '14px' }};
  }

  .feature-container {
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-family: var(--font-family);
    margin: 20px auto;
  }

  .feature-item {
    display: flex;
    align-items: center;
    padding: 5px 0;
    border-radius: 8px;
    transition: background-color var(--transition-duration), transform var(--transition-duration);
    cursor: default;
  }

  .feature-item:hover {
    background-color: var(--hover-bg-color);
    transform: translateX(10px);
  }

  .feature-icon {
    width: var(--icon-size);
    height: var(--icon-size);
    margin-right: 10px;
    transition: filter var(--transition-duration);
  }

  .feature-item:hover .feature-icon {
    filter: brightness(0) invert(0);
  }

  .feature-text {
    font-size: var(--font-size);
    color: var(--text-color);
    transition: color var(--transition-duration);
  }

  .feature-item:hover .feature-text {
    color: var(--highlight-color);
  }

  @media (max-width: 600px) {
    .feature-text {
      font-size: var(--font-size-mobile);
    }
  }
  {% endstyle %}
</div>`,
  customizationOptions: [
    {
      id: 'feature_1_text',
      label: 'Feature 1 Text',
      type: 'text',
      defaultValue: 'Easily Changeable 6 Different Heads'
    },
    {
      id: 'feature_2_text',
      label: 'Feature 2 Text',
      type: 'text',
      defaultValue: 'Waterproof Charging Unit'
    },
    {
      id: 'feature_3_text',
      label: 'Feature 3 Text',
      type: 'text',
      defaultValue: '3.5 hours continuous operation time'
    },
    {
      id: 'feature_1_icon',
      label: 'Feature 1 Icon URL',
      type: 'text',
      defaultValue: 'https://www.svgrepo.com/show/507980/check-badge.svg'
    },
    {
      id: 'feature_2_icon',
      label: 'Feature 2 Icon URL',
      type: 'text',
      defaultValue: 'https://www.svgrepo.com/show/507980/check-badge.svg'
    },
    {
      id: 'feature_3_icon',
      label: 'Feature 3 Icon URL',
      type: 'text',
      defaultValue: 'https://www.svgrepo.com/show/507980/check-badge.svg'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#333'
    },
    {
      id: 'hover_bg_color',
      label: 'Hover Background Color',
      type: 'color',
      defaultValue: '#f1f1f1'
    },
    {
      id: 'highlight_color',
      label: 'Highlight Color',
      type: 'color',
      defaultValue: '#000'
    },
    {
      id: 'icon_size',
      label: 'Icon Size',
      type: 'text',
      defaultValue: '24px'
    },
    {
      id: 'font_size',
      label: 'Font Size',
      type: 'text',
      defaultValue: '16px'
    },
    {
      id: 'font_size_mobile',
      label: 'Mobile Font Size',
      type: 'text',
      defaultValue: '14px'
    },
    {
      id: 'transition_duration',
      label: 'Transition Duration',
      type: 'text',
      defaultValue: '0.3s'
    }
  ]
};