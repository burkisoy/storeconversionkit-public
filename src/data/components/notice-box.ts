import { ComponentWithCustomization } from '../../types';

export const noticeBox: ComponentWithCustomization = {
  id: 'notice-box',
  title: 'Notice Box',
  description: 'Display warning notices with customizable styles',
  category: 'Trust',
  tags: ['notice', 'warning', 'trust'],
  free: true,
  code: `<div class="mody-page-container">
  <!-- Pink Warning Notice -->
  <div class="mody-alert-box mody-warning-message">
    {{ warning_text | default: 'BEWARE of cheap replicas - PilatesMove offers the only authentic and high-quality Pilates Board to ensure you get real results.' }}
  </div>

  {% style %}
  :root {
    --page-bg-color: {{ page_background_color | default: '#f5f5f5' }};
    --font-family: {{ font_family | default: 'Arial, sans-serif' }};
    --max-width: {{ max_width | default: '600px' }};
    --font-size: {{ font_size | default: '13px' }};
    --padding: {{ padding | default: '10px' }};
    --margin-bottom: {{ margin_bottom | default: '15px' }};
    --border-radius: {{ border_radius | default: '10px' }};
    --line-height: {{ line_height | default: '1.5' }};

    --warning-bg-color: {{ warning_background_color | default: '#fff0f0' }};
    --warning-border: {{ warning_border | default: '2px solid #ff9999' }};
    --warning-text-color: {{ warning_text_color | default: '#ff6666' }};
    
    --font-size-mobile: {{ font_size_mobile | default: '14px' }};
    --padding-mobile: {{ padding_mobile | default: '10px' }};

    --font-size-small: {{ font_size_small | default: '12px' }};
    --padding-small: {{ padding_small | default: '8px' }};
  }

  .mody-page-container {
    font-family: var(--font-family);
    margin: 0;
    padding: 20px;
    background-color: var(--page-bg-color);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mody-alert-box {
    width: 100%;
    max-width: var(--max-width);
    padding: var(--padding);
    margin-bottom: var(--margin-bottom);
    border-radius: var(--border-radius);
    box-sizing: border-box;
    font-size: var(--font-size);
    line-height: var(--line-height);
  }

  .mody-warning-message {
    background-color: var(--warning-bg-color);
    border: var(--warning-border);
    color: var(--warning-text-color);
  }

  @media (max-width: 768px) {
    .mody-alert-box {
      font-size: var(--font-size-mobile);
      padding: var(--padding-mobile);
    }
  }

  @media (max-width: 480px) {
    .mody-alert-box {
      font-size: var(--font-size-small);
      padding: var(--padding-small);
    }
  }
  {% endstyle %}
</div>`,
  customizationOptions: [
    {
      id: 'warning_text',
      label: 'Warning Text',
      type: 'text',
      defaultValue: 'BEWARE of cheap replicas - PilatesMove offers the only authentic and high-quality Pilates Board to ensure you get real results.'
    },
    {
      id: 'warning_background_color',
      label: 'Warning Background Color',
      type: 'color',
      defaultValue: '#fff0f0'
    },
    {
      id: 'warning_text_color',
      label: 'Warning Text Color',
      type: 'color',
      defaultValue: '#ff6666'
    },
    {
      id: 'warning_border',
      label: 'Warning Border',
      type: 'text',
      defaultValue: '2px solid #ff9999'
    },
    {
      id: 'font_size',
      label: 'Font Size',
      type: 'text',
      defaultValue: '13px'
    },
    {
      id: 'padding',
      label: 'Padding',
      type: 'text',
      defaultValue: '10px'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '10px'
    },
    {
      id: 'margin_bottom',
      label: 'Margin Bottom',
      type: 'text',
      defaultValue: '15px'
    },
    {
      id: 'line_height',
      label: 'Line Height',
      type: 'text',
      defaultValue: '1.5'
    },
    {
      id: 'max_width',
      label: 'Max Width',
      type: 'text',
      defaultValue: '600px'
    }
  ]
};