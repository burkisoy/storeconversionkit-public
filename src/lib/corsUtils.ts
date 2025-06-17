/**
 * Client-side CORS utilities
 */

export interface ApiRequestOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
  credentials?: RequestCredentials;
}

export class CorsError extends Error {
  constructor(message: string, public readonly origin?: string) {
    super(message);
    this.name = 'CorsError';
  }
}

export const createSecureHeaders = (additionalHeaders?: Record<string, string>): Record<string, string> => {
  const baseHeaders = {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  };
  
  return { ...baseHeaders, ...additionalHeaders };
};

export const makeSecureRequest = async (
  url: string,
  options: ApiRequestOptions = {}
): Promise<Response> => {
  const {
    method = 'GET',
    headers = {},
    body,
    credentials = 'include'
  } = options;

  const secureHeaders = createSecureHeaders(headers);

  try {
    const response = await fetch(url, {
      method,
      headers: secureHeaders,
      body: body ? JSON.stringify(body) : undefined,
      credentials,
      mode: 'cors'
    });

    // Check for CORS errors
    if (!response.ok && response.status === 0) {
      throw new CorsError(
        'CORS error: Request blocked by browser security policy',
        window.location.origin
      );
    }

    return response;
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('CORS')) {
      throw new CorsError(
        'CORS error: Unable to connect to server',
        window.location.origin
      );
    }
    throw error;
  }
};

export const handleCorsError = (error: unknown): void => {
  if (error instanceof CorsError) {
    console.error('CORS Error:', error.message);
    
    // Show user-friendly error message
    const errorMessage = 'Connection error. Please check your internet connection and try again.';
    
    // You can integrate with your notification system here
    if (typeof window !== 'undefined') {
      // Example: show toast notification
      console.warn('CORS Error - User-friendly message:', errorMessage);
    }
  }
};

export const isValidOrigin = (origin: string): boolean => {
  const allowedOrigins = [
    'https://storeconversionkit.com',
    'https://www.storeconversionkit.com',
    ...(import.meta.env.DEV 
      ? ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:5174']
      : []
    )
  ];
  
  return allowedOrigins.includes(origin);
};

export const getCurrentOrigin = (): string => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return '';
};

export const validateCurrentOrigin = (): boolean => {
  const currentOrigin = getCurrentOrigin();
  return isValidOrigin(currentOrigin);
}; 