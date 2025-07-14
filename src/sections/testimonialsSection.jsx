"use client";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    img: "/images/Testimonial_1.png",
    ring: "/images/Testimonial_Jew1.png",
    quote:
      "I am beyond grateful to Maedric for helping me create the perfect engagement ring. With his/their expert guidance on diamond selection and design, we crafted a ring that my girlfriend absolutely adores. The craftsmanship and attention to detail were impeccable, and it was clear that Maedric genuinely cares about delivering the best. My fiancé hasn’t stopped admiring the ring since I proposed, and I couldn’t be happier with the final result. If you’re looking for a beautiful, custom-made ring with exceptional service, I highly recommend Maedric.",
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

const TestimonialsSection = () => {
  return (
    <section className="bg-primary md:bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-quiche text-neutral md:text-primary text-[24px] md:text-[36px] mb-2 text-center">
          Client Testimonials
        </h2>
        <p className="font-figtree text-neutral md:text-secondary text-[18px] md:text-[20px] text-center mb-10">
          Real stories from those who wear Maedric with pride.
        </p>

        <div className="relative flex items-start md:items-center justify-center">
          {/* Custom Prev Button */}
          <button
            aria-label="Previous"
            className="testimonial-prev md:text-primary hover:text-accent p-2 transition-colors duration-200 translate-y-44 md:translate-y-0"
          >
            <FiChevronLeft className="w-9 h-9" />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            loop
            className="w-full"
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col md:flex-row items-center justify-center lg:gap-4 xl:gap-12">
                  {/* Client photo */}
                  <div className="relative md:w-[400px] lg:w-[500px]">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={400}
                      height={400}
                      className="w-[300px] md:w-[400px] lg:w-[500px] rounded shadow"
                    />
                    {/* Ring overlay desktop only */}
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

                  {/* Quote */}
                  <div className=" w-full md:max-w-sm lg:max-w-xl text-center md:text-left md:px-4 mt-5">
                    <p className="font-figtree text-secondary text-[12px] md:text-[16px] lg:text-[20px] mb-6 leading-relaxed text-justify md:ps-24 lg:ps-24 xl:ps-32 md:pe-0">
                      “{item.quote}”
                    </p>
                    <div className="font-figtree text-neutral md:text-primary font-semibold text-[16px] md:text-[30px] text-end">
                      {item.name}, {item.location}
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
