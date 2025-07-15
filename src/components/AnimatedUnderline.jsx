const getUnderlineClass = (color) => {
  switch (color) {
    case "primary":
      return "after:bg-primary";
    case "accent":
      return "after:bg-accent";
    case "white":
      return "after:bg-white";
    case "black":
      return "after:bg-black";
    case "secondary":
      return "after:bg-secondary";
    case "neutral":
      return "after:bg-neutral";
    default:
      return "after:bg-primary";
  }
};

const AnimatedUnderline = ({ children, underlineColor = "primary" }) => {
  return (
    <span
      className={`
        relative inline-block tracking-wide
        after:absolute after:bottom-[-3] after:right-0 after:h-[2px] after:w-0
        ${getUnderlineClass(underlineColor)} after:block after:content-['']
        after:transition-all after:duration-200 after:ease-in
        group-hover:after:left-0 group-hover:after:right-auto group-hover:after:w-full
      `}
    >
      {children}
    </span>
  );
};

export default AnimatedUnderline;
