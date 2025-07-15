"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const instagramImages = [
  { src: "/images/Gallary1.jpg", alt: "Jewellery 1" },
  { src: "/images/Gallary2.jpg", alt: "Jewellery 2" },
  { src: "/images/Gallary3.jpg", alt: "Jewellery 3" },
  { src: "/images/Gallary4.jpg", alt: "Jewellery 4" },
  { src: "/images/Gallary5.jpg", alt: "Jewellery 5" },
  { src: "/images/Gallary6.jpg", alt: "Jewellery 6" },
];

const getVisibleCount = () => {
  if (typeof window === "undefined") return 6;
  const w = window.innerWidth;
  // if (w < 640) return 4;
  if (w < 1024) return 4;
  // if (w < 1280) return 6;
  return 6;
};

const InstagramGallarySection = () => {
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate which images to show
  const gallaryImages = [];
  for (let i = 0; i < visibleCount; i++) {
    const idx = i % instagramImages.length;
    gallaryImages.push(instagramImages[idx]);
  }

  return (
    <section className="bg-white py-12 md:py-16 md:pt-8">
      <div className=" max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-6xl mx-auto px-4">
        <h2 className="font-quiche text-[32px] text-primary text-center mb-10">
          Stay Connected with Maedric
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid-rows-1 overflow-hidden">
          {gallaryImages.map(
            (img, i) =>
              i < 6 && (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden cursor-pointer"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full hover:scale-110 opacity-80 bg-neutral transition-all duration-700"
                    priority
                  />
                </div>
              )
          )}
          {/* Last cell: Follow Us block */}
          <div className="h-full min-h-[200px] sm:min-h-14 max-h-[400px] col-span-2 flex flex-col items-center justify-center bg-primary text-center cursor-pointer group">
            <span className="font-figtree text-white text-[20px] mb-2 group-hover:scale-150 transition-transform duration-700">
              Follow Us
            </span>
            <span className="font-figtree text-accent text-[24px] font-semibold group-hover:scale-150 transition-transform duration-700">
              @Maedric
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallarySection;
