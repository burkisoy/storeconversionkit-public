import { ComponentWithCustomization } from '../../types';

export const customerReviews: ComponentWithCustomization = {
  id: 'customer-reviews',
  title: 'Customer Reviews Grid',
  description: 'Display customer reviews in a beautiful scrollable grid',
  category: 'Social Proof',
  tags: ['reviews', 'testimonials', 'social proof', 'customers'],
  free: false,
  code: `<div style="
  background: {{ background_color | default: "#f9f9f9" }}; 
  padding: {{ container_padding | default: "40px 20px" }}; 
  font-family: {{ font_family | default: "-apple-system, BlinkMacSystemFont, sans-serif" }};
">
  <div style="text-align: center; margin-bottom: 20px;">
    <div style="
      display: inline-block; 
      padding: 4px 12px; 
      background: {{ rating_badge_bg | default: "#ffe6ef" }}; 
      color: {{ rating_badge_text_color | default: "#000" }}; 
      border-radius: 9999px; 
      font-size: 13px;
    ">
      {{ rating_badge_icon | default: "★" }} <strong>{{ rating_text | default: "Rated 4.8/5" }}</strong> {{ rating_subtext | default: "based on +137,135 reviews" }}
    </div>
    <h2 style="
      font-size: {{ heading_font_size | default: "28px" }}; 
      font-weight: {{ heading_font_weight | default: "700" }}; 
      margin-top: 10px;
    ">
      <span style="color: {{ heading_highlight_color | default: "#e91e63" }};">{{ heading_highlight_text | default: "Customer" }}</span> {{ heading_text | default: "Reviews" }}
    </h2>
  </div>

  <div style="
    display: flex; 
    gap: {{ review_gap | default: "20px" }}; 
    justify-content: flex-start; 
    flex-wrap: nowrap; 
    overflow-x: auto; 
    -webkit-overflow-scrolling: touch; 
    max-width: {{ container_max_width | default: "1000px" }}; 
    margin: 0 auto; 
    padding-bottom: 10px;
  ">
  
    <!-- Review 1 -->
    <div style="
      background: {{ review_bg | default: "#fff" }}; 
      border-radius: {{ review_border_radius | default: "12px" }}; 
      box-shadow: {{ review_box_shadow | default: "0 0 0 1px #eee" }}; 
      padding: {{ review_padding | default: "16px" }}; 
      min-width: {{ review_min_width | default: "280px" }}; 
      max-width: {{ review_max_width | default: "320px" }}; 
      flex-shrink: 0;
    ">
      <img src="{{ review_1_image | default: "https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Screenshot_2025-05-07_at_15.58.00.png?v=1746622733" }}" style="
        width: 100%; 
        border-radius: {{ image_border_radius | default: "8px" }};
      " alt="Review Photo">
      <div style="
        margin-top: 12px; 
        color: {{ stars_color | default: "#e91e63" }}; 
        font-size: {{ stars_font_size | default: "14px" }};
      ">★★★★★</div>
      <div style="margin-top: 6px; font-size: 13px;">
        <span style="
          background: {{ reviewer_badge_bg | default: "#ffe6ef" }}; 
          padding: 3px 8px; 
          border-radius: 9999px;
        ">{{ review_1_name | default: "Ashley, 30" }} {{ verified_badge | default: "💎 Verified Buyer" }}</span>
      </div>
      <p style="
        font-size: {{ review_text_font_size | default: "14px" }}; 
        color: {{ review_text_color | default: "#333" }}; 
        margin-top: 10px; 
        line-height: 1.5;
      ">
        {{ review_1_text | default: "I was skeptical at first, but this product completely transformed my routine with zero pain or irritation..." }}
      </p>
      <div style="
        display: flex; 
        align-items: center; 
        background: {{ product_box_bg | default: "#f8f8f8" }}; 
        padding: 10px; 
        border-radius: 8px; 
        margin-top: 16px;
      ">
        <img src="{{ product_image | default: "https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Screenshot_2025-05-07_at_15.57.34.png?v=1746622735" }}" style="
          width: 60px; 
          height: 60px; 
          object-fit: contain; 
          margin-right: 10px; 
          border-radius: 8px;
        " alt="Product">
        <div>
          <div style="font-weight: 600; font-size: 14px;">{{ product_name | default: "Super Product" }}</div>
          <div style="font-size: 14px; color: {{ price_color | default: "#e91e63" }};">{{ product_price | default: "$39" }} <span style="text-decoration: line-through; color: #999;">{{ product_original_price | default: "$49" }}</span></div>
          <div style="font-size: 12px; color: #666;">{{ purchase_text | default: "📦 Purchased on March" }}</div>
        </div>
      </div>
    </div>

    <!-- Review 2 -->
    <div style="
      background: {{ review_bg | default: "#fff" }}; 
      border-radius: {{ review_border_radius | default: "12px" }}; 
      box-shadow: {{ review_box_shadow | default: "0 0 0 1px #eee" }}; 
      padding: {{ review_padding | default: "16px" }}; 
      min-width: {{ review_min_width | default: "280px" }}; 
      max-width: {{ review_max_width | default: "320px" }}; 
      flex-shrink: 0;
    ">
      <img src="{{ review_2_image | default: "https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Screenshot_2025-05-07_at_15.58.00.png?v=1746622733" }}" style="
        width: 100%; 
        border-radius: {{ image_border_radius | default: "8px" }};
      " alt="Review Photo">
      <div style="
        margin-top: 12px; 
        color: {{ stars_color | default: "#e91e63" }}; 
        font-size: {{ stars_font_size | default: "14px" }};
      ">★★★★★</div>
      <div style="margin-top: 6px; font-size: 13px;">
        <span style="
          background: {{ reviewer_badge_bg | default: "#ffe6ef" }}; 
          padding: 3px 8px; 
          border-radius: 9999px;
        ">{{ review_2_name | default: "Julia, 27" }} {{ verified_badge | default: "💎 Verified Buyer" }}</span>
      </div>
      <p style="
        font-size: {{ review_text_font_size | default: "14px" }}; 
        color: {{ review_text_color | default: "#333" }}; 
        margin-top: 10px; 
        line-height: 1.5;
      ">
        {{ review_2_text | default: "Honestly better than I expected. I used to use razors but this leaves no bumps or redness. I have already told 3 of my friends to get one." }}
      </p>
      <div style="
        display: flex; 
        align-items: center; 
        background: {{ product_box_bg | default: "#f8f8f8" }}; 
        padding: 10px; 
        border-radius: 8px; 
        margin-top: 16px;
      ">
        <img src="{{ product_image | default: "https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Screenshot_2025-05-07_at_15.57.34.png?v=1746622735" }}" style="
          width: 60px; 
          height: 60px; 
          object-fit: contain; 
          margin-right: 10px; 
          border-radius: 8px;
        " alt="Product">
        <div>
          <div style="font-weight: 600; font-size: 14px;">{{ product_name | default: "Super Product" }}</div>
          <div style="font-size: 14px; color: {{ price_color | default: "#e91e63" }};">{{ product_price | default: "$39" }} <span style="text-decoration: line-through; color: #999;">{{ product_original_price | default: "$49" }}</span></div>
          <div style="font-size: 12px; color: #666;">{{ purchase_text | default: "📦 Purchased on March" }}</div>
        </div>
      </div>
    </div>

    <!-- Review 3 -->
    <div style="
      background: {{ review_bg | default: "#fff" }}; 
      border-radius: {{ review_border_radius | default: "12px" }}; 
      box-shadow: {{ review_box_shadow | default: "0 0 0 1px #eee" }}; 
      padding: {{ review_padding | default: "16px" }}; 
      min-width: {{ review_min_width | default: "280px" }}; 
      max-width: {{ review_max_width | default: "320px" }}; 
      flex-shrink: 0;
    ">
      <img src="{{ review_3_image | default: "https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Screenshot_2025-05-07_at_15.58.00.png?v=1746622733" }}" style="
        width: 100%; 
        border-radius: {{ image_border_radius | default: "8px" }};
      " alt="Review Photo">
      <div style="
        margin-top: 12px; 
        color: {{ stars_color | default: "#e91e63" }}; 
        font-size: {{ stars_font_size | default: "14px" }};
      ">★★★★★</div>
      <div style="margin-top: 6px; font-size: 13px;">
        <span style="
          background: {{ reviewer_badge_bg | default: "#ffe6ef" }}; 
          padding: 3px 8px; 
          border-radius: 9999px;
        ">{{ review_3_name | default: "Taylor, 33" }} {{ verified_badge | default: "💎 Verified Buyer" }}</span>
      </div>
      <p style="
        font-size: {{ review_text_font_size | default: "14px" }}; 
        color: {{ review_text_color | default: "#333" }}; 
        margin-top: 10px; 
        line-height: 1.5;
      ">
        {{ review_3_text | default: "Surprised by how effective this little thing is. It is compact, clean, and works fast. Zero irritation, which is rare for my skin." }}
      </p>
      <div style="
        display: flex; 
        align-items: center; 
        background: {{ product_box_bg | default: "#f8f8f8" }}; 
        padding: 10px; 
        border-radius: 8px; 
        margin-top: 16px;
      ">
        <img src="{{ product_image | default: "https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Screenshot_2025-05-07_at_15.57.34.png?v=1746622735" }}" style="
          width: 60px; 
          height: 60px; 
          object-fit: contain; 
          margin-right: 10px; 
          border-radius: 8px;
        " alt="Product">
        <div>
          <div style="font-weight: 600; font-size: 14px;">{{ product_name | default: "Super Product" }}</div>
          <div style="font-size: 14px; color: {{ price_color | default: "#e91e63" }};">{{ product_price | default: "$39" }} <span style="text-decoration: line-through; color: #999;">{{ product_original_price | default: "$49" }}</span></div>
          <div style="font-size: 12px; color: #666;">{{ purchase_text | default: "📦 Purchased on March" }}</div>
        </div>
      </div>
    </div>

  </div>

  <style>
    /* Hide scrollbar but keep functionality */
    div[style*="overflow-x: auto"] {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE and Edge */
    }
    div[style*="overflow-x: auto"]::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
  </style>
</div>`,
  customizationOptions: [
    {
      id: 'background_color',
      label: 'Background Color',
      type: 'color',
      defaultValue: '#f9f9f9'
    },
    {
      id: 'container_padding',
      label: 'Container Padding',
      type: 'text',
      defaultValue: '40px 20px'
    },
    {
      id: 'container_max_width',
      label: 'Container Max Width',
      type: 'text',
      defaultValue: '1000px'
    },
    {
      id: 'rating_badge_bg',
      label: 'Rating Badge Background',
      type: 'color',
      defaultValue: '#ffe6ef'
    },
    {
      id: 'rating_badge_text_color',
      label: 'Rating Badge Text Color',
      type: 'color',
      defaultValue: '#000'
    },
    {
      id: 'rating_badge_icon',
      label: 'Rating Badge Icon',
      type: 'text',
      defaultValue: '★'
    },
    {
      id: 'rating_text',
      label: 'Rating Text',
      type: 'text',
      defaultValue: 'Rated 4.8/5'
    },
    {
      id: 'rating_subtext',
      label: 'Rating Subtext',
      type: 'text',
      defaultValue: 'based on +137,135 reviews'
    },
    {
      id: 'heading_highlight_text',
      label: 'Heading Highlight Text',
      type: 'text',
      defaultValue: 'Customer'
    },
    {
      id: 'heading_text',
      label: 'Heading Text',
      type: 'text',
      defaultValue: 'Reviews'
    },
    {
      id: 'heading_highlight_color',
      label: 'Heading Highlight Color',
      type: 'color',
      defaultValue: '#e91e63'
    },
    {
      id: 'heading_font_size',
      label: 'Heading Font Size',
      type: 'text',
      defaultValue: '28px'
    },
    {
      id: 'heading_font_weight',
      label: 'Heading Font Weight',
      type: 'text',
      defaultValue: '700'
    },
    {
      id: 'review_gap',
      label: 'Review Gap',
      type: 'text',
      defaultValue: '20px'
    },
    {
      id: 'review_bg',
      label: 'Review Background',
      type: 'color',
      defaultValue: '#fff'
    },
    {
      id: 'review_border_radius',
      label: 'Review Border Radius',
      type: 'text',
      defaultValue: '12px'
    },
    {
      id: 'review_box_shadow',
      label: 'Review Box Shadow',
      type: 'text',
      defaultValue: '0 0 0 1px #eee'
    },
    {
      id: 'review_padding',
      label: 'Review Padding',
      type: 'text',
      defaultValue: '16px'
    },
    {
      id: 'review_min_width',
      label: 'Review Min Width',
      type: 'text',
      defaultValue: '280px'
    },
    {
      id: 'review_max_width',
      label: 'Review Max Width',
      type: 'text',
      defaultValue: '320px'
    },
    {
      id: 'image_border_radius',
      label: 'Image Border Radius',
      type: 'text',
      defaultValue: '8px'
    },
    {
      id: 'stars_color',
      label: 'Stars Color',
      type: 'color',
      defaultValue: '#e91e63'
    },
    {
      id: 'stars_font_size',
      label: 'Stars Font Size',
      type: 'text',
      defaultValue: '14px'
    },
    {
      id: 'reviewer_badge_bg',
      label: 'Reviewer Badge Background',
      type: 'color',
      defaultValue: '#ffe6ef'
    },
    {
      id: 'verified_badge',
      label: 'Verified Badge Text',
      type: 'text',
      defaultValue: '💎 Verified Buyer'
    },
    {
      id: 'review_text_font_size',
      label: 'Review Text Font Size',
      type: 'text',
      defaultValue: '14px'
    },
    {
      id: 'review_text_color',
      label: 'Review Text Color',
      type: 'color',
      defaultValue: '#333'
    },
    {
      id: 'product_box_bg',
      label: 'Product Box Background',
      type: 'color',
      defaultValue: '#f8f8f8'
    },
    {
      id: 'product_name',
      label: 'Product Name',
      type: 'text',
      defaultValue: 'Super Product'
    },
    {
      id: 'product_price',
      label: 'Product Price',
      type: 'text',
      defaultValue: '$39'
    },
    {
      id: 'product_original_price',
      label: 'Product Original Price',
      type: 'text',
      defaultValue: '$49'
    },
    {
      id: 'price_color',
      label: 'Price Color',
      type: 'color',
      defaultValue: '#e91e63'
    },
    {
      id: 'purchase_text',
      label: 'Purchase Text',
      type: 'text',
      defaultValue: '📦 Purchased on March'
    },
    {
      id: 'product_image',
      label: 'Product Image URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Screenshot_2025-05-07_at_15.57.34.png?v=1746622735'
    },
    {
      id: 'review_1_image',
      label: 'Review 1 Image URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Screenshot_2025-05-07_at_15.58.00.png?v=1746622733'
    },
    {
      id: 'review_1_name',
      label: 'Review 1 Name',
      type: 'text',
      defaultValue: 'Ashley, 30'
    },
    {
      id: 'review_1_text',
      label: 'Review 1 Text',
      type: 'text',
      defaultValue: 'I was skeptical at first, but this product completely transformed my routine with zero pain or irritation...'
    },
    {
      id: 'review_2_image',
      label: 'Review 2 Image URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Screenshot_2025-05-07_at_15.58.00.png?v=1746622733'
    },
    {
      id: 'review_2_name',
      label: 'Review 2 Name',
      type: 'text',
      defaultValue: 'Julia, 27'
    },
    {
      id: 'review_2_text',
      label: 'Review 2 Text',
      type: 'text',
      defaultValue: 'Honestly better than I expected. I used to use razors but this leaves no bumps or redness. I have already told 3 of my friends to get one.'
    },
    {
      id: 'review_3_image',
      label: 'Review 3 Image URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Screenshot_2025-05-07_at_15.58.00.png?v=1746622733'
    },
    {
      id: 'review_3_name',
      label: 'Review 3 Name',
      type: 'text',
      defaultValue: 'Taylor, 33'
    },
    {
      id: 'review_3_text',
      label: 'Review 3 Text',
      type: 'text',
      defaultValue: 'Surprised by how effective this little thing is. It is compact, clean, and works fast. Zero irritation, which is rare for my skin.'
    },
    {
      id: 'font_family',
      label: 'Font Family',
      type: 'text',
      defaultValue: '-apple-system, BlinkMacSystemFont, sans-serif'
    }
  ]
};