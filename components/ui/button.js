export function Button({ children, onClick, className = '', ...props }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center font-medium focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
