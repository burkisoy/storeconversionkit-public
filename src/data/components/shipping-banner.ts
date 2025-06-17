import { ComponentWithCustomization } from '../../types';

export const shippingBanner: ComponentWithCustomization = {
  id: 'shipping-banner',
  title: 'Shipping Banner',
  description: 'Promotional shipping information',
  category: 'Promotions',
  tags: ['shipping', 'promotion', 'banner'],
  code: `<div class="shipping-banner">
  <div class="banner-content">
    <div class="shipping-truck">🚚</div>
    <div class="shipping-text">{{ banner_text | default: 'FREE SHIPPING ON ALL ORDERS' }}</div>
  </div>
</div>

{% style %}
.shipping-banner {
  background-color: {{ banner_bg | default: '#fbcfe8' }};
  padding: 10px 0;
  text-align: center;
  width: 100%;
}
.banner-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.shipping-truck {
  margin-right: 10px;
  font-size: 20px;
}
.shipping-text {
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  color: {{ text_color | default: '#831843' }};
}
@media (max-width: 600px) {
  .shipping-text {
    font-size: 12px;
  }
}
{% endstyle %}`,
  customizationOptions: [
    {
      id: 'banner_text',
      label: 'Banner Text',
      type: 'text',
      defaultValue: 'FREE SHIPPING ON ALL ORDERS'
    },
    {
      id: 'banner_bg',
      label: 'Banner Background',
      type: 'color',
      defaultValue: '#fbcfe8'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#831843'
    }
  ]
};