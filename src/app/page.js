import CustomOrderCTASection from '@/sections/customOrderCTASection';
import ContactSection from '../sections/contactSection';
import FeaturedJewellerySection from '../sections/featuredJewellerySection';
import HeroSection from '../sections/heroSection';
import InfoBannersSection from '../sections/infoBannersSection';
import InstagramGallarySection from '../sections/instagramGallarySection';
import ShopByTypeSection from '../sections/shopByTypeSection';
import StepsSection from '../sections/stepsSection';
import TestimonialsSection from '../sections/testimonialsSection';

export const metadata = {
  title: "MAEDRIC | Home",
  description: "Discover Maedric’s exclusive gemstone collections, unique jewellery designs and timeless craftsmanship.",
  openGraph: {
    title: "Maedric | Rare Gemstones & Fine Jewellery",
    description: "Discover Maedric’s exclusive gemstone collections, unique jewellery designs and timeless craftsmanship.",
    url: "https://maedric.com",
    images: [
      {
        url: "https://maedric.com/maedricImg.png",
        width: 1200,
        height: 630,
        alt: "Maedric Gemstones & Jewellery",
      },
    ],
  },
};


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
