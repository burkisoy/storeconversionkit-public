import { ComponentWithCustomization } from '../../types';

export const testimonial: ComponentWithCustomization = {
  id: 'testimonial',
  title: 'Customer Testimonial',
  description: 'Display customer reviews with verification badge',
  category: 'Social Proof',
  tags: ['testimonial', 'review', 'social proof'],
  free: true,
  code: `<div style="
  margin-top: {{ margin_top | default: '0.3rem' }};
  margin-bottom: {{ margin_bottom | default: '0.3rem' }};
  width: 100%
">
  <div style="
    width: 100%;
    gap: {{ gap | default: '4px' }};
    font-weight: {{ font_weight | default: '500' }};
    font-size: {{ font_size | default: '20px' }};
    background-color: {{ background_color | default: '#ffffff' }};
    border-radius: {{ border_radius | default: '12px' }};
    padding: {{ padding | default: '1.5rem' }};
    border: {{ border | default: '1px solid #e5e5e5' }};
    color: {{ text_color | default: '#333333' }};
    line-height: {{ line_height | default: '1.5' }}
  ">
    <div style="
      font-weight: {{ quote_font_weight | default: '500' }};
      font-size: {{ quote_font_size | default: '20px' }}
    ">"{{ quote_text | default: 'I love this! It was easy to setup and fast shipping' }}"</div>
    
    <div style="
      margin-top: {{ name_margin_top | default: '6px' }};
      font-size: {{ name_font_size | default: '16px' }}
    ">{{ customer_name | default: 'John D.' }}</div>
    
    <div style="
      font-size: {{ verification_font_size | default: '14px' }};
      font-weight: {{ verification_font_weight | default: '400' }};
      display: flex;
      gap: {{ verification_gap | default: '4px' }};
      align-items: center;
      color: {{ verification_color | default: '#333333' }}
    ">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path>
      </svg>
      {{ verification_text | default: 'Verified Buyer' }}
    </div>
  </div>
</div>`,
  customizationOptions: [
    {
      id: 'quote_text',
      label: 'Quote Text',
      type: 'text',
      defaultValue: 'I love this! It was easy to setup and fast shipping'
    },
    {
      id: 'customer_name',
      label: 'Customer Name',
      type: 'text',
      defaultValue: 'John D.'
    },
    {
      id: 'verification_text',
      label: 'Verification Text',
      type: 'text',
      defaultValue: 'Verified Buyer'
    },
    {
      id: 'background_color',
      label: 'Background Color',
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
      id: 'verification_color',
      label: 'Verification Color',
      type: 'color',
      defaultValue: '#333333'
    },
    {
      id: 'border',
      label: 'Border',
      type: 'text',
      defaultValue: '1px solid #e5e5e5'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '12px'
    },
    {
      id: 'padding',
      label: 'Padding',
      type: 'text',
      defaultValue: '1.5rem'
    },
    {
      id: 'gap',
      label: 'Gap',
      type: 'text',
      defaultValue: '4px'
    },
    {
      id: 'font_size',
      label: 'Base Font Size',
      type: 'text',
      defaultValue: '20px'
    },
    {
      id: 'font_weight',
      label: 'Base Font Weight',
      type: 'text',
      defaultValue: '500'
    },
    {
      id: 'line_height',
      label: 'Line Height',
      type: 'text',
      defaultValue: '1.5'
    },
    {
      id: 'quote_font_size',
      label: 'Quote Font Size',
      type: 'text',
      defaultValue: '20px'
    },
    {
      id: 'quote_font_weight',
      label: 'Quote Font Weight',
      type: 'text',
      defaultValue: '500'
    },
    {
      id: 'name_font_size',
      label: 'Name Font Size',
      type: 'text',
      defaultValue: '16px'
    },
    {
      id: 'name_margin_top',
      label: 'Name Margin Top',
      type: 'text',
      defaultValue: '6px'
    },
    {
      id: 'verification_font_size',
      label: 'Verification Font Size',
      type: 'text',
      defaultValue: '14px'
    },
    {
      id: 'verification_font_weight',
      label: 'Verification Font Weight',
      type: 'text',
      defaultValue: '400'
    },
    {
      id: 'verification_gap',
      label: 'Verification Gap',
      type: 'text',
      defaultValue: '4px'
    }
  ]
};