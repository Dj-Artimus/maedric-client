/**
 * --------------------------------------------------------
 * ✏️ Author: DjArtimus
 * 📅 Created: 11-07-2025 - 14-07-2025
 *
 * 📌 Description:
 *   ContactSection displays a contact form with category tabs and founder information, including an image and personal message.
 * --------------------------------------------------------
 */

import AnimatedUnderline from "@/components/AnimatedUnderline";
import Image from "next/image";

/**
 * ContactSection
 *
 * Renders a contact section with category tabs, founder introduction, and contact information.
 * Hidden on mobile devices (lg:block).
 *
 * @returns {JSX.Element} The contact section with two-column layout.
 *
 * @example
 * <ContactSection />
 */
const ContactSection = () => (
  <section className="bg-white py-12 md:py-16 hidden lg:block">
    <div className="max-w-5xl xl:max-w-6xl mx-auto px-4">
      {/* Top Heading and Tabs */}
      <div className="mb-10">
        {/* Main heading */}
        <h2 className="font-quiche text-[28px] md:text-[36px] text-primary text-center mb-2">
          Let's Begin <span className="font-normal">–</span> Your Jewellery,
          Your Way
        </h2>

        {/* Description text */}
        <p className="font-figtree text-[20px] text-secondary text-center mb-6 max-w-2xl mx-auto">
          Tell us a bit about your vision, and we'll guide you through each step
          to create something truly personal and timeless.
        </p>

        {/* Category selection tabs */}
        <div className="max-w-3xl mx-auto flex justify-center gap-2 md:gap-4 text-primary">
          <button className="relative font-figtree text-[16px] border border-primary rounded-[1px] w-full py-2 cursor-pointer overflow-hidden group">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Bridal
            </span>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 opacity-0 bg-primary rotate-0 transition-all duration-1000 ease-in-out group-hover:w-[200%] group-hover:h-[1000%] group-hover:opacity-100 group-hover:rotate-90 z-0" />
          </button>
          <button className="relative font-figtree text-[16px] border border-primary rounded-[1px] w-full py-2 cursor-pointer overflow-hidden group">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Boutique
            </span>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 opacity-0 bg-primary rotate-0 transition-all duration-1000 ease-in-out group-hover:w-[200%] group-hover:h-[1000%] group-hover:opacity-100 group-hover:rotate-90 z-0" />
          </button>
          <button className="relative font-figtree text-[16px] border border-primary rounded-[1px] w-full py-2 cursor-pointer overflow-hidden group">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Gemstone
            </span>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 opacity-0 bg-primary rotate-0 transition-all duration-1000 ease-in-out group-hover:w-[200%] group-hover:h-[1000%] group-hover:opacity-100 group-hover:rotate-90 z-0" />
          </button>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="flex flex-col md:flex-row gap-12 items-center group">
        {/* Left: Text content */}
        <div className="flex-1 grow min-w-[300px]">
          {/* Founder introduction with animated underlines */}
          <h3 className="font-quiche text-[32px] text-secondary mb-2 border-b border-[#E7EAEE] pb-2">
            Hi There,{" "}
            <AnimatedUnderline underlineColor="accent">
              Isaiah Here.
            </AnimatedUnderline>
            <br />
            I'm{" "}
            <AnimatedUnderline underlineColor="accent">
              The Artisan
            </AnimatedUnderline>{" "}
            behind Your Story
          </h3>

          {/* Founder's story paragraphs */}
          <p className="font-figtree text-[16px] lg:text-[18px] text-primary mb-4 leading-6">
            I am the founder and the principal designer of Maedric, working
            closely with you from initial sketch to final polish to provide a
            refreshing perspective on quality, provenance, and pricing.
          </p>
          <p className="font-figtree text-[16px] lg:text-[18px] text-primary mb-4 leading-6">
            I got into jewellery from the prospect of crafting personal
            belongings that represented me and my journey.
          </p>
          <p className="font-figtree text-[16px] lg:text-[18px] text-primary mb-4 leading-6">
            The idea of owning a story set in rock and stone appealed to my
            senses, even if it was just a pendant resembling a baguette.
          </p>
          <p className="font-figtree text-[16px] lg:text-[18px] text-primary mb-4 leading-6">
            For the past five years, following my graduation with a Diploma in
            Fine Jewellery Design from JDMIS, I established Maedric to expand
            the jewellery landscape of Singapore beyond gold and diamonds, and
            to set the standard for the coloured gemstone industry.
          </p>
          <p className="font-figtree text-[16px] lg:text-[18px] text-primary mb-4 leading-6">
            Keen to see what we can accomplish together?
          </p>
          <p className="font-figtree text-[16px] lg:text-[18px] text-primary mb-4 leading-6">
            Feel free to drop me a message or have a look at our latest
            creations. We would love to learn more about you.
          </p>
        </div>

        {/* Right: Founder image */}
        <div className="flex-1 shrink flex justify-center md:justify-end">
          <div className="w-full h-full aspect-auto max-w-[584px] max-h-[580px] relative rounded-[2px] overflow-hidden bg-[#F7F8FA] shadow-md">
            <Image
              src="/images/Founder.png"
              alt="Isaiah, Founder of Maedric"
              width={584}
              height={580}
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
