import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import { Mail, ArrowRight, Loader2, AlertCircle, Users, Code2, Menu, X, MessageSquareMore } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import HowToUsePopup from './HowToUsePopup';
import ProfileDropdown from './ProfileDropdown';
import ContactSupportModal from './ContactSupportModal';
import StatusButton from './StatusButton';
import { setCachedAuthStatus, checkPremiumStatus } from '../../lib/supabase';
import { clearSession } from '../../lib/sessionManager';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Navbar = () => {
  const navigate = useNavigate();
  const [isHowToUseOpen, setIsHowToUseOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isCheckingPremium, setIsCheckingPremium] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [premiumCheckError, setPremiumCheckError] = useState<string | null>(null);

  useEffect(() => {
    const initializeAuth = async () => {
      setIsCheckingPremium(true);
      setPremiumCheckError(null);
      
      // Set a timeout to prevent checking indefinitely
      const checkingTimeout = setTimeout(() => {
        if (isCheckingPremium) {
          setIsCheckingPremium(false);
          setPremiumCheckError('Verification timed out. Please try again.');
          clearSession();
          supabase.auth.signOut();
        }
      }, 10000); // 10 seconds timeout
      
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) throw sessionError;
        
        if (session) {
          try {
            const { data: { session: refreshedSession }, error: refreshError } = 
              await supabase.auth.refreshSession();
            
            if (refreshError) throw refreshError;
            
            if (refreshedSession) {
              setUser(refreshedSession?.user ?? null);
              
              // Check if user has premium access in users_public table
              const hasPremium = await checkPremiumStatus(refreshedSession.user.id);
              setCachedAuthStatus(hasPremium);
            } else {
              setUser(null);
              setCachedAuthStatus(false);
              // Clear any existing session data to prevent login issues
              clearSession();
            }
          } catch (refreshErr) {
            console.error('Session refresh error:', refreshErr);
            setUser(null);
            setCachedAuthStatus(false);
            clearSession();
            setPremiumCheckError('Failed to refresh session');
          }
        } else {
          setUser(null);
          setCachedAuthStatus(false);
          // Clear any existing session data to prevent login issues
          clearSession();
        }
      } catch (err) {
        console.error('Auth initialization error:', err);
        setUser(null);
        setCachedAuthStatus(false);
        // Clear any existing session data to prevent login issues
        clearSession();
        setPremiumCheckError('Failed to initialize authentication');
      } finally {
        setIsCheckingPremium(false);
        clearTimeout(checkingTimeout);
      }
    };

    initializeAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session) {
        setIsCheckingPremium(true);
        setPremiumCheckError(null);
        
        // Set a timeout to prevent checking indefinitely
        const checkingTimeout = setTimeout(() => {
          if (isCheckingPremium) {
            setIsCheckingPremium(false);
            setPremiumCheckError('Verification timed out. Please try again.');
            clearSession();
            supabase.auth.signOut();
          }
        }, 10000); // 10 seconds timeout
        
        try {
          setUser(session?.user || null);
          
          // Check if user has premium access in users_public table
          const hasPremium = await checkPremiumStatus(session.user.id);
          setCachedAuthStatus(hasPremium);
        } catch (error) {
          console.error('Error checking premium status:', error);
          setPremiumCheckError('Failed to verify premium status');
          setCachedAuthStatus(false);
        } finally {
          setIsCheckingPremium(false);
          clearTimeout(checkingTimeout);
        }
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
        setCachedAuthStatus(false);
        // Clear any existing session data
        clearSession();
      }
    });
    
    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    // Clear session data first to prevent any issues
    clearSession();
    // Then sign out
    await supabase.auth.signOut();
    window.location.href = '/';
  };

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
    <>
      <header className="bg-white">
        <div className="container mx-auto">
          <div className="mx-6 py-5 flex items-center justify-between">
            <Link 
              to="/" 
              className="group flex items-center space-x-3"
            >
              <Code2 className="w-6 h-6 text-blue-600" />
              <span className="relative text-[15px] tracking-tight font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-500">
                Store Conversion Kit
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {isCheckingPremium ? (
                <div className="px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                    <span>Checking...</span>
                  </div>
                </div>
              ) : premiumCheckError ? (
                <div className="px-5 py-2 text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Error: Please try again</span>
                  </div>
                </div>
              ) : user ? (
                <>
                  <StatusButton />
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-2"
                  >
                    <MessageSquareMore className="w-4 h-4" />
                    Contact Support
                  </button>
                  <ProfileDropdown user={user} onLogout={handleLogout} />
                </>
              ) : (
                <>
                  <button
                    onClick={handleAddToCart}
                    className="relative px-5 py-2 text-sm font-medium group/button overflow-hidden"
                  >
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-xl animate-gradient-x" />
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 -translate-x-full group-hover/button:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </div>
                    
                    {/* Pulse effect on hover */}
                    <div className="absolute inset-0 bg-white/0 group-hover/button:bg-white/10 rounded-xl transition-all duration-300 group-hover/button:animate-pulse" />
                    
                    <span className="relative text-white flex items-center gap-2">
                      <span className="group-hover/button:scale-105 transition-transform duration-200">Get Premium</span>
                      <span className="px-2 py-0.5 bg-white/20 rounded-md text-[11px] font-semibold group-hover/button:bg-white/30 transition-colors duration-200">
                        $39
                      </span>
                    </span>
                  </button>

                  <Link 
                    to="/login"
                    className="px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Premium Login
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden px-6 py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-3">
                {isCheckingPremium ? (
                  <div className="w-full px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                    <span>Checking...</span>
                  </div>
                ) : premiumCheckError ? (
                  <div className="w-full px-5 py-2 text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-xl flex items-center justify-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Error: Please try again</span>
                  </div>
                ) : user ? (
                  <>
                    <div className="flex justify-center">
                      <StatusButton />
                    </div>
                    <button
                      onClick={() => {
                        setIsContactModalOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageSquareMore className="w-4 h-4" />
                      Contact Support
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full px-5 py-2 text-sm font-medium text-red-600 bg-white border border-gray-200 rounded-xl hover:bg-red-50 transition-colors"
                    >
                      Log out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleAddToCart}
                      className="relative w-full px-5 py-2 text-sm font-medium group/button overflow-hidden"
                    >
                      {/* Animated gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-xl animate-gradient-x" />
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 rounded-xl overflow-hidden">
                        <div className="absolute inset-0 -translate-x-full group-hover/button:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      </div>
                      
                      {/* Pulse effect on hover */}
                      <div className="absolute inset-0 bg-white/0 group-hover/button:bg-white/10 rounded-xl transition-all duration-300 group-hover/button:animate-pulse" />
                      
                      <span className="relative text-white flex items-center justify-center gap-2">
                        <span className="group-hover/button:scale-105 transition-transform duration-200">Get Premium</span>
                        <span className="px-2 py-0.5 bg-white/20 rounded-md text-[11px] font-semibold group-hover/button:bg-white/30 transition-colors duration-200">
                          $39
                        </span>
                      </span>
                    </button>

                    <Link 
                      to="/login"
                      className="w-full px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-center"
                    >
                      Premium Login
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      <HowToUsePopup 
        isOpen={isHowToUseOpen}
        onClose={() => setIsHowToUseOpen(false)}
      />

      <ContactSupportModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default Navbar;