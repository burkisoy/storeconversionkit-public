import { ComponentWithCustomization } from '../../types';

export const gradientText: ComponentWithCustomization = {
  id: 'gradient-text',
  title: 'Gradient Text',
  description: 'Beautiful gradient text with customizable colors and styling',
  category: 'Typography',
  tags: ['text', 'gradient', 'heading'],
  code: `<div class="container page-width">
  <h2 class="gradient-title">
    {{ title_text | default: 'Gradient text title goes here' }}
  </h2>
</div>

<style>
:root {
  --gradient-color-1: {{ gradient_color_1 | default: '#1cbcc3' }};
  --gradient-color-2: {{ gradient_color_2 | default: '#4abf8f' }};
  --gradient-angle: {{ gradient_angle | default: '45deg' }};
  --title-font-size: {{ title_font_size | default: '25px' }};
}

.gradient-title {
  background-image: linear-gradient(var(--gradient-angle), var(--gradient-color-1), var(--gradient-color-1), var(--gradient-color-2), var(--gradient-color-2) 80%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  font-weight: {{ font_weight | default: '900' }};
  text-align: center;
  font-size: var(--title-font-size);
  padding: {{ padding | default: '20px 0' }};
  margin: {{ margin | default: '0' }};
}

.container.page-width {
  max-width: {{ container_width | default: '1200px' }};
  margin: 0 auto;
  padding: {{ container_padding | default: '0 20px' }};
}
</style>`,
  customizationOptions: [
    {
      id: 'title_text',
      label: 'Title Text',
      type: 'text',
      defaultValue: 'Gradient text title goes here'
    },
    {
      id: 'gradient_color_1',
      label: 'First Gradient Color',
      type: 'color',
      defaultValue: '#1cbcc3'
    },
    {
      id: 'gradient_color_2',
      label: 'Second Gradient Color',
      type: 'color',
      defaultValue: '#4abf8f'
    },
    {
      id: 'gradient_angle',
      label: 'Gradient Angle',
      type: 'text',
      defaultValue: '45deg'
    },
    {
      id: 'title_font_size',
      label: 'Font Size',
      type: 'text',
      defaultValue: '25px'
    },
    {
      id: 'font_weight',
      label: 'Font Weight',
      type: 'text',
      defaultValue: '900'
    },
    {
      id: 'padding',
      label: 'Title Padding',
      type: 'text',
      defaultValue: '20px 0'
    },
    {
      id: 'margin',
      label: 'Title Margin',
      type: 'text',
      defaultValue: '0'
    },
    {
      id: 'container_width',
      label: 'Container Width',
      type: 'text',
      defaultValue: '1200px'
    },
    {
      id: 'container_padding',
      label: 'Container Padding',
      type: 'text',
      defaultValue: '0 20px'
    }
  ]
};