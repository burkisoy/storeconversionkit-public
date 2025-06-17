import { ComponentWithCustomization } from '../../types';

export const featuresList: ComponentWithCustomization = {
  id: 'features-list',
  title: 'Features List',
  description: 'List of features',
  category: 'Product',
  tags: ['features', 'list', 'benefits'],
  code: `<div class="features-list">
  <ul>
    {% for feature in features %}
      <li class="feature-item">
        <span class="check-icon">✓</span>
        <span class="feature-text">{{ feature }}</span>
      </li>
    {% endfor %}
  </ul>
</div>

{% comment %}
To use this component, create an array of features in your template:
{% assign features = "High quality materials,90% Polymer, 10% Plastic,100% Recyclable" | split: "," %}
{% endcomment %}

{% style %}
.features-list {
  background-color: {{ features_bg | default: '#f8e1fa' }};
  border-radius: 8px;
  padding: 20px;
}
.features-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.feature-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
}
.feature-item:last-child {
  margin-bottom: 0;
}
.check-icon {
  color: {{ check_color | default: '#9333ea' }};
  margin-right: 8px;
  font-weight: bold;
}
.feature-text {
  color: {{ feature_text_color | default: '#333333' }};
}
{% endstyle %}`,
  customizationOptions: [
    {
      id: 'features_bg',
      label: 'Background Color',
      type: 'color',
      defaultValue: '#f8e1fa'
    },
    {
      id: 'check_color',
      label: 'Check Icon Color',
      type: 'color',
      defaultValue: '#9333ea'
    },
    {
      id: 'feature_text_color',
      label: 'Feature Text Color',
      type: 'color',
      defaultValue: '#333333'
    }
  ]
};