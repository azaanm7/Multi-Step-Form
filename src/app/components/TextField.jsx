export const TextField = (props) => {
  const {
    label,
    placeholder,
    value,
    onChange,
    error,
    type = "text",
    required = false,
    onBlur,
  } = props;
  return (
    <div className="space-y-2">
      <label className="font-semibold text-sm text-[#334155]">
        {label} {required && <span className="text-[#E14942]">*</span>}
      </label>
      <input
        className={`w-full h-11 rounded-lg border  p-3 text-[#121316] placeholder:text-[#8B8E95] ${error ? "border-[#E14942]" : "border-[#CBD5E1]"}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        onBlur={onBlur}
      />
      {error && <p className="text-sm text-[#E14942]">{error}</p>}
    </div>
  );
};
