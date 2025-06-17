import { ComponentWithCustomization } from '../../types';

export const stockIndicator: ComponentWithCustomization = {
  id: 'stock-indicator',
  title: 'Stock Indicator',
  description: 'Product inventory status',
  category: 'Product',
  tags: ['stock', 'inventory', 'product'],
  code: `<div class="stock-status {% if product.available %}in-stock{% else %}out-of-stock{% endif %}">
  <span class="status-dot"></span>
  <span class="status-text">
    {% if product.available %}
      {% if product.inventory_quantity <= low_stock_threshold %}
        {{ low_stock_text | default: 'LOW STOCK' }}
      {% else %}
        {{ in_stock_text | default: 'IN STOCK' }}
      {% endif %}
    {% else %}
      {{ out_of_stock_text | default: 'OUT OF STOCK' }}
    {% endif %}
  </span>
</div>

{% comment %}
To use this component, set a low stock threshold in your template:
{% assign low_stock_threshold = 5 %}
{% endcomment %}

{% style %}
.stock-status {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}
.status-dot {
  height: 8px;
  width: 8px;
  border-radius: 50%;
  margin-right: 6px;
}
.in-stock {
  background-color: {{ in_stock_bg | default: '#f1f5f9' }};
}
.in-stock .status-dot {
  background-color: {{ in_stock_dot | default: '#10b981' }};
}
.in-stock .status-text {
  color: {{ in_stock_text_color | default: '#333333' }};
}
.out-of-stock {
  background-color: {{ out_of_stock_bg | default: '#fef2f2' }};
}
.out-of-stock .status-dot {
  background-color: {{ out_of_stock_dot | default: '#ef4444' }};
}
.out-of-stock .status-text {
  color: {{ out_of_stock_text_color | default: '#b91c1c' }};
}
{% endstyle %}`,
  customizationOptions: [
    {
      id: 'low_stock_text',
      label: 'Low Stock Text',
      type: 'text',
      defaultValue: 'LOW STOCK'
    },
    {
      id: 'in_stock_text',
      label: 'In Stock Text',
      type: 'text',
      defaultValue: 'IN STOCK'
    },
    {
      id: 'out_of_stock_text',
      label: 'Out of Stock Text',
      type: 'text',
      defaultValue: 'OUT OF STOCK'
    },
    {
      id: 'in_stock_bg',
      label: 'In Stock Background',
      type: 'color',
      defaultValue: '#f1f5f9'
    },
    {
      id: 'in_stock_dot',
      label: 'In Stock Dot Color',
      type: 'color',
      defaultValue: '#10b981'
    },
    {
      id: 'in_stock_text_color',
      label: 'In Stock Text Color',
      type: 'color',
      defaultValue: '#333333'
    },
    {
      id: 'out_of_stock_bg',
      label: 'Out of Stock Background',
      type: 'color',
      defaultValue: '#fef2f2'
    },
    {
      id: 'out_of_stock_dot',
      label: 'Out of Stock Dot Color',
      type: 'color',
      defaultValue: '#ef4444'
    },
    {
      id: 'out_of_stock_text_color',
      label: 'Out of Stock Text Color',
      type: 'color',
      defaultValue: '#b91c1c'
    }
  ]
};