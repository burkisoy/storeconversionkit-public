import { ComponentWithCustomization } from '../../types';

export const accordion: ComponentWithCustomization = {
  id: 'accordion',
  title: 'Product Information Accordion',
  description: 'Expandable sections for product details',
  category: 'Product',
  tags: ['accordion', 'product', 'information', 'faq'],
  stars: 1,
  code: `<style>
  .accordion-wrapper {
    max-width: {{ max_width | default: '700px' }};
    margin: 0 auto;
    padding: {{ wrapper_padding | default: '20px' }};
  }

  .accordion-item {
    margin-bottom: {{ item_spacing | default: '20px' }};
  }

  .accordion-title {
    background: {{ title_bg | default: '#ffffff' }};
    padding: {{ title_padding | default: '20px' }};
    border-radius: {{ border_radius | default: '12px' }};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: {{ title_shadow | default: '0 4px 15px rgba(0, 0, 0, 0.05)' }};
    transition: all 0.3s ease;
  }

  .accordion-title span {
    color: {{ title_color | default: '#333333' }};
  }

  .accordion-title .accordion-icon {
    color: {{ icon_color | default: '#718096' }};
  }

  .accordion-title:hover {
    background: {{ hover_bg | default: '#f7fafc' }};
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }

  .accordion-content {
    display: none;
    padding: {{ content_padding | default: '20px' }};
    background: {{ content_bg | default: '#f9fafb' }};
    border-radius: {{ border_radius | default: '12px' }};
    border: 1px solid {{ content_border | default: '#e5e7eb' }};
    margin-top: {{ content_margin | default: '10px' }};
    color: {{ content_color | default: '#4a5568' }};
  }

  .accordion-item.active .accordion-content {
    display: block;
  }

  .accordion-icon {
    transition: transform 0.3s ease;
  }

  .accordion-item.active .accordion-icon {
    transform: rotate(180deg);
  }
</style>

<div class="accordion-wrapper">
  <div class="accordion-item">
    <div class="accordion-title">
      <span>{{ section1_title | default: 'Product Description' }}</span>
      <span class="accordion-icon">▼</span>
    </div>
    <div class="accordion-content">
      <p>This section contains detailed information about the product. You can find the product's features, usage instructions, and other important details here.</p>
    </div>
  </div>

  <div class="accordion-item">
    <div class="accordion-title">
      <span>{{ section2_title | default: 'Shipping & Returns' }}</span>
      <span class="accordion-icon">▼</span>
    </div>
    <div class="accordion-content">
      <p><strong>Shipping:</strong></p>
      <ul>
        <li><strong>Standard:</strong> Delivery expected within 20 working days.</li>
        <li><strong>Secure Delivery:</strong> Delivery handled by certified carriers.</li>
        <li><strong>Order Processing Time:</strong> 1 to 3 working days.</li>
      </ul>
      <p><strong>Returns:</strong></p>
      <ul>
        <li><strong>Timeframe:</strong> You have 15 days after receipt to return an item.</li>
        <li><strong>Return Conditions:</strong> The item must be in its original condition, unworn, with tags and not connected to our application.</li>
        <li><strong>Return Costs:</strong> At the customer's expense, except in cases of defective products.</li>
        <li><strong>Return Process:</strong> Contact support to obtain a return label and instructions.</li>
      </ul>
    </div>
  </div>

  <div class="accordion-item">
    <div class="accordion-title">
      <span>{{ section3_title | default: 'Secure Payment' }}</span>
      <span class="accordion-icon">▼</span>
    </div>
    <div class="accordion-content">
      <p>We ensure maximum security during your purchases:</p>
      <ul>
        <li><strong>Payment Methods:</strong> Visa, MasterCard, AMEX, PayPal, Apple Pay.</li>
        <li><strong>256-bit SSL Encryption:</strong> Your data is fully protected.</li>
        <li><strong>Enhanced Verification:</strong> Every purchase is verified to prevent fraud.</li>
      </ul>
      <img src="https://cdn.shopify.com/s/files/1/0591/6521/2734/files/Ekran_goruntusu_2025-04-05_161238.png?v=1743858786" alt="Secure Payment" style="margin-top: 15px; max-width: 100%; border-radius: 8px;">
    </div>
  </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".accordion-title").forEach(function (title) {
      title.addEventListener("click", function () {
        const item = title.parentElement;
        item.classList.toggle("active");
      });
    });
  });
</script>`,
  customizationOptions: [
    {
      id: 'section1_title',
      label: 'Section 1 Title',
      type: 'text',
      defaultValue: 'Product Description'
    },
    {
      id: 'section2_title',
      label: 'Section 2 Title',
      type: 'text',
      defaultValue: 'Shipping & Returns'
    },
    {
      id: 'section3_title',
      label: 'Section 3 Title',
      type: 'text',
      defaultValue: 'Secure Payment'
    },
    {
      id: 'title_bg',
      label: 'Title Background',
      type: 'color',
      defaultValue: '#ffffff'
    },
    {
      id: 'title_color',
      label: 'Title Text Color',
      type: 'color',
      defaultValue: '#333333'
    },
    {
      id: 'icon_color',
      label: 'Icon Color',
      type: 'color',
      defaultValue: '#718096'
    },
    {
      id: 'hover_bg',
      label: 'Hover Background',
      type: 'color',
      defaultValue: '#f7fafc'
    },
    {
      id: 'content_bg',
      label: 'Content Background',
      type: 'color',
      defaultValue: '#f9fafb'
    },
    {
      id: 'content_color',
      label: 'Content Text Color',
      type: 'color',
      defaultValue: '#4a5568'
    },
    {
      id: 'content_border',
      label: 'Content Border Color',
      type: 'color',
      defaultValue: '#e5e7eb'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '12px'
    },
    {
      id: 'title_shadow',
      label: 'Title Shadow',
      type: 'text',
      defaultValue: '0 4px 15px rgba(0, 0, 0, 0.05)'
    },
    {
      id: 'max_width',
      label: 'Maximum Width',
      type: 'text',
      defaultValue: '700px'
    },
    {
      id: 'wrapper_padding',
      label: 'Wrapper Padding',
      type: 'text',
      defaultValue: '20px'
    },
    {
      id: 'title_padding',
      label: 'Title Padding',
      type: 'text',
      defaultValue: '20px'
    },
    {
      id: 'content_padding',
      label: 'Content Padding',
      type: 'text',
      defaultValue: '20px'
    },
    {
      id: 'item_spacing',
      label: 'Item Spacing',
      type: 'text',
      defaultValue: '20px'
    },
    {
      id: 'content_margin',
      label: 'Content Margin Top',
      type: 'text',
      defaultValue: '10px'
    }
  ]
};