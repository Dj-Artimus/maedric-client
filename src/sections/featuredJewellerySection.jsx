"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import AnimatedUnderline from "@/components/AnimatedUnderline";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import FeaturedJewelleryCard from "../components/FeaturedJewelleryCard";

const featuredJewellery = [
  {
    name: "18k White Gold Ruby Ring",
    img: "/images/FeaturedJew1.png",
    type: "Ring",
    price: "$2,800",
    liked: false,
  },
  {
    name: "18k YG Emerald Ring",
    img: "/images/FeaturedJew2.png",
    type: "Ring",
    price: "$3,200",
    liked: true,
  },
  {
    name: "18k WG Yellow Sapphire Ring",
    img: "/images/FeaturedJew3.png",
    type: "Ring",
    price: "$2,950",
    liked: false,
  },
  {
    name: "Silver and Hot Pink Sapphire Ring",
    img: "/images/FeaturedJew4.png",
    type: "Ring",
    price: "$3,100",
    liked: true,
  },
  {
    name: "Silver and CZ Ring",
    img: "/images/FeaturedJew5.png",
    type: "Ring",
    price: "$2,700",
    liked: false,
  },
];

// This section displays featured jewellery items with a swiper for navigation.
// It includes a title, description, and a button to view all items.
const FeaturedJewellerySection = () => {
  const swiperRef = useRef(null);

  return (
    <section className="bg-[#fff] py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="font-quiche text-[36px] text-primary text-center">
          Featured Jewellery
        </h2>
        {/* Description */}
        <p className="font-figtree text-center text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
          Discover what everyone’s loving right now — our most popular pieces,
          handpicked based on what’s trending with Maedric customers this
          season.
        </p>
        <div className="flex w-full items-center justify-end mb-5">
          <button className="cursor-pointer group flex items-center">
            <span className="font-figtree font-semibold text-[16px] text-primary mx-2">
              <AnimatedUnderline underlineColor="primary">
                View All
              </AnimatedUnderline>
            </span>
            <FiChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ✅ Swiper */}
      <div className="relative max-w-6xl xl:max-w-7xl flex justify-center mx-auto px-4">
        {/* nav buttons */}
        <button
          aria-label="Previous"
          className="featured-prev hover:text-accent p-2"
        >
          <FiChevronLeft className="w-8 h-8 font-semibold" />
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          loop
          navigation={{
            prevEl: ".featured-prev",
            nextEl: ".featured-next",
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {featuredJewellery.map((item, i) => (
            <SwiperSlide
              key={i}
              onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay?.start()}
            >
              <FeaturedJewelleryCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          aria-label="Next"
          className="featured-next hover:text-accent p-2"
        >
          <FiChevronRight className="w-8 h-8 font-semibold" />
        </button>
      </div>
    </section>
  );
};

export default FeaturedJewellerySection;
