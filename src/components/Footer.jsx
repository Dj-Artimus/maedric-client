/**
 * --------------------------------------------------------
 * ✏️ Author: DjArtimus
 * 📅 Created: 11-07-2025 - 14-07-2025
 *
 * 📌 Description:
 *   Footer is the main site footer component, providing navigation, contact, newsletter, and social links for Maedric.
 * --------------------------------------------------------
 */

import Link from "next/link";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import {
  PiFacebookLogoFill,
  PiGlobeHemisphereWest,
  PiInstagramLogoFill,
  PiTelegramLogoFill,
  PiTiktokLogoFill,
  PiWallet,
  PiYoutubeLogoFill,
} from "react-icons/pi";
import AnimatedUnderline from "./AnimatedUnderline";

// Navigation links for the footer
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Gemstones", href: "/gemstones" },
  { name: "Jewellery", href: "/jewellery" },
  { name: "Services", href: "/services" },
  { name: "Education", href: "/education" },
  { name: "Contact", href: "/contact" },
];

// Explore section links
const exploreLinks = [
  { name: "Gemstones", href: "/gemstones" },
  { name: "Jewellery", href: "/jewellery" },
  { name: "Education", href: "/education" },
  { name: "Services", href: "/services" },
];

// Contact section links
const contactLinks = [
  { name: "Contact Us", href: "/contact" },
  { name: "About Us", href: "/about" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];

/**
 * Footer
 *
 * Renders the main site footer with navigation, contact, newsletter, and social links.
 *
 * @returns {JSX.Element} The footer component for the Maedric site.
 *
 * @example
 * <Footer />
 */
const Footer = () => (
  <footer className="bg-primary text-neutral pt-12 pb-6">
    <div className="max-w-md sm:max-w-lg md:max-w-full md:w-full lg:max-w-7xl mx-auto px-4">
      <div className="lg:block grid grid-cols-1 md:max-lg:grid-cols-2 md:gap-12 items-end-safe md:max-lg:px-8 ">
        {/* Upper sections: About, Explore, Contact, Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-16 mb-4 md:mb-8">
          {/* About section: Logo, tagline, and description */}
          <div>
            {/* Logo and Tagline */}
            <div className={`transition-all duration-300 flex flex-col mb-5`}>
              <span
                className={`font-cinzel font-normal text-[24.85px] sm:text-[29px]
              text-headerText leading-none select-none tracking-[0]`}
              >
                MAEDRIC
              </span>
              <span className="font-quiche font-normal text-[8.28px] sm:text-[9.8px] text-headerText uppercase tracking-[0.12em] select-none">
                Gemstones & Jewellery
              </span>
            </div>
            <p className="font-figtree text-[16px] text-neutral/80 lg:text-justify leading-5">
              At Maedric, we aim to make the beauty of coloured gemstones more
              accessible, inviting new collectors and jewellery lovers to
              appreciate true quality and craftsmanship.
            </p>
          </div>
          {/* Explore section: Navigation links */}
          <div className="hidden lg:block">
            <h4 className="font-figtree text-[20px] py-1 ms-2 mb-3 border-b-[0.5px] border-neutral w-fit">
              Explore
            </h4>
            <ul className="font-figtree text-[16px] text-neutral/50 space-y-3.5">
              {exploreLinks.map((link) => (
                <li
                  key={link.name}
                  className="flex items-center hover:text-accent group w-fit"
                >
                  <FiChevronRight className="inline-block w-6 h-6 mr-[1px]" />
                  <AnimatedUnderline underlineColor="accent">
                    <Link href={link.href}>{link.name}</Link>
                  </AnimatedUnderline>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact section: Contact and policy links */}
          <div className="hidden lg:block">
            <h4 className="font-figtree text-[20px] py-1 ms-2 mb-3 border-b-[0.5px] border-neutral w-fit">
              Contact
            </h4>
            <ul className="font-figtree text-[16px] text-neutral/50 space-y-3.5">
              {contactLinks.map((link) => (
                <li
                  key={link.name}
                  className="flex items-center hover:text-accent group w-fit"
                >
                  <FiChevronRight className="inline-block w-6 h-6 mr-[1px]" />
                  <AnimatedUnderline underlineColor="accent">
                    <Link href={link.href}>{link.name}</Link>
                  </AnimatedUnderline>
                </li>
              ))}
            </ul>
          </div>
          {/* Newsletter section: Email subscription form */}
          <div>
            <h4 className="font-figtree text-[20px] py-1 mb-5 md:mb-3 border-b-[0.5px] border-neutral w-fit">
              Newsletter
            </h4>
            <p className="font-figtree text-[16px] text-neutral/80 mb-2 text-justify leading-5">
              Be the first to discover new collections, stories, and exclusive
              offers.
            </p>
            <form className="flex flex-col mt-4 md:mt-2">
              <input
                type="email"
                placeholder="sarah@yahoomail.com"
                className="w-full px-3 py-2 lg:py-1 font-figtree border border-neutral/50 rounded-[1px] placeholder-neutral/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="md:hidden w-full text-primary text-[12px] font-figtree px-4 py-2 mt-3 rounded-[1px] transition-colors duration-200 flex items-center justify-center border-[0.5px] border-neutral/80 slanted-fill-btn"
                style={{
                  "--bg-color": "#e7eaee",
                  "--fill-color": "#d2ae6d",
                }}
              >
                <span>
                  Subscribe
                  <FiChevronRight className="inline-block w-4 h-4 ms-[2px]" />
                </span>
              </button>
              <button
                type="submit"
                className="hidden md:flex w-full lg:w-fit text-neutral hover:text-primary text-[12px] md:max-lg:text-[16px] font-figtree px-4 py-2 lg:py-1 mt-3 rounded-[1px] transition-colors duration-200 items-center justify-center border-[0.5px] border-neutral/80 slanted-fill-btn"
                style={{
                  "--bg-color": "transparent",
                  "--fill-color": "#d2ae6d",
                }}
              >
                <span>
                  Subscribe
                  <FiChevronRight className="inline-block w-4 h-4 ms-[2px]" />
                </span>
              </button>
            </form>
          </div>
        </div>
        {/* Divider for mobile */}
        <div className="md:hidden border-t border-neutral/20 flex mb-5 flex-wrap justify-between items-center" />
        {/* Footer Links For Mobile */}
        <nav className="flex md:max-lg:mb-8 lg:hidden flex-col space-y-4">
          {navLinks.map((link) =>
            link.name === "Contact" ? (
              <Link
                key={link.name}
                href={link.href}
                className="font-figtree font-semibold text-center text-[16px] text-[#303030] px-4 py-2 rounded-[2px] slanted-fill-btn"
                style={{
                  "--bg-color": "#d2ae6d",
                  "--fill-color": "#e7eaee",
                }}
              >
                <span>{link.name}</span>
              </Link>
            ) : (
              <div
                key={link.name}
                className="flex justify-between items-center group"
              >
                <Link
                  href={link.href}
                  className="font-figtree font-semibold text-[16px] text-neutral hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <AnimatedUnderline underlineColor="accent">
                    {link.name}
                  </AnimatedUnderline>
                </Link>
                {(link.name === "Gemstones" || link.name === "Jewellery") && (
                  <FiChevronRight className="w-5 h-5 text-neutral" />
                )}
              </div>
            )
          )}
        </nav>
      </div>

      <div className="bg-primary py-4 lg:hidden mx-auto flex flex-col items-center">
        {/* Social Icons For Mobile */}
        <div className="flex justify-center space-x-6">
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-accent"
          >
            <PiInstagramLogoFill className="h-6 w-6" />
          </Link>
          <Link
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:text-accent"
          >
            <PiTiktokLogoFill className="h-6 w-6" />
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-accent"
          >
            <PiYoutubeLogoFill className="h-6 w-6" />
          </Link>
        </div>
        {/* Footer Links */}
        <div className="mt-4 flex justify-center text-neutral/50 text-sm space-x-4 text-[12px]">
          <Link href="/about-us" className="hover:text-accent">
            About Us
          </Link>
          <span>|</span>
          <Link href="/terms-and-conditions" className="hover:text-accent">
            Terms & Conditions
          </Link>
          <span>|</span>
          <Link href="/privacy-policy" className="hover:text-accent">
            Privacy Policy
          </Link>
        </div>
        {/* Separator */}
        <div className="mt-5 mb-1 border-t border-neutral w-1/2 mx-auto max-w-[220px]"></div>
      </div>

      {/* Payment Logos */}
      <div className="flex space-x-2 mx-auto w-full justify-center lg:my-6">
        <img
          src="/images/stripe.png"
          alt="Stripe"
          className="w-10 h-6 object-contain"
        />
        <img
          src="/images/american_express.png"
          alt="American Express"
          className="w-10 h-6 object-contain"
        />
        <img
          src="/images/visa.png"
          alt="Visa"
          className="w-10 h-6 object-contain"
        />
        <img
          src="/images/mastercard.png"
          alt="Mastercard"
          className="w-10 h-6 object-contain"
        />
        <img
          src="/images/jcb.png"
          alt="JCB"
          className="w-10 h-6 object-contain"
        />
        <img
          src="/images/unionpay.png"
          alt="UnionPay"
          className="w-10 h-6 object-contain"
        />
        <img
          src="/images/atome.png"
          alt="Atome"
          className="w-10 h-6 object-contain"
        />
      </div>

      {/* Divider for desktop */}
      <div className="hidden lg:block border-t-[0.3px] border-neutral/20 pt-6" />

      <div className="bg-primary w-full lg:-mt-4 py-2 text-neutral-100 text-sm">
        <div className="w-full mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section: Language and Currency Dropdowns */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button className="flex items-center space-x-2 text-neutral/60 border border-neutral-200 px-2 py-1 rounded-[1px] hover:text-accent">
                <PiGlobeHemisphereWest className="h-5 w-5" />
                <FiChevronDown className="h-5 w-5" />
              </button>
            </div>
            {/* Currency Dropdown */}
            <div className="relative">
              <button className="flex items-center space-x-2 text-neutral/60 border border-neutral-200 px-2 py-1 rounded-[1px] hover:text-accent">
                <PiWallet className="h-5 w-5" />
                <FiChevronDown className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Middle Section: Copyright */}
          <div className="font-figtree text-[8px] md:text-[14px] text-neutral mt-4 lg:mt-0 text-center">
            <span>
              © 2025 Maedric. All rights reserved. Crafted with care, inspired
              by legacy.
            </span>
          </div>

          {/* Right Section: Social Media Icons */}
          <div className="hidden lg:flex space-x-4 mt-3 md:mt-0">
            <Link
              href="#"
              className="text-neutral hover:text-accent transition duration-150"
              aria-label="Facebook"
            >
              <PiFacebookLogoFill className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-neutral-200 hover:text-accent transition duration-150"
              aria-label="Instagram"
            >
              <PiInstagramLogoFill className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-neutral-200 hover:text-accent transition duration-150"
              aria-label="TikTok"
            >
              <PiTiktokLogoFill className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-neutral-200 hover:text-accent transition duration-150"
              aria-label="YouTube"
            >
              <PiYoutubeLogoFill className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-neutral-200 hover:text-accent transition duration-150"
              aria-label="Telegram"
            >
              <PiTelegramLogoFill className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
