// Script to directly test updating the users_public table
const testDirectUpdate = async () => {
  const email = 'test@example.com'; // Replace with a real email from your auth.users table
  const supabaseUrl = 'https://wwbbrufqrimlnfnhoqom.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3YmJydWZxcmltbG5mbmhvcW9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNjg0MzQsImV4cCI6MjA2MDg0NDQzNH0.xDG5-zsjaRXoaiB6H1ApLtagOEA2WWLchIwbdyXzNNs'; // Use your anon key for testing
  
  try {
    console.log(`Testing direct database update for: ${email}`);
    
    // Step 1: Get the user ID from the email
    console.log('Step 1: Getting user ID from email...');
    const getUserResponse = await fetch(`${supabaseUrl}/rest/v1/rpc/get_user_id_by_email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseKey}`,
        'apikey': supabaseKey
      },
      body: JSON.stringify({ email_param: email })
    });
    
    if (!getUserResponse.ok) {
      throw new Error(`Failed to get user ID: ${getUserResponse.status} ${getUserResponse.statusText}`);
    }
    
    const userId = await getUserResponse.json();
    console.log(`User ID: ${userId}`);
    
    if (!userId) {
      throw new Error(`User not found with email: ${email}`);
    }
    
    // Step 2: Call the RPC function to set premium status
    console.log('Step 2: Setting premium status...');
    const setPremiumResponse = await fetch(`${supabaseUrl}/rest/v1/rpc/set_user_premium_status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseKey}`,
        'apikey': supabaseKey
      },
      body: JSON.stringify({
        user_uuid: userId,
        is_premium_status: true
      })
    });
    
    if (!setPremiumResponse.ok) {
      throw new Error(`Failed to set premium status: ${setPremiumResponse.status} ${setPremiumResponse.statusText}`);
    }
    
    const result = await setPremiumResponse.json();
    console.log(`Set premium status result: ${result}`);
    
    // Step 3: Verify the update
    console.log('Step 3: Verifying update...');
    const verifyResponse = await fetch(`${supabaseUrl}/rest/v1/users_public?id=eq.${userId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${supabaseKey}`,
        'apikey': supabaseKey
      }
    });
    
    if (!verifyResponse.ok) {
      throw new Error(`Failed to verify update: ${verifyResponse.status} ${verifyResponse.statusText}`);
    }
    
    const userData = await verifyResponse.json();
    console.log('User data:', userData);
    
    if (userData.length > 0 && userData[0].is_premium) {
      console.log('✅ Success! User premium status updated successfully.');
    } else {
      console.log('❌ Failed! User premium status not updated.');
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
};

testDirectUpdate();