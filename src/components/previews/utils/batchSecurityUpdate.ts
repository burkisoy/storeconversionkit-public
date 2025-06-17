// Batch security update utility for preview components
// This script helps identify which components need security updates

export const PREVIEW_COMPONENTS = [
  'AccordionPreview',
  'AnnouncementBar2Preview', 
  'AnnouncementBarPreview',
  'AwardWinningBadgePreview',
  'BadgesComponentPreview',
  'BadgesPreview',
  'BestSellerBadgePreview',
  'CircleSliderPreview',
  'ComparisonTablePreview',
  'CountdownBadgePreview', // ✅ UPDATED
  'CustomerActivityBadgePreview',
  'CustomerBannerPreview',
  'CustomerReviewsPreview',
  'DeliveryBoxPreview',
  'FeatureListPreview',
  'FeaturesListComponentPreview',
  'FeaturesListPreview',
  'FloatingCommentsPreview',
  'FloatingReviewsPreview', // ✅ UPDATED
  'FreeDeliveryPreview',
  'GiftBoxPreview',
  'GradientTextPreview',
  'HowToUsePreview', // ✅ UPDATED
  'InStockPreview',
  'InstagramViewsPreview',
  'ItemsLeftBadgePreview',
  'LovedByCustomersPreview',
  'LowStockPreview',
  'MoneyBackGuarantee2Preview',
  'MoneyBackGuaranteePreview',
  'NoticeBoxPreview',
  'OfferBoxPreview',
  'PaymentMethodsPreview',
  'PeopleViewingBadgePreview',
  'PeopleWatchingPreview',
  'PhotoCarouselReviewsPreview',
  'PopularNotificationPreview',
  'PremiumBadgePreview',
  'PremiumReviewBadgePreview',
  'ProductChooserPreview',
  'ScrollToTopPreview',
  'ScrollingAnnouncementPreview',
  'ScrollingTextBannerPreview',
  'SecureCheckoutPreview',
  'SellingFastPreview',
  'ShippingBadgePreview',
  'ShippingBannerPreview',
  'SocialBadge2Preview',
  'SocialBadgePreview',
  'SocialProofPreview',
  'StarRatingBadgePreview',
  'StarRatingPreview', // ✅ UPDATED
  'StarRatingWithLiquidPreview',
  'StockIndicatorPreview',
  'TabsPreview',
  'TestimonialCarouselPreview',
  'TestimonialPreview',
  'TiktokSliderPreview', // ✅ UPDATED
  'TrustpilotRatingBadgePreview'
];

export const UPDATED_COMPONENTS = [
  'HowToUsePreview',
  'CountdownBadgePreview',
  'FloatingReviewsPreview', 
  'TiktokSliderPreview',
  'StarRatingPreview'
];

export const REMAINING_COMPONENTS = PREVIEW_COMPONENTS.filter(
  component => !UPDATED_COMPONENTS.includes(component)
);

// Priority order for updates (most important first)
export const PRIORITY_COMPONENTS = [
  'CustomerReviewsPreview',
  'TestimonialCarouselPreview',
  'PhotoCarouselReviewsPreview',
  'ComparisonTablePreview',
  'PaymentMethodsPreview',
  'SecureCheckoutPreview',
  'ShippingBadgePreview',
  'MoneyBackGuaranteePreview',
  'GiftBoxPreview',
  'OfferBoxPreview',
  'ItemsLeftBadgePreview',
  'PeopleViewingBadgePreview',
  'SellingFastPreview',
  'LowStockPreview',
  'InStockPreview'
];

export const getNextBatchToUpdate = (batchSize: number = 5): string[] => {
  const remaining = REMAINING_COMPONENTS.filter(component => 
    PRIORITY_COMPONENTS.includes(component)
  );
  
  return remaining.slice(0, batchSize);
};

console.log('📊 Security Update Progress:');
console.log(`✅ Updated: ${UPDATED_COMPONENTS.length}/${PREVIEW_COMPONENTS.length}`);
console.log(`⏳ Remaining: ${REMAINING_COMPONENTS.length}`);
console.log(`🔥 Next Priority Batch: ${getNextBatchToUpdate().join(', ')}`); 