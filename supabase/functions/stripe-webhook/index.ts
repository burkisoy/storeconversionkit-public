import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Stripe from "npm:stripe@14.18.0";

// Initialize Stripe with the secret key
const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
});

// Initialize Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';

const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET') || '';

serve(async (req) => {
  console.log("🔵 stripe-webhook function called");
  
  try {
    if (req.method === 'OPTIONS') {
      console.log("🔵 Handling OPTIONS request");
      return new Response('ok', { headers: { 'Access-Control-Allow-Origin': '*' } });
    }
    
    const signature = req.headers.get('stripe-signature');
    if (!signature) {
      console.error("🔴 Missing stripe-signature header");
      return new Response(JSON.stringify({ error: 'Missing stripe-signature header' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get the raw body
    const body = await req.text();
    console.log(`🔵 Received webhook body length: ${body.length}`);
    console.log(`🔵 Signature: ${signature.substring(0, 20)}...`);
    
    // Verify the webhook signature
    let event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error(`🔴 Webhook signature verification failed: ${err.message}`);
      return new Response(JSON.stringify({ error: `Webhook signature verification failed: ${err.message}` }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.log(`🔵 Event received: ${event.type}`);
    console.log(`🔵 Event ID: ${event.id}`);

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        
        // Extract customer email and metadata
        const customerEmail = session.customer_details?.email;
        const customerId = session.customer;
        
        if (!customerEmail) {
          console.error("🔴 Customer email not found in session");
          throw new Error('Customer email not found in session');
        }

        console.log(`🔵 Processing completed checkout for: ${customerEmail}`);
        console.log(`🔵 Customer ID: ${customerId}`);
        
        // Directly update the database using RPC function first
        try {
          console.log(`🔵 Calling set_user_premium_status RPC function`);
          
          // First, get the user ID from the email
          const { data: userData, error: userError } = await fetch(`${supabaseUrl}/rest/v1/rpc/get_user_id_by_email`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${supabaseKey}`,
              'apikey': supabaseKey
            },
            body: JSON.stringify({ email: customerEmail })
          }).then(res => res.json());
          
          if (userError) {
            console.error(`🔴 Error getting user ID: ${JSON.stringify(userError)}`);
          } else if (userData) {
            console.log(`🔵 Found user ID: ${userData}`);
            
            // Now call the RPC function to set premium status
            const { data: rpcData, error: rpcError } = await fetch(`${supabaseUrl}/rest/v1/rpc/set_user_premium_status`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${supabaseKey}`,
                'apikey': supabaseKey
              },
              body: JSON.stringify({
                user_uuid: userData,
                is_premium_status: true
              })
            }).then(res => res.json());
            
            if (rpcError) {
              console.error(`🔴 RPC function error: ${JSON.stringify(rpcError)}`);
            } else {
              console.log(`🔵 RPC function success: ${JSON.stringify(rpcData)}`);
            }
          }
        } catch (rpcError) {
          console.error(`🔴 Error calling RPC function: ${rpcError.message}`);
        }
        
        // Now call the edge function as a backup
        try {
          // Call the set-premium-status function to update the user's premium status
          console.log(`🔵 Calling set-premium-status edge function`);
          console.log(`🔵 Edge function URL: ${supabaseUrl}/functions/v1/set-premium-status`);
          
          const setPremiumResponse = await fetch(`${supabaseUrl}/functions/v1/set-premium-status`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${supabaseKey}`,
              'apikey': supabaseKey
            },
            body: JSON.stringify({
              email: customerEmail,
              isPremium: true,
              stripeCustomerId: customerId
            })
          });
          
          console.log(`🔵 Edge function response status: ${setPremiumResponse.status}`);
          
          if (!setPremiumResponse.ok) {
            const errorText = await setPremiumResponse.text();
            console.error(`🔴 Error response from set-premium-status: ${errorText}`);
            console.error(`🔴 Status: ${setPremiumResponse.status}, Status Text: ${setPremiumResponse.statusText}`);
          } else {
            const result = await setPremiumResponse.json();
            console.log('🔵 Set premium status result:', JSON.stringify(result));
            
            if (!result.success) {
              console.error(`🔴 set-premium-status reported failure: ${result.error}`);
            }
          }
        } catch (fetchError) {
          console.error(`🔴 Error fetching set-premium-status: ${fetchError.message}`);
          console.error(`🔴 Error stack: ${fetchError.stack}`);
        }
        
        // As a final fallback, directly update the database
        try {
          console.log(`🔵 Direct database update as fallback`);
          
          // First, get the user ID from the email
          const getUserResponse = await fetch(`${supabaseUrl}/rest/v1/auth/users?email=eq.${encodeURIComponent(customerEmail)}`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${supabaseKey}`,
              'apikey': supabaseKey
            }
          });
          
          if (!getUserResponse.ok) {
            console.error(`🔴 Error getting user: ${getUserResponse.status} ${getUserResponse.statusText}`);
          } else {
            const users = await getUserResponse.json();
            if (users && users.length > 0) {
              const userId = users[0].id;
              console.log(`🔵 Found user ID: ${userId}`);
              
              // Update the users_public table
              const updateResponse = await fetch(`${supabaseUrl}/rest/v1/users_public?id=eq.${userId}`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${supabaseKey}`,
                  'apikey': supabaseKey,
                  'Prefer': 'return=representation'
                },
                body: JSON.stringify({
                  is_premium: true
                })
              });
              
              if (!updateResponse.ok) {
                console.error(`🔴 Error updating user: ${updateResponse.status} ${updateResponse.statusText}`);
                
                // Try inserting instead
                const insertResponse = await fetch(`${supabaseUrl}/rest/v1/users_public`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${supabaseKey}`,
                    'apikey': supabaseKey,
                    'Prefer': 'return=representation'
                  },
                  body: JSON.stringify({
                    id: userId,
                    is_premium: true
                  })
                });
                
                if (!insertResponse.ok) {
                  console.error(`🔴 Error inserting user: ${insertResponse.status} ${insertResponse.statusText}`);
                } else {
                  console.log(`🔵 Successfully inserted user`);
                }
              } else {
                console.log(`🔵 Successfully updated user`);
              }
            } else {
              console.error(`🔴 User not found with email: ${customerEmail}`);
            }
          }
        } catch (dbError) {
          console.error(`🔴 Error with direct database update: ${dbError.message}`);
        }
        
        break;
      }
      
      case 'customer.subscription.deleted': {
        const subscription = event.data.object;
        const customerId = subscription.customer;
        
        // Get customer email from Stripe
        console.log(`🔵 Retrieving customer info for ID: ${customerId}`);
        const customer = await stripe.customers.retrieve(customerId as string);
        const customerEmail = customer.email;
        
        if (!customerEmail) {
          console.error("🔴 Customer email not found");
          throw new Error('Customer email not found');
        }
        
        console.log(`🔵 Processing subscription deletion for: ${customerEmail}`);
        
        // Call the set-premium-status function to update the user's premium status
        console.log(`🔵 Calling set-premium-status function to remove premium status`);
        try {
          const response = await fetch(`${supabaseUrl}/functions/v1/set-premium-status`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${supabaseKey}`,
              'apikey': supabaseKey
            },
            body: JSON.stringify({
              email: customerEmail,
              isPremium: false
            })
          });
          
          if (!response.ok) {
            const errorText = await response.text();
            console.error(`🔴 Error response from set-premium-status: ${errorText}`);
            throw new Error(`Failed to call set-premium-status: ${response.status} ${response.statusText}`);
          }
          
          const result = await response.json();
          console.log('🔵 Set premium status result:', JSON.stringify(result));
          
          if (!result.success) {
            console.error(`🔴 set-premium-status reported failure: ${result.error}`);
            throw new Error(`Failed to set premium status: ${result.error}`);
          }
        } catch (error) {
          console.error(`🔴 Error calling set-premium-status: ${error.message}`);
        }
        
        break;
      }
      
      default:
        console.log(`🔵 Unhandled event type: ${event.type}`);
    }

    return new Response(JSON.stringify({ received: true, eventId: event.id }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error(`🔴 Error processing webhook: ${error.message}`);
    console.error(`🔴 Error stack: ${error.stack}`);
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
});