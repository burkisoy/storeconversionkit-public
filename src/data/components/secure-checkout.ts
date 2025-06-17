import { ComponentWithCustomization } from '../../types';

export const secureCheckout: ComponentWithCustomization = {
  id: 'secure-checkout',
  title: 'Secure Checkout Badge',
  description: 'Display a secure checkout badge with lock icon',
  category: 'Trust',
  tags: ['security', 'checkout', 'badge', 'trust'],
  free: true,
  code: `<div style="
  margin-top:{{ margin_top | default: '0.25rem' }};
  margin-bottom:{{ margin_bottom | default: '1rem' }};
  width:100%
">
  <div style="
    display:flex;
    align-items:center;
    justify-content:{{ alignment | default: 'center' }};
    width:100%;
    gap:{{ gap | default: '8px' }};
    font-weight:{{ font_weight | default: '500' }};
    font-size:{{ font_size | default: '14px' }}
  ">
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" style="
      color:{{ icon_color | default: '#172554' }};
      height:{{ icon_size | default: '16px' }};
      width:{{ icon_size | default: '16px' }}
    " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M376 192h-24v-46.7c0-52.7-42-96.5-94.7-97.3-53.4-.7-97.3 42.8-97.3 96v48h-24c-22 0-40 18-40 40v192c0 22 18 40 40 40h240c22 0 40-18 40-40V232c0-22-18-40-40-40zM270 316.8v68.8c0 7.5-5.8 14-13.3 14.4-8 .4-14.7-6-14.7-14v-69.2c-11.5-5.6-19.1-17.8-17.9-31.7 1.4-15.5 14.1-27.9 29.6-29 18.7-1.3 34.3 13.5 34.3 31.9 0 12.7-7.3 23.6-18 28.8zM324 192H188v-48c0-18.1 7.1-35.1 20-48s29.9-20 48-20 35.1 7.1 48 20 20 29.9 20 48v48z"></path>
    </svg>
    <div style="color:{{ text_color | default: '#172554' }}">{{ text | default: 'Safe & Secure Checkout' }}</div>
  </div>
</div>`,
  customizationOptions: [
    {
      id: 'text',
      label: 'Badge Text',
      type: 'text',
      defaultValue: 'Safe & Secure Checkout'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#172554'
    },
    {
      id: 'icon_color',
      label: 'Icon Color',
      type: 'color',
      defaultValue: '#172554'
    },
    {
      id: 'icon_size',
      label: 'Icon Size',
      type: 'text',
      defaultValue: '16px'
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
      label: 'Gap',
      type: 'text',
      defaultValue: '8px'
    },
    {
      id: 'alignment',
      label: 'Alignment',
      type: 'select',
      defaultValue: 'center',
      options: [
        { value: 'flex-start', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'flex-end', label: 'Right' }
      ]
    },
    {
      id: 'margin_top',
      label: 'Margin Top',
      type: 'text',
      defaultValue: '0.25rem'
    },
    {
      id: 'margin_bottom',
      label: 'Margin Bottom',
      type: 'text',
      defaultValue: '1rem'
    }
  ]
};