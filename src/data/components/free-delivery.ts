import { ComponentWithCustomization } from '../../types';

export const freeDelivery: ComponentWithCustomization = {
  id: 'free-delivery',
  title: 'Free Delivery',
  description: 'Delivery pricing & information',
  category: 'Promotions',
  tags: ['shipping', 'delivery', 'free'],
  code: `<div class="free-delivery-banner">
  <span class="icon">{% render 'icon-delivery' %}</span>
  <span class="text">{{ delivery_text | default: 'Free Delivery on all orders!' }}</span>
</div>

{% style %}
.free-delivery-banner {
  display: flex;
  align-items: center;
  background-color: {{ delivery_bg_color | default: '#d7f8e3' }};
  padding: 12px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}
.free-delivery-banner .icon {
  margin-right: 10px;
  color: {{ delivery_icon_color | default: '#4a4a4a' }};
}
.free-delivery-banner .text {
  font-weight: 500;
  color: {{ delivery_text_color | default: '#4a4a4a' }};
}
{% endstyle %}`,
  customizationOptions: [
    {
      id: 'delivery_text',
      label: 'Delivery Text',
      type: 'text',
      defaultValue: 'Free Delivery on all orders!',
      placeholder: 'Enter delivery text'
    },
    {
      id: 'delivery_bg_color',
      label: 'Background Color',
      type: 'color',
      defaultValue: '#d7f8e3'
    },
    {
      id: 'delivery_text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#4a4a4a'
    },
    {
      id: 'delivery_icon_color',
      label: 'Icon Color',
      type: 'color',
      defaultValue: '#4a4a4a'
    }
  ]
};