// Google Analytics utility functions
export const initializeGoogleAnalytics = () => {
  // Check if gtag is already defined
  if (typeof window.gtag !== 'undefined') return;

  // Create script elements
  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17061716466';
  
  const inlineScript = document.createElement('script');
  inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-17061716466');  // Google Ads
    gtag('config', 'G-CDRQQQ7FPC');    // Google Analytics 4
  `;
  
  // Append scripts to head
  document.head.appendChild(gtagScript);
  document.head.appendChild(inlineScript);
};

// Track page views
export const trackPageView = (path: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'G-CDRQQQ7FPC', {
      page_path: path
    });
  }
};

// Declare global gtag function
declare global {
  interface Window {
    gtag: (
      command: string,
      target: string,
      config?: Record<string, any> | string
    ) => void;
    dataLayer: any[];
  }
}