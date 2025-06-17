import { ComponentWithCustomization } from '../../types';

export const starRatingWithLiquid: ComponentWithCustomization = {
  id: 'star-rating-with-liquid',
  title: 'Star Rating Badge 2',
  description: 'Display star rating with Liquid template support',
  category: 'Social Proof',
  tags: ['rating', 'reviews', 'stars', 'social proof', 'liquid'],
  free: true,
  code: `{% assign rating = {{ rating | default: '5' }} %}
{% assign full_stars = rating | floor %}
{% assign partial = rating | minus: full_stars %}
{% assign has_half_star = false %}
{% if partial >= 0.25 and partial < 0.75 %}
  {% assign has_half_star = true %}
{% endif %}
{% assign next_star_index = full_stars | plus: 1 %}

<div style="
  margin-top: {{ margin_top | default: '8px' }};
  margin-bottom: {{ margin_bottom | default: '8px' }};
  width: 100%
">
  <div style="
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: {{ alignment | default: 'start' }};
    text-align: left;
    gap: {{ gap | default: '8px' }}
  ">
    <div style="display: flex; gap: 2px;">
      {% for i in (1..5) %}
        {% if i <= full_stars %}
          <div>
            <svg width="{{ star_size | default: '16px' }}" height="{{ star_size | default: '16px' }}" fill="{{ star_color | default: '#f43f5e' }}" viewBox="0 0 24 24">
              <path d="M12 2l2.9 6.6L22 9.2l-5 4.9 1.2 7L12 17.8 5.8 21l1.2-7-5-4.9 7.1-0.6z"/>
            </svg>
          </div>
        {% elsif has_half_star and i == next_star_index %}
          <div>
            <svg width="{{ star_size | default: '16px' }}" height="{{ star_size | default: '16px' }}" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="half-grad">
                  <stop offset="50%" stop-color="{{ star_color | default: '#f43f5e' }}"/>
                  <stop offset="50%" stop-color="{{ empty_star_color | default: '#e5e7eb' }}"/>
                </linearGradient>
              </defs>
              <path fill="url(#half-grad)" d="M12 2l2.9 6.6L22 9.2l-5 4.9 1.2 7L12 17.8 5.8 21l1.2-7-5-4.9 7.1-0.6z"/>
            </svg>
          </div>
        {% else %}
          <div>
            <svg width="{{ star_size | default: '16px' }}" height="{{ star_size | default: '16px' }}" fill="{{ empty_star_color | default: '#e5e7eb' }}" viewBox="0 0 24 24">
              <path d="M12 2l2.9 6.6L22 9.2l-5 4.9 1.2 7L12 17.8 5.8 21l1.2-7-5-4.9 7.1-0.6z"/>
            </svg>
          </div>
        {% endif %}
      {% endfor %}
    </div>

    <div style="
      font-size: {{ font_size | default: '14px' }};
      font-weight: {{ font_weight | default: '400' }};
      color: {{ text_color | default: '#000000' }}
    ">
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
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#000000'
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
      id: 'star_size',
      label: 'Star Size',
      type: 'text',
      defaultValue: '16px'
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
      defaultValue: '400'
    },
    {
      id: 'gap',
      label: 'Gap',
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
    }
  ]
};