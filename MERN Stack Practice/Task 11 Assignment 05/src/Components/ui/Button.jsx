export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`bg-black text-white py-2 px-4 rounded hover:opacity-90 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
