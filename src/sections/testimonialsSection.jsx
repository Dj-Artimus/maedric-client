/**
 * --------------------------------------------------------
 * ✏️ Author: DjArtimus
 * 📅 Created: 11-07-2025 - 14-07-2025
 *
 * 📌 Description:
 *   TestimonialsSection displays client testimonials with photos, jewellery images, and quotes using a Swiper carousel for navigation.
 * --------------------------------------------------------
 */

"use client";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import AnimatedUnderline from "@/components/AnimatedUnderline";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/**
 * Array of client testimonials with photos, jewellery images, quotes, names, and locations.
 * Each testimonial represents a satisfied customer's experience with Maedric.
 */
const testimonials = [
  {
    img: "/images/Testimonial_1.png",
    ring: "/images/Testimonial_Jew1.png",
    quote:
      "I am beyond grateful to Maedric for helping me create the perfect engagement ring. With his/their expert guidance on diamond selection and design, we crafted a ring that my girlfriend absolutely adores. The craftsmanship and attention to detail were impeccable, and it was clear that Maedric genuinely cares about delivering the best. My fiancé hasn't stopped admiring the ring since I proposed, and I couldn't be happier with the final result. If you're looking for a beautiful, custom-made ring with exceptional service, I highly recommend Maedric.",
    name: "Ivan Teo",
    location: "Singapore",
  },
  {
    img: "/images/Testimonial_2.png",
    ring: "/images/Testimonial_Jew2.png",
    quote:
      "The craftsmanship and attention to detail are unmatched. I loved being part of the design journey and now have a piece that is truly one-of-a-kind.",
    name: "Sarah Lim",
    location: "Singapore",
  },
];

/**
 * TestimonialsSection
 *
 * Renders a testimonials section with client photos, jewellery images, and quotes.
 * Features a Swiper carousel for navigation between testimonials with responsive design.
 *
 * @returns {JSX.Element} The testimonials section with client feedback display.
 *
 * @example
 * <TestimonialsSection />
 */
const TestimonialsSection = () => {
  return (
    <section className="bg-primary md:bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section title */}
        <h2 className="font-quiche text-neutral md:text-primary text-[24px] md:text-[36px] mb-2 text-center">
          Client Testimonials
        </h2>
        
        {/* Section description */}
        <p className="font-figtree text-neutral md:text-secondary text-[18px] md:text-[20px] text-center mb-10">
          Real stories from those who wear Maedric with pride.
        </p>

        {/* Testimonials carousel container */}
        <div className="relative flex items-start md:items-center justify-center">
          {/* Custom Previous Button */}
          <button
            aria-label="Previous"
            className="testimonial-prev md:text-primary hover:text-accent p-2 transition-colors duration-200 translate-y-44 md:translate-y-0"
          >
            <FiChevronLeft className="w-9 h-9" />
          </button>

          {/* Swiper carousel for testimonials */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            loop
            className="w-full"
          >
            {/* Map through testimonials */}
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col md:flex-row items-center justify-center lg:gap-4 xl:gap-12 group">
                  {/* Client photo container */}
                  <div className="relative md:w-[400px] lg:w-[500px]">
                    {/* Client image */}
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={400}
                      height={400}
                      className="w-[300px] md:w-[400px] lg:w-[500px] rounded shadow"
                    />
                    {/* Ring overlay - desktop only */}
                    <div className="hidden md:block absolute bottom-1/2 right-0 translate-x-2/3 translate-y-1/2">
                      <Image
                        src={item.ring}
                        alt="Ring"
                        width={180}
                        height={180}
                        className="w-[120px] lg:w-[120px] xl:w-[180px] rounded shadow aspect-square"
                      />
                    </div>
                  </div>

                  {/* Quote and client info */}
                  <div className=" w-full md:max-w-sm lg:max-w-xl text-center md:text-left md:px-4 mt-5 pb-1">
                    {/* Client quote */}
                    <p className="font-figtree text-secondary text-[12px] md:text-[16px] lg:text-[20px] mb-6 leading-relaxed text-justify md:ps-24 lg:ps-24 xl:ps-32 md:pe-0">
                      "{item.quote}"
                    </p>
                    {/* Client name and location with animated underline */}
                    <div className="font-figtree text-neutral md:text-primary font-semibold text-[16px] md:text-[30px] text-end">
                      <AnimatedUnderline underlineColor="accent">
                        {item.name}, {item.location}
                      </AnimatedUnderline>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Next Button */}
          <button
            aria-label="Next"
            className="testimonial-next md:text-primary hover:text-accent p-2 transition-colors duration-200 translate-y-44 md:translate-y-0"
          >
            <FiChevronRight className="w-9 h-9" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
