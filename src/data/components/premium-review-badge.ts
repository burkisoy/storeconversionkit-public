import { ComponentWithCustomization } from '../../types';

export const premiumReviewBadge: ComponentWithCustomization = {
  id: 'premium-review-badge',
  title: 'Premium Review Badge',
  description: 'Display a premium customer review with avatar and star rating',
  category: 'Social Proof',
  tags: ['review', 'badge', 'testimonial', 'social proof'],
  free: false,
  code: `<div style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px dashed {{ border_color | default: '#ddd' }}; border-radius: {{ border_radius | default: '12px' }}; background: {{ background | default: 'linear-gradient(to bottom, #fff, #fafafa)' }}; font-family: {{ font_family | default: '-apple-system, BlinkMacSystemFont, sans-serif' }}; display: flex; gap: 16px; align-items: flex-start;">
  <!-- Profile Photo -->
  <img src="{{ avatar | default: 'https://randomuser.me/api/portraits/women/44.jpg' }}" alt="Avatar" style="width: {{ avatar_size | default: '64px' }}; height: {{ avatar_size | default: '64px' }}; border-radius: 50%; object-fit: cover;">

  <!-- Content -->
  <div>
    <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
      <strong style="font-size: {{ name_font_size | default: '16px' }}; color: {{ name_color | default: '#000' }};">{{ name | default: 'Lauren J.' }}</strong>
      <svg xmlns="http://www.w3.org/2000/svg" style="width: {{ verified_icon_size | default: '16px' }}; height: {{ verified_icon_size | default: '16px' }};" viewBox="0 0 24 24" fill="{{ verified_icon_color | default: '#000' }}">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 4.99 3.062 9.246 7.437 11.004L12 24l4.563-0.996C20.938 21.246 24 16.99 24 12c0-6.627-5.373-12-12-12zm-1 17l-4-4 1.41-1.42L11 14.17l6.59-6.59L19 9l-8 8z"/>
      </svg>
      <span style="color: {{ stars_color | default: '#f43f5e' }}; font-size: {{ stars_font_size | default: '18px' }};">★★★★★</span>
    </div>
    <p style="margin-top: {{ review_margin_top | default: '8px' }}; font-size: {{ review_font_size | default: '15px' }}; color: {{ review_color | default: '#555' }}; line-height: {{ line_height | default: '1.5' }};">
      {{ review | default: 'This product exceeded my expectations.' }}
    </p>
  </div>
</div>`,
  customizationOptions: [
    {
      id: 'avatar',
      label: 'Avatar URL',
      type: 'text',
      defaultValue: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 'name',
      label: 'Customer Name',
      type: 'text',
      defaultValue: 'Lauren J.'
    },
    {
      id: 'review',
      label: 'Review Text',
      type: 'text',
      defaultValue: 'This product exceeded my expectations.'
    },
    {
      id: 'background',
      label: 'Background',
      type: 'text',
      defaultValue: 'linear-gradient(to bottom, #fff, #fafafa)'
    },
    {
      id: 'border_color',
      label: 'Border Color',
      type: 'color',
      defaultValue: '#ddd'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '12px'
    },
    {
      id: 'avatar_size',
      label: 'Avatar Size',
      type: 'text',
      defaultValue: '64px'
    },
    {
      id: 'name_color',
      label: 'Name Color',
      type: 'color',
      defaultValue: '#000'
    },
    {
      id: 'name_font_size',
      label: 'Name Font Size',
      type: 'text',
      defaultValue: '16px'
    },
    {
      id: 'verified_icon_color',
      label: 'Verified Icon Color',
      type: 'color',
      defaultValue: '#000'
    },
    {
      id: 'verified_icon_size',
      label: 'Verified Icon Size',
      type: 'text',
      defaultValue: '16px'
    },
    {
      id: 'stars_color',
      label: 'Stars Color',
      type: 'color',
      defaultValue: '#f43f5e'
    },
    {
      id: 'stars_font_size',
      label: 'Stars Font Size',
      type: 'text',
      defaultValue: '18px'
    },
    {
      id: 'review_color',
      label: 'Review Text Color',
      type: 'color',
      defaultValue: '#555'
    },
    {
      id: 'review_font_size',
      label: 'Review Font Size',
      type: 'text',
      defaultValue: '15px'
    },
    {
      id: 'review_margin_top',
      label: 'Review Margin Top',
      type: 'text',
      defaultValue: '8px'
    },
    {
      id: 'line_height',
      label: 'Line Height',
      type: 'text',
      defaultValue: '1.5'
    },
    {
      id: 'font_family',
      label: 'Font Family',
      type: 'text',
      defaultValue: '-apple-system, BlinkMacSystemFont, sans-serif'
    }
  ]
};