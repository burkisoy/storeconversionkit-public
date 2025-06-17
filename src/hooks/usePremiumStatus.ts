import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

/**
 * Hook to check if the current user has premium access
 * @param userId The user ID to check premium status for
 * @returns Object containing premium status and loading state
 */
export const usePremiumStatus = (userId: string | undefined) => {
  const [isPremium, setIsPremium] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkPremiumStatus = async () => {
      if (!userId) {
        setIsLoading(false);
        setIsPremium(false);
        return;
      }

      try {
        // Query the users_public table to check if the user has a record
        const { data, error } = await supabase
          .from('users_public')
          .select('is_premium')
          .eq('id', userId)
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
  }, [userId]);

  return { isPremium, isLoading, error };
};

export default usePremiumStatus;