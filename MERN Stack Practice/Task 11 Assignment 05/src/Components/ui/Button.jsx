export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={` py-2 px-4 rounded hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
