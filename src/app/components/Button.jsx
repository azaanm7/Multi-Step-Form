export const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={` h-11 rounded-md text-base cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};
