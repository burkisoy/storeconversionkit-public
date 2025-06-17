import { ComponentWithCustomization } from '../../types';

export const photoCarouselReviews: ComponentWithCustomization = {
  id: 'photo-carousel-reviews',
  title: 'Photo Carousel Reviews',
  description: 'Display customer photos with reviews and call-to-action',
  category: 'Social Proof',
  tags: ['reviews', 'carousel', 'photos', 'social proof'],
  free: false,
  code: `<div style="background: {{ background_color | default: '#d4f1ff' }}; padding: {{ container_padding | default: '40px 20px' }}; text-align: center; font-family: {{ font_family | default: '-apple-system, BlinkMacSystemFont, sans-serif' }};">

  <!-- Photo Carousel -->
  <div style="display: flex; gap: {{ photo_gap | default: '16px' }}; overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; padding-bottom: 20px; margin-bottom: 30px;">
    <img src="{{ photo_1 | default: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274' }}" style="min-width: {{ photo_width | default: '240px' }}; height: {{ photo_height | default: '320px' }}; object-fit: cover; border-radius: {{ photo_border_radius | default: '16px' }}; scroll-snap-align: center;" alt="Review 1" />
    <img src="{{ photo_2 | default: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274' }}" style="min-width: {{ photo_width | default: '240px' }}; height: {{ photo_height | default: '320px' }}; object-fit: cover; border-radius: {{ photo_border_radius | default: '16px' }}; scroll-snap-align: center;" alt="Review 2" />
    <img src="{{ photo_3 | default: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274' }}" style="min-width: {{ photo_width | default: '240px' }}; height: {{ photo_height | default: '320px' }}; object-fit: cover; border-radius: {{ photo_border_radius | default: '16px' }}; scroll-snap-align: center;" alt="Review 3" />
    <img src="{{ photo_4 | default: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274' }}" style="min-width: {{ photo_width | default: '240px' }}; height: {{ photo_height | default: '320px' }}; object-fit: cover; border-radius: {{ photo_border_radius | default: '16px' }}; scroll-snap-align: center;" alt="Review 4" />
    <img src="{{ photo_5 | default: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274' }}" style="min-width: {{ photo_width | default: '240px' }}; height: {{ photo_height | default: '320px' }}; object-fit: cover; border-radius: {{ photo_border_radius | default: '16px' }}; scroll-snap-align: center;" alt="Review 5" />
  </div>

  <!-- Title -->
  <h2 style="font-size: {{ title_font_size | default: '22px' }}; font-weight: {{ title_font_weight | default: '700' }}; color: {{ title_color | default: '#111' }}; margin-bottom: 10px;">
    {{ title_text | default: 'Look At How Others Are Loving Their Product!' }}
  </h2>
  <p style="color: {{ subtitle_color | default: '#444' }}; font-size: {{ subtitle_font_size | default: '15px' }}; margin-bottom: 30px;">
    {{ subtitle_text | default: 'Real Reviews From Real People' }}
  </p>

  <!-- CTA Button -->
  <a href="{{ cta_link | default: '#' }}" style="display: inline-block; background: {{ cta_bg_color | default: '#3dbff3' }}; color: {{ cta_text_color | default: 'white' }}; font-weight: {{ cta_font_weight | default: '600' }}; padding: {{ cta_padding | default: '14px 28px' }}; border-radius: {{ cta_border_radius | default: '12px' }}; font-size: {{ cta_font_size | default: '15px' }}; text-decoration: none; margin-bottom: 20px;">
    {{ cta_text | default: 'CLAIM OFFER' }}
  </a>

  <!-- Rating -->
  <div style="font-size: {{ rating_font_size | default: '14px' }}; color: {{ rating_text_color | default: '#555' }};">
    <span style="color: {{ rating_star_color | default: '#3dbff3' }};">★</span> {{ rating_text | default: 'Rated 4.8/5 by 1,319+ Happy Customers' }}
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
      defaultValue: '#d4f1ff'
    },
    {
      id: 'container_padding',
      label: 'Container Padding',
      type: 'text',
      defaultValue: '40px 20px'
    },
    {
      id: 'photo_gap',
      label: 'Photo Gap',
      type: 'text',
      defaultValue: '16px'
    },
    {
      id: 'photo_width',
      label: 'Photo Width',
      type: 'text',
      defaultValue: '240px'
    },
    {
      id: 'photo_height',
      label: 'Photo Height',
      type: 'text',
      defaultValue: '320px'
    },
    {
      id: 'photo_border_radius',
      label: 'Photo Border Radius',
      type: 'text',
      defaultValue: '16px'
    },
    {
      id: 'photo_1',
      label: 'Photo 1 URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'
    },
    {
      id: 'photo_2',
      label: 'Photo 2 URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'
    },
    {
      id: 'photo_3',
      label: 'Photo 3 URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'
    },
    {
      id: 'photo_4',
      label: 'Photo 4 URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'
    },
    {
      id: 'photo_5',
      label: 'Photo 5 URL',
      type: 'text',
      defaultValue: 'https://cdn.shopify.com/s/files/1/0764/8598/4492/files/Image1.webp?v=1746693274'
    },
    {
      id: 'title_text',
      label: 'Title Text',
      type: 'text',
      defaultValue: 'Look At How Others Are Loving Their Product!'
    },
    {
      id: 'title_font_size',
      label: 'Title Font Size',
      type: 'text',
      defaultValue: '22px'
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
      defaultValue: '#111'
    },
    {
      id: 'subtitle_text',
      label: 'Subtitle Text',
      type: 'text',
      defaultValue: 'Real Reviews From Real People'
    },
    {
      id: 'subtitle_font_size',
      label: 'Subtitle Font Size',
      type: 'text',
      defaultValue: '15px'
    },
    {
      id: 'subtitle_color',
      label: 'Subtitle Color',
      type: 'color',
      defaultValue: '#444'
    },
    {
      id: 'cta_text',
      label: 'CTA Button Text',
      type: 'text',
      defaultValue: 'CLAIM OFFER'
    },
    {
      id: 'cta_link',
      label: 'CTA Button Link',
      type: 'text',
      defaultValue: '#'
    },
    {
      id: 'cta_bg_color',
      label: 'CTA Button Background',
      type: 'color',
      defaultValue: '#3dbff3'
    },
    {
      id: 'cta_text_color',
      label: 'CTA Button Text Color',
      type: 'color',
      defaultValue: 'white'
    },
    {
      id: 'cta_font_weight',
      label: 'CTA Button Font Weight',
      type: 'text',
      defaultValue: '600'
    },
    {
      id: 'cta_padding',
      label: 'CTA Button Padding',
      type: 'text',
      defaultValue: '14px 28px'
    },
    {
      id: 'cta_border_radius',
      label: 'CTA Button Border Radius',
      type: 'text',
      defaultValue: '12px'
    },
    {
      id: 'cta_font_size',
      label: 'CTA Button Font Size',
      type: 'text',
      defaultValue: '15px'
    },
    {
      id: 'rating_text',
      label: 'Rating Text',
      type: 'text',
      defaultValue: 'Rated 4.8/5 by 1,319+ Happy Customers'
    },
    {
      id: 'rating_font_size',
      label: 'Rating Font Size',
      type: 'text',
      defaultValue: '14px'
    },
    {
      id: 'rating_text_color',
      label: 'Rating Text Color',
      type: 'color',
      defaultValue: '#555'
    },
    {
      id: 'rating_star_color',
      label: 'Rating Star Color',
      type: 'color',
      defaultValue: '#3dbff3'
    },
    {
      id: 'font_family',
      label: 'Font Family',
      type: 'text',
      defaultValue: '-apple-system, BlinkMacSystemFont, sans-serif'
    }
  ]
};