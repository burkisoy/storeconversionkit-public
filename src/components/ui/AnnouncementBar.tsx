import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase, getCachedAuthStatus } from '../../lib/supabase';

const AnnouncementBar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Don't show announcement bar during loading screens
    const checkIfLoadingScreen = () => {
      // If we're in a loading state (like the editor loading screen), don't show the announcement bar
      const isLoadingScreen = document.querySelector('.fixed.inset-0.z-50.bg-white');
      setIsVisible(!isLoadingScreen);
    };

    // Check initially
    checkIfLoadingScreen();

    // Set up a MutationObserver to detect when loading screens appear/disappear
    const observer = new MutationObserver(checkIfLoadingScreen);
    observer.observe(document.body, { childList: true, subtree: true });

    // Check if user is logged in
    const checkAuthStatus = async () => {
      // First check cached status for quick response
      const cachedStatus = getCachedAuthStatus();
      if (cachedStatus !== null) {
        setIsLoggedIn(cachedStatus);
        return;
      }
      
      // If no cached status, check with Supabase
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(!!session?.user);
    };
    
    checkAuthStatus();
    
    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session?.user);
    });
    
    return () => {
      subscription.unsubscribe();
      observer.disconnect();
    };
  }, []);
  
  // Don't render the announcement bar if user is logged in or if body has hide-announcement-bar class
  if (isLoggedIn || (typeof document !== 'undefined' && document.body.classList.contains('hide-announcement-bar')) || !isVisible) {
    return null;
  }

  const handleAddToCart = () => {
    if (sessionStorage.getItem('cartEventSent') === 'true') {
      window.location.href = 'https://buy.stripe.com/7sIeYb7ZQaWW17a9AA';
      return;
    }

    window.gtag('event', 'add_to_cart', {
      currency: 'USD',
      value: 39.0,
      items: [
        {
          item_id: 'premium_1y',
          item_name: 'Store Conversion Kit Premium',
          price: 39.0,
        },
      ],
    });

    sessionStorage.setItem('cartEventSent', 'true');
    window.location.href = 'https://buy.stripe.com/7sIeYb7ZQaWW17a9AA';
  };

  return (
    <a 
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleAddToCart();
      }}
      className="block bg-gradient-to-r from-red-600 to-red-700 text-white py-2.5 relative overflow-hidden hover:from-red-700 hover:to-red-800 transition-colors"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMSIvPjxjaXJjbGUgY3g9IjEzIiBjeT0iMTMiIHI9IjEiLz48L2c+PC9zdmc+')] opacity-20" />
      
      <div className="container mx-auto px-4 flex items-center justify-center gap-2 sm:gap-3">
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1.1, 0.9] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="relative flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5"
        >
          <div className="relative w-full h-full">
            {/* Clock face */}
            <div className="absolute inset-0 rounded-full border border-white/50"></div>
            
            {/* Hour hand */}
            <motion.div 
              className="absolute top-0 left-1/2 w-0.5 h-1/3 bg-white origin-bottom rounded-full"
              style={{ 
                top: '17%',
                left: '50%',
                marginLeft: '-1px',
                transformOrigin: 'bottom center'
              }}
              animate={{ rotate: 360 }}
              transition={{ 
                repeat: Infinity, 
                duration: 60, 
                ease: "linear" 
              }}
            />
            
            {/* Minute hand */}
            <motion.div 
              className="absolute top-0 left-1/2 w-0.5 h-1/2 bg-white origin-bottom rounded-full"
              style={{ 
                top: '0%',
                left: '50%',
                marginLeft: '-1px',
                transformOrigin: 'bottom center'
              }}
              animate={{ rotate: 360 }}
              transition={{ 
                repeat: Infinity, 
                duration: 10, 
                ease: "linear" 
              }}
            />
            
            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </motion.div>
        
        <p className="text-xs sm:text-sm font-medium">
          Conversion Kit Premium <span className="line-through opacity-75">$99</span>{' '}
          <span className="font-bold">$39</span> - Limited Time Offer
        </p>
      </div>
    </a>
  );
};

export default AnnouncementBar;