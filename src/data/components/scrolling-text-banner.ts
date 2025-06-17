import { ComponentWithCustomization } from '../../types';

export const scrollingTextBanner: ComponentWithCustomization = {
  id: 'scrolling-text-banner',
  title: 'Scrolling Text Banner',
  description: 'Display a scrolling text banner with emojis and custom text',
  category: 'Promotions',
  tags: ['banner', 'scrolling', 'text', 'marquee'],
  free: false,
  code: `<div style="
  overflow: hidden; 
  box-sizing: border-box; 
  width: 100%; 
  padding: {{ padding | default: '8px 0' }}; 
  background: {{ background_color | default: '#ffffff' }}; 
  border-top: {{ border_top | default: '2px solid #000000' }}; 
  border-bottom: {{ border_bottom | default: '2px solid #000000' }};
">
  <div style="
    display: flex; 
    width: max-content; 
    animation: marquee-loop {{ animation_duration | default: '30' }}s linear infinite; 
    font-weight: {{ font_weight | default: '700' }}; 
    font-size: {{ font_size | default: '20px' }}; 
    color: {{ text_color | default: '#000000' }}; 
    font-family: {{ font_family | default: '-apple-system, BlinkMacSystemFont, sans-serif' }}; 
    gap: {{ gap | default: '40px' }};
  ">
    {% for i in (1..2) %}
      <div>{{ text_1 | default: 'USE EMOJIS' }}</div>
      <div>{{ emoji_1 | default: '🔥' }}</div>
      <div>{{ text_2 | default: 'USE EMOJIS' }}</div>
      <div>{{ emoji_2 | default: '🔥' }}</div>
      <div>{{ text_3 | default: 'USE EMOJIS' }}</div>
      <div>{{ emoji_3 | default: '🔥' }}</div>
      <div>{{ text_4 | default: 'USE EMOJIS' }}</div>
      <div>{{ emoji_4 | default: '🔥' }}</div>
      <div>{{ text_5 | default: 'USE EMOJIS' }}</div>
      <div>{{ emoji_5 | default: '🔥' }}</div>
    {% endfor %}
  </div>
</div>

<style>
  @keyframes marquee-loop {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
</style>`,
  customizationOptions: [
    {
      id: 'text_1',
      label: 'Text 1',
      type: 'text',
      defaultValue: 'USE EMOJIS'
    },
    {
      id: 'emoji_1',
      label: 'Emoji 1',
      type: 'text',
      defaultValue: '🔥'
    },
    {
      id: 'text_2',
      label: 'Text 2',
      type: 'text',
      defaultValue: 'USE EMOJIS'
    },
    {
      id: 'emoji_2',
      label: 'Emoji 2',
      type: 'text',
      defaultValue: '🔥'
    },
    {
      id: 'text_3',
      label: 'Text 3',
      type: 'text',
      defaultValue: 'USE EMOJIS'
    },
    {
      id: 'emoji_3',
      label: 'Emoji 3',
      type: 'text',
      defaultValue: '🔥'
    },
    {
      id: 'text_4',
      label: 'Text 4',
      type: 'text',
      defaultValue: 'USE EMOJIS'
    },
    {
      id: 'emoji_4',
      label: 'Emoji 4',
      type: 'text',
      defaultValue: '🔥'
    },
    {
      id: 'text_5',
      label: 'Text 5',
      type: 'text',
      defaultValue: 'USE EMOJIS'
    },
    {
      id: 'emoji_5',
      label: 'Emoji 5',
      type: 'text',
      defaultValue: '🔥'
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
      defaultValue: '#000000'
    },
    {
      id: 'font_size',
      label: 'Font Size',
      type: 'text',
      defaultValue: '20px'
    },
    {
      id: 'font_weight',
      label: 'Font Weight',
      type: 'text',
      defaultValue: '700'
    },
    {
      id: 'padding',
      label: 'Padding',
      type: 'text',
      defaultValue: '8px 0'
    },
    {
      id: 'gap',
      label: 'Gap Between Items',
      type: 'text',
      defaultValue: '40px'
    },
    {
      id: 'animation_duration',
      label: 'Animation Duration (seconds)',
      type: 'text',
      defaultValue: '30'
    },
    {
      id: 'border_top',
      label: 'Top Border',
      type: 'text',
      defaultValue: '2px solid #000000'
    },
    {
      id: 'border_bottom',
      label: 'Bottom Border',
      type: 'text',
      defaultValue: '2px solid #000000'
    },
    {
      id: 'font_family',
      label: 'Font Family',
      type: 'text',
      defaultValue: '-apple-system, BlinkMacSystemFont, sans-serif'
    }
  ]
};