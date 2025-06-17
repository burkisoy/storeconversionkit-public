import { ComponentWithCustomization } from '../../types';

export const offerBox: ComponentWithCustomization = {
  id: 'offer-box',
  title: 'Offer Box',
  description: 'Display your irresistible offer as a static image to your customer',
  category: 'Product',
  tags: ['product', 'options', 'offer', 'highlight'],
  code: `<div class="routine-chooser-container">
  <div class="routine-chooser-title">
    {{ routine_section_title | default: "Special Offer Today" }}
  </div>
  <div class="routine-chooser-options">
    
    <!-- Ürün 1 -->
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

    <!-- Ürün 2 -->
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
    font-family: Arial, sans-serif;
  }

  .routine-chooser-title {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 20px;
    color: {{ title_color | default: '#333333' }};
    text-transform: uppercase;
  }

  .routine-chooser-options {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }

  .routine-chooser-product-box {
    background-color: {{ product_box_bg | default: '#ffffff' }};
    border: 1px solid {{ product_box_border | default: '#e0e0e0' }};
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: relative;
    flex: 1 1 45%;
    max-width: 220px;
    min-width: 140px;
    height: 300px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .routine-chooser-product-box-highlight {
    background-color: {{ highlight_box_bg | default: '#f9e4b7' }};
    border: 1px solid {{ highlight_box_border | default: '#000000' }};
    padding-top: 30px;
  }

  .routine-chooser-highlight-badge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: {{ badge_bg | default: '#000000' }};
    color: {{ badge_text_color | default: '#ffffff' }};
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
    object-fit: contain;
    margin: 20px 0 10px 0;
  }

  .routine-chooser-product-details {
    margin-bottom: 15px;
  }

  .routine-chooser-product-title {
    font-size: 14px;
    font-weight: 600;
    margin: 0 0 5px 0;
    color: {{ product_title_color | default: '#333333' }};
    line-height: 1.4;
  }

  .routine-chooser-product-price {
    font-size: 16px;
    font-weight: 700;
    color: {{ product_price_color | default: '#333333' }};
  }

  .routine-chooser-product-price-original {
    text-decoration: line-through;
    color: {{ original_price_color | default: '#999999' }};
    margin-left: 5px;
  }

  @media (max-width: 600px) {
    .routine-chooser-highlight-badge {
      font-size: 10px;
      padding: 4px 0;
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
    },
    {
      id: 'title_color',
      label: 'Title Color',
      type: 'color',
      defaultValue: '#333333'
    },
    {
      id: 'product_box_bg',
      label: 'Product Box Background',
      type: 'color',
      defaultValue: '#ffffff'
    },
    {
      id: 'product_box_border',
      label: 'Product Box Border',
      type: 'color',
      defaultValue: '#e0e0e0'
    },
    {
      id: 'highlight_box_bg',
      label: 'Highlight Box Background',
      type: 'color',
      defaultValue: '#f9e4b7'
    },
    {
      id: 'highlight_box_border',
      label: 'Highlight Box Border',
      type: 'color',
      defaultValue: '#000000'
    },
    {
      id: 'badge_bg',
      label: 'Badge Background',
      type: 'color',
      defaultValue: '#000000'
    },
    {
      id: 'badge_text_color',
      label: 'Badge Text Color',
      type: 'color',
      defaultValue: '#ffffff'
    },
    {
      id: 'product_title_color',
      label: 'Product Title Color',
      type: 'color',
      defaultValue: '#333333'
    },
    {
      id: 'product_price_color',
      label: 'Product Price Color',
      type: 'color',
      defaultValue: '#333333'
    },
    {
      id: 'original_price_color',
      label: 'Original Price Color',
      type: 'color',
      defaultValue: '#999999'
    }
  ]
};