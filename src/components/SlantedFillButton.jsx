"use client";

import Link from "next/link";

const SlantedFillButton = ({
  children,
  className,
  backgroundColor = "transparent",
  fillColor = "#d2ae6d",
  href = "#",
  ariaLabel = "Button",
  rel = "noopener noreferrer",
  target = "_self",
}) => {
  const styleVars = {
    "--bg-color": backgroundColor,
    "--fill-color": fillColor,
  };

  return (
    <div
      className="slanted-fill-btn w-fit h-fit relative overflow-hidden bg"
      style={{
        ...styleVars,
      }}
    >
      <Link
        href={href}
        aria-label={ariaLabel}
        rel={rel}
        target={target}
        className={`block ${className}`}
      >
        {children}
      </Link>
    </div>
  );
};

export default SlantedFillButton;
