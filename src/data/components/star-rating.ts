import { ComponentWithCustomization } from '../../types';

export const starRating: ComponentWithCustomization = {
  id: 'star-rating',
  title: 'Star Rating Badge',
  description: 'Display star rating with review count',
  category: 'Social Proof',
  tags: ['rating', 'reviews', 'stars', 'social proof'],
  free: true,
  code: `<div style="
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
    <div style="display: flex; align-items: center;">
      {% for i in (1..5) %}
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" style="
          fill: {{ star_color | default: '#000000' }};
          height: {{ star_size | default: '16px' }};
          width: {{ star_size | default: '16px' }}
        " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
        </svg>
      {% endfor %}
    </div>
    <span style="
      font-size: {{ font_size | default: '14px' }};
      font-weight: {{ font_weight | default: '400' }};
      color: {{ text_color | default: '#000000' }}
    ">{{ text | default: '4.9/5 (1k+ Reviews)' }}</span>
  </div>
</div>`,
  customizationOptions: [
    {
      id: 'text',
      label: 'Rating Text',
      type: 'text',
      defaultValue: '4.9/5 (1k+ Reviews)'
    },
    {
      id: 'star_color',
      label: 'Star Color',
      type: 'color',
      defaultValue: '#000000'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#000000'
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
    }
  ]
};