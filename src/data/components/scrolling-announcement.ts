import { ComponentWithCustomization } from '../../types';

export const scrollingAnnouncement: ComponentWithCustomization = {
  id: 'scrolling-announcement',
  title: 'Scrolling Announcement Bar',
  description: 'Animated announcement bar with scrolling text',
  category: 'Promotions',
  tags: ['announcement', 'banner', 'scroll'],
  free: true,
  code: `<div style="
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  color: white;
  padding: {{ padding | default: '4px 0px' }};
  will-change: transform;
  -webkit-font-smoothing: subpixel-antialiased;
  background: {{ background_color | default: '#f472b6' }}
">
  <div style="display: inline-block; animation: marquee {{ scroll_duration | default: '50' }}s linear infinite">
    <div style="
      display: flex;
      gap: {{ gap | default: '80px' }};
      font-weight: {{ font_weight | default: '500' }};
      font-size: {{ font_size | default: '14px' }};
      color: {{ text_color | default: '#ffffff' }}
    ">
      <div>{{ text_1 | default: '🎉 50% OFF YOUR FIRST ORDER' }}</div>
      <div>{{ text_2 | default: '🚚 FREE SHIPPING ON ALL ORDERS' }}</div>
      <div>{{ text_3 | default: '✅ 30 DAY MONEYBACK GUARANTEE' }}</div>
      <div>{{ text_1 | default: '🎉 50% OFF YOUR FIRST ORDER' }}</div>
      <div>{{ text_2 | default: '🚚 FREE SHIPPING ON ALL ORDERS' }}</div>
      <div>{{ text_3 | default: '✅ 30 DAY MONEYBACK GUARANTEE' }}</div>
      <div>{{ text_1 | default: '🎉 50% OFF YOUR FIRST ORDER' }}</div>
      <div>{{ text_2 | default: '🚚 FREE SHIPPING ON ALL ORDERS' }}</div>
      <div>{{ text_3 | default: '✅ 30 DAY MONEYBACK GUARANTEE' }}</div>
    </div>
  </div>
</div>

<style>
  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
</style>`,
  customizationOptions: [
    {
      id: 'background_color',
      label: 'Background Color',
      type: 'color',
      defaultValue: '#f472b6'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#ffffff'
    },
    {
      id: 'text_1',
      label: 'First Text',
      type: 'text',
      defaultValue: '🎉 50% OFF YOUR FIRST ORDER'
    },
    {
      id: 'text_2',
      label: 'Second Text',
      type: 'text',
      defaultValue: '🚚 FREE SHIPPING ON ALL ORDERS'
    },
    {
      id: 'text_3',
      label: 'Third Text',
      type: 'text',
      defaultValue: '✅ 30 DAY MONEYBACK GUARANTEE'
    },
    {
      id: 'font_size',
      label: 'Font Size',
      type: 'text',
      defaultValue: '14px'
    },
    {
      id: 'font_weight',
      label: 'Font Weight',
      type: 'text',
      defaultValue: '500'
    },
    {
      id: 'gap',
      label: 'Gap Between Items',
      type: 'text',
      defaultValue: '80px'
    },
    {
      id: 'padding',
      label: 'Padding',
      type: 'text',
      defaultValue: '4px 0px'
    },
    {
      id: 'scroll_duration',
      label: 'Scroll Duration (seconds)',
      type: 'text',
      defaultValue: '50'
    }
  ]
};