const Input = ({ className = "", ...props }) => (
  <input
    className={`border-b-2 border-neutral focus:border-accent outline-none px-2 py-1 font-figtree ${className}`}
    {...props}
  />
);

export default Input;
