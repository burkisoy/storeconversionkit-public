import React from 'react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import PremiumGate from './PremiumGate';

// Example component showing how to use the PremiumGate component
const PremiumFeatureExample: React.FC = () => {
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
      <h1 className="text-2xl font-bold mb-4">Premium Feature Example</h1>
      
      {session ? (
        <PremiumGate 
          userId={session.user.id}
          fallback={
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Upgrade to Premium</h3>
              <p className="text-gray-600 mb-4">
                This premium feature is only available to premium subscribers.
              </p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Upgrade Now
              </button>
            </div>
          }
        >
          {/* This content will only be shown to premium users */}
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-indigo-900 mb-2">
              Welcome to Premium!
            </h3>
            <p className="text-indigo-700 mb-4">
              You have access to all premium features. Enjoy!
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-gray-900">Feature 1</h4>
                <p className="text-sm text-gray-600">Premium feature description</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-gray-900">Feature 2</h4>
                <p className="text-sm text-gray-600">Premium feature description</p>
              </div>
            </div>
          </div>
        </PremiumGate>
      ) : (
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-700">Please log in to access premium features.</p>
        </div>
      )}
    </div>
  );
};

export default PremiumFeatureExample;