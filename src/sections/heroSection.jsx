/**
 * --------------------------------------------------------
 * ✏️ Author: DjArtimus
 * 📅 Created: 11-07-2025 - 14-07-2025
 *
 * 📌 Description:
 *   HeroSection displays the main landing section with video background, hero text, and WhatsApp floating button.
 * --------------------------------------------------------
 */

"use client";
import SlantedFillButton from "@/components/SlantedFillButton";
import { FaWhatsapp } from "react-icons/fa";

/**
 * HeroSection
 *
 * Renders the main hero section with video background, responsive text content, and call-to-action buttons.
 * Features different layouts for mobile and desktop with floating WhatsApp button.
 *
 * @returns {JSX.Element} The hero section with video background and content.
 *
 * @example
 * <HeroSection />
 */
const HeroSection = () => (
  <section className="w-full md:h-[90vh] lg:h-[100vh] bg-primary/60 flex flex-col md:flex-row items-center justify-start relative overflow-hidden">
    {/* Background video */}
    <video
      className="md:absolute aspect-square md:aspect-auto inset-0 w-full h-full object-cover z-0"
      src="/videos/Hero.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    />
    
    {/* Hero content container */}
    <div className="sm:absolute bottom-6 left-0 z-10 flex flex-col items-start sm:max-lg2:items-center justify-center text-left px-8 md:px-24 py-6 sm:py-12 w-full">
      {/* Hero text content - Desktop version */}
      <h1 className="hidden sm:block bgac font-figtree font-medium text-[40px] md:text-[48px] text-white drop-shadow-lg mb-6">
        Want one of your own?
      </h1>
      <SlantedFillButton
        className="relative hidden sm:block backdrop-blur-lg rounded-[2px] border border-white text-white font-figtree font-medium text-[16px] py-3 px-[104px] transition hover:text-primary cursor-pointer hover:backdrop-blur-none "
        backgroundColor="transparent"
        fillColor="#d2ae6d"
        href="#"
        ariaLabel="Explore Our Collections"
      >
        Explore Our Collections
      </SlantedFillButton>

      {/* Hero text content - Mobile version */}
      <h1 className="sm:hidden font-figtree font-medium text-[14px] text-white text-center drop-shadow-lg mb-6">
        Explore exquisite gemstones & jewellery, crafted to empower & elevate
        your legacy with every radiant detail.
      </h1>
      <button
        className="w-full sm:hidden backdrop-blur-lg rounded-[2px] border border-white text-white font-figtree font-medium text-[16px] py-3 hover:bg-white/10 mb-2 cursor-pointer transition-colors slanted-fill-btn"
        style={{
          "--bg-color": "transparent",
          "--fill-color": "#d2ae6d",
        }}
      >
        <span>Explore All Collections</span>
      </button>
    </div>

    {/* WhatsApp Floating Icon */}
    <div className="fixed bottom-30 right-0 z-50 rounded-l-lg overflow-hidden">
      <SlantedFillButton
        className=" p-3 pe-2.5 rounded-l-md shadow-lg text-white"
        backgroundColor="#051e33"
        fillColor="#d2ae6d"
        href="https://wa.me/6591234567"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="w-7 h-7" />
      </SlantedFillButton>
    </div>
  </section>
);

export default HeroSection;
