const TextField = ({
  placeholder,
  isInvalid,
  name,
  required,
  defaultValue,
}) => {
  return (
    <div className="relative flex flex-1 min-w-80 items-center">
      {isInvalid && (
        <span className="absolute right-4 text-body-l  text-red  text-sm">
          Can't be empty
        </span>
      )}

      <input
        type="text"
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        id="email"
        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default TextField;
