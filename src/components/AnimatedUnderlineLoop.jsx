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

const getSizeClass = (size) => {
  switch (size) {
    case "1":
      return "after:h-[1px]";
    case "2":
      return "after:h-[2px]";
    case "3":
      return "after:h-[3px]";
    case "4":
      return "after:h-[4px]";
  }
};

const AnimatedUnderlineLoop = ({
  children,
  underlineColor = "primary",
  size,
}) => {
  return (
    <span
      className={`
        relative inline-block group
        after:absolute after:bottom-[-5] ${
          size
            ? getSizeClass(size)
            : "after:left-0 after:h-[1px] sm:after:h-[2px] md:after:h-[3px] lg:after:h-[4px]"
        } after:w-full
        ${getUnderlineClass(underlineColor)} after:block after:content-['']
        after:origin-left
        after:transition-all after:duration-300 after:ease-in-out
        group-hover:after:animate-[slide-away_0.6s_forwards]
    `}
    >
      {children}
    </span>
  );
};

export default AnimatedUnderlineLoop;
