import { ComponentWithCustomization } from '../../types';

export const floatingReviews: ComponentWithCustomization = {
  id: 'floating-reviews',
  title: 'Floating Reviews',
  description: 'Display animated floating customer reviews with avatars',
  category: 'Social Proof',
  tags: ['reviews', 'social proof', 'testimonials', 'animation'],
  free: false,
  code: `<div style="background: {{ background_color | default: '#f8f8f8' }}; padding: {{ container_padding | default: '40px 20px' }}; font-family: {{ font_family | default: '-apple-system, BlinkMacSystemFont, sans-serif' }};">
  <div style="display: flex; flex-wrap: wrap; gap: {{ gap | default: '16px' }}; justify-content: center;">
    <div style="display: contents;">

      <!-- Review 1 -->
      <div class="review-box" style="background: {{ review_bg | default: 'white' }}; border-radius: {{ border_radius | default: '24px' }}; padding: {{ review_padding | default: '16px 20px' }}; width: 100%; max-width: {{ review_max_width | default: '300px' }}; box-shadow: {{ box_shadow | default: '0 4px 10px rgba(0,0,0,0.05)' }}; display: flex; align-items: center; gap: {{ avatar_gap | default: '12px' }}; opacity: 0; animation: shakeIn 12s infinite ease-in-out; animation-delay: 0s;">
        <img src="{{ avatar_1 | default: 'https://randomuser.me/api/portraits/women/1.jpg' }}" style="width: {{ avatar_size | default: '40px' }}; height: {{ avatar_size | default: '40px' }}; border-radius: 9999px; border: {{ avatar_border | default: '2px solid #fbc02d' }};">
        <span style="font-size: {{ text_size | default: '14px' }}; color: {{ text_color | default: '#333' }};">{{ text_1 | default: 'The perfect fall slippers!' }}</span>
      </div>

      <!-- Review 2 -->
      <div class="review-box" style="background: {{ review_bg | default: 'white' }}; border-radius: {{ border_radius | default: '24px' }}; padding: {{ review_padding | default: '16px 20px' }}; width: 100%; max-width: {{ review_max_width | default: '300px' }}; box-shadow: {{ box_shadow | default: '0 4px 10px rgba(0,0,0,0.05)' }}; display: flex; align-items: center; gap: {{ avatar_gap | default: '12px' }}; opacity: 0; animation: shakeIn 12s infinite ease-in-out; animation-delay: 2.6s;">
        <img src="{{ avatar_2 | default: 'https://randomuser.me/api/portraits/women/2.jpg' }}" style="width: {{ avatar_size | default: '40px' }}; height: {{ avatar_size | default: '40px' }}; border-radius: 9999px; border: {{ avatar_border | default: '2px solid #fbc02d' }};">
        <span style="font-size: {{ text_size | default: '14px' }}; color: {{ text_color | default: '#333' }};">{{ text_2 | default: 'My new favorite pair of shoes!' }}</span>
      </div>

      <!-- Review 3 -->
      <div class="review-box" style="background: {{ review_bg | default: 'white' }}; border-radius: {{ border_radius | default: '24px' }}; padding: {{ review_padding | default: '16px 20px' }}; width: 100%; max-width: {{ review_max_width | default: '300px' }}; box-shadow: {{ box_shadow | default: '0 4px 10px rgba(0,0,0,0.05)' }}; display: flex; align-items: center; gap: {{ avatar_gap | default: '12px' }}; opacity: 0; animation: shakeIn 12s infinite ease-in-out; animation-delay: 1.4s;">
        <img src="{{ avatar_3 | default: 'https://randomuser.me/api/portraits/women/3.jpg' }}" style="width: {{ avatar_size | default: '40px' }}; height: {{ avatar_size | default: '40px' }}; border-radius: 9999px; border: {{ avatar_border | default: '2px solid #fbc02d' }};">
        <span style="font-size: {{ text_size | default: '14px' }}; color: {{ text_color | default: '#333' }};">{{ text_3 | default: 'A MUST buy for fall!' }}</span>
      </div>

      <!-- Review 4 -->
      <div class="review-box" style="background: {{ review_bg | default: 'white' }}; border-radius: {{ border_radius | default: '24px' }}; padding: {{ review_padding | default: '16px 20px' }}; width: 100%; max-width: {{ review_max_width | default: '300px' }}; box-shadow: {{ box_shadow | default: '0 4px 10px rgba(0,0,0,0.05)' }}; display: flex; align-items: center; gap: {{ avatar_gap | default: '12px' }}; opacity: 0; animation: shakeIn 12s infinite ease-in-out; animation-delay: 3.8s;">
        <img src="{{ avatar_4 | default: 'https://randomuser.me/api/portraits/men/4.jpg' }}" style="width: {{ avatar_size | default: '40px' }}; height: {{ avatar_size | default: '40px' }}; border-radius: 9999px; border: {{ avatar_border | default: '2px solid #fbc02d' }};">
        <span style="font-size: {{ text_size | default: '14px' }}; color: {{ text_color | default: '#333' }};">{{ text_4 | default: '10/10 Worth every penny' }}</span>
      </div>

      <!-- Review 5 -->
      <div class="review-box" style="background: {{ review_bg | default: 'white' }}; border-radius: {{ border_radius | default: '24px' }}; padding: {{ review_padding | default: '16px 20px' }}; width: 100%; max-width: {{ review_max_width | default: '300px' }}; box-shadow: {{ box_shadow | default: '0 4px 10px rgba(0,0,0,0.05)' }}; display: flex; align-items: center; gap: {{ avatar_gap | default: '12px' }}; opacity: 0; animation: shakeIn 12s infinite ease-in-out; animation-delay: 0.8s;">
        <img src="{{ avatar_5 | default: 'https://randomuser.me/api/portraits/women/5.jpg' }}" style="width: {{ avatar_size | default: '40px' }}; height: {{ avatar_size | default: '40px' }}; border-radius: 9999px; border: {{ avatar_border | default: '2px solid #fbc02d' }};">
        <span style="font-size: {{ text_size | default: '14px' }}; color: {{ text_color | default: '#333' }};">{{ text_5 | default: 'I absolutely love them!' }}</span>
      </div>

      <!-- Review 6 - Hidden on mobile -->
      <div class="review-box hide-on-mobile" style="background: {{ review_bg | default: 'white' }}; border-radius: {{ border_radius | default: '24px' }}; padding: {{ review_padding | default: '16px 20px' }}; width: 100%; max-width: {{ review_max_width | default: '300px' }}; box-shadow: {{ box_shadow | default: '0 4px 10px rgba(0,0,0,0.05)' }}; display: flex; align-items: center; gap: {{ avatar_gap | default: '12px' }}; opacity: 0; animation: shakeIn 12s infinite ease-in-out; animation-delay: 5s;">
        <img src="{{ avatar_6 | default: 'https://randomuser.me/api/portraits/women/6.jpg' }}" style="width: {{ avatar_size | default: '40px' }}; height: {{ avatar_size | default: '40px' }}; border-radius: 9999px; border: {{ avatar_border | default: '2px solid #fbc02d' }};">
        <span style="font-size: {{ text_size | default: '14px' }}; color: {{ text_color | default: '#333' }};">{{ text_6 | default: 'Stylish and super comfy!' }}</span>
      </div>

      <!-- Review 7 - Hidden on mobile -->
      <div class="review-box hide-on-mobile" style="background: {{ review_bg | default: 'white' }}; border-radius: {{ border_radius | default: '24px' }}; padding: {{ review_padding | default: '16px 20px' }}; width: 100%; max-width: {{ review_max_width | default: '300px' }}; box-shadow: {{ box_shadow | default: '0 4px 10px rgba(0,0,0,0.05)' }}; display: flex; align-items: center; gap: {{ avatar_gap | default: '12px' }}; opacity: 0; animation: shakeIn 12s infinite ease-in-out; animation-delay: 1.2s;">
        <img src="{{ avatar_7 | default: 'https://randomuser.me/api/portraits/men/7.jpg' }}" style="width: {{ avatar_size | default: '40px' }}; height: {{ avatar_size | default: '40px' }}; border-radius: 9999px; border: {{ avatar_border | default: '2px solid #fbc02d' }};">
        <span style="font-size: {{ text_size | default: '14px' }}; color: {{ text_color | default: '#333' }};">{{ text_7 | default: 'OMG! Best autumn shoe!' }}</span>
      </div>

      <!-- Review 8 - Hidden on mobile -->
      <div class="review-box hide-on-mobile" style="background: {{ review_bg | default: 'white' }}; border-radius: {{ border_radius | default: '24px' }}; padding: {{ review_padding | default: '16px 20px' }}; width: 100%; max-width: {{ review_max_width | default: '300px' }}; box-shadow: {{ box_shadow | default: '0 4px 10px rgba(0,0,0,0.05)' }}; display: flex; align-items: center; gap: {{ avatar_gap | default: '12px' }}; opacity: 0; animation: shakeIn 12s infinite ease-in-out; animation-delay: 4.6s;">
        <img src="{{ avatar_8 | default: 'https://randomuser.me/api/portraits/women/8.jpg' }}" style="width: {{ avatar_size | default: '40px' }}; height: {{ avatar_size | default: '40px' }}; border-radius: 9999px; border: {{ avatar_border | default: '2px solid #fbc02d' }};">
        <span style="font-size: {{ text_size | default: '14px' }}; color: {{ text_color | default: '#333' }};">{{ text_8 | default: 'Perfect for comfort!' }}</span>
      </div>

    </div>
  </div>

  <style>
    @keyframes shakeIn {
      0% { opacity: 0; transform: scale(0.9) rotate(0deg); }
      10% { opacity: 1; transform: scale(1.05) rotate(2deg); }
      15% { transform: scale(0.98) rotate(-2deg); }
      20% { transform: scale(1) rotate(0deg); }
      70% { opacity: 1; }
      100% { opacity: 0; transform: translateY(-10px); }
    }

    @media (min-width: 640px) {
      .review-box {
        width: calc(50% - 12px) !important;
      }
    }

    @media (min-width: 900px) {
      .review-box {
        width: calc(33.333% - 12px) !important;
      }
    }

    @media (max-width: 639px) {
      .hide-on-mobile {
        display: none !important;
      }
    }
  </style>
</div>`,
  customizationOptions: [
    {
      id: 'background_color',
      label: 'Background Color',
      type: 'color',
      defaultValue: '#f8f8f8'
    },
    {
      id: 'container_padding',
      label: 'Container Padding',
      type: 'text',
      defaultValue: '40px 20px'
    },
    {
      id: 'gap',
      label: 'Gap Between Reviews',
      type: 'text',
      defaultValue: '16px'
    },
    {
      id: 'review_bg',
      label: 'Review Background',
      type: 'color',
      defaultValue: 'white'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '24px'
    },
    {
      id: 'review_padding',
      label: 'Review Padding',
      type: 'text',
      defaultValue: '16px 20px'
    },
    {
      id: 'review_max_width',
      label: 'Review Max Width',
      type: 'text',
      defaultValue: '300px'
    },
    {
      id: 'box_shadow',
      label: 'Box Shadow',
      type: 'text',
      defaultValue: '0 4px 10px rgba(0,0,0,0.05)'
    },
    {
      id: 'avatar_gap',
      label: 'Avatar Gap',
      type: 'text',
      defaultValue: '12px'
    },
    {
      id: 'avatar_size',
      label: 'Avatar Size',
      type: 'text',
      defaultValue: '40px'
    },
    {
      id: 'avatar_border',
      label: 'Avatar Border',
      type: 'text',
      defaultValue: '2px solid #fbc02d'
    },
    {
      id: 'text_size',
      label: 'Text Size',
      type: 'text',
      defaultValue: '14px'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#333'
    },
    {
      id: 'text_1',
      label: 'Review 1 Text',
      type: 'text',
      defaultValue: 'The perfect fall slippers!'
    },
    {
      id: 'text_2',
      label: 'Review 2 Text',
      type: 'text',
      defaultValue: 'My new favorite pair of shoes!'
    },
    {
      id: 'text_3',
      label: 'Review 3 Text',
      type: 'text',
      defaultValue: 'A MUST buy for fall!'
    },
    {
      id: 'text_4',
      label: 'Review 4 Text',
      type: 'text',
      defaultValue: '10/10 Worth every penny'
    },
    {
      id: 'text_5',
      label: 'Review 5 Text',
      type: 'text',
      defaultValue: 'I absolutely love them!'
    },
    {
      id: 'text_6',
      label: 'Review 6 Text',
      type: 'text',
      defaultValue: 'Stylish and super comfy!'
    },
    {
      id: 'text_7',
      label: 'Review 7 Text',
      type: 'text',
      defaultValue: 'OMG! Best autumn shoe!'
    },
    {
      id: 'text_8',
      label: 'Review 8 Text',
      type: 'text',
      defaultValue: 'Perfect for comfort!'
    },
    {
      id: 'avatar_1',
      label: 'Avatar 1 URL',
      type: 'text',
      defaultValue: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: 'avatar_2',
      label: 'Avatar 2 URL',
      type: 'text',
      defaultValue: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      id: 'avatar_3',
      label: 'Avatar 3 URL',
      type: 'text',
      defaultValue: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
      id: 'avatar_4',
      label: 'Avatar 4 URL',
      type: 'text',
      defaultValue: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    {
      id: 'avatar_5',
      label: 'Avatar 5 URL',
      type: 'text',
      defaultValue: 'https://randomuser.me/api/portraits/women/5.jpg'
    },
    {
      id: 'avatar_6',
      label: 'Avatar 6 URL',
      type: 'text',
      defaultValue: 'https://randomuser.me/api/portraits/women/6.jpg'
    },
    {
      id: 'avatar_7',
      label: 'Avatar 7 URL',
      type: 'text',
      defaultValue: 'https://randomuser.me/api/portraits/men/7.jpg'
    },
    {
      id: 'avatar_8',
      label: 'Avatar 8 URL',
      type: 'text',
      defaultValue: 'https://randomuser.me/api/portraits/women/8.jpg'
    },
    {
      id: 'font_family',
      label: 'Font Family',
      type: 'text',
      defaultValue: '-apple-system, BlinkMacSystemFont, sans-serif'
    }
  ]
};