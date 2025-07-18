/**
 * --------------------------------------------------------
 * ✏️ Author: DjArtimus
 * 📅 Created: 11-07-2025 - 14-07-2025
 *
 * 📌 Description:
 *   InfoBannersSection displays two promotional banners for jewellery and gemstones with background images and call-to-action buttons.
 * --------------------------------------------------------
 */

import SpinFillButton from "@/components/SpinFillButton";
import Image from "next/image";

/**
 * Array of banner data with titles, buttons, images, and links.
 * Each banner represents a different product category or service.
 */
const banners = [
  {
    title: "Jewel Boutique.\nLives Beyond Trends.",
    button: "Explore Jewellery",
    img: "/images/ExploreJewellery_bg.png",
    alt: "Elegant gold bracelet on display",
    href: "#explore-jewellery",
  },
  {
    title: "Rare Gems.\nRemarkable Stories.",
    button: "Explore Gemstones",
    img: "/images/ExploreGemstones_bg.png",
    alt: "Woman's arm with gold bracelet, soft background",
    href: "#explore-gemstones",
  },
];

/**
 * InfoBannersSection
 *
 * Renders two promotional banners with background images, titles, and call-to-action buttons.
 * Features hover effects and responsive design.
 *
 * @returns {JSX.Element} The info banners section with two promotional cards.
 *
 * @example
 * <InfoBannersSection />
 */
const InfoBannersSection = () => (
  <section className="w-full bg-white py-4">
    <div className="max-w-6xl mx-auto px-4">
      {/* Banners container */}
      <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
        {/* Map through banner data */}
        {banners.map((banner) => (
          <div
            key={banner.title}
            className="relative flex-1 min-h-[246px] md:min-h-[320px] lg2:min-h-[418px] rounded-[2px] overflow-hidden group/card shadow-md"
          >
            {/* Background image with hover effect */}
            <Image
              src={banner.img}
              alt={banner.alt}
              fill
              className="object-cover object-center w-full h-full transition-transform duration-500 group-hover/card:scale-105 sca"
              priority
            />

            {/* Overlay with hover effect */}
            <div className="absolute inset-0 bg-[#fff]/40 md:bg-[#fff]/30 group-hover/card:bg-[#fff]/20 transition-colors duration-200" />

            {/* Content container */}
            <div className="relative z-10 flex flex-col justify-between min-h-[246px] md:min-h-[320px] lg2:min-h-[418px] px-6 py-8 md:px-8">
              {/* Banner title */}
              <h3 className="font-quiche text-[21px] md:text-[32px] lg:text-[36px] text-primary mb-4 leading-tight whitespace-pre-line">
                {banner.title}
              </h3>

              {/* Call-to-action button */}
              <SpinFillButton
                className="inline-block w-fit font-figtree font-semibold text-[12px] md:text-[16px] text-primary border border-primary rounded-[2px] px-6 py-2"
                backgroundColor="transparent"
                fillColor="accent"
                tabIndex={0}
                href={banner.href}
                ariaLabel={banner.button}
              >
                {banner.button}
              </SpinFillButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InfoBannersSection;
