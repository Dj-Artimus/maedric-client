"use client";

const SlantedFillButton = ({
  children,
  className,
  backgroundColor = "transparent",
  fillColor = "#d2ae6d",
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
      <button className={`${className}`}>{children}</button>
    </div>
  );
};

export default SlantedFillButton;
