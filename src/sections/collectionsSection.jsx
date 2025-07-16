/**
 * --------------------------------------------------------
 * ✏️ Author: DjArtimus
 * 📅 Created: 11-07-2025 - 14-07-2025
 *
 * 📌 Description:
 *   CollectionsSection displays a grid of jewellery collections with hover effects and responsive design.
 * --------------------------------------------------------
 */

import Image from "next/image";

/**
 * Array of collection data with names and image paths.
 * Each collection represents a different jewellery line or category.
 */
const collections = [
  {
    name: "Shop Collection 1",
    img: "/images/ShopCollection1.png", // Placeholder for missing ShopCollection1.png
  },
  {
    name: "Shop Collection 2",
    img: "/images/ShopCollection2.png",
  },
  {
    name: "Shop Collection 3",
    img: "/images/ShopCollection3.png",
  },
  {
    name: "Shop Collection 4",
    img: "/images/ShopCollection4.png",
  },
];

/**
 * CollectionsSection
 *
 * Renders a responsive grid of jewellery collections with hover animations.
 *
 * @returns {JSX.Element} The collections section with grid layout.
 *
 * @example
 * <CollectionsSection />
 */
const CollectionsSection = () => (
  <section className="bg-[#fff] py-12 md:py-16">
    <div className="max-w-6xl mx-auto px-4">
      {/* Section title */}
      <h2 className="font-quiche text-[36px] text-primary mb-10 text-left">
        Our Collections
      </h2>

      {/* Collections grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {collections.map((col) => (
          <div
            key={col.name}
            className="bg-[#F7F8FA] rounded-[2px] shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden group cursor-pointer"
          >
            {/* Image container with hover effect */}
            <div className="w-full overflow-hidden">
              <Image
                src={col.img}
                alt={col.name}
                width={300}
                height={300}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CollectionsSection;
