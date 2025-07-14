import Image from "next/image";

const CustomOrderCTASection = () => {
  return (
    <section className="relative w-full bg-primary/90 text-neutral px-4 py-6 lg:py-16 lg:px-32 text-center">
      {/* Banner Bg Image */}
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
          <h2 className="mb-4 px-8 font-quiche text-[24px] lg:text-[36px]">
            Looking for something truly one-of-a-kind?
          </h2>
          <p className=" font-figtree text-[18px] lg:text-[24px] mb-6">
            Let us source rare gemstones or craft bespoke pieces tailored just
            for you.
          </p>
          {/* Banner Image */}
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
            <a
              href="#"
              className="px-6 py-3 text-[12px] lg:text-[16px] border hover:bg-accent text-white border-white hover:text-primary rounded-[2px] transition-all duration-300 text-center"
            >
              Request A Quote!
            </a>
            <a
              href="#"
              className="px-6 py-3 text-[12px] lg:text-[16px] border hover:bg-accent text-white border-white hover:text-primary rounded-[2px] transition-all duration-300 text-center"
            >
              Discover Our Legacy!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomOrderCTASection;
