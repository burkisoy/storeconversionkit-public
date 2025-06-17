import { ComponentWithCustomization } from '../../types';

export const badges: ComponentWithCustomization = {
  id: 'badges',
  title: 'Badges',
  description: 'Product description badges',
  category: 'Product',
  tags: ['product', 'badge', 'label'],
  popular: true,
  bestValue: true,
  code: `<div class="product-badges">
  {% if product.tags contains 'best_value' %}
    <span class="badge best-value">{{ best_value_text | default: 'BEST VALUE' }}</span>
  {% endif %}
  {% if product.tags contains 'popular' %}
    <span class="badge popular">{{ popular_text | default: 'POPULAR' }}</span>
  {% endif %}
</div>

{% style %}
.product-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}
.badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}
.best-value {
  background-color: {{ best_value_bg | default: '#ff7f50' }};
  color: {{ best_value_color | default: '#ffffff' }};
}
.popular {
  background-color: {{ popular_bg | default: '#f7f7f7' }};
  color: {{ popular_color | default: '#333333' }};
}
{% endstyle %}`,
  customizationOptions: [
    {
      id: 'best_value_text',
      label: 'Best Value Text',
      type: 'text',
      defaultValue: 'BEST VALUE'
    },
    {
      id: 'popular_text',
      label: 'Popular Text',
      type: 'text',
      defaultValue: 'POPULAR'
    },
    {
      id: 'best_value_bg',
      label: 'Best Value Background',
      type: 'color',
      defaultValue: '#ff7f50'
    },
    {
      id: 'best_value_color',
      label: 'Best Value Text Color',
      type: 'color',
      defaultValue: '#ffffff'
    },
    {
      id: 'popular_bg',
      label: 'Popular Background',
      type: 'color',
      defaultValue: '#f7f7f7'
    },
    {
      id: 'popular_color',
      label: 'Popular Text Color',
      type: 'color',
      defaultValue: '#333333'
    }
  ]
};