import { ComponentWithCustomization } from '../../types';

export const starRatingBadge: ComponentWithCustomization = {
  id: 'star-rating-badge',
  title: 'Star Rating Badge 2',
  description: 'Display star ratings with half-star support using Liquid templating',
  category: 'Social Proof',
  tags: ['rating', 'reviews', 'stars', 'social proof'],
  free: true,
  code: `<div style="
  margin-top: {{ margin_top | default: '8px' }};
  margin-bottom: {{ margin_bottom | default: '8px' }};
  width: 100%;
">
  <div style="
    display: flex;
    align-items: center;
    justify-content: {{ alignment | default: 'start' }};
    gap: {{ gap | default: '8px' }};
  ">
    <div style="display: flex; gap: 2px;">
      {% assign rating = rating | default: 5 %}
      {% assign full_stars = rating | floor %}

      {% for i in (1..5) %}
        {% if i <= full_stars %}
          <svg width="{{ star_size | default: '16px' }}" height="{{ star_size | default: '16px' }}" fill="{{ star_color | default: '#f43f5e' }}" viewBox="0 0 24 24">
            <path d="M12 2l2.9 6.6L22 9.2l-5 4.9 1.2 7L12 17.8 5.8 21l1.2-7-5-4.9 7.1-0.6z"/>
          </svg>
        {% else %}
          <svg width="{{ star_size | default: '16px' }}" height="{{ star_size | default: '16px' }}" fill="{{ empty_star_color | default: '#e5e7eb' }}" viewBox="0 0 24 24">
            <path d="M12 2l2.9 6.6L22 9.2l-5 4.9 1.2 7L12 17.8 5.8 21l1.2-7-5-4.9 7.1-0.6z"/>
          </svg>
        {% endif %}
      {% endfor %}
    </div>

    <div style="font-size: {{ font_size | default: '14px' }}; color: {{ text_color | default: '#000000' }};">
      <strong>Rated {{ rating }}</strong>
      <span style="color: {{ review_count_color | default: 'gray' }};">({{ review_count | default: '137' }})</span>
    </div>

    <div style="
      background: {{ badge_bg | default: '#ffe4e6' }};
      color: {{ badge_text_color | default: '#f43f5e' }};
      padding: {{ badge_padding | default: '2px 6px' }};
      border-radius: {{ badge_border_radius | default: '4px' }};
      font-size: {{ badge_font_size | default: '13px' }};
    ">
      {{ badge_text | default: 'Happy Customers' }}
    </div>
  </div>
</div>`,
  customizationOptions: [
    {
      id: 'rating',
      label: 'Rating Value',
      type: 'text',
      defaultValue: '4.7'
    },
    {
      id: 'review_count',
      label: 'Review Count',
      type: 'text',
      defaultValue: '137'
    },
    {
      id: 'badge_text',
      label: 'Badge Text',
      type: 'text',
      defaultValue: 'Happy Customers'
    },
    {
      id: 'star_color',
      label: 'Star Color',
      type: 'color',
      defaultValue: '#f43f5e'
    },
    {
      id: 'empty_star_color',
      label: 'Empty Star Color',
      type: 'color',
      defaultValue: '#e5e7eb'
    },
    {
      id: 'star_size',
      label: 'Star Size',
      type: 'text',
      defaultValue: '16px'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#000000'
    },
    {
      id: 'font_size',
      label: 'Font Size',
      type: 'text',
      defaultValue: '14px'
    },
    {
      id: 'review_count_color',
      label: 'Review Count Color',
      type: 'color',
      defaultValue: 'gray'
    },
    {
      id: 'badge_bg',
      label: 'Badge Background',
      type: 'color',
      defaultValue: '#ffe4e6'
    },
    {
      id: 'badge_text_color',
      label: 'Badge Text Color',
      type: 'color',
      defaultValue: '#f43f5e'
    },
    {
      id: 'badge_padding',
      label: 'Badge Padding',
      type: 'text',
      defaultValue: '2px 6px'
    },
    {
      id: 'badge_border_radius',
      label: 'Badge Border Radius',
      type: 'text',
      defaultValue: '4px'
    },
    {
      id: 'badge_font_size',
      label: 'Badge Font Size',
      type: 'text',
      defaultValue: '13px'
    },
    {
      id: 'gap',
      label: 'Gap Between Elements',
      type: 'text',
      defaultValue: '8px'
    },
    {
      id: 'alignment',
      label: 'Alignment',
      type: 'select',
      defaultValue: 'start',
      options: [
        { value: 'start', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'end', label: 'Right' }
      ]
    },
    {
      id: 'margin_top',
      label: 'Margin Top',
      type: 'text',
      defaultValue: '8px'
    },
    {
      id: 'margin_bottom',
      label: 'Margin Bottom',
      type: 'text',
      defaultValue: '8px'
    }
  ]
};