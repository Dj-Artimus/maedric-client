const Button = ({ children, className = "", ...props }) => (
  <button
    className={`bg-accent text-primary font-figtree font-semibold px-6 py-2 rounded-full shadow hover:scale-105 transition-transform duration-200 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
