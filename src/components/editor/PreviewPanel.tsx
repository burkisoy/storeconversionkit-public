import React from 'react';
import { ComponentWithCustomization } from '../../types';
import {
  ProductFeaturesPreviewPanel,
  ItemsLeftBadgePreviewPanel,
  ScrollToTopPreviewPanel,
  CustomerBannerPreviewPanel,
  AccordionPreviewPanel,
  LovedByCustomersPreviewPanel,
  PeopleWatchingPreviewPanel,
  InStockPreviewPanel,
  InstagramViewsPreviewPanel,
  AnnouncementBarPreviewPanel,
  AnnouncementBar2PreviewPanel,
  PaymentMethodsPreviewPanel,
  SecureCheckoutPreviewPanel,
  LowStockPreviewPanel,
  TestimonialPreviewPanel,
  ScrollingAnnouncementPreviewPanel,
  SocialBadgePreviewPanel,
  SocialBadge2PreviewPanel,
  StarRatingPreviewPanel,
  StarRatingWithLiquidPreviewPanel,
  StarRatingBadgePreviewPanel,
  BadgesComponentPreviewPanel,
  FeaturesListComponentPreviewPanel,
  GradientTextPreviewPanel,
  NoticeBoxPreviewPanel,
  PremiumBadgePreviewPanel,
  DeliveryBoxPreviewPanel,
  TabsPreviewPanel,
  PopularNotificationPreviewPanel,
  FeatureListPreviewPanel,
  OfferBoxPreviewPanel,
  GiftBoxPreviewPanel,
  MoneyBackGuaranteePreviewPanel,
  CircleSliderPreviewPanel,
  CountdownBadgePreviewPanel,
  FloatingCommentsPreviewPanel,
  TiktokSliderPreviewPanel,
  TestimonialCarouselPreviewPanel,
  SellingFastPreviewPanel,
  ShippingBadgePreviewPanel,
  CustomerActivityBadgePreviewPanel,
  TrustpilotRatingBadgePreviewPanel,
  PeopleViewingBadgePreviewPanel,
  BestsellerBadgePreviewPanel,
  AwardWinningBadgePreviewPanel,
  ScrollingTextBannerPreviewPanel,
  CustomerReviewsPreviewPanel,
  FloatingReviewsPreviewPanel,
  PhotoCarouselReviewsPreviewPanel,
  ComparisonTablePreviewPanel,
  PremiumReviewBadgePreviewPanel,
  MoneyBackGuarantee2PreviewPanel,
  HowToUsePreviewPanel
} from './previews';

interface PreviewPanelProps {
  component: ComponentWithCustomization;
  customValues: Record<string, string>;
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({ component, customValues }) => {
  const renderPreview = () => {
    switch (component.id) {
      case 'product-features':
        return <ProductFeaturesPreviewPanel customValues={customValues} />;
      case 'items-left-badge':
        return <ItemsLeftBadgePreviewPanel component={component} customValues={customValues} />;
      case 'scroll-to-top':
        return <ScrollToTopPreviewPanel component={component} customValues={customValues} />;
      case 'customer-banner':
        return <CustomerBannerPreviewPanel component={component} customValues={customValues} />;
      case 'accordion':
        return <AccordionPreviewPanel component={component} customValues={customValues} />;
      case 'loved-by-customers':
        return <LovedByCustomersPreviewPanel component={component} customValues={customValues} />;
      case 'people-watching':
        return <PeopleWatchingPreviewPanel component={component} customValues={customValues} />;
      case 'in-stock':
        return <InStockPreviewPanel component={component} customValues={customValues} />;
      case 'instagram-views':
        return <InstagramViewsPreviewPanel component={component} customValues={customValues} />;
      case 'announcement-bar':
        return <AnnouncementBarPreviewPanel component={component} customValues={customValues} />;
      case 'announcement-bar-2':
        return <AnnouncementBar2PreviewPanel component={component} customValues={customValues} />;
      case 'payment-methods':
        return <PaymentMethodsPreviewPanel component={component} customValues={customValues} />;
      case 'secure-checkout':
        return <SecureCheckoutPreviewPanel component={component} customValues={customValues} />;
      case 'low-stock':
        return <LowStockPreviewPanel component={component} customValues={customValues} />;
      case 'testimonial':
        return <TestimonialPreviewPanel component={component} customValues={customValues} />;
      case 'scrolling-announcement':
        return <ScrollingAnnouncementPreviewPanel component={component} customValues={customValues} />;
      case 'social-badge':
        return <SocialBadgePreviewPanel component={component} customValues={customValues} />;
      case 'social-badge-2':
        return <SocialBadge2PreviewPanel component={component} customValues={customValues} />;
      case 'star-rating':
        return <StarRatingPreviewPanel component={component} customValues={customValues} />;
      case 'star-rating-with-liquid':
        return <StarRatingWithLiquidPreviewPanel component={component} customValues={customValues} />;
      case 'star-rating-badge':
        return <StarRatingBadgePreviewPanel component={component} customValues={customValues} />;
      case 'badges-component':
        return <BadgesComponentPreviewPanel component={component} customValues={customValues} />;
      case 'features-list-component':
        return <FeaturesListComponentPreviewPanel component={component} customValues={customValues} />;
      case 'gradient-text':
        return <GradientTextPreviewPanel component={component} customValues={customValues} />;
      case 'notice-box':
        return <NoticeBoxPreviewPanel component={component} customValues={customValues} />;
      case 'premium-badge':
        return <PremiumBadgePreviewPanel component={component} customValues={customValues} />;
      case 'delivery-box':
        return <DeliveryBoxPreviewPanel component={component} customValues={customValues} />;
      case 'tabs':
        return <TabsPreviewPanel component={component} customValues={customValues} />;
      case 'popular-notification':
        return <PopularNotificationPreviewPanel component={component} customValues={customValues} />;
      case 'feature-list':
        return <FeatureListPreviewPanel component={component} customValues={customValues} />;
      case 'offer-box':
        return <OfferBoxPreviewPanel component={component} customValues={customValues} />;
      case 'gift-box':
        return <GiftBoxPreviewPanel component={component} customValues={customValues} />;
      case 'money-back-guarantee':
        return <MoneyBackGuaranteePreviewPanel component={component} customValues={customValues} />;
      case 'circle-slider':
        return <CircleSliderPreviewPanel component={component} customValues={customValues} />;
      case 'countdown-badge':
        return <CountdownBadgePreviewPanel component={component} customValues={customValues} />;
      case 'floating-comments':
        return <FloatingCommentsPreviewPanel component={component} customValues={customValues} />;
      case 'tiktok-slider':
        return <TiktokSliderPreviewPanel component={component} customValues={customValues} />;
      case 'testimonial-carousel':
        return <TestimonialCarouselPreviewPanel component={component} customValues={customValues} />;
      case 'selling-fast':
        return <SellingFastPreviewPanel component={component} customValues={customValues} />;
      case 'shipping-badge':
        return <ShippingBadgePreviewPanel component={component} customValues={customValues} />;
      case 'customer-activity-badge':
        return <CustomerActivityBadgePreviewPanel component={component} customValues={customValues} />;
      case 'trustpilot-rating-badge':
        return <TrustpilotRatingBadgePreviewPanel component={component} customValues={customValues} />;
      case 'people-viewing-badge':
        return <PeopleViewingBadgePreviewPanel component={component} customValues={customValues} />;
      case 'best-seller-badge':
        return <BestsellerBadgePreviewPanel component={component} customValues={customValues} />;
      case 'bestseller-badge':
        return <BestsellerBadgePreviewPanel component={component} customValues={customValues} />;
      case 'award-winning-badge':
        return <AwardWinningBadgePreviewPanel component={component} customValues={customValues} />;
      case 'scrolling-text-banner':
        return <ScrollingTextBannerPreviewPanel component={component} customValues={customValues} />;
      case 'customer-reviews':
        return <CustomerReviewsPreviewPanel component={component} customValues={customValues} />;
      case 'floating-reviews':
        return <FloatingReviewsPreviewPanel component={component} customValues={customValues} />;
      case 'photo-carousel-reviews':
        return <PhotoCarouselReviewsPreviewPanel component={component} customValues={customValues} />;
      case 'comparison-table':
        return <ComparisonTablePreviewPanel component={component} customValues={customValues} />;
      case 'premium-review-badge':
        return <PremiumReviewBadgePreviewPanel component={component} customValues={customValues} />;
      case 'money-back-guarantee-2':
        return <MoneyBackGuarantee2PreviewPanel component={component} customValues={customValues} />;
      case 'how-to-use':
        return <HowToUsePreviewPanel component={component} customValues={customValues} />;
      default:
        return (
          <div className="flex items-center justify-center h-full text-gray-400">
            Preview not available
          </div>
        );
    }
  };

  return renderPreview();
};

export default PreviewPanel;