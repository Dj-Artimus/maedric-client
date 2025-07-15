"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AiFillYoutube, AiOutlineUser } from "react-icons/ai";
import { FiChevronRight, FiMenu, FiSearch, FiX } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import { RiInstagramFill } from "react-icons/ri";
import { SiTiktok } from "react-icons/si";
import AnimatedUnderline from "./AnimatedUnderline";
import SlantedFillButton from "./SlantedFillButton";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Gemstones", href: "/gemstones" },
  { name: "Jewellery", href: "/jewellery" },
  { name: "Services", href: "/services" },
  { name: "Education", href: "/education" },
  { name: "Contact", href: "/contact" },
];

function useBodyScrollLock(lock = false) {
  const scrollY = useRef(0);

  useEffect(() => {
    if (lock) {
      scrollY.current = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      const y = scrollY.current;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, y);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [lock]);
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false); // To track scrolling
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // To manage mobile nav menu state

  useEffect(() => {
    // Scroll event listener to update `isScrolled`
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80); // Adjust scroll height here
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useBodyScrollLock(mobileMenuOpen);

  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300`}>
      {/* Main Navbar */}
      <div
        className={`w-full sm:absolute top-0 left-0 flex lg:items-center px-6 xl2:px-16 bg-primary/60 backdrop-blur-md drop- shadow-2xl drop-shadow-neutral/20 ${
          isScrolled
            ? "py-5 sm:py-3 justify-between"
            : "py-5 sm:py-3 lg:py-6 lg:pb-4 lg:flex-col"
        } transition-all duration-300`}
      >
        {/* Logo and Tagline */}
        <Link
          href="/"
          aria-label="Logo"
          onClick={handleClick}
          className={`transition-all duration-300 flex flex-col items-center`}
        >
          <span
            className={`font-cinzel font-normal text-[24.85px] sm:text-[48.98px]
            text-headerText leading-none select-none tracking-[0]`}
          >
            MAEDRIC
          </span>
          <span className="font-quiche font-normal text-[8.28px] sm:text-[16.33px] text-headerText uppercase tracking-[0.12em] select-none">
            Gemstones & Jewellery
          </span>
        </Link>

        {/* Desktop Nav Links */}
        {/* Divider */}
        {!isScrolled && (
          <div className="hidden xl:block w-full border-b border-headerText/30 mt-4 " />
        )}

        {/* Nav Links */}
        <nav
          className={`hidden xl:flex justify-center items-center gap-2 xl:gap-7 ${
            !isScrolled && "xl:pt-4"
          } transition-all duration-200`}
        >
          {navLinks.map((link) =>
            link.name === "Contact" ? (
              <SlantedFillButton
                key={link.name}
                className="font-figtree  font-bold text-[16px] text-[#303030] px-8 py-2 rounded-[2px] cursor-pointer -z-10"
                backgroundColor="#d2ae6d"
                fillColor="#e7eaee"
                href={link.href}
              >
                <span>{link.name}</span>
              </SlantedFillButton>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="font-figtree font-semibold text-[16px] text-headerText px-2 py-1 rounded hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent group"
              >
                <AnimatedUnderline underlineColor="accent">
                  {link.name}
                </AnimatedUnderline>
              </Link>
            )
          )}
        </nav>

        {/* Menu Buttons */}
        <div
          className={` ${
            isScrolled ? "absolute lg:static lg:translate-y-0" : "absolute"
          } right-4 top-6 sm:right-8 sm:top-1/2 xl:top-11 sm:-translate-y-1/2 xl:translate-y-0 flex items-center space-x-3 lg2:max-xl:space-x-4 sm:space-x-7 transition-all duration-300`}
        >
          <button
            aria-label="Search"
            className="hidden sm:block  focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors duration-200 p-1 rounded cursor-pointer"
          >
            <FiSearch className="w-6 h-6 text-headerText hover:text-accent" />
          </button>
          <button
            aria-label="Wishlist"
            className=" focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors duration-200 p-1 rounded cursor-pointer"
          >
            <GoHeart className="w-6 h-6 text-headerText hover:text-accent" />
          </button>
          <button
            aria-label="User"
            className="hidden sm:block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors duration-200 p-1 rounded cursor-pointer"
          >
            <AiOutlineUser className="w-6 h-6 text-headerText hover:text-accent" />
          </button>
          <button
            aria-label="Cart"
            className="relative focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors duration-200 p-1 rounded cursor-pointer"
          >
            <LuShoppingCart className="w-6 h-6 text-headerText  hover:text-accent" />
            <span className="absolute -top-1 -right-1 bg-accent text-[#051E33] text-xs font-bold rounded-full px-1 py-0.5 leading-none border-[1px] border-[#051E33]">
              0
            </span>
          </button>
          {/* Hamburger Menu Icon for Mobile */}
          <button
            aria-label="Menu"
            className="block xl:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors duration-200 p-1 rounded cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
          >
            <FiMenu className="w-6 h-6 text-headerText hover:text-accent" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Full-Screen Overlay) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-primary/60 z-5 backdrop-blur-3xl drop-shadow-2xl drop-shadow-[#30303066] overflow-y-auto">
          <div className="relative min-h-[640px] h-full flex flex-col p-16">
            {/* Close Icon */}
            <div className="flex justify-between items-center mb-6">
              <span className="font-cinzel font-normal text-[26px] text-neutral select-none">
                MAEDRIC
              </span>
              <button
                aria-label="Close menu"
                className="hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors duration-200 p-1 rounded cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FiX className="w-7 h-7 -mx-2 text-neutral" />
              </button>
            </div>
            {/* Search Input */}
            <div className="relative flex items-center mb-6">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent border p-3 border-neutral text-neutral font-figtree placeholder-neutral focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <FiSearch className="w-5 h-5 text-headerText absolute right-3" />
            </div>
            {/* Mobile Nav Links */}
            <nav className="flex flex-col space-y-4">
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
                    className="flex justify-between items-center"
                  >
                    <Link
                      href={link.href}
                      className="font-figtree font-semibold text-[16px] text-neutral hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {link.name}
                    </Link>
                    {(link.name === "Gemstones" ||
                      link.name === "Jewellery") && (
                      <FiChevronRight className="w-5 h-5 text-neutral" />
                    )}
                  </div>
                )
              )}
            </nav>
            {/* Additional Links */}
            <div className="pt-4 flex flex-col space-y-4">
              <Link
                href="/login"
                className="flex items-center font-figtree text-neutral hover:text-accent transition-colors duration-200"
              >
                <AiOutlineUser className="w-5 h-5 mr-6" /> Login
              </Link>
              <Link
                href="/wishlist"
                className="flex items-center font-figtree text-neutral hover:text-accent transition-colors duration-200"
              >
                <button aria-label="Cart" className="relative flex">
                  <GoHeart className="w-5 h-5 mr-6" /> Wishlist
                  <span className="absolute -top-1 left-[13.5px] bg-accent text-[#051E33] text-[10px] font-bold rounded-full px-1 pt-0.5 py-0.5 leading-none border-[#051E33]">
                    1
                  </span>
                </button>
              </Link>
            </div>
            {/* Social Icons */}
            <div className="absolute -translate-x-1/2 bottom-8 left-1/2 flex space-x-4 justify-center border-t border-neutral pt-6 w-3/5">
              <Link
                href="#"
                aria-label="Instagram"
                className="text-neutral hover:text-accent transition-colors duration-200"
              >
                <RiInstagramFill className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                aria-label="TikTok"
                className="text-neutral hover:text-accent transition-colors duration-200"
              >
                <SiTiktok className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                aria-label="YouTube"
                className="text-neutral hover:text-accent transition-colors duration-200"
              >
                <AiFillYoutube className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
