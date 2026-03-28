import { cva } from "class-variance-authority";

const button = cva(
  ["rounded-full", "font-bold", "px-6", "duration-200", "text-[13px]"],
  {
    variants: {
      intent: {
        primary: ["bg-main-purple", "text-white", "hover:bg-main-purple-hover"],
        // **or**
        // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
        secondary: ["bg-main-purple/10", "text-main-purple", "border-gray-400"],
        destructive: ["bg-red", "text-white", "border-transparent"],
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
      },
      // `boolean` variants are also supported!
      disabled: {
        false: null,
        true: ["opacity-50", "cursor-not-allowed"],
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        disabled: false,
        class: "hover:bg-blue-600",
      },
      {
        intent: "secondary",
        disabled: false,
        class: "hover:bg-gray-100",
      },
      {
        intent: "primary",
        size: "medium",
        // **or** if you're a React.js user, `className` may feel more consistent:
        // className: "uppercase"
        class: "uppercase",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "medium",
      disabled: false,
    },
  },
);

const Button = ({
  children,
  variant,
  size,
  isFullWidth,
  isDisabled,
  className,
  ...props
}) => {
  return (
    <button
      className={button({ variant, size, isFullWidth, isDisabled, className })}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
