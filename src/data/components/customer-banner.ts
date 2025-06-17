import { ComponentWithCustomization } from '../../types';

export const customerBanner: ComponentWithCustomization = {
  id: 'customer-banner',
  title: '1,000,000+ Happy Customers',
  description: 'Display total customer count with avatars',
  category: 'Social Proof',
  tags: ['customers', 'social proof', 'banner'],
  stars: 2,
  code: `<div class="customer-banner">
  <div class="customer-avatars">
    <img src="https://img.freepik.com/free-photo/stylish-african-american-woman-smiling_23-2148770405.jpg" alt="Customer 1" class="customer-avatar">
    <img src="https://thumbs.dreamstime.com/b/beautiful-african-american-woman-relaxing-outside-happy-middle-aged-smiling-46298787.jpg" alt="Customer 2" class="customer-avatar">
    <img src="https://img.freepik.com/free-photo/stylish-african-american-woman-smiling_23-2148770405.jpg" alt="Customer 3" class="customer-avatar">
  </div>
  <span class="customer-text">{{ customer_count | default: '1,000,000+ Happy Customers' }}</span>
</div>

{% style %}
.customer-banner {
  display: flex;
  align-items: center;
  padding: {{ padding | default: '6px 16px' }};
  border-radius: {{ border_radius | default: '6px' }};
  background: {{ background_gradient | default: 'linear-gradient(45deg, #1cbcc3, #4abf8f 80%)' }};
  color: {{ text_color | default: '#ffffff' }};
  font-family: Arial, sans-serif;
  font-size: 12px;
  box-shadow: {{ shadow | default: '0 4px 6px rgba(0, 0, 0, 0.1)' }};
}

.customer-avatars {
  display: flex;
  gap: 0;
  margin-right: 10px;
  margin-left: 10px;
}

.customer-avatar {
  width: {{ avatar_size | default: '22px' }};
  height: {{ avatar_size | default: '22px' }};
  border-radius: 50%;
  border: {{ avatar_border | default: '2px solid #ffffff' }};
  margin-left: -7px;
  object-fit: cover;
}

.customer-avatar:first-child {
  margin-left: 0;
}

.customer-text {
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}
{% endstyle %}`,
  customizationOptions: [
    {
      id: 'customer_count',
      label: 'Customer Count Text',
      type: 'text',
      defaultValue: '1,000,000+ Happy Customers'
    },
    {
      id: 'background_gradient',
      label: 'Background Gradient',
      type: 'text',
      defaultValue: 'linear-gradient(45deg, #1cbcc3, #4abf8f 80%)'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#ffffff'
    },
    {
      id: 'padding',
      label: 'Padding',
      type: 'text',
      defaultValue: '6px 16px'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '6px'
    },
    {
      id: 'shadow',
      label: 'Shadow',
      type: 'text',
      defaultValue: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    {
      id: 'avatar_size',
      label: 'Avatar Size',
      type: 'text',
      defaultValue: '22px'
    },
    {
      id: 'avatar_border',
      label: 'Avatar Border',
      type: 'text',
      defaultValue: '2px solid #ffffff'
    }
  ]
};