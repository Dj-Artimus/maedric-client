/**
 * --------------------------------------------------------
 * ✏️ Author: DjArtimus
 * 📅 Created: 11-07-2025 - 14-07-2025
 *
 * 📌 Description:
 *   FeaturedJewelleryCard displays a featured jewellery item with image, name, type, price, and like status.
 * --------------------------------------------------------
 */

import Image from "next/image";
import { GoHeart, GoHeartFill } from "react-icons/go";
import AnimatedUnderline from "./AnimatedUnderline";

/**
 * FeaturedJewelleryCard
 *
 * Renders a card for a featured jewellery item, showing image, type, name, price, and like status.
 *
 * @param {object} props
 * @param {string} props.type - The type/category of the jewellery.
 * @param {string} props.img - The image URL for the jewellery.
 * @param {string} props.name - The name of the jewellery item.
 * @param {string|number} props.price - The price of the jewellery item.
 * @param {boolean} props.liked - Whether the item is liked (shows filled heart).
 * @returns {JSX.Element} The featured jewellery card component.
 *
 * @example
 * <FeaturedJewelleryCard type="Ring" img="/images/ring.png" name="Emerald Ring" price="$1200" liked={true} />
 */
const FeaturedJewelleryCard = ({ type, img, name, price, liked }) => (
  <div className="bg-white max-w-[302] xl:w-[250px] rounded-[2px] group cursor-pointer flex flex-col mx-auto group">
    <div className="relative aspect-[3/4] mb-4 overflow-hidden">
      {/* Jewellery image */}
      <Image
        src={img}
        alt={name}
        fill
        className="transition-transform duration-700 object-cover"
        priority
      />
      {/* Like/Unlike heart icon */}
      <span className=" absolute top-4 right-4 duration-200 text-primary rounded-full p-2 pb-1.5 backdrop-blur-lg shadow-neutral/40 shadow-inner">
        {liked ? (
          <GoHeartFill className="w-5 h-5 text-[20px] hover:scale-105" />
        ) : (
          <GoHeart className="w-5 h-5 text-[20px] hover:scale-105" />
        )}
      </span>
    </div>
    <div className="w-full">
      <h2 className="font-figtree text-[16px] text-primary/60">
        <AnimatedUnderline underlineColor="accent">{type}</AnimatedUnderline>
      </h2>
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
