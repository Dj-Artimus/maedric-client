import Image from "next/image";

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

const CollectionsSection = () => (
  <section className="bg-[#fff] py-12 md:py-16">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="font-quiche text-[36px] text-primary mb-10 text-left">
        Our Collections
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {collections.map((col) => (
          <div
            key={col.name}
            className="bg-[#F7F8FA] rounded-[2px] shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden group cursor-pointer"
          >
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
