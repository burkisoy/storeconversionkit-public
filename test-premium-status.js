// Simple script to test the set-premium-status function
const testPremiumStatus = async () => {
  const email = 'test@example.com'; // Replace with a real email from your auth.users table
  const isPremium = true;
  
  try {
    console.log(`Testing premium status update for: ${email}, isPremium: ${isPremium}`);
    
    const response = await fetch('https://wwbbrufqrimlnfnhoqom.supabase.co/functions/v1/test-premium-status', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Use anon key for this test
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3YmJydWZxcmltbG5mbmhvcW9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNjg0MzQsImV4cCI6MjA2MDg0NDQzNH0.xDG5-zsjaRXoaiB6H1ApLtagOEA2WWLchIwbdyXzNNs`
      },
      body: JSON.stringify({
        email,
        isPremium
      })
    });
    
    const result = await response.json();
    console.log('Result:', result);
    
    if (result.success) {
      console.log('✅ Test successful!');
    } else {
      console.error('❌ Test failed:', result.error);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
};

testPremiumStatus();