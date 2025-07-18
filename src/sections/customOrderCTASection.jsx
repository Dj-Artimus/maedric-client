/**
 * --------------------------------------------------------
 * ✏️ Author: DjArtimus
 * 📅 Created: 11-07-2025 - 14-07-2025
 *
 * 📌 Description:
 *   CustomOrderCTASection displays a call-to-action banner for custom jewellery orders with background image and action buttons.
 * --------------------------------------------------------
 */

import SpinFillButton from "@/components/SpinFillButton";
import Image from "next/image";

/**
 * CustomOrderCTASection
 *
 * Renders a call-to-action section for custom jewellery orders with background image and action buttons.
 * Features responsive design with different layouts for mobile and desktop.
 *
 * @returns {JSX.Element} The CTA section with background image and action buttons.
 *
 * @example
 * <CustomOrderCTASection />
 */
const CustomOrderCTASection = () => {
  return (
    <section className="relative w-full bg-primary/90 text-neutral px-4 py-6 lg:py-16 lg:px-32 text-center">
      {/* Banner Background Image - Desktop only */}
      <div className="hidden lg:block absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src="/images/CustomOrderCTABanner_bg.jpg"
          alt="Custom Bespoke Jewellery"
          fill
        />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10 z-20">
        {/* Banner Content */}
        <div className=" text-center">
          {/* Main heading */}
          <h2 className="mb-4 px-8 font-quiche text-[24px] lg:text-[36px]">
            Looking for something truly one-of-a-kind?
          </h2>

          {/* Description text */}
          <p className=" font-figtree text-[18px] lg:text-[24px] mb-6">
            Let us source rare gemstones or craft bespoke pieces tailored just
            for you.
          </p>

          {/* Banner Image - Mobile only */}
          <div className="flex justify-center lg:justify-end lg:hidden">
            <Image
              src="/images/CustomOrderCTABanner_bg.jpg"
              alt="Custom Bespoke Jewellery"
              width={600}
              height={400}
              className="object-cover rounded aspect-video"
            />
          </div>

          {/* CTA Buttons */}
          <div className="w-full mx-auto flex gap-4 flex-row justify-center mt-6">
            <SpinFillButton
              className="px-6 py-3 text-[12px] lg:text-[16px] border text-white border-white hover:text-primary rounded-[2px] transition-all duration-300 text-center"
              backgroundColor="transparent"
              fillColor="accent"
              href="#"
            >
              Request A Quote!
            </SpinFillButton>
            <SpinFillButton
              className="px-6 py-3 text-[12px] lg:text-[16px] border text-white border-white hover:text-primary rounded-[2px] transition-all duration-300 text-center"
              backgroundColor="transparent"
              fillColor="accent"
              href="#"
            >
              Discover Our Legacy!
            </SpinFillButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomOrderCTASection;
