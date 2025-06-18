import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ComponentWithCustomization } from '../types';
import * as Previews from './previews';
import PremiumModal from './ui/PremiumModal';
import { supabase, getCachedAuthStatus, setCachedAuthStatus, refreshSession, checkPremiumStatus } from '../lib/supabase';
import { Lock, Unlock, Wand2 } from 'lucide-react';
import { clearSession } from '../lib/sessionManager';

interface ComponentCardProps {
  component: ComponentWithCustomization;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ component }) => {
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isPremiumUser, setIsPremiumUser] = useState(false);

  const [error, setError] = useState<string | null>(null);

  // Retry mechanism with exponential backoff
  const fetchWithRetry = async (
    fn: () => Promise<any>,
    maxRetries = 3,
    baseDelay = 1000
  ) => {
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        return await fn();
      } catch (err) {
        if (attempt === maxRetries - 1) throw err;
        await new Promise(resolve => 
          setTimeout(resolve, baseDelay * Math.pow(2, attempt))
        );
      }
    }
  };

  useEffect(() => {
    let isMounted = true;
    let authTimeout: ReturnType<typeof setInterval>;

    const checkAuth = async () => {
      try {
        // Check cached auth status first
        const cachedStatus = getCachedAuthStatus();
        if (cachedStatus !== null && isMounted) {
          setIsPremiumUser(cachedStatus);
          setIsLoading(false);
          return;
        }

        // Add a small delay to prevent multiple simultaneous requests
        await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));

        const session = await refreshSession();
        
        if (isMounted && session?.user) {
          // Check if user has premium access in users_public table
          const hasPremium = await checkPremiumStatus(session.user.id);
          setIsPremiumUser(hasPremium);
          setCachedAuthStatus(hasPremium);
        } else {
          setIsPremiumUser(false);
          setCachedAuthStatus(false);
        }
        
        if (isMounted) {
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Auth initialization error:', err);
        if (isMounted) {
          setIsPremiumUser(false);
          setCachedAuthStatus(false);
          setIsLoading(false);
          setError('Failed to check premium status');
          
          // Clear any existing session data to prevent login issues
          clearSession();
        }
      }
    };

    checkAuth();

    // Set up periodic auth check - reduced frequency to prevent frequent logouts
    authTimeout = setInterval(checkAuth, 15 * 60 * 1000); // Check every 15 minutes instead of 5

    const channel = supabase
      .channel('sections_changes')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'sections',
          filter: `id=eq.${component.id}`,
        },
        (_payload: any) => {
          // Customize count updated in database
        }
      )
      .subscribe();

    const fetchCustomizeCount = async () => {
      if (!navigator.onLine) {
        setError('No internet connection. Please check your network.');
        return;
      }

      try {
        const fetchCount = async () => {
          const { data, error: fetchError } = await supabase
            .from('sections')
            .select('customize_count')
            .eq('id', component.id)
            .maybeSingle();

          if (fetchError) {
            throw fetchError;
          }

          return data;
        };

        await fetchWithRetry(fetchCount);

        if (isMounted) {
          setError(null);
        }
      } catch (err) {
        console.error('Error fetching customize count:', err);
        if (isMounted) {
          setError('Unable to load component data. Please try again later.');
        }
      }
    };

    fetchCustomizeCount();

    // Add online/offline event listeners
    const handleOnline = () => {
      if (isMounted) {
        setError(null);
        fetchCustomizeCount();
      }
    };

    const handleOffline = () => {
      if (isMounted) {
        setError('No internet connection. Please check your network.');
      }
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      isMounted = false;
      clearInterval(authTimeout);
      channel.unsubscribe();
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [component.id]);

  const handleCustomizeClick = async (e: React.MouseEvent) => {
    // Show premium modal only if the section is premium AND user is not authenticated
    if (!component.free && !isPremiumUser && !isLoading) {
      e.preventDefault();
      setShowPremiumModal(true);
      return;
    }

    try {
      const { error: rpcError } = await supabase.rpc('increment_customize_count', {
        section_id: component.id
      });

      if (rpcError) {
        throw rpcError;
      }
    } catch (error) {
      console.error('Error incrementing customize count:', error);
      setError('Failed to update customize count');
    }
  };

  const renderPreview = () => {
    const previewMap: Record<string, React.ComponentType> = {
      'product-features': Previews.ProductFeaturesPreview,
      'items-left-badge': Previews.ItemsLeftBadgePreview,
      'scroll-to-top': Previews.ScrollToTopPreview,
      'customer-banner': Previews.CustomerBannerPreview,
      'accordion': Previews.AccordionPreview,
      'loved-by-customers': Previews.LovedByCustomersPreview,
      'people-watching': Previews.PeopleWatchingPreview,
      'in-stock': Previews.InStockPreview,
      'instagram-views': Previews.InstagramViewsPreview,
      'announcement-bar': Previews.AnnouncementBarPreview,
      'announcement-bar-2': Previews.AnnouncementBar2Preview,
      'payment-methods': Previews.PaymentMethodsPreview,
      'secure-checkout': Previews.SecureCheckoutPreview,
      'low-stock': Previews.LowStockPreview,
      'testimonial': Previews.TestimonialPreview,
      'scrolling-announcement': Previews.ScrollingAnnouncementPreview,
      'social-badge': Previews.SocialBadgePreview,
      'social-badge-2': Previews.SocialBadge2Preview,
      'star-rating': Previews.StarRatingPreview,
      'star-rating-with-liquid': Previews.StarRatingWithLiquidPreview,
      'star-rating-badge': Previews.StarRatingBadgePreview,
      'badges-component': Previews.BadgesComponentPreview,
      'features-list-component': Previews.FeaturesListComponentPreview,
      'gradient-text': Previews.GradientTextPreview,
      'notice-box': Previews.NoticeBoxPreview,
      'premium-badge': Previews.PremiumBadgePreview,
      'delivery-box': Previews.DeliveryBoxPreview,
      'tabs': Previews.TabsPreview,
      'popular-notification': Previews.PopularNotificationPreview,
      'feature-list': Previews.FeatureListPreview,
      'offer-box': Previews.OfferBoxPreview,
      'gift-box': Previews.GiftBoxPreview,
      'money-back-guarantee': Previews.MoneyBackGuaranteePreview,
      'circle-slider': Previews.CircleSliderPreview,
      'countdown-badge': Previews.CountdownBadgePreview,
      'floating-comments': Previews.FloatingCommentsPreview,
      'tiktok-slider': Previews.TiktokSliderPreview,
      'testimonial-carousel': Previews.TestimonialCarouselPreview,
      'selling-fast': Previews.SellingFastPreview,
      'shipping-badge': Previews.ShippingBadgePreview,
      'customer-activity-badge': Previews.CustomerActivityBadgePreview,
      'trustpilot-rating-badge': Previews.TrustpilotRatingBadgePreview,
      'people-viewing-badge': Previews.PeopleViewingBadgePreview,
      'best-seller-badge': Previews.BestSellerBadgePreview,
      'bestseller-badge': Previews.BestSellerBadgePreview,
      'award-winning-badge': Previews.AwardWinningBadgePreview,
      'scrolling-text-banner': Previews.ScrollingTextBannerPreview,
      'customer-reviews': Previews.CustomerReviewsPreview,
      'floating-reviews': Previews.FloatingReviewsPreview,
      'photo-carousel-reviews': Previews.PhotoCarouselReviewsPreview,
      'comparison-table': Previews.ComparisonTablePreview,
      'premium-review-badge': Previews.PremiumReviewBadgePreview,
      'money-back-guarantee-2': Previews.MoneyBackGuarantee2Preview,
      'how-to-use': Previews.HowToUsePreview
    };

    const PreviewComponent = previewMap[component.id];
    if (PreviewComponent) {
      return <PreviewComponent />;
    }

    return (
      <div className="flex items-center justify-center h-full text-gray-400">
        Preview not available
      </div>
    );
  };

  const renderBadge = () => {
    if (component.free) {
      return (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-5 h-5 mr-2 flex-shrink-0"
        >
          <Unlock className="w-5 h-5 text-black" />
        </motion.div>
      );
    }
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-5 h-5 mr-2 flex-shrink-0"
      >
        <Lock className="w-5 h-5 text-black" />
      </motion.div>
    );
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.3, 
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "tween"
        }}
        className="group relative bg-gradient-to-br from-white via-gray-50/30 to-white rounded-3xl overflow-hidden border border-gray-200/60 shadow-lg w-full max-w-full backdrop-blur-sm"
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 opacity-0" />
        
        {/* Premium glow effect for premium components */}
        {!component.free && (
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-purple-500/5 to-pink-500/5 opacity-0" />
        )}
        
        <div className="relative p-5 sm:p-7">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
              {renderBadge()}
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {component.title}
              </span>
            </h3>
            {component.id !== 'badges' && (component.bestValue || component.popular) && (
              <div className="flex gap-2">
                {component.bestValue && (
                  <motion.span 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="px-3 py-1.5 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white text-xs font-bold rounded-full shadow-lg shadow-orange-500/25 border border-orange-400/30"
                  >
                    Best Value
                  </motion.span>
                )}
                {component.popular && (
                  <motion.span 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="px-3 py-1.5 bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-500 text-white text-xs font-bold rounded-full shadow-lg shadow-purple-500/25 border border-purple-400/30"
                  >
                    Popular
                  </motion.span>
                )}
              </div>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">{component.description}</p>
          
          <Link to={`/section/${component.id}`} className="block">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100/50 ring-1 ring-gray-200/50">
              {/* Preview container with subtle inner shadow */}
              <div className="absolute inset-1 rounded-xl bg-white/50 backdrop-blur-sm">
                {renderPreview()}
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0" />
            </div>
          </Link>
        </div>
        
        <div className="relative p-5 sm:p-7 bg-gradient-to-br from-gray-50/80 via-white/50 to-gray-50/80 backdrop-blur-sm border-t border-gray-100/60">
          <div className="flex flex-col gap-4">
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-4 py-3 bg-gradient-to-r from-red-50 to-red-50/50 rounded-xl border border-red-200/60"
              >
                <p className="text-sm text-red-700 font-medium">{error}</p>
              </motion.div>
            )}
            
                                    <motion.a 
              href={`/editor/${component.id}`}
              onClick={handleCustomizeClick}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100/80 rounded-xl border border-gray-200/50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100/80 hover:border-blue-200/60 transition-all duration-200"
            >
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                <Wand2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200">
                Customize and Add
              </span>
            </motion.a>


          </div>
        </div>
      </motion.div>

      <PremiumModal 
        isOpen={showPremiumModal} 
        onClose={() => setShowPremiumModal(false)} 
      />
    </>
  );
};

export default ComponentCard;