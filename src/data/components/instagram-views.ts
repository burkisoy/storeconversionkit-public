import { ComponentWithCustomization } from '../../types';

export const instagramViews: ComponentWithCustomization = {
  id: 'instagram-views',
  title: 'Instagram Views Badge',
  description: 'Display Instagram views count with icon',
  category: 'Social Proof',
  tags: ['social', 'instagram', 'views', 'badge'],
  stars: 2,
  code: `<div class="unique-wrapper-A1b2c3">
  <div class="unique-badge-D4e5f6">
    <img src="{{ icon_url | default: 'https://www.svgrepo.com/show/521711/instagram.svg' }}" alt="Instagram Icon" class="unique-icon-G7h8i9">
    <span>{{ views_text | default: 'Over 7M Views on Instagram' }}</span>
  </div>
</div>

{% style %}
.unique-wrapper-A1b2c3 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: {{ wrapper_padding | default: '0' }};
  margin: {{ wrapper_margin | default: '0' }};
  background-color: transparent;
}

.unique-badge-D4e5f6 {
  display: flex;
  align-items: center;
  background-color: {{ badge_bg | default: '#f8f8f8' }};
  border-radius: {{ border_radius | default: '25px' }};
  color: {{ text_color | default: '#000' }};
  font-size: {{ font_size | default: '14px' }};
  font-weight: {{ font_weight | default: 'bold' }};
  padding: {{ badge_padding | default: '10px 20px' }};
  text-decoration: none;
  box-shadow: {{ box_shadow | default: '0 4px 6px rgba(0, 0, 0, 0.1)' }};
  border: {{ border | default: '1px solid #e0e0e0' }};
  height: {{ height | default: '35px' }};
  margin: {{ badge_margin | default: '0' }};
}

.unique-icon-G7h8i9 {
  width: {{ icon_size | default: '20px' }};
  height: {{ icon_size | default: '20px' }};
  margin-right: {{ icon_margin | default: '10px' }};
}
{% endstyle %}`,
  customizationOptions: [
    {
      id: 'views_text',
      label: 'Views Text',
      type: 'text',
      defaultValue: 'Over 7M Views on Instagram'
    },
    {
      id: 'icon_url',
      label: 'Icon URL',
      type: 'text',
      defaultValue: 'https://www.svgrepo.com/show/521711/instagram.svg'
    },
    {
      id: 'badge_bg',
      label: 'Badge Background',
      type: 'color',
      defaultValue: '#f8f8f8'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#000'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '25px'
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
      defaultValue: 'bold'
    },
    {
      id: 'badge_padding',
      label: 'Badge Padding',
      type: 'text',
      defaultValue: '10px 20px'
    },
    {
      id: 'box_shadow',
      label: 'Box Shadow',
      type: 'text',
      defaultValue: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    {
      id: 'border',
      label: 'Border',
      type: 'text',
      defaultValue: '1px solid #e0e0e0'
    },
    {
      id: 'height',
      label: 'Height',
      type: 'text',
      defaultValue: '35px'
    },
    {
      id: 'icon_size',
      label: 'Icon Size',
      type: 'text',
      defaultValue: '20px'
    },
    {
      id: 'icon_margin',
      label: 'Icon Margin',
      type: 'text',
      defaultValue: '10px'
    }
  ]
};