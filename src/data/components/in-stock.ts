import { ComponentWithCustomization } from '../../types';

export const inStock: ComponentWithCustomization = {
  id: 'in-stock',
  title: 'In Stock Indicator',
  description: 'Show product availability status',
  category: 'Product',
  tags: ['stock', 'inventory', 'status'],
  stars: 1,
  code: `<div class="product__inventory" id="Inventory-template--22213608309023__main" role="status">
  <svg width="15" height="15" aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="7.5" fill="{{ background_color | default: 'rgb(62,214,96, 0.3)' }}"></circle>
    <circle cx="7.5" cy="7.5" r="5" stroke="{{ stroke_color | default: '#ffffff' }}" stroke-width="1" fill="{{ dot_color | default: 'rgb(62,214,96)' }}"></circle>
  </svg>
  <span class="inventory-text">{{ status_text | default: 'In stock' }}</span>
</div>

{% style %}
.product__inventory {
  display: flex;
  align-items: center;
  gap: {{ gap | default: '8px' }};
  padding: {{ padding | default: '8px 12px' }};
  background: {{ wrapper_bg | default: '#ffffff' }};
  border-radius: {{ border_radius | default: '8px' }};
  width: fit-content;
}

.inventory-text {
  color: {{ text_color | default: '#333333' }};
  font-size: {{ font_size | default: '14px' }};
  font-weight: {{ font_weight | default: '500' }};
}
{% endstyle %}`,
  customizationOptions: [
    {
      id: 'status_text',
      label: 'Status Text',
      type: 'text',
      defaultValue: 'In stock'
    },
    {
      id: 'background_color',
      label: 'Circle Background',
      type: 'color',
      defaultValue: 'rgb(62,214,96, 0.3)'
    },
    {
      id: 'dot_color',
      label: 'Dot Color',
      type: 'color',
      defaultValue: 'rgb(62,214,96)'
    },
    {
      id: 'stroke_color',
      label: 'Stroke Color',
      type: 'color',
      defaultValue: '#ffffff'
    },
    {
      id: 'wrapper_bg',
      label: 'Wrapper Background',
      type: 'color',
      defaultValue: '#ffffff'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#333333'
    },
    {
      id: 'gap',
      label: 'Icon Gap',
      type: 'text',
      defaultValue: '8px'
    },
    {
      id: 'padding',
      label: 'Padding',
      type: 'text',
      defaultValue: '8px 12px'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '8px'
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
    }
  ]
};