"use client";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const steps = [
  {
    number: "1",
    title: "Meet & Greet",
    text: "We begin with a warm conversation over coffee or tea to learn about you, your story, and what you envision for your piece. We'll discuss your preferences, budget, and materials.",
  },
  {
    number: "2",
    title: "Sketch and Prototyping",
    text: "Before our design consultation, you may bring a written description, a sketch, or an image. We will start with rough sketches to establish a design, followed by refinement through your feedback.",
  },
  {
    number: "3",
    title: "Brass Tacks and Deposit",
    text: "We will create an overview of timing milestones for your piece's timely arrival. Depending on complexity, a deposit of 50%—70% is required to commence the 3D modelling process.",
  },
  {
    number: "4",
    title: "Refinement & Approval",
    text: "During the refinement process, you will routinely receive 3D renders and a realistic resin model of your design to confirm fit and sizing as we refine your piece.",
  },
  {
    number: "5",
    title: "Creation & Polishing",
    text: "The creation process lasts over 4 to 8 weeks, with regular updates like process photos included. Note that complex designs may take longer.",
  },
  {
    number: "6",
    title: "Completion & Delivery",
    text: "Maedric will deliver your bespoke piece with care, along with instructions on how to care for your piece and any certification if applicable.",
  },
];

const StepsSection = () => {
  return (
    <section className="bg-neutral py-10 sm:px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-quiche text-[24px] sm:text-[36px] text-primary mb-4 px-16 sm:px-0">
          From Desire to Design, Promise to Product
        </h2>
        <p className="font-figtree text-secondary text-[16px] sm:text-[20px] max-w-5xl mx-auto mb-10 px-16 sm:px-0 text-justify sm:text-center">
          At Maedric, each piece begins with your story. To ensure a truly
          personal and seamless experience, we guide you through a refined
          process from interest to delivery.
        </p>

        {/* ✅ Desktop grid remains unchanged */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 px-8 lg:px-0">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border border-primary p-6 text-left"
            >
              <div className="flex items-center xl:px-3">
                <span className="text-primary font-proxima text-[76px] mr-4">
                  {step.number}
                </span>
                <div className="text-center">
                  <h3 className="font-figtree font-semibold text-[18px] text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="font-figtree text-secondary text-[12px] leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Mobile Swiper carousel */}
        <div className="md:hidden relative w-full flex max-w-md px-2 mx-auto">
          {/*  Nav buttons */}
          <button className="custom-prev pe-1" aria-label="Previous step">
            <FiChevronLeft className="w-6 h-6 text-primary" />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            slidesPerView={1}
            loop
            className="relative"
          >
            {steps.map((step) => (
              <SwiperSlide key={step.number}>
                <div className="border border-primary p-6 text-left">
                  <div className="flex items-start">
                    <span className="text-primary font-proxima text-[76px] mr-4">
                      {step.number}
                    </span>
                    <div className="text-center">
                      <h3 className="font-figtree font-semibold text-primary text-[16px] sm:text-[20px] mb-2">
                        {step.title}
                      </h3>
                      <p className="font-figtree text-secondary text-[12px] sm:text-[15px] leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="custom-next ps-1" aria-label="Next step">
            <FiChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
