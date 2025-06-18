import { ComponentWithCustomization } from '../../types';

export const shippingBadge: ComponentWithCustomization = {
  id: 'shipping-badge',
  title: 'Premium Shipping Badge',
  description: 'Display shipping information with estimated delivery date and free shipping status',
  category: 'Trust',
  tags: ['shipping', 'delivery', 'badge', 'trust'],
  code: `<div id="smart-shipping-box" style="
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 9999px;
  padding: 8px 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: clamp(11px, 2.5vw, 14px);
  color: #222222;
  gap: 14px;
  width: fit-content;
  max-width: 95vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 auto;
">
  <div style="display: flex; align-items: center; gap: 6px;">
    <div class="flash-dot-xyz123" style="
      width: 10px;
      height: 10px;
      background-color: #00c851;
      border-radius: 50%;
      flex-shrink: 0;
    "></div>
    <div>Ships by <span id="ship-date" style="font-weight: 600;">...</span></div>
  </div>
  <div style="display: flex; align-items: center; gap: 6px;">
    <img id="flag-icon" src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="Flag" style="width: 18px; height: 18px; border-radius: 50%; object-fit: cover; flex-shrink: 0;">
    <div id="shipping-text" style="font-weight: 600;">FREE Shipping</div>
  </div>
</div>

<style>
@keyframes pulseDot {
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.2); }
  100% { opacity: 1; transform: scale(1); }
}
.flash-dot-xyz123 {
  animation: pulseDot 1.2s infinite ease-in-out;
}
</style>

<script>
  // 1. Tarihi otomatik yaz (her zaman bugünün tarihi)
  const today = new Date();
  const options = { weekday: 'short', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options); // İngilizce format
  document.getElementById('ship-date').textContent = formattedDate;

  // 2. Bayrak ve "Ücretsiz Kargo" metni yerelleştirme
  fetch('https://ipapi.co/json/')
    .then(res => res.json())
    .then(data => {
      const country = data.country;
      const flag = document.getElementById('flag-icon');
      const text = document.getElementById('shipping-text');

      const map = {
        US: { flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg', text: 'FREE Shipping' },
        FR: { flag: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg', text: 'LIVRAISON GRATUITE' },
        DE: { flag: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg', text: 'KOSTENLOSER VERSAND' },
        TR: { flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg', text: 'ÜCRETSİZ KARGO' },
        IT: { flag: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg', text: 'SPEDIZIONE GRATUITA' },
        ES: { flag: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg', text: 'ENVÍO GRATUITO' },
        NL: { flag: 'https://upload.wikimedia.org/wikipedia/en/2/20/Flag_of_the_Netherlands.svg', text: 'GRATIS VERZENDING' },
        JP: { flag: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg', text: '送料無料' },
        KR: { flag: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg', text: '무료 배송' },
        CN: { flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg', text: '免运费' },
        IN: { flag: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg', text: 'फ्री शिपिंग' },
        BR: { flag: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg', text: 'FRETE GRÁTIS' },
        RU: { flag: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg', text: 'БЕСПЛАТНАЯ ДОСТАВКА' },
        PL: { flag: 'https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg', text: 'DOSTAWA GRATIS' }
      };

      const fallback = {
        flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Globe_icon.svg',
        text: 'Free Worldwide Shipping'
      };

      const selected = map[country] || fallback;
      flag.src = selected.flag;
      text.textContent = selected.text;
    });
</script>`,
  customizationOptions: []
};