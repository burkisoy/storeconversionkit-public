import { ComponentWithCustomization } from '../../types';

export const moneyBackGuarantee: ComponentWithCustomization = {
  id: 'money-back-guarantee',
  title: 'Money Back Guarantee',
  description: 'Display a money-back guarantee badge with customizable text',
  category: 'Trust',
  tags: ['guarantee', 'trust', 'badge', 'refund'],
  code: `<div class="guarantee-container">
  <div class="guarantee-badge">
    <a href="{{ guarantee_badge_link | default: '#' }}">
      <img src="{{ guarantee_badge_image | default: 'https://i.hizliresim.com/a0c8xe3.png' }}" alt="Guarantee Badge">
    </a>
  </div>
  <div class="guarantee-text">
    <h3>{{ guarantee_title | default: '100% 14-Day Money Back Guarantee' }}</h3>
    <p>{{ guarantee_description | default: 'We are so confident in our products that if you are not satisfied, you have the right to get a full 14-day refund.' }}</p>
  </div>
</div>

<style>
.guarantee-container {
  display: flex;
  align-items: center;
  background-color: {{ guarantee_background_color | default: '#f8f1de' }};
  border-radius: {{ border_radius | default: '12px' }};
  padding: {{ container_padding | default: '15px' }};
  box-shadow: {{ box_shadow | default: '0 4px 6px rgba(0, 0, 0, 0.1)' }};
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  border: {{ border | default: '2px dashed #6c4e22' }};
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.guarantee-badge {
  margin-right: {{ badge_margin | default: '15px' }};
}

.guarantee-badge img {
  display: block;
  width: {{ badge_size | default: '100px' }};
  height: auto;
}

.guarantee-text h3 {
  margin: 0;
  font-size: {{ title_font_size | default: '13px' }};
  color: {{ guarantee_title_color | default: '#6c4e22' }};
  font-weight: {{ title_font_weight | default: 'bold' }};
  text-align: left;
}

.guarantee-text p {
  margin: 5px 0 0;
  font-size: {{ description_font_size | default: '11px' }};
  color: {{ guarantee_text_color | default: '#4f4f4f' }};
  text-align: left;
}

@media (max-width: 480px) {
  .guarantee-container {
    padding: 10px;
    flex-direction: row;
  }

  .guarantee-badge {
    margin-right: 10px;
  }

  .guarantee-badge img {
    width: 80px;
  }

  .guarantee-text h3 {
    font-size: 12px;
  }

  .guarantee-text p {
    font-size: 10px;
  }
}
</style>`,
  customizationOptions: [
    {
      id: 'guarantee_badge_image',
      label: 'Badge Image URL',
      type: 'text',
      defaultValue: 'https://i.hizliresim.com/a0c8xe3.png'
    },
    {
      id: 'guarantee_badge_link',
      label: 'Badge Link URL',
      type: 'text',
      defaultValue: '#'
    },
    {
      id: 'guarantee_title',
      label: 'Guarantee Title',
      type: 'text',
      defaultValue: '100% 14-Day Money Back Guarantee'
    },
    {
      id: 'guarantee_description',
      label: 'Guarantee Description',
      type: 'text',
      defaultValue: 'We are so confident in our products that if you are not satisfied, you have the right to get a full 14-day refund.'
    },
    {
      id: 'guarantee_background_color',
      label: 'Background Color',
      type: 'color',
      defaultValue: '#f8f1de'
    },
    {
      id: 'guarantee_title_color',
      label: 'Title Color',
      type: 'color',
      defaultValue: '#6c4e22'
    },
    {
      id: 'guarantee_text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#4f4f4f'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '12px'
    },
    {
      id: 'container_padding',
      label: 'Container Padding',
      type: 'text',
      defaultValue: '15px'
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
      defaultValue: '2px dashed #6c4e22'
    },
    {
      id: 'badge_margin',
      label: 'Badge Margin',
      type: 'text',
      defaultValue: '15px'
    },
    {
      id: 'badge_size',
      label: 'Badge Size',
      type: 'text',
      defaultValue: '100px'
    },
    {
      id: 'title_font_size',
      label: 'Title Font Size',
      type: 'text',
      defaultValue: '13px'
    },
    {
      id: 'title_font_weight',
      label: 'Title Font Weight',
      type: 'text',
      defaultValue: 'bold'
    },
    {
      id: 'description_font_size',
      label: 'Description Font Size',
      type: 'text',
      defaultValue: '11px'
    }
  ]
};