export const Button = ({ children, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full bg-[#121316] h-11 text-white rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};
