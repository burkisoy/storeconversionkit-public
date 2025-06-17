import { ComponentWithCustomization } from '../../types';

export const giftBox: ComponentWithCustomization = {
  id: 'gift-box',
  title: 'Gift Box',
  description: 'Display exclusive free gifts with your first order',
  category: 'Promotions',
  tags: ['gift', 'promotion', 'offer', 'free'],
  code: `<div class="exclusive-sale-container">
  <div class="exclusive-sale-title">
    {{ exclusive_sale_title | default: 'FREE GIFTS WITH YOUR FIRST ORDER' }}
  </div>

  <div class="exclusive-sale-gift-list">
    
    <!-- Product 1 -->
    <div class="gift-box">
      <div class="gift-badge">
        {{ gift_1_badge_text | default: 'FREE' }} <span>{{ gift_1_price | default: '$10' }}</span>
      </div>
      <img src="{{ gift_1_image | default: 'https://cdn.shopify.com/s/files/1/0591/6521/2734/files/input_kopyasi_32.png?v=1742817671' }}" alt="{{ gift_1_label | default: 'The Hand Book' }}">
      <div class="gift-label">{{ gift_1_label | default: 'The Hand Book' }}</div>
    </div>

    <!-- Product 2 -->
    <div class="gift-box">
      <div class="gift-badge">
        {{ gift_2_badge_text | default: 'FREE' }} <span>{{ gift_2_price | default: '$6' }}</span>
      </div>
      <img src="{{ gift_2_image | default: 'https://cdn.shopify.com/s/files/1/0591/6521/2734/files/input_kopyasi_31.png?v=1742817524' }}" alt="{{ gift_2_label | default: 'Free Shipping' }}">
      <div class="gift-label">{{ gift_2_label | default: 'Free Shipping' }}</div>
    </div>

    <!-- Product 3 -->
    <div class="gift-box">
      <div class="gift-badge">
        {{ gift_3_badge_text | default: 'FREE' }} <span>{{ gift_3_price | default: '$19' }}</span>
      </div>
      <img src="{{ gift_3_image | default: 'https://cdn.shopify.com/s/files/1/0591/6521/2734/files/input_kopyasi_33.png?v=1742817767' }}" alt="{{ gift_3_label | default: 'Lash Curler' }}">
      <div class="gift-label">{{ gift_3_label | default: 'Lash Curler' }}</div>
    </div>

  </div>

  {% style %}
  .exclusive-sale-container {
    background-color: {{ background_color | default: '#fcfcfc' }};
    padding: {{ container_padding | default: '20px 10px' }};
    text-align: center;
  }

  .exclusive-sale-title {
    font-size: {{ title_font_size | default: '14px' }};
    font-weight: {{ title_font_weight | default: '700' }};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: {{ title_color | default: '#333' }};
    margin-bottom: 20px;
  }

  .exclusive-sale-gift-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: {{ gift_gap | default: '8px' }};
  }

  .gift-box {
    position: relative;
    background-color: {{ gift_box_bg | default: '#fce1ec' }};
    border: {{ gift_box_border | default: '2px dashed #000' }};
    border-radius: {{ gift_box_radius | default: '6px' }};
    width: 120px;
    padding: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }

  .gift-badge {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: {{ badge_bg | default: '#ff5c8d' }};
    color: {{ badge_text_color | default: 'white' }};
    font-size: 10px;
    font-weight: 700;
    padding: 3px 12px;
    border-radius: 4px;
    width: 80px;
    box-sizing: border-box;
    text-transform: uppercase;
  }

  .gift-badge span {
    text-decoration: line-through;
  }

  .gift-box img {
    width: 65px;
    height: 65px;
    object-fit: contain;
    margin: 14px 0 5px;
  }

  .gift-label {
    font-size: {{ label_font_size | default: '10px' }};
    font-weight: {{ label_font_weight | default: '700' }};
    color: {{ label_color | default: '#333' }};
    text-transform: uppercase;
    margin-top: 4px;
  }

  @media (max-width: 1024px) {
    .gift-box {
      width: 100px;
      padding: 5px;
    }
    .gift-box img {
      width: 50px;
      height: 50px;
    }
    .gift-label {
      font-size: 9px;
    }
    .exclusive-sale-title {
      font-size: 11px;
    }
  }
  {% endstyle %}
</div>`,
  customizationOptions: [
    {
      id: 'exclusive_sale_title',
      label: 'Sale Title',
      type: 'text',
      defaultValue: 'FREE GIFTS WITH YOUR FIRST ORDER'
    },
    {
      id: 'gift_1_badge_text',
      label: 'Gift 1 Badge Text',
      type: 'text',
      defaultValue: 'FREE'
    },
    {
      id: 'gift_1_price',
      label: 'Gift 1 Price',
      type: 'text',
      defaultValue: '$10'
    },
    {
      id: 'gift_1_image',
      label: 'Gift 1 Image URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/s/files/1/0591/6521/2734/files/input_kopyasi_32.png?v=1742817671'
    },
    {
      id: 'gift_1_label',
      label: 'Gift 1 Label',
      type: 'text',
      defaultValue: 'The Hand Book'
    },
    {
      id: 'gift_2_badge_text',
      label: 'Gift 2 Badge Text',
      type: 'text',
      defaultValue: 'FREE'
    },
    {
      id: 'gift_2_price',
      label: 'Gift 2 Price',
      type: 'text',
      defaultValue: '$6'
    },
    {
      id: 'gift_2_image',
      label: 'Gift 2 Image URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/s/files/1/0591/6521/2734/files/input_kopyasi_31.png?v=1742817524'
    },
    {
      id: 'gift_2_label',
      label: 'Gift 2 Label',
      type: 'text',
      defaultValue: 'Free Shipping'
    },
    {
      id: 'gift_3_badge_text',
      label: 'Gift 3 Badge Text',
      type: 'text',
      defaultValue: 'FREE'
    },
    {
      id: 'gift_3_price',
      label: 'Gift 3 Price',
      type: 'text',
      defaultValue: '$19'
    },
    {
      id: 'gift_3_image',
      label: 'Gift 3 Image URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/s/files/1/0591/6521/2734/files/input_kopyasi_33.png?v=1742817767'
    },
    {
      id: 'gift_3_label',
      label: 'Gift 3 Label',
      type: 'text',
      defaultValue: 'Lash Curler'
    },
    {
      id: 'background_color',
      label: 'Background Color',
      type: 'color',
      defaultValue: '#fcfcfc'
    },
    {
      id: 'container_padding',
      label: 'Container Padding',
      type: 'text',
      defaultValue: '20px 10px'
    },
    {
      id: 'title_font_size',
      label: 'Title Font Size',
      type: 'text',
      defaultValue: '14px'
    },
    {
      id: 'title_font_weight',
      label: 'Title Font Weight',
      type: 'text',
      defaultValue: '700'
    },
    {
      id: 'title_color',
      label: 'Title Color',
      type: 'color',
      defaultValue: '#333'
    },
    {
      id: 'gift_gap',
      label: 'Gap Between Gifts',
      type: 'text',
      defaultValue: '8px'
    },
    {
      id: 'gift_box_bg',
      label: 'Gift Box Background',
      type: 'color',
      defaultValue: '#fce1ec'
    },
    {
      id: 'gift_box_border',
      label: 'Gift Box Border',
      type: 'text',
      defaultValue: '2px dashed #000'
    },
    {
      id: 'gift_box_radius',
      label: 'Gift Box Border Radius',
      type: 'text',
      defaultValue: '6px'
    },
    {
      id: 'badge_bg',
      label: 'Badge Background',
      type: 'color',
      defaultValue: '#ff5c8d'
    },
    {
      id: 'badge_text_color',
      label: 'Badge Text Color',
      type: 'color',
      defaultValue: 'white'
    },
    {
      id: 'label_font_size',
      label: 'Label Font Size',
      type: 'text',
      defaultValue: '10px'
    },
    {
      id: 'label_font_weight',
      label: 'Label Font Weight',
      type: 'text',
      defaultValue: '700'
    },
    {
      id: 'label_color',
      label: 'Label Color',
      type: 'color',
      defaultValue: '#333'
    }
  ]
};