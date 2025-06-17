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
  console.log("🔵 set-premium-status function called");
  
  const origin = req.headers.get('origin');
  const corsHeaders = getCorsHeaders(origin);
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log("🔵 Handling OPTIONS request");
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Log request details
    console.log("🔵 Request method:", req.method);
    console.log("🔵 Request headers:", JSON.stringify(Object.fromEntries(req.headers.entries())));
    
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
    
    const { email, userId, isPremium, stripeCustomerId } = parsedBody;
    
    console.log(`🔵 Processing premium status update for: ${email || userId}, isPremium: ${isPremium}`);
    
    if (!email && !userId) {
      console.error("🔴 Missing required parameters: email or userId");
      throw new Error('Either email or userId must be provided');
    }

    let targetUserId = userId;

    // If only email is provided, look up the user ID
    if (!targetUserId && email) {
      console.log(`🔵 Looking up user ID for email: ${email}`);
      const { data: userData, error: userError } = await supabaseAdmin.auth.admin.listUsers();
      
      if (userError) {
        console.error(`🔴 Error looking up users: ${userError.message}`);
        throw new Error(`Error looking up users: ${userError.message}`);
      }
      
      const user = userData.users.find(u => u.email === email);
      if (!user) {
        console.error(`🔴 User with email ${email} not found`);
        throw new Error(`User with email ${email} not found`);
      }
      
      targetUserId = user.id;
      console.log(`🔵 Found user ID: ${targetUserId} for email: ${email}`);
    }

    // Check if user exists in auth.users
    const { data: authUser, error: authUserError } = await supabaseAdmin.auth.admin.getUserById(targetUserId);
    
    if (authUserError || !authUser.user) {
      console.error(`🔴 User with ID ${targetUserId} not found in auth.users: ${authUserError?.message || 'User not found'}`);
      throw new Error(`User with ID ${targetUserId} not found in auth.users: ${authUserError?.message || 'User not found'}`);
    }

    console.log(`🔵 Updating premium status for user ID: ${targetUserId} to: ${isPremium}`);

    // First check if user exists in users_public
    const { data: existingUser, error: existingUserError } = await supabaseAdmin
      .from('users_public')
      .select('*')
      .eq('id', targetUserId)
      .single();
    
    let result;
    
    if (existingUserError && existingUserError.code !== 'PGRST116') { // PGRST116 is "not found"
      console.error(`🔴 Error checking if user exists: ${existingUserError.message}`);
    }

    // Update user metadata if stripeCustomerId is provided
    if (stripeCustomerId) {
      console.log(`🔵 Updating user metadata with Stripe customer ID: ${stripeCustomerId}`);
      const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(
        targetUserId,
        { user_metadata: { stripe_customer_id: stripeCustomerId } }
      );
      
      if (updateError) {
        console.error(`🔴 Error updating user metadata: ${updateError.message}`);
      }
    }

    // If user exists in users_public, update the record
    if (existingUser) {
      console.log(`🔵 User exists in users_public, updating record`);
      const { data, error } = await supabaseAdmin
        .from('users_public')
        .update({ is_premium: isPremium })
        .eq('id', targetUserId)
        .select();
      
      if (error) {
        console.error(`🔴 Error updating user premium status: ${error.message}`);
        throw new Error(`Error updating user premium status: ${error.message}`);
      }
      
      result = data;
      console.log(`🔵 Update result: ${JSON.stringify(result)}`);
    } else {
      // If user doesn't exist in users_public, insert a new record
      console.log(`🔵 User doesn't exist in users_public, inserting new record`);
      const { data, error } = await supabaseAdmin
        .from('users_public')
        .insert({ id: targetUserId, is_premium: isPremium })
        .select();
      
      if (error) {
        console.error(`🔴 Error inserting user premium status: ${error.message}`);
        throw new Error(`Error inserting user premium status: ${error.message}`);
      }
      
      result = data;
      console.log(`🔵 Insert result: ${JSON.stringify(result)}`);
    }

    // Also use the RPC function as a backup method
    try {
      console.log(`🔵 Also calling set_user_premium_status RPC function as backup`);
      const { data: rpcData, error: rpcError } = await supabaseAdmin.rpc('set_user_premium_status', {
        user_uuid: targetUserId,
        is_premium_status: isPremium
      });
      
      if (rpcError) {
        console.error(`🔴 RPC function error: ${rpcError.message}`);
      } else {
        console.log(`🔵 RPC function result: ${JSON.stringify(rpcData)}`);
      }
    } catch (rpcError) {
      console.error(`🔴 RPC function error (non-fatal): ${rpcError.message}`);
    }

    console.log(`🔵 Successfully processed premium status update`);
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `User premium status ${isPremium ? 'activated' : 'deactivated'}`,
        userId: targetUserId,
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
    console.error(`🔴 Error in set-premium-status function: ${error.message}`);
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