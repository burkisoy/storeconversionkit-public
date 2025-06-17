import { ComponentWithCustomization } from '../../types';

export const itemsLeftBadge: ComponentWithCustomization = {
  id: 'items-left-badge',
  title: 'Limited Stock + Limited Price',
  description: 'Dynamic badge showing remaining items',
  category: 'FOMO',
  tags: ['stock', 'inventory', 'urgency', 'fomo'],
  stars: 2,
  code: `<style>
  .items-left-badge {
    display: inline-flex;
    align-items: center;
    background-color: {{ badge_bg_color | default: '#ffdede' }};
    color: {{ badge_text_color | default: '#b22222' }};
    padding: 3px 5px;
    border-radius: 5px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    position: relative;
  }

  .items-left-badge span {
    display: flex;
    align-items: center;
  }

  .items-left-badge .icon {
    margin-right: 4px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    color: {{ icon_color | default: '#b22222' }};
  }

  .items-left-badge .icon svg {
    width: 12px;
    height: 12px;
  }

  .items-left-badge .flame-icon svg {
    animation: flame-animation 2s infinite;
  }

  .items-left-badge .clock-icon svg {
    animation: clock-animation 2s infinite;
  }

  @keyframes flame-animation {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }

  @keyframes clock-animation {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(360deg); }
  }
</style>

<div class="items-left-badge">
  <span>
    <div class="icon flame-icon">
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M32 2C19 15 9 26 9 38c0 8 6 14 14 14s14-6 14-14c0-8-6-14-14-14s-14 6-14 14c0 8 6 14 14 14s14-6 14-14c0-8-6-14-14-14S18 22 18 30c0 8 6 14 14 14s14-6 14-14c0-8-6-14-14-14z"/>
      </svg>
    </div>
    {{ badge_text | default: '8 items left at this price' }}
  </span>
</div>

<div class="items-left-badge">
  <span>
    <div class="icon clock-icon">
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="30" stroke="currentColor" stroke-width="4" fill="none"/>
        <line x1="32" y1="32" x2="32" y2="12" stroke="currentColor" stroke-width="4"/>
        <line x1="32" y1="32" x2="44" y2="32" stroke="currentColor" stroke-width="4"/>
      </svg>
    </div>
    {{ limited_stock_text | default: 'Limited stock available!' }}
  </span>
</div>`,
  customizationOptions: [
    {
      id: 'badge_text',
      label: 'Items Left Text',
      type: 'text',
      defaultValue: '8 items left at this price'
    },
    {
      id: 'limited_stock_text',
      label: 'Limited Stock Text',
      type: 'text',
      defaultValue: 'Limited stock available!'
    },
    {
      id: 'badge_bg_color',
      label: 'Badge Background Color',
      type: 'color',
      defaultValue: '#ffdede'
    },
    {
      id: 'badge_text_color',
      label: 'Badge Text Color',
      type: 'color',
      defaultValue: '#b22222'
    },
    {
      id: 'icon_color',
      label: 'Icon Color',
      type: 'color',
      defaultValue: '#b22222'
    }
  ]
};