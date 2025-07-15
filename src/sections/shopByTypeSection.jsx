"use client";
import AnimatedUnderlineLoop from "@/components/AnimatedUnderlineLoop";
import Image from "next/image";
import { useState } from "react";

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

const ShopByTypeSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-quiche text-[24px] sm:text-[36px] text-primary mb-10 text-center lg:text-left">
          Shop By Jewellery Type
        </h2>
        <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 justify-items-center justify-center sm:justify-around lg:justify-between flex-wrap">
          {types.map((type, index) => (
            <div
              key={type.name}
              className="flex flex-col items-center cursor-pointer mb-2 group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
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
              <span className="font-figtree text-secondary text-[14px] xsm:text-[16px] sm:text-[20px] font-semibold md:mt-2">
                {/* <AnimatedUnderline href="#" underlineColor="accent"> */}
                <AnimatedUnderlineLoop href="#" underlineColor="accent">
                  {type.name}
                </AnimatedUnderlineLoop>
                {/* </AnimatedUnderline> */}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByTypeSection;
