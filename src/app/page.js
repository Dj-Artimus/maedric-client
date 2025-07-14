import CustomOrderCTASection from '@/sections/customOrderCTASection';
import ContactSection from '../sections/contactSection';
import FeaturedJewellerySection from '../sections/featuredJewellerySection';
import HeroSection from '../sections/heroSection';
import InfoBannersSection from '../sections/infoBannersSection';
import InstagramGallarySection from '../sections/instagramGallarySection';
import ShopByTypeSection from '../sections/shopByTypeSection';
import StepsSection from '../sections/stepsSection';
import TestimonialsSection from '../sections/testimonialsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ShopByTypeSection />
      {/* <CollectionsSection /> */}
      <InfoBannersSection />
      <FeaturedJewellerySection />
      <CustomOrderCTASection />
      <StepsSection />
      <TestimonialsSection />
      <ContactSection />
      <InstagramGallarySection />
    </>
  );
}
