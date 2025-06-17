import { ComponentWithCustomization } from '../../types';

export const paymentMethods: ComponentWithCustomization = {
  id: 'payment-methods',
  title: 'Payment Methods',
  description: 'Display accepted payment methods',
  category: 'Trust',
  tags: ['payment', 'trust', 'checkout'],
  free: true,
  code: `<link rel="preload" as="image" href="https://raw.githubusercontent.com/activemerchant/payment_icons/refs/heads/master/app/assets/images/payment_icons/visa.svg"/>
<link rel="preload" as="image" href="https://raw.githubusercontent.com/activemerchant/payment_icons/refs/heads/master/app/assets/images/payment_icons/master.svg"/>
<link rel="preload" as="image" href="https://raw.githubusercontent.com/activemerchant/payment_icons/refs/heads/master/app/assets/images/payment_icons/american_express.svg"/>
<link rel="preload" as="image" href="https://raw.githubusercontent.com/activemerchant/payment_icons/refs/heads/master/app/assets/images/payment_icons/paypal.svg"/>
<link rel="preload" as="image" href="https://raw.githubusercontent.com/activemerchant/payment_icons/refs/heads/master/app/assets/images/payment_icons/apple_pay.svg"/>

<div style="margin-top:{{ margin_top | default: '0.25rem' }};margin-bottom:{{ margin_bottom | default: '0.25rem' }};width:100%">
  <div style="
    display: flex;
    align-items: center;
    justify-content: {{ alignment | default: 'center' }};
    width: 100%;
    gap: {{ gap | default: '6px' }};
    padding: {{ padding | default: '12px' }};
    background: {{ background_color | default: 'transparent' }};
    border-radius: {{ border_radius | default: '8px' }};
  ">
    <img src="https://raw.githubusercontent.com/activemerchant/payment_icons/refs/heads/master/app/assets/images/payment_icons/visa.svg" alt="Visa" style="height:{{ icon_height | default: '28px' }};width:auto;filter:{{ icon_filter | default: 'none' }}"/>
    <img src="https://raw.githubusercontent.com/activemerchant/payment_icons/refs/heads/master/app/assets/images/payment_icons/master.svg" alt="Mastercard" style="height:{{ icon_height | default: '28px' }};width:auto;filter:{{ icon_filter | default: 'none' }}"/>
    <img src="https://raw.githubusercontent.com/activemerchant/payment_icons/refs/heads/master/app/assets/images/payment_icons/american_express.svg" alt="American Express" style="height:{{ icon_height | default: '28px' }};width:auto;filter:{{ icon_filter | default: 'none' }}"/>
    <img src="https://raw.githubusercontent.com/activemerchant/payment_icons/refs/heads/master/app/assets/images/payment_icons/paypal.svg" alt="PayPal" style="height:{{ icon_height | default: '28px' }};width:auto;filter:{{ icon_filter | default: 'none' }}"/>
    <img src="https://raw.githubusercontent.com/activemerchant/payment_icons/refs/heads/master/app/assets/images/payment_icons/apple_pay.svg" alt="Apple Pay" style="height:{{ icon_height | default: '28px' }};width:auto;filter:{{ icon_filter | default: 'none' }}"/>
  </div>
</div>`,
  customizationOptions: [
    {
      id: 'alignment',
      label: 'Alignment',
      type: 'select',
      defaultValue: 'center',
      options: [
        { value: 'flex-start', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'flex-end', label: 'Right' },
        { value: 'space-between', label: 'Space Between' }
      ]
    },
    {
      id: 'background_color',
      label: 'Background Color',
      type: 'color',
      defaultValue: 'transparent'
    },
    {
      id: 'icon_height',
      label: 'Icon Height',
      type: 'text',
      defaultValue: '28px'
    },
    {
      id: 'gap',
      label: 'Gap Between Icons',
      type: 'text',
      defaultValue: '6px'
    },
    {
      id: 'padding',
      label: 'Padding',
      type: 'text',
      defaultValue: '12px'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '8px'
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
      defaultValue: '0.25rem'
    },
    {
      id: 'icon_filter',
      label: 'Icon Filter',
      type: 'select',
      defaultValue: 'none',
      options: [
        { value: 'none', label: 'None' },
        { value: 'grayscale(100%)', label: 'Grayscale' },
        { value: 'brightness(0)', label: 'Black' },
        { value: 'brightness(0) invert(1)', label: 'White' }
      ]
    }
  ]
};