import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2.39.3";

const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Secure CORS configuration
const getAllowedOrigins = (): string[] => {
  const allowedOrigins = Deno.env.get('ALLOWED_ORIGINS');
  if (allowedOrigins) {
    return allowedOrigins.split(',').map(origin => origin.trim());
  }
  
  // Default allowed origins for development
  return [
    'https://storeconversionkit.com',
    'https://www.storeconversionkit.com',
    'http://localhost:3000',
    'http://localhost:5173'
  ];
};

const getCorsHeaders = (origin: string | null): Record<string, string> => {
  const allowedOrigins = getAllowedOrigins();
  const isAllowedOrigin = origin && allowedOrigins.includes(origin);
  
  return {
    'Access-Control-Allow-Origin': isAllowedOrigin ? origin : 'null',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Max-Age': '86400',
    'Access-Control-Allow-Credentials': 'true',
    'Vary': 'Origin'
  };
};

serve(async (req) => {
  const origin = req.headers.get('origin');
  const corsHeaders = getCorsHeaders(origin);
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    if (req.method !== 'POST') {
      throw new Error('Method not allowed');
    }

    // Get the request body
    const { userId, sessionToken } = await req.json();

    if (!userId || !sessionToken) {
      throw new Error('Missing required parameters');
    }

    // Check if the session exists directly without using RPC function
    const { data, error: fetchError } = await supabase
      .from('user_sessions')
      .select('id')
      .eq('user_id', userId)
      .eq('session_token', sessionToken)
      .maybeSingle();

    if (fetchError) {
      console.error('Error validating session:', fetchError);
      throw new Error('Failed to validate session');
    }

    // Update last_active timestamp if session exists
    if (data) {
      await supabase
        .from('user_sessions')
        .update({ last_active: new Date().toISOString() })
        .eq('id', data.id);
    }

    return new Response(
      JSON.stringify({ 
        valid: !!data,
        timestamp: new Date().toISOString()
      }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    );
  } catch (error) {
    console.error('Error in validate-session:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        valid: false 
      }),
      { 
        status: 400, 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    );
  }
});