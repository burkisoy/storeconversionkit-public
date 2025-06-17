import { ComponentWithCustomization } from '../../types';

export const featuresListComponent: ComponentWithCustomization = {
  id: 'features-list-component',
  title: 'Features List',
  description: 'Display product features with checkmark icons',
  category: 'Product',
  tags: ['features', 'list', 'product'],
  code: `<div style="
  margin-top: {{ margin_top | default: '0.25rem' }};
  margin-bottom: {{ margin_bottom | default: '0.25rem' }};
  width: 100%
">
  <div style="
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: {{ gap | default: '6px' }};
    text-align: left
  ">
    <div style="
      display: flex;
      align-items: center;
      gap: {{ icon_gap | default: '8px' }};
      font-weight: {{ font_weight | default: '500' }};
      font-size: {{ font_size | default: '16px' }}
    ">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" style="
        color: {{ icon_color | default: '#701a75' }};
        height: {{ icon_size | default: '18px' }};
        width: {{ icon_size | default: '18px' }}
      " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z"></path>
      </svg>
      <span style="color: {{ text_color | default: '#701a75' }}">{{ feature_1 | default: 'High quality materials' }}</span>
    </div>

    <div style="
      display: flex;
      align-items: center;
      gap: {{ icon_gap | default: '8px' }};
      font-weight: {{ font_weight | default: '500' }};
      font-size: {{ font_size | default: '16px' }}
    ">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" style="
        color: {{ icon_color | default: '#701a75' }};
        height: {{ icon_size | default: '18px' }};
        width: {{ icon_size | default: '18px' }}
      " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z"></path>
      </svg>
      <span style="color: {{ text_color | default: '#701a75' }}">{{ feature_2 | default: '90% Polymer, 10% Plastic' }}</span>
    </div>

    <div style="
      display: flex;
      align-items: center;
      gap: {{ icon_gap | default: '8px' }};
      font-weight: {{ font_weight | default: '500' }};
      font-size: {{ font_size | default: '16px' }}
    ">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" style="
        color: {{ icon_color | default: '#701a75' }};
        height: {{ icon_size | default: '18px' }};
        width: {{ icon_size | default: '18px' }}
      " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z"></path>
      </svg>
      <span style="color: {{ text_color | default: '#701a75' }}">{{ feature_3 | default: '100% Recyclable' }}</span>
    </div>
  </div>
</div>`,
  customizationOptions: [
    {
      id: 'feature_1',
      label: 'Feature 1',
      type: 'text',
      defaultValue: 'High quality materials'
    },
    {
      id: 'feature_2',
      label: 'Feature 2',
      type: 'text',
      defaultValue: '90% Polymer, 10% Plastic'
    },
    {
      id: 'feature_3',
      label: 'Feature 3',
      type: 'text',
      defaultValue: '100% Recyclable'
    },
    {
      id: 'icon_color',
      label: 'Icon Color',
      type: 'color',
      defaultValue: '#701a75'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#701a75'
    },
    {
      id: 'font_size',
      label: 'Font Size',
      type: 'text',
      defaultValue: '16px'
    },
    {
      id: 'font_weight',
      label: 'Font Weight',
      type: 'text',
      defaultValue: '500'
    },
    {
      id: 'icon_size',
      label: 'Icon Size',
      type: 'text',
      defaultValue: '18px'
    },
    {
      id: 'gap',
      label: 'Gap Between Items',
      type: 'text',
      defaultValue: '6px'
    },
    {
      id: 'icon_gap',
      label: 'Gap Between Icon and Text',
      type: 'text',
      defaultValue: '8px'
    },
    {
      id: 'margin_top',
      label: 'Margin Top',
      type: 'text',
      defaultValue: '0.25rem'
    },
    {
      id: 'margin_bottom',
      label: 'Margin Bottom',
      type: 'text',
      defaultValue: '0.25rem'
    }
  ]
};