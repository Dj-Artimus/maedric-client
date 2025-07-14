const Card = ({ children, className = "", ...props }) => (
  <div
    className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default Card;
