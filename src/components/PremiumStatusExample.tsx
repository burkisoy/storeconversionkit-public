import React from 'react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import PremiumStatusChecker from './PremiumStatusChecker';

// Example component showing how to use the PremiumStatusChecker
const PremiumStatusExample: React.FC = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the current session
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      
      if (!error && data.session) {
        setSession(data.session);
      }
      
      setLoading(false);
    };

    getSession();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Account Status</h1>
      
      {session ? (
        <>
          <div className="mb-4 p-4 bg-gray-100 rounded-lg">
            <p>Logged in as: {session.user.email}</p>
          </div>
          
          {/* Premium status checker */}
          <PremiumStatusChecker session={session} />
        </>
      ) : (
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-700">Please log in to check your premium status.</p>
        </div>
      )}
    </div>
  );
};

export default PremiumStatusExample;