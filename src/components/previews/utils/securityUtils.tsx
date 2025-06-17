import React from 'react';

// Secure color validation
export const sanitizeColor = (color: string | undefined): string | undefined => {
  if (!color) return undefined;
  
  // Allow hex colors, rgb/rgba, hsl/hsla, and named colors
  const colorRegex = /^(#[0-9a-fA-F]{3,8}|rgb\([\d\s,]+\)|rgba\([\d\s,\.]+\)|hsl\([\d\s,%]+\)|hsla\([\d\s,%.]+\)|[a-zA-Z]+)$/;
  
  if (colorRegex.test(color.trim())) {
    return color.trim();
  }
  
  return undefined;
};

// Sanitize text content
export const sanitizeText = (text: string | undefined, maxLength: number = 100): string => {
  if (!text) return '';
  
  // Remove HTML tags and dangerous characters
  const cleaned = text
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/[<>'"]/g, '') // Remove dangerous characters
    .trim();
  
  // Limit length
  return cleaned.length > maxLength ? cleaned.substring(0, maxLength) + '...' : cleaned;
};

// Validate and clamp numeric values
export const clampNumber = (value: number | undefined, min: number, max: number): number => {
  if (typeof value !== 'number' || isNaN(value)) {
    return min;
  }
  
  return Math.max(min, Math.min(max, value));
};

// Secure image URL validation
export const getSecureImageUrl = (originalUrl?: string): string => {
  if (!originalUrl) return '';
  
  // Whitelist of trusted domains
  const trustedDomains = [
    'https://cdn.shopify.com/',
    'https://your-domain.com/',
    'https://images.unsplash.com/',
    'https://via.placeholder.com/',
    'data:image/' // Allow data URLs for small images
  ];
  
  const isSecureUrl = trustedDomains.some(domain => originalUrl.startsWith(domain));
  
  return isSecureUrl ? originalUrl : '/placeholder-image.jpg';
};

// Error boundary for preview components
export const withSecureErrorBoundary = <T extends object>(
  Component: React.ComponentType<T>
): React.ComponentType<T> => {
  return (props: T) => {
    try {
      return <Component {...props} />;
    } catch (error) {
      console.error('Preview component error:', error);
      return (
        <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
          <div className="text-center p-4">
            <div className="text-gray-400 text-sm mb-2">⚠️</div>
            <div className="text-gray-500 text-xs">Preview unavailable</div>
          </div>
        </div>
      );
    }
  };
}; 