import { ComponentWithCustomization } from '../../types';

export const shippingBadge: ComponentWithCustomization = {
  id: 'shipping-badge',
  title: 'Premium Shipping Badge',
  description: 'Display shipping information with estimated delivery date and free shipping status',
  category: 'Trust',
  tags: ['shipping', 'delivery', 'badge', 'trust'],
  code: `<div style="
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: {{ background_color | default: '#ffffff' }};
  border-radius: {{ border_radius | default: '9999px' }};
  padding: {{ padding | default: '8px 20px' }};
  box-shadow: {{ box_shadow | default: '0 2px 8px rgba(0,0,0,0.1)' }};
  font-family: {{ font_family | default: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" }};
  font-size: {{ font_size | default: '14px' }};
  color: {{ text_color | default: '#222222' }};
  gap: {{ gap | default: '25px' }};
  width: fit-content;
  margin: 0 auto;
">
  <div style="
    display: flex;
    align-items: center;
    gap: {{ item_gap | default: '8px' }};
    white-space: nowrap;
  ">
    <div style="
      width: {{ dot_size | default: '10px' }};
      height: {{ dot_size | default: '10px' }};
      background-color: {{ dot_color | default: '#00c851' }};
      border-radius: 50%;
      flex-shrink: 0;
    "></div>
    <div>Ships by <span style="font-weight: {{ bold_weight | default: '600' }};">{{ delivery_date | default: 'Wed, April 27' }}</span></div>
  </div>
  <div style="
    display: flex;
    align-items: center;
    gap: {{ item_gap | default: '8px' }};
    white-space: nowrap;
  ">
    <img 
      src="{{ flag_url | default: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg' }}"
      alt="{{ flag_alt | default: 'US Flag' }}"
      style="
        width: {{ flag_size | default: '18px' }};
        height: {{ flag_size | default: '18px' }};
        border-radius: 50%;
        object-fit: cover;
        flex-shrink: 0;
      "
    >
    <div><span style="font-weight: {{ bold_weight | default: '600' }};">{{ shipping_text | default: 'FREE' }}</span> {{ country_text | default: 'US Shipping' }}</div>
  </div>
</div>`,
  customizationOptions: [
    {
      id: 'delivery_date',
      label: 'Delivery Date',
      type: 'text',
      defaultValue: 'Wed, April 27'
    },
    {
      id: 'shipping_text',
      label: 'Shipping Text',
      type: 'text',
      defaultValue: 'FREE'
    },
    {
      id: 'country_text',
      label: 'Country Text',
      type: 'text',
      defaultValue: 'US Shipping'
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
      defaultValue: '#222222'
    },
    {
      id: 'dot_color',
      label: 'Dot Color',
      type: 'color',
      defaultValue: '#00c851'
    },
    {
      id: 'dot_size',
      label: 'Dot Size',
      type: 'text',
      defaultValue: '10px'
    },
    {
      id: 'flag_size',
      label: 'Flag Size',
      type: 'text',
      defaultValue: '18px'
    },
    {
      id: 'font_size',
      label: 'Font Size',
      type: 'text',
      defaultValue: '14px'
    },
    {
      id: 'bold_weight',
      label: 'Bold Text Weight',
      type: 'text',
      defaultValue: '600'
    },
    {
      id: 'padding',
      label: 'Padding',
      type: 'text',
      defaultValue: '8px 20px'
    },
    {
      id: 'gap',
      label: 'Gap Between Items',
      type: 'text',
      defaultValue: '25px'
    },
    {
      id: 'item_gap',
      label: 'Gap Inside Items',
      type: 'text',
      defaultValue: '8px'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '9999px'
    },
    {
      id: 'box_shadow',
      label: 'Box Shadow',
      type: 'text',
      defaultValue: '0 2px 8px rgba(0,0,0,0.1)'
    },
    {
      id: 'flag_url',
      label: 'Flag Image URL',
      type: 'text',
      defaultValue: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg'
    },
    {
      id: 'flag_alt',
      label: 'Flag Alt Text',
      type: 'text',
      defaultValue: 'US Flag'
    }
  ]
};