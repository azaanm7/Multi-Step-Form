export const ImageField = (props) => {
  const {
    label,

    value,
    onChange,
    error,

    required = false,
    onBlur,
    onCancel,
  } = props;
  return (
    <div className="space-y-2">
      <label className="font-semibold text-sm text-[#334155]">
        {label} {required && <span className="text-[#E14942]">*</span>}
      </label>

      <div className="h-45 bg-[#7F7F800D] rounded-sm flex justify-center items-center flex-col gap-2 relative overflow-hidden">
        <input
          onChange={onChange}
          type="file"
          className="absolute w-full h-full opacity-0 cursor-pointer"
          accept="image/*"
        />
        {!value ? (
          <>
            <img src="./image.svg" alt="" className="w-[28px] h-[28px]" />
            <p className="text-sm text-[#09090B] font-medium">Add Image</p>
          </>
        ) : (
          <>
            <img
              src={value}
              className="absolute w-full h-full object-cover"
              alt=""
            />
            <div
              className="w-6 h-6 bg-[#202124] rounded-full absolute top-4 right-4 cursor-pointer  flex justify-center items-center "
              onClick={onCancel}
            >
              <img src="./close.svg" alt="" className="w-3 f-3" />
            </div>
          </>
        )}
      </div>
      {error && <p className="text-sm text-[#E14942]">{error}</p>}
    </div>
  );
};
