import { ComponentWithCustomization } from '../../types';

export const circleSlider: ComponentWithCustomization = {
  id: 'circle-slider',
  title: 'Circle Slider',
  description: 'Display categories in a horizontal scrollable list with circular images',
  category: 'Navigation',
  tags: ['slider', 'categories', 'navigation', 'scroll'],
  code: `<div class="circle-slider-wrapper">
  <div class="circle-slider">
    <div class="circle-track">
      
      <div class="circle-slide">
        <a href="{{ item1_link | default: '#' }}" class="circle-icon">
          <img src="{{ item1_image | default: 'https://section.store/cdn/shop/products/mug.jpg?v=1663855357' }}" alt="{{ item1_title | default: 'Mugs' }}">
        </a>
        <p class="circle-label">{{ item1_title | default: 'Mugs' }}</p>
      </div>

      <div class="circle-slide">
        <a href="{{ item2_link | default: '#' }}" class="circle-icon">
          <img src="{{ item2_image | default: 'https://section.store/cdn/shop/files/5-panel-hat_4ee20a27-8d5a-490e-a2fc-1f9c3beb7bf5.webp?v=1663859540' }}" alt="{{ item2_title | default: 'Hats' }}">
        </a>
        <p class="circle-label">{{ item2_title | default: 'Hats' }}</p>
      </div>

      <div class="circle-slide">
        <a href="{{ item3_link | default: '#' }}" class="circle-icon">
          <img src="{{ item3_image | default: 'https://section.store/cdn/shop/files/campstool-1.webp?v=1663859592' }}" alt="{{ item3_title | default: 'Stools' }}">
        </a>
        <p class="circle-label">{{ item3_title | default: 'Stools' }}</p>
      </div>

      <div class="circle-slide">
        <a href="{{ item4_link | default: '#' }}" class="circle-icon">
          <img src="{{ item4_image | default: 'https://section.store/cdn/shop/files/Lunchbag_Khaki_Front_8ae0e1f4-407d-4ac0-89e6-961b306ef351.jpg?v=1663859624' }}" alt="{{ item4_title | default: 'Bags' }}">
        </a>
        <p class="circle-label">{{ item4_title | default: 'Bags' }}</p>
      </div>

      <div class="circle-slide">
        <a href="{{ item5_link | default: '#' }}" class="circle-icon">
          <img src="{{ item5_image | default: 'https://section.store/cdn/shop/files/woolfill-jacket_6c39ae23-c0c8-4821-85f4-4b5d64333c62.webp?v=1663859701' }}" alt="{{ item5_title | default: 'Jackets' }}">
        </a>
        <p class="circle-label">{{ item5_title | default: 'Jackets' }}</p>
      </div>

      <div class="circle-slide">
        <a href="{{ item6_link | default: '#' }}" class="circle-icon">
          <img src="{{ item6_image | default: 'https://section.store/cdn/shop/products/1_637c75a8-33f9-4c38-aebf-5a3dc31162dc.png?v=1706026914' }}" alt="{{ item6_title | default: 'Throws' }}">
        </a>
        <p class="circle-label">{{ item6_title | default: 'Throws' }}</p>
      </div>

      <div class="circle-slide">
        <a href="{{ item7_link | default: '#' }}" class="circle-icon">
          <img src="{{ item7_image | default: 'https://section.store/cdn/shop/products/2_c196c504-dfa8-41e9-b151-1094c4962009.png?v=1706026914' }}" alt="{{ item7_title | default: 'Rugs' }}">
        </a>
        <p class="circle-label">{{ item7_title | default: 'Rugs' }}</p>
      </div>

    </div>
  </div>

  {% style %}
  .circle-slider-wrapper {
    overflow-x: auto;
    padding: 20px 10px;
  }

  .circle-slider {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .circle-track {
    display: flex;
    flex-wrap: nowrap;
    gap: 16px;
    min-width: max-content;
  }

  .circle-slide {
    flex: 0 0 auto;
    width: 66px;
    text-align: center;
  }

  .circle-icon {
    width: 66px;
    height: 66px;
    border-radius: 50%;
    overflow: hidden;
    background-image: linear-gradient(133deg, #fadc36 11%, #fe6292 49%, #fadc36 87%);
    padding: 2px;
    display: block;
  }

  .circle-icon img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid white;
    display: block;
  }

  .circle-label {
    margin-top: 6px;
    font-size: 10px;
    color: #121212;
  }

  @media screen and (min-width: 768px) {
    .circle-slide {
      width: 80px;
    }
    .circle-icon {
      width: 80px;
      height: 80px;
    }
    .circle-label {
      font-size: 12px;
    }
  }
  {% endstyle %}
</div>`,
  customizationOptions: [
    {
      id: 'item1_link',
      label: 'Item 1 Link',
      type: 'text',
      defaultValue: '#'
    },
    {
      id: 'item1_image',
      label: 'Item 1 Image',
      type: 'text',
      defaultValue: 'https://section.store/cdn/shop/products/mug.jpg?v=1663855357'
    },
    {
      id: 'item1_title',
      label: 'Item 1 Title',
      type: 'text',
      defaultValue: 'Mugs'
    },
    {
      id: 'item2_link',
      label: 'Item 2 Link',
      type: 'text',
      defaultValue: '#'
    },
    {
      id: 'item2_image',
      label: 'Item 2 Image',
      type: 'text',
      defaultValue: 'https://section.store/cdn/shop/files/5-panel-hat_4ee20a27-8d5a-490e-a2fc-1f9c3beb7bf5.webp?v=1663859540'
    },
    {
      id: 'item2_title',
      label: 'Item 2 Title',
      type: 'text',
      defaultValue: 'Hats'
    },
    {
      id: 'item3_link',
      label: 'Item 3 Link',
      type: 'text',
      defaultValue: '#'
    },
    {
      id: 'item3_image',
      label: 'Item 3 Image',
      type: 'text',
      defaultValue: 'https://section.store/cdn/shop/files/campstool-1.webp?v=1663859592'
    },
    {
      id: 'item3_title',
      label: 'Item 3 Title',
      type: 'text',
      defaultValue: 'Stools'
    },
    {
      id: 'item4_link',
      label: 'Item 4 Link',
      type: 'text',
      defaultValue: '#'
    },
    {
      id: 'item4_image',
      label: 'Item 4 Image',
      type: 'text',
      defaultValue: 'https://section.store/cdn/shop/files/Lunchbag_Khaki_Front_8ae0e1f4-407d-4ac0-89e6-961b306ef351.jpg?v=1663859624'
    },
    {
      id: 'item4_title',
      label: 'Item 4 Title',
      type: 'text',
      defaultValue: 'Bags'
    },
    {
      id: 'item5_link',
      label: 'Item 5 Link',
      type: 'text',
      defaultValue: '#'
    },
    {
      id: 'item5_image',
      label: 'Item 5 Image',
      type: 'text',
      defaultValue: 'https://section.store/cdn/shop/files/woolfill-jacket_6c39ae23-c0c8-4821-85f4-4b5d64333c62.webp?v=1663859701'
    },
    {
      id: 'item5_title',
      label: 'Item 5 Title',
      type: 'text',
      defaultValue: 'Jackets'
    },
    {
      id: 'item6_link',
      label: 'Item 6 Link',
      type: 'text',
      defaultValue: '#'
    },
    {
      id: 'item6_image',
      label: 'Item 6 Image',
      type: 'text',
      defaultValue: 'https://section.store/cdn/shop/products/1_637c75a8-33f9-4c38-aebf-5a3dc31162dc.png?v=1706026914'
    },
    {
      id: 'item6_title',
      label: 'Item 6 Title',
      type: 'text',
      defaultValue: 'Throws'
    },
    {
      id: 'item7_link',
      label: 'Item 7 Link',
      type: 'text',
      defaultValue: '#'
    },
    {
      id: 'item7_image',
      label: 'Item 7 Image',
      type: 'text',
      defaultValue: 'https://section.store/cdn/shop/products/2_c196c504-dfa8-41e9-b151-1094c4962009.png?v=1706026914'
    },
    {
      id: 'item7_title',
      label: 'Item 7 Title',
      type: 'text',
      defaultValue: 'Rugs'
    }
  ]
};