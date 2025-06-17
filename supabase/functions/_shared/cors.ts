/**
 * Secure CORS configuration utility for Supabase Edge Functions
 */

export interface CorsConfig {
  allowedOrigins: string[];
  allowedMethods: string[];
  allowedHeaders: string[];
  maxAge: number;
  credentials: boolean;
}

const getDefaultConfig = (): CorsConfig => ({
  allowedOrigins: [
    'https://storeconversionkit.com',
    'https://www.storeconversionkit.com',
    ...(Deno.env.get('NODE_ENV') === 'development' 
      ? ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:5174']
      : []
    )
  ],
  allowedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'authorization',
    'x-client-info',
    'apikey',
    'content-type',
    'x-requested-with'
  ],
  maxAge: 86400, // 24 hours
  credentials: true
});

export const getAllowedOrigins = (): string[] => {
  const envOrigins = Deno.env.get('ALLOWED_ORIGINS');
  if (envOrigins) {
    return envOrigins.split(',').map(origin => origin.trim());
  }
  
  return getDefaultConfig().allowedOrigins;
};

export const getCorsHeaders = (
  origin: string | null,
  config?: Partial<CorsConfig>
): Record<string, string> => {
  const fullConfig = { ...getDefaultConfig(), ...config };
  const allowedOrigins = config?.allowedOrigins || getAllowedOrigins();
  
  // Check if origin is allowed
  const isAllowedOrigin = origin && allowedOrigins.includes(origin);
  
  const headers: Record<string, string> = {
    'Access-Control-Allow-Origin': isAllowedOrigin ? origin : 'null',
    'Access-Control-Allow-Methods': fullConfig.allowedMethods.join(', '),
    'Access-Control-Allow-Headers': fullConfig.allowedHeaders.join(', '),
    'Access-Control-Max-Age': fullConfig.maxAge.toString(),
    'Vary': 'Origin'
  };
  
  if (fullConfig.credentials && isAllowedOrigin) {
    headers['Access-Control-Allow-Credentials'] = 'true';
  }
  
  return headers;
};

export const handleCorsPreflightRequest = (
  origin: string | null,
  config?: Partial<CorsConfig>
): Response => {
  const corsHeaders = getCorsHeaders(origin, config);
  return new Response(null, {
    status: 204,
    headers: corsHeaders
  });
};

export const createCorsResponse = (
  data: any,
  origin: string | null,
  status: number = 200,
  config?: Partial<CorsConfig>
): Response => {
  const corsHeaders = getCorsHeaders(origin, config);
  
  return new Response(
    JSON.stringify(data),
    {
      status,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    }
  );
};

export const createCorsErrorResponse = (
  error: string,
  origin: string | null,
  status: number = 400,
  config?: Partial<CorsConfig>
): Response => {
  return createCorsResponse(
    { success: false, error },
    origin,
    status,
    config
  );
}; 