export const Button = ({ children, disabled, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={` h-11 rounded-md text-base cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};
