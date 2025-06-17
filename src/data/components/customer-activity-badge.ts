import { ComponentWithCustomization } from '../../types';

export const customerActivityBadge: ComponentWithCustomization = {
  id: 'customer-activity-badge',
  title: 'Customer Activity Badge',
  description: 'Display recent customer activity with profile images',
  category: 'FOMO',
  tags: ['social proof', 'fomo', 'customers', 'activity'],
  free: false,
  code: `<div style="
  background-color: {{ background_color | default: '#fdf3e8' }};
  border-radius: {{ border_radius | default: '20px' }};
  display: flex;
  align-items: center;
  padding: {{ padding | default: '8px 15px' }};
  max-width: {{ max_width | default: '400px' }};
  box-shadow: {{ box_shadow | default: '0 2px 6px rgba(0,0,0,0.1)' }};
  font-family: {{ font_family | default: 'Arial, sans-serif' }};
">
  <!-- Profile Images -->
  <div style="display: flex; margin-right: {{ images_margin_right | default: '15px' }};">
    <img src="{{ profile_image_1 | default: 'https://randomuser.me/api/portraits/women/1.jpg' }}" style="
      width: {{ profile_image_size | default: '35px' }};
      height: {{ profile_image_size | default: '35px' }};
      border-radius: 50%;
      border: {{ profile_image_border | default: '2px solid white' }};
      margin-left: {{ profile_image_offset | default: '-8px' }};
      z-index: 5;
    " />
    <img src="{{ profile_image_2 | default: 'https://randomuser.me/api/portraits/women/2.jpg' }}" style="
      width: {{ profile_image_size | default: '35px' }};
      height: {{ profile_image_size | default: '35px' }};
      border-radius: 50%;
      border: {{ profile_image_border | default: '2px solid white' }};
      margin-left: {{ profile_image_offset | default: '-8px' }};
      z-index: 4;
    " />
    <img src="{{ profile_image_3 | default: 'https://randomuser.me/api/portraits/men/3.jpg' }}" style="
      width: {{ profile_image_size | default: '35px' }};
      height: {{ profile_image_size | default: '35px' }};
      border-radius: 50%;
      border: {{ profile_image_border | default: '2px solid white' }};
      margin-left: {{ profile_image_offset | default: '-8px' }};
      z-index: 3;
    " />
    <img src="{{ profile_image_4 | default: 'https://randomuser.me/api/portraits/men/4.jpg' }}" style="
      width: {{ profile_image_size | default: '35px' }};
      height: {{ profile_image_size | default: '35px' }};
      border-radius: 50%;
      border: {{ profile_image_border | default: '2px solid white' }};
      margin-left: {{ profile_image_offset | default: '-8px' }};
      z-index: 2;
    " />
    <img src="{{ profile_image_5 | default: 'https://randomuser.me/api/portraits/women/5.jpg' }}" style="
      width: {{ profile_image_size | default: '35px' }};
      height: {{ profile_image_size | default: '35px' }};
      border-radius: 50%;
      border: {{ profile_image_border | default: '2px solid white' }};
      margin-left: {{ profile_image_offset | default: '-8px' }};
      z-index: 1;
    " />
  </div>

  <!-- Text Content -->
  <div>
    <div style="
      font-weight: bold;
      font-size: {{ title_font_size | default: '14px' }};
      color: {{ title_color | default: '#000' }};
    ">{{ title_text | default: 'Limited Stock!' }}</div>
    <div style="
      font-size: {{ subtitle_font_size | default: '12px' }};
      color: {{ subtitle_color | default: '#333' }};
    ">{{ subtitle_text | default: 'Bought 160 Times Today' }}</div>
  </div>
</div>`,
  customizationOptions: [
    {
      id: 'title_text',
      label: 'Title Text',
      type: 'text',
      defaultValue: 'Limited Stock!'
    },
    {
      id: 'subtitle_text',
      label: 'Subtitle Text',
      type: 'text',
      defaultValue: 'Bought 160 Times Today'
    },
    {
      id: 'background_color',
      label: 'Background Color',
      type: 'color',
      defaultValue: '#fdf3e8'
    },
    {
      id: 'title_color',
      label: 'Title Color',
      type: 'color',
      defaultValue: '#000'
    },
    {
      id: 'subtitle_color',
      label: 'Subtitle Color',
      type: 'color',
      defaultValue: '#333'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '20px'
    },
    {
      id: 'padding',
      label: 'Padding',
      type: 'text',
      defaultValue: '8px 15px'
    },
    {
      id: 'max_width',
      label: 'Max Width',
      type: 'text',
      defaultValue: '400px'
    },
    {
      id: 'box_shadow',
      label: 'Box Shadow',
      type: 'text',
      defaultValue: '0 2px 6px rgba(0,0,0,0.1)'
    },
    {
      id: 'profile_image_size',
      label: 'Profile Image Size',
      type: 'text',
      defaultValue: '35px'
    },
    {
      id: 'profile_image_border',
      label: 'Profile Image Border',
      type: 'text',
      defaultValue: '2px solid white'
    },
    {
      id: 'profile_image_offset',
      label: 'Profile Image Offset',
      type: 'text',
      defaultValue: '-8px'
    },
    {
      id: 'images_margin_right',
      label: 'Images Margin Right',
      type: 'text',
      defaultValue: '15px'
    },
    {
      id: 'title_font_size',
      label: 'Title Font Size',
      type: 'text',
      defaultValue: '14px'
    },
    {
      id: 'subtitle_font_size',
      label: 'Subtitle Font Size',
      type: 'text',
      defaultValue: '12px'
    },
    {
      id: 'profile_image_1',
      label: 'Profile Image 1 URL',
      type: 'text',
      defaultValue: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: 'profile_image_2',
      label: 'Profile Image 2 URL',
      type: 'text',
      defaultValue: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      id: 'profile_image_3',
      label: 'Profile Image 3 URL',
      type: 'text',
      defaultValue: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
      id: 'profile_image_4',
      label: 'Profile Image 4 URL',
      type: 'text',
      defaultValue: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    {
      id: 'profile_image_5',
      label: 'Profile Image 5 URL',
      type: 'text',
      defaultValue: 'https://randomuser.me/api/portraits/women/5.jpg'
    }
  ]
};