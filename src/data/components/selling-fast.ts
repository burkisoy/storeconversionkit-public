import { ComponentWithCustomization } from '../../types';

export const sellingFast: ComponentWithCustomization = {
  id: 'selling-fast',
  title: 'Selling Fast Badge',
  description: 'Display a dynamic badge showing how many people are viewing the product',
  category: 'FOMO',
  tags: ['badge', 'fomo', 'social proof'],
  free: true,
  code: `<div style="
  background: {{ background_color | default: '#f5f0ff' }};
  color: {{ text_color | default: '#1a1a1a' }};
  border-radius: {{ border_radius | default: '20px' }};
  font-family: {{ font_family | default: "'Helvetica Neue', sans-serif" }};
  font-size: {{ font_size | default: '13px' }};
  padding: {{ padding | default: '6px 14px' }};
  display: inline-flex;
  align-items: center;
  gap: {{ gap | default: '6px' }};
  box-shadow: {{ box_shadow | default: '0 1px 2px rgba(0, 0, 0, 0.08)' }};
  margin: {{ margin | default: '16px 0' }};
">
  <span style="
    width: {{ dot_size | default: '10px' }};
    height: {{ dot_size | default: '10px' }};
    border-radius: 50%;
    background: {{ dot_color | default: '#7c3aed' }};
    display: inline-block;
  "></span>
  <strong>{{ title_text | default: 'Selling Fast!' }}</strong>&nbsp;{{ viewer_text | default: '28 people are looking at this' }}
</div>`,
  customizationOptions: [
    {
      id: 'title_text',
      label: 'Title Text',
      type: 'text',
      defaultValue: 'Selling Fast!'
    },
    {
      id: 'viewer_text',
      label: 'Viewer Text',
      type: 'text',
      defaultValue: '28 people are looking at this'
    },
    {
      id: 'background_color',
      label: 'Background Color',
      type: 'color',
      defaultValue: '#f5f0ff'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#1a1a1a'
    },
    {
      id: 'dot_color',
      label: 'Dot Color',
      type: 'color',
      defaultValue: '#7c3aed'
    },
    {
      id: 'dot_size',
      label: 'Dot Size',
      type: 'text',
      defaultValue: '10px'
    },
    {
      id: 'font_size',
      label: 'Font Size',
      type: 'text',
      defaultValue: '13px'
    },
    {
      id: 'padding',
      label: 'Padding',
      type: 'text',
      defaultValue: '6px 14px'
    },
    {
      id: 'gap',
      label: 'Gap',
      type: 'text',
      defaultValue: '6px'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '20px'
    },
    {
      id: 'box_shadow',
      label: 'Box Shadow',
      type: 'text',
      defaultValue: '0 1px 2px rgba(0, 0, 0, 0.08)'
    },
    {
      id: 'margin',
      label: 'Margin',
      type: 'text',
      defaultValue: '16px 0'
    }
  ]
};