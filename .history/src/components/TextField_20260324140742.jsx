import clsx from "clsx";

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
        className={clsx(
          "w-full rounded-sm border border-medium-gray/25 py-2 pl-4 text-body-l  ",
        )}
      />
    </div>
  );
};

export default TextField;
