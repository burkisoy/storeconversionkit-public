import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface PremiumStatusCheckerProps {
  session: any; // Replace with your session type if available
}

const PremiumStatusChecker: React.FC<PremiumStatusCheckerProps> = ({ session }) => {
  const [isPremium, setIsPremium] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkPremiumStatus = async () => {
      if (!session?.user?.id) {
        setIsLoading(false);
        setIsPremium(false);
        return;
      }

      try {
        // Query the users_public table to check if the user has a record
        const { data, error } = await supabase
          .from('users_public')
          .select('is_premium')
          .eq('id', session.user.id)
          .single();

        if (error) {
          console.error('Error checking premium status:', error);
          setError('Failed to check premium status');
          setIsPremium(false);
        } else {
          // User has premium access if they have a record in users_public
          // and is_premium is true
          setIsPremium(data?.is_premium || false);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        setError('An unexpected error occurred');
        setIsPremium(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkPremiumStatus();
  }, [session]);

  if (isLoading) {
    return (
      <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-center">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-700 mr-3"></div>
        <p className="text-blue-700">Checking premium status...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-lg">
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  if (!isPremium) {
    return (
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg shadow-sm">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          <div>
            <h3 className="text-amber-800 font-medium">This account does not have premium access.</h3>
            <p className="text-amber-700 text-sm mt-1">
              Please upgrade to premium to access all features.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // If the user has premium access, you can either return null or a success message
  return null; // Or return a success message if needed
};

export default PremiumStatusChecker;