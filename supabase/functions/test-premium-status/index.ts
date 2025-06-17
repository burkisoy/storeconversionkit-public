import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2.39.3";

// Initialize Supabase client with service role key for admin access
const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL') || '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '',
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

serve(async (req) => {
  console.log("🔵 test-premium-status function called");
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log("🔵 Handling OPTIONS request");
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Parse request body
    const requestBody = await req.text();
    console.log("🔵 Raw request body:", requestBody);
    
    let parsedBody;
    try {
      parsedBody = JSON.parse(requestBody);
      console.log("🔵 Parsed request body:", JSON.stringify(parsedBody));
    } catch (parseError) {
      console.error("🔴 Error parsing request body:", parseError.message);
      throw new Error(`Invalid JSON: ${parseError.message}`);
    }
    
    const { email, isPremium } = parsedBody;
    
    if (!email) {
      console.error("🔴 Missing required parameter: email");
      throw new Error('Email must be provided');
    }

    console.log(`🔵 Testing premium status update for email: ${email}, isPremium: ${isPremium}`);
    
    // Call the set-premium-status function
    const response = await fetch(`${Deno.env.get('SUPABASE_URL')}/functions/v1/set-premium-status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')}`
      },
      body: JSON.stringify({
        email,
        isPremium: isPremium !== false // Default to true if not specified
      })
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`🔴 Error response from set-premium-status: ${errorText}`);
      throw new Error(`Failed to call set-premium-status: ${response.status} ${response.statusText}`);
    }
    
    const result = await response.json();
    console.log('🔵 Set premium status result:', JSON.stringify(result));
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Test completed successfully`,
        result
      }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    );
  } catch (error) {
    console.error(`🔴 Error in test-premium-status function: ${error.message}`);
    console.error(`🔴 Error stack: ${error.stack}`);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
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