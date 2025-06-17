import { ComponentWithCustomization } from '../../types';

export const lovedByCustomers: ComponentWithCustomization = {
  id: 'loved-by-customers',
  title: 'Loved by Customers Badge',
  description: 'Display customer love with a stylish badge',
  category: 'Social Proof',
  tags: ['badge', 'customers', 'social proof'],
  free: true,
  code: `<div class="loved-by-customers">
  <span>{{ icon | default: '🖤' }} {{ text | default: 'Loved by 10,000 Customers' }}</span>
</div>

{% style %}
.loved-by-customers {
  background: {{ background | default: 'linear-gradient(#dddddd, #d8d8d8)' }};
  color: {{ text_color | default: '#121212' }};
  text-align: center;
  padding: {{ padding | default: '6px' }};
  margin-top: {{ margin_top | default: '20px' }};
  border-radius: {{ border_radius | default: '20px' }};
  width: {{ width | default: '300px' }};
  margin-left: auto;
  margin-right: auto;
  font-size: {{ font_size | default: '14px' }};
  font-weight: {{ font_weight | default: '500' }};
  box-shadow: {{ shadow | default: '0 2px 4px rgba(0, 0, 0, 0.1)' }};
  transition: transform 0.2s ease;
}

.loved-by-customers:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
{% endstyle %}`,
  customizationOptions: [
    {
      id: 'text',
      label: 'Badge Text',
      type: 'text',
      defaultValue: 'Loved by 10,000 Customers'
    },
    {
      id: 'icon',
      label: 'Icon',
      type: 'text',
      defaultValue: '🖤'
    },
    {
      id: 'background',
      label: 'Background',
      type: 'text',
      defaultValue: 'linear-gradient(#dddddd, #d8d8d8)'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#121212'
    },
    {
      id: 'padding',
      label: 'Padding',
      type: 'text',
      defaultValue: '6px'
    },
    {
      id: 'margin_top',
      label: 'Margin Top',
      type: 'text',
      defaultValue: '20px'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '20px'
    },
    {
      id: 'width',
      label: 'Width',
      type: 'text',
      defaultValue: '300px'
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
      id: 'shadow',
      label: 'Shadow',
      type: 'text',
      defaultValue: '0 2px 4px rgba(0, 0, 0, 0.1)'
    }
  ]
};