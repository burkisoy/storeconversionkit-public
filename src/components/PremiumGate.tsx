import React, { ReactNode } from 'react';
import usePremiumStatus from '../hooks/usePremiumStatus';

interface PremiumGateProps {
  userId: string | undefined;
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * A component that only renders its children if the user has premium access
 */
const PremiumGate: React.FC<PremiumGateProps> = ({ 
  userId, 
  children, 
  fallback 
}) => {
  const { isPremium, isLoading, error } = usePremiumStatus(userId);

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
    if (fallback) {
      return <>{fallback}</>;
    }
    
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
            <h3 className="text-amber-800 font-medium">Premium access required</h3>
            <p className="text-amber-700 text-sm mt-1">
              This feature requires a premium subscription.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default PremiumGate;