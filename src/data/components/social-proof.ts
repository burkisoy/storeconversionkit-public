import { ComponentWithCustomization } from '../../types';

export const socialProof: ComponentWithCustomization = {
  id: 'social-proof',
  title: 'Social Media Proof',
  description: 'As seen on social media',
  category: 'Social Proof',
  tags: ['social', 'proof', 'tiktok'],
  code: `<div class="social-proof">
  <div class="social-icon">
    <span class="icon">{% render 'icon-{{ social_platform | default: 'tiktok' }}' %}</span>
  </div>
  <div class="social-text">{{ social_text | default: 'As seen on TikTok' }}</div>
</div>

{% style %}
.social-proof {
  display: flex;
  align-items: center;
  background: {{ background_gradient | default: 'linear-gradient(135deg, #a5f3fc, #38b2ac)' }};
  padding: 12px 16px;
  border-radius: 8px;
}
.social-icon {
  margin-right: 12px;
  color: {{ icon_color | default: '#000000' }};
}
.social-text {
  font-weight: 600;
  color: {{ text_color | default: '#000000' }};
}
{% endstyle %}`,
  customizationOptions: [
    {
      id: 'social_platform',
      label: 'Social Platform',
      type: 'select',
      defaultValue: 'tiktok',
      options: [
        { value: 'tiktok', label: 'TikTok' },
        { value: 'instagram', label: 'Instagram' },
        { value: 'facebook', label: 'Facebook' },
        { value: 'twitter', label: 'Twitter' }
      ]
    },
    {
      id: 'social_text',
      label: 'Social Text',
      type: 'text',
      defaultValue: 'As seen on TikTok'
    },
    {
      id: 'background_gradient',
      label: 'Background Gradient',
      type: 'text',
      defaultValue: 'linear-gradient(135deg, #a5f3fc, #38b2ac)'
    },
    {
      id: 'icon_color',
      label: 'Icon Color',
      type: 'color',
      defaultValue: '#000000'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#000000'
    }
  ]
};