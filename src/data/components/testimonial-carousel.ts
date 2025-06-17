import { ComponentWithCustomization } from '../../types';

export const testimonialCarousel: ComponentWithCustomization = {
  id: 'testimonial-carousel',
  title: 'Testimonial Carousel',
  description: 'Beautiful scrolling testimonials with profile pictures',
  category: 'Social Proof',
  tags: ['testimonials', 'reviews', 'carousel', 'social proof'],
  free: true,
  code: `<div class="testimonial-carousel">
  <div class="testimonial-card">
    <div class="testimonial-profile">
      <img src="{{ profile_1_image | default: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80' }}" alt="{{ profile_1_name | default: 'Jenna R.' }}" />
    </div>
    <div class="testimonial-content">
      <div class="testimonial-name-stars">
        <span class="testimonial-name">{{ profile_1_name | default: 'Jenna R.' }}</span>
        <span class="testimonial-stars">★★★★★</span>
      </div>
      <p class="testimonial-text">{{ profile_1_text | default: 'I really love this, arrived in 2 days exactly what I needed!' }}</p>
    </div>
  </div>

  <div class="testimonial-card">
    <div class="testimonial-profile">
      <img src="{{ profile_2_image | default: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80' }}" alt="{{ profile_2_name | default: 'Samantha L.' }}" />
    </div>
    <div class="testimonial-content">
      <div class="testimonial-name-stars">
        <span class="testimonial-name">{{ profile_2_name | default: 'Samantha L.' }}</span>
        <span class="testimonial-stars">★★★★★</span>
      </div>
      <p class="testimonial-text">{{ profile_2_text | default: 'Amazing quality! Looks exactly like the photos!' }}</p>
    </div>
  </div>

  <div class="testimonial-card">
    <div class="testimonial-profile">
      <img src="{{ profile_3_image | default: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80' }}" alt="{{ profile_3_name | default: 'Emily G.' }}" />
    </div>
    <div class="testimonial-content">
      <div class="testimonial-name-stars">
        <span class="testimonial-name">{{ profile_3_name | default: 'Emily G.' }}</span>
        <span class="testimonial-stars">★★★★★</span>
      </div>
      <p class="testimonial-text">{{ profile_3_text | default: 'Fast shipping and super cute. Will buy again!' }}</p>
    </div>
  </div>
</div>

<style>
.testimonial-carousel {
  display: flex;
  overflow-x: auto;
  gap: {{ gap | default: '12px' }};
  padding: {{ padding | default: '8px 0' }};
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  max-width: 100%;
}

.testimonial-card {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  background-color: {{ card_bg | default: '#fff7e6' }};
  padding: {{ card_padding | default: '12px 16px' }};
  border-radius: {{ border_radius | default: '12px' }};
  box-shadow: {{ box_shadow | default: '0 4px 8px rgba(0, 0, 0, 0.1)' }};
  min-width: calc(100% - 32px);
  max-width: calc(100% - 32px);
  scroll-snap-align: start;
  font-family: sans-serif;
  margin: 0 16px;
}

@media (min-width: 640px) {
  .testimonial-card {
    min-width: calc(50% - 32px);
    max-width: calc(50% - 32px);
  }
}

@media (min-width: 1024px) {
  .testimonial-card {
    min-width: {{ card_min_width | default: '300px' }};
    max-width: {{ card_min_width | default: '300px' }};
    margin: 0;
  }
}

.testimonial-profile img {
  width: {{ profile_image_size | default: '50px' }};
  height: {{ profile_image_size | default: '50px' }};
  border-radius: 50%;
  border: {{ profile_image_border | default: '2px solid #f5c66e' }};
  object-fit: cover;
}

.testimonial-content {
  margin-left: {{ content_margin | default: '12px' }};
  flex: 1;
  min-width: 0;
}

.testimonial-name-stars {
  display: flex;
  align-items: center;
  margin-bottom: {{ name_stars_margin | default: '4px' }};
  flex-wrap: wrap;
  gap: 4px;
}

.testimonial-name {
  font-weight: {{ name_font_weight | default: '600' }};
  font-size: {{ name_font_size | default: '14px' }};
  margin-right: {{ name_margin_right | default: '8px' }};
  color: {{ name_color | default: '#333333' }};
}

.testimonial-stars {
  background: {{ stars_bg | default: '#fca311' }};
  color: {{ stars_color | default: '#ffffff' }};
  padding: {{ stars_padding | default: '1px 6px' }};
  border-radius: {{ stars_border_radius | default: '6px' }};
  font-size: {{ stars_font_size | default: '12px' }};
  white-space: nowrap;
}

.testimonial-text {
  font-size: {{ text_font_size | default: '13px' }};
  color: {{ text_color | default: '#333333' }};
  line-height: {{ text_line_height | default: '1.3' }};
  margin: 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
}

.testimonial-carousel::-webkit-scrollbar {
  display: none;
}

.testimonial-carousel {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@media (max-width: 639px) {
  .testimonial-profile img {
    width: 40px;
    height: 40px;
  }
  
  .testimonial-name {
    font-size: 13px;
  }
  
  .testimonial-stars {
    font-size: 11px;
  }
  
  .testimonial-text {
    font-size: 12px;
  }
  
  .testimonial-card {
    padding: 10px 12px;
  }
}
</style>`,
  customizationOptions: [
    {
      id: 'profile_1_name',
      label: 'Profile 1 Name',
      type: 'text',
      defaultValue: 'Jenna R.'
    },
    {
      id: 'profile_1_text',
      label: 'Profile 1 Text',
      type: 'text',
      defaultValue: 'I really love this, arrived in 2 days exactly what I needed!'
    },
    {
      id: 'profile_1_image',
      label: 'Profile 1 Image URL',
      type: 'text',
      defaultValue: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80'
    },
    {
      id: 'profile_2_name',
      label: 'Profile 2 Name',
      type: 'text',
      defaultValue: 'Samantha L.'
    },
    {
      id: 'profile_2_text',
      label: 'Profile 2 Text',
      type: 'text',
      defaultValue: 'Amazing quality! Looks exactly like the photos!'
    },
    {
      id: 'profile_2_image',
      label: 'Profile 2 Image URL',
      type: 'text',
      defaultValue: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80'
    },
    {
      id: 'profile_3_name',
      label: 'Profile 3 Name',
      type: 'text',
      defaultValue: 'Emily G.'
    },
    {
      id: 'profile_3_text',
      label: 'Profile 3 Text',
      type: 'text',
      defaultValue: 'Fast shipping and super cute. Will buy again!'
    },
    {
      id: 'profile_3_image',
      label: 'Profile 3 Image URL',
      type: 'text',
      defaultValue: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80'
    },
    {
      id: 'card_bg',
      label: 'Card Background Color',
      type: 'color',
      defaultValue: '#fff7e6'
    },
    {
      id: 'name_color',
      label: 'Name Color',
      type: 'color',
      defaultValue: '#333333'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#333333'
    },
    {
      id: 'stars_bg',
      label: 'Stars Background',
      type: 'color',
      defaultValue: '#fca311'
    },
    {
      id: 'stars_color',
      label: 'Stars Color',
      type: 'color',
      defaultValue: '#ffffff'
    },
    {
      id: 'gap',
      label: 'Gap Between Cards',
      type: 'text',
      defaultValue: '12px'
    },
    {
      id: 'padding',
      label: 'Container Padding',
      type: 'text',
      defaultValue: '8px 0'
    },
    {
      id: 'card_padding',
      label: 'Card Padding',
      type: 'text',
      defaultValue: '12px 16px'
    },
    {
      id: 'border_radius',
      label: 'Card Border Radius',
      type: 'text',
      defaultValue: '12px'
    },
    {
      id: 'box_shadow',
      label: 'Card Box Shadow',
      type: 'text',
      defaultValue: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
    {
      id: 'card_min_width',
      label: 'Card Minimum Width (Desktop)',
      type: 'text',
      defaultValue: '300px'
    }
  ]
};