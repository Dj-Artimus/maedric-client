const Form = ({ children, className = "", ...props }) => (
  <form className={className} {...props}>
    {children}
  </form>
);

export default Form;
