import { ComponentWithCustomization } from '../../types';

export const trustpilotRatingBadge: ComponentWithCustomization = {
  id: 'trustpilot-rating-badge',
  title: 'Trustpilot Rating Badge',
  description: 'Display a Trustpilot-style rating badge with stars and review count',
  category: 'Social Proof',
  tags: ['rating', 'reviews', 'trustpilot', 'social proof'],
  free: false,
  code: `<div style="
  display: inline-flex;
  align-items: center;
  background-color: {{ background_color | default: '#fff' }};
  border-radius: {{ border_radius | default: '9999px' }};
  padding: {{ padding | default: '4px 10px' }};
  font-family: {{ font_family | default: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif" }};
  font-size: {{ font_size | default: '12px' }};
  color: {{ text_color | default: '#1c1c1c' }};
  font-weight: {{ font_weight | default: '500' }};
  box-shadow: {{ box_shadow | default: '0 1px 3px rgba(0,0,0,0.08)' }};
">
  <div style="
    display: flex;
    gap: {{ stars_gap | default: '3px' }};
    margin-right: {{ stars_margin_right | default: '8px' }};
  ">
    <!-- Five stars inside flatter green rectangles -->
    <div style="
      background-color: {{ star_bg_color | default: '#00B67A' }};
      border-radius: {{ star_border_radius | default: '3px' }};
      padding: {{ star_padding | default: '1px 2px' }};
    ">
      <svg width="{{ star_size | default: '12' }}" height="{{ star_size | default: '12' }}" viewBox="0 0 24 24" fill="{{ star_color | default: '#FFFFFF' }}" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l2.39 6.91H22l-5.43 3.94L18.74 22 12 17.56 5.26 22l1.43-9.15L2 8.91h7.61L12 2z"/>
      </svg>
    </div>
    <div style="
      background-color: {{ star_bg_color | default: '#00B67A' }};
      border-radius: {{ star_border_radius | default: '3px' }};
      padding: {{ star_padding | default: '1px 2px' }};
    ">
      <svg width="{{ star_size | default: '12' }}" height="{{ star_size | default: '12' }}" viewBox="0 0 24 24" fill="{{ star_color | default: '#FFFFFF' }}" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l2.39 6.91H22l-5.43 3.94L18.74 22 12 17.56 5.26 22l1.43-9.15L2 8.91h7.61L12 2z"/>
      </svg>
    </div>
    <div style="
      background-color: {{ star_bg_color | default: '#00B67A' }};
      border-radius: {{ star_border_radius | default: '3px' }};
      padding: {{ star_padding | default: '1px 2px' }};
    ">
      <svg width="{{ star_size | default: '12' }}" height="{{ star_size | default: '12' }}" viewBox="0 0 24 24" fill="{{ star_color | default: '#FFFFFF' }}" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l2.39 6.91H22l-5.43 3.94L18.74 22 12 17.56 5.26 22l1.43-9.15L2 8.91h7.61L12 2z"/>
      </svg>
    </div>
    <div style="
      background-color: {{ star_bg_color | default: '#00B67A' }};
      border-radius: {{ star_border_radius | default: '3px' }};
      padding: {{ star_padding | default: '1px 2px' }};
    ">
      <svg width="{{ star_size | default: '12' }}" height="{{ star_size | default: '12' }}" viewBox="0 0 24 24" fill="{{ star_color | default: '#FFFFFF' }}" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l2.39 6.91H22l-5.43 3.94L18.74 22 12 17.56 5.26 22l1.43-9.15L2 8.91h7.61L12 2z"/>
      </svg>
    </div>
    <div style="
      background-color: {{ star_bg_color | default: '#00B67A' }};
      border-radius: {{ star_border_radius | default: '3px' }};
      padding: {{ star_padding | default: '1px 2px' }};
    ">
      <svg width="{{ star_size | default: '12' }}" height="{{ star_size | default: '12' }}" viewBox="0 0 24 24" fill="{{ star_color | default: '#FFFFFF' }}" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l2.39 6.91H22l-5.43 3.94L18.74 22 12 17.56 5.26 22l1.43-9.15L2 8.91h7.61L12 2z"/>
      </svg>
    </div>
  </div>
  <div style="line-height: 1;">
    {{ rating_text | default: 'Excellent' }} <strong style="font-weight: {{ rating_weight | default: '600' }};">{{ rating_score | default: '4,6' }}</strong> | <strong style="font-weight: {{ rating_weight | default: '600' }};">{{ review_count | default: '14,500+' }}</strong> {{ reviews_text | default: 'reviews' }}
  </div>
</div>`,
  customizationOptions: [
    {
      id: 'rating_text',
      label: 'Rating Text',
      type: 'text',
      defaultValue: 'Excellent'
    },
    {
      id: 'rating_score',
      label: 'Rating Score',
      type: 'text',
      defaultValue: '4,6'
    },
    {
      id: 'review_count',
      label: 'Review Count',
      type: 'text',
      defaultValue: '14,500+'
    },
    {
      id: 'reviews_text',
      label: 'Reviews Text',
      type: 'text',
      defaultValue: 'reviews'
    },
    {
      id: 'background_color',
      label: 'Background Color',
      type: 'color',
      defaultValue: '#fff'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#1c1c1c'
    },
    {
      id: 'star_bg_color',
      label: 'Star Background Color',
      type: 'color',
      defaultValue: '#00B67A'
    },
    {
      id: 'star_color',
      label: 'Star Color',
      type: 'color',
      defaultValue: '#FFFFFF'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '9999px'
    },
    {
      id: 'padding',
      label: 'Padding',
      type: 'text',
      defaultValue: '4px 10px'
    },
    {
      id: 'font_size',
      label: 'Font Size',
      type: 'text',
      defaultValue: '12px'
    },
    {
      id: 'font_weight',
      label: 'Font Weight',
      type: 'text',
      defaultValue: '500'
    },
    {
      id: 'rating_weight',
      label: 'Rating Weight',
      type: 'text',
      defaultValue: '600'
    },
    {
      id: 'box_shadow',
      label: 'Box Shadow',
      type: 'text',
      defaultValue: '0 1px 3px rgba(0,0,0,0.08)'
    },
    {
      id: 'stars_gap',
      label: 'Stars Gap',
      type: 'text',
      defaultValue: '3px'
    },
    {
      id: 'stars_margin_right',
      label: 'Stars Margin Right',
      type: 'text',
      defaultValue: '8px'
    },
    {
      id: 'star_border_radius',
      label: 'Star Border Radius',
      type: 'text',
      defaultValue: '3px'
    },
    {
      id: 'star_padding',
      label: 'Star Padding',
      type: 'text',
      defaultValue: '1px 2px'
    },
    {
      id: 'star_size',
      label: 'Star Size',
      type: 'text',
      defaultValue: '12'
    }
  ]
};