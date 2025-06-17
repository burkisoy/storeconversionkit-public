import { ComponentWithCustomization } from '../../types';

export const productChooser: ComponentWithCustomization = {
  id: 'product-chooser',
  title: 'Product Chooser',
  description: 'Display product options with highlight badge',
  category: 'Product',
  tags: ['product', 'options', 'chooser', 'highlight'],
  code: `<div class="routine-chooser-container">
  <div class="routine-chooser-title">
    {{ routine_section_title | default: "Special Offer Today" }}
  </div>
  <div class="routine-chooser-options">
    
    <!-- Product Box 1 (Discounted, Highlighted) -->
    <div class="routine-chooser-product-box routine-chooser-product-box-highlight">
      <div class="routine-chooser-highlight-badge">
        {{ highlight_badge_text | default: "Stay Smoother Longer" }}
      </div>
      <img class="routine-chooser-product-image" src="{{ product_1_image | default: 'https://cdn.shopify.com/s/files/1/0591/6521/2734/files/Nood_Flasher_Pro-Nood_Serumx2_Trans.png?v=1743681267' }}" alt="{{ product_1_title | default: 'Flasher Pro + 2 Nood Serums' }}">
      <div class="routine-chooser-product-details">
        <h3 class="routine-chooser-product-title">{{ product_1_title | default: "Flasher Pro + 2 Nood Serums" }}</h3>
        <p class="routine-chooser-product-price">
          {{ product_1_price | default: "$399" }}
          <span class="routine-chooser-product-price-original">
            {{ product_1_original_price | default: "$477" }}
          </span>
        </p>
      </div>
    </div>

    <!-- Product Box 2 (Normal) -->
    <div class="routine-chooser-product-box">
      <img class="routine-chooser-product-image" src="{{ product_2_image | default: 'https://cdn.shopify.com/s/files/1/0591/6521/2734/files/20250130-NS-Nood-3qtr-transparent-59.png?v=1743681267' }}" alt="{{ product_2_title | default: 'Flasher Pro' }}">
      <div class="routine-chooser-product-details">
        <h3 class="routine-chooser-product-title">{{ product_2_title | default: "Flasher Pro" }}</h3>
        <p class="routine-chooser-product-price">{{ product_2_price | default: "$399" }}</p>
      </div>
    </div>

  </div>

  {% style %}
  .routine-chooser-container {
    text-align: center;
    padding: 20px;
    font-family: 'Arial', sans-serif;
  }

  .routine-chooser-title {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 20px;
    color: #333;
    text-transform: uppercase;
  }

  .routine-chooser-options {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .routine-chooser-product-box {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    width: 220px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: relative;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .routine-chooser-product-box-highlight {
    background-color: #f9e4b7;
    border: 1px solid #000;
    padding-top: 30px;
  }

  .routine-chooser-highlight-badge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #000;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    padding: 5px 0;
    border-radius: 5px 5px 0 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-sizing: border-box;
  }

  .routine-chooser-product-image {
    width: 100%;
    height: 150px;
    margin: 20px 0 10px 0;
    object-fit: contain;
  }

  .routine-chooser-product-details {
    margin-bottom: 15px;
  }

  .routine-chooser-product-title {
    font-size: 14px;
    font-weight: 600;
    margin: 0 0 5px 0;
    color: #333;
    line-height: 1.4;
  }

  .routine-chooser-product-price {
    font-size: 16px;
    font-weight: 700;
    color: #333;
  }

  .routine-chooser-product-price-original {
    text-decoration: line-through;
    color: #999;
    margin-left: 5px;
  }

  @media (max-width: 500px) {
    .routine-chooser-options {
      flex-direction: column;
      align-items: center;
    }
  }
  {% endstyle %}
</div>`,
  customizationOptions: [
    {
      id: 'routine_section_title',
      label: 'Section Title',
      type: 'text',
      defaultValue: 'Special Offer Today'
    },
    {
      id: 'highlight_badge_text',
      label: 'Highlight Badge Text',
      type: 'text',
      defaultValue: 'Stay Smoother Longer'
    },
    {
      id: 'product_1_image',
      label: 'Product 1 Image URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/s/files/1/0591/6521/2734/files/Nood_Flasher_Pro-Nood_Serumx2_Trans.png?v=1743681267'
    },
    {
      id: 'product_1_title',
      label: 'Product 1 Title',
      type: 'text',
      defaultValue: 'Flasher Pro + 2 Nood Serums'
    },
    {
      id: 'product_1_price',
      label: 'Product 1 Price',
      type: 'text',
      defaultValue: '$399'
    },
    {
      id: 'product_1_original_price',
      label: 'Product 1 Original Price',
      type: 'text',
      defaultValue: '$477'
    },
    {
      id: 'product_2_image',
      label: 'Product 2 Image URL', 
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/s/files/1/0591/6521/2734/files/20250130-NS-Nood-3qtr-transparent-59.png?v=1743681267'
    },
    {
      id: 'product_2_title',
      label: 'Product 2 Title',
      type: 'text',
      defaultValue: 'Flasher Pro'
    },
    {
      id: 'product_2_price',
      label: 'Product 2 Price',
      type: 'text',
      defaultValue: '$399'
    }
  ]
};