import Image from "next/image";
import { GoHeart, GoHeartFill } from "react-icons/go";

const FeaturedJewelleryCard = ({ type, img, name, price, liked }) => (
  <div className="bg-white max-w-[302] xl:w-[250px] rounded-[2px] group cursor-pointer flex flex-col mx-auto">
    <div className="relative aspect-[3/4] mb-4">
      <Image
        src={img}
        alt={name}
        fill
        className="transition-transform duration-200"
        priority
      />
      <span className=" absolute top-4 right-4 duration-200 text-primary rounded-full p-2 pb-1.5 backdrop-blur-lg shadow-neutral/40 shadow-inner">
        {liked ? (
          <GoHeartFill className="w-5 h-5 text-[20px] hover:scale-105" />
        ) : (
          <GoHeart className="w-5 h-5 text-[20px] hover:scale-105" />
        )}
      </span>
    </div>
    <div className="w-full">
      <h2 className="font-figtree text-[16px] text-primary/60 "> {type} </h2>
      <h4 className="font-figtree text-[20px] text-primary mt-1 leading-tight truncate">
        {name}
      </h4>
      <p className="font-figtree text-[16px] text-secondary font-semibold">
        {price}
      </p>
    </div>
  </div>
);

export default FeaturedJewelleryCard;
