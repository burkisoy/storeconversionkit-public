import { ComponentWithCustomization } from '../../types';

export const countdownBadge: ComponentWithCustomization = {
  id: 'countdown-badge',
  title: 'Countdown Badge',
  description: 'Display a countdown timer with customizable text and styling',
  category: 'FOMO',
  tags: ['countdown', 'timer', 'badge', 'fomo'],
  code: `<div class="countdown-badge-wrapper-rU3gXz">
  <div class="badge-rU3gXz">
    <span class="badge-text-rU3gXz">
      <svg class="badge-icon-rU3gXz" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#b22222" stroke-width="2" fill="none"/>
        <line x1="12" y1="12" x2="12" y2="6" stroke="#b22222" stroke-width="2" class="badge-hand-rU3gXz"/>
        <line x1="12" y1="12" x2="16" y2="12" stroke="#b22222" stroke-width="2"/>
      </svg>
      {{ countdown_text | default: 'Black Friday Special:' }}
    </span>
  </div>
  <div class="timer-rU3gXz" id="countdown-rU3gXz">00:00:00</div>

  {% style %}
  .countdown-badge-wrapper-rU3gXz {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 6px;
    font-family: Arial, sans-serif;
    background: transparent;
    padding: 0;
    margin: 0;
  }

  .badge-rU3gXz {
    display: inline-flex;
    align-items: center;
    background-color: {{ badge_bg_color | default: '#fff0f0' }};
    color: {{ badge_text_color | default: '#b22222' }};
    padding: {{ badge_padding | default: '6px 10px' }};
    border-radius: {{ badge_radius | default: '4px' }};
    font-size: {{ badge_font_size | default: '12px' }};
    font-weight: bold;
  }

  .badge-text-rU3gXz {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .badge-icon-rU3gXz {
    width: {{ icon_size | default: '16px' }};
    height: {{ icon_size | default: '16px' }};
    animation: spin-hand-rU3gXz 2s linear infinite;
    transform-origin: center center;
    display: inline-block;
  }

  .timer-rU3gXz {
    font-weight: bold;
    font-size: {{ timer_font_size | default: '12px' }};
    color: {{ timer_color | default: '#b22222' }};
  }

  @keyframes spin-hand-rU3gXz {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  {% endstyle %}
</div>

<script>
  let countdownMinutes = {{ countdown_minutes | default: 45 }};

  function startCountdown() {
    let countdownDate = new Date().getTime() + countdownMinutes * 60 * 1000;

    function updateCountdown() {
      let now = new Date().getTime();
      let distance = countdownDate - now;

      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const countdownElement = document.getElementById("countdown-rU3gXz");
      if (countdownElement) {
        countdownElement.innerHTML =
          (hours < 10 ? "0" + hours : hours) + ":" +
          (minutes < 10 ? "0" + minutes : minutes) + ":" +
          (seconds < 10 ? "0" + seconds : seconds);
      }

      if (distance < 0) {
        clearInterval(countdownInterval);
        startCountdown();
      }
    }

    let countdownInterval = setInterval(updateCountdown, 1000);
  }

  startCountdown();
</script>`,
  customizationOptions: [
    {
      id: 'countdown_text',
      label: 'Countdown Text',
      type: 'text',
      defaultValue: 'Black Friday Special:'
    },
    {
      id: 'countdown_minutes',
      label: 'Countdown Minutes',
      type: 'text',
      defaultValue: '45'
    },
    {
      id: 'badge_bg_color',
      label: 'Badge Background Color',
      type: 'color',
      defaultValue: '#fff0f0'
    },
    {
      id: 'badge_text_color',
      label: 'Badge Text Color',
      type: 'color',
      defaultValue: '#b22222'
    },
    {
      id: 'badge_padding',
      label: 'Badge Padding',
      type: 'text',
      defaultValue: '6px 10px'
    },
    {
      id: 'badge_radius',
      label: 'Badge Border Radius',
      type: 'text',
      defaultValue: '4px'
    },
    {
      id: 'badge_font_size',
      label: 'Badge Font Size',
      type: 'text',
      defaultValue: '12px'
    },
    {
      id: 'icon_size',
      label: 'Icon Size',
      type: 'text',
      defaultValue: '16px'
    },
    {
      id: 'timer_font_size',
      label: 'Timer Font Size',
      type: 'text',
      defaultValue: '12px'
    },
    {
      id: 'timer_color',
      label: 'Timer Color',
      type: 'color',
      defaultValue: '#b22222'
    }
  ]
};