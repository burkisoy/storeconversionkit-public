import { ComponentWithCustomization } from '../../types';

export const scrollToTop: ComponentWithCustomization = {
  id: 'scroll-to-top',
  title: 'Scroll to Top',
  description: 'Smooth scrolling button to return to the top of the page',
  category: 'Navigation',
  tags: ['scroll', 'button', 'navigation'],
  free: true,
  code: `<div class="page-width container center-button">
  <button class="scroll-top-the-top" onclick="scrollToTop()">{{ button_text | default: 'Scroll to the top' }}</button> 
</div>

<style>
.scroll-top-the-top {
  width: max-content;
  margin: auto;
  margin-top: {{ margin_top | default: '10px' }};
  padding: {{ padding | default: '10px' }};
  color: {{ text_color | default: '#ffffff' }};
  border-radius: {{ border_radius | default: '8px' }};
  background-color: {{ button_color | default: '#1cbcc3' }};
  border: 1px solid {{ border_color | default: '#2e2f3c' }};
  cursor: pointer;
  transition: all 0.3s ease;
}

.scroll-top-the-top:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.center-button {
  justify-content: center;
  display: flex;
}
</style>

<script>
function scrollToTop() {
  const duration = {{ scroll_duration | default: '1000' }};
  const start = window.pageYOffset;
  const end = 0;
  const distance = end - start;
  const startTime = performance.now();

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  function animateScroll() {
    const currentTime = performance.now();
    const timeElapsed = currentTime - startTime;

    window.scroll(0, easeInOutQuad(timeElapsed, start, distance, duration));

    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      window.scroll(0, end);
    }
  }

  requestAnimationFrame(animateScroll);
}
</script>`,
  customizationOptions: [
    {
      id: 'button_text',
      label: 'Button Text',
      type: 'text',
      defaultValue: 'Scroll to the top'
    },
    {
      id: 'button_color',
      label: 'Button Color',
      type: 'color',
      defaultValue: '#1cbcc3'
    },
    {
      id: 'text_color',
      label: 'Text Color',
      type: 'color',
      defaultValue: '#ffffff'
    },
    {
      id: 'border_color',
      label: 'Border Color',
      type: 'color',
      defaultValue: '#2e2f3c'
    },
    {
      id: 'border_radius',
      label: 'Border Radius',
      type: 'text',
      defaultValue: '8px'
    },
    {
      id: 'padding',
      label: 'Padding',
      type: 'text',
      defaultValue: '10px'
    },
    {
      id: 'margin_top',
      label: 'Margin Top',
      type: 'text',
      defaultValue: '10px'
    },
    {
      id: 'scroll_duration',
      label: 'Scroll Duration (ms)',
      type: 'text',
      defaultValue: '1000'
    }
  ]
};