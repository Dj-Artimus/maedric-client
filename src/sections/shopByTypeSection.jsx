/**
 * --------------------------------------------------------
 * ✏️ Author: DjArtimus
 * 📅 Created: 11-07-2025 - 14-07-2025
 *
 * 📌 Description:
 *   ShopByTypeSection displays a grid of jewellery types with hover effects and animated underlines for navigation.
 * --------------------------------------------------------
 */

"use client";
import AnimatedUnderlineLoop from "@/components/AnimatedUnderlineLoop";
import Image from "next/image";
import { useState } from "react";

/**
 * Array of jewellery types with names and image paths.
 * Each type represents a different category of jewellery with hover and default images.
 */
const types = [
  {
    name: "Ring",
    img: "/images/Type_Ring.png",
    img2: "/images/Type_Ring2.png", // Placeholder for second image
  },
  {
    name: "Earrings",
    img: "/images/Type_Earings.png",
    img2: "/images/Type_Earings.png", // Placeholder for second image
  },
  {
    name: "Necklace",
    img: "/images/Type_Necklace.png",
    img2: "/images/Type_Necklace.png", // Placeholder for second image
  },
  {
    name: "Bracelet",
    img: "/images/Type_Bracelet.png",
    img2: "/images/Type_Bracelet.png", // Placeholder for second image
  },
  {
    name: "Brooch",
    img: "/images/Type_Brooch.png",
    img2: "/images/Type_Brooch.png", // Placeholder for second image
  },
];

/**
 * ShopByTypeSection
 *
 * Renders a responsive grid of jewellery types with hover effects and animated underlines.
 * Features image switching on hover and responsive sizing for different screen sizes.
 *
 * @returns {JSX.Element} The shop by type section with interactive jewellery categories.
 *
 * @example
 * <ShopByTypeSection />
 */
const ShopByTypeSection = () => {
  // ⚙️ Local variables / hooks
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section title */}
        <h2 className="font-quiche text-[24px] sm:text-[36px] text-primary mb-10 text-center lg:text-left">
          Shop By Jewellery Type
        </h2>

        {/* Jewellery types grid */}
        <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 justify-items-center justify-center sm:justify-around lg:justify-between flex-wrap">
          {/* Map through jewellery types */}
          {types.map((type, index) => (
            <div
              key={type.name}
              className="flex flex-col items-center cursor-pointer mb-2 group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image container with responsive sizing */}
              <div className="w-[90px] h-[90px] xsm:w-[110px] xsm:h-[114px] md:w-[130px] md:h-[130px] lg:w-[170px] lg:h-[170px] xl:w-[200px] xl:h-[200px] max-w-[200px] max-h-[200px] bg-[#f6f6f6] flex items-center justify-center rounded-sm overflow-hidden mb-4">
                <Image
                  src={hoveredIndex === index ? type.img2 : type.img}
                  alt={type.name}
                  width={200}
                  height={200}
                  className="object-contain transition-transform duration-500"
                  priority
                />
              </div>

              {/* Type name with animated underline */}
              <span className="font-figtree text-secondary text-[14px] xsm:text-[16px] sm:text-[20px] font-semibold md:mt-2">
                <AnimatedUnderlineLoop href="#" underlineColor="accent">
                  {type.name}
                </AnimatedUnderlineLoop>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByTypeSection;
