import { cva } from "class-variance-authority";

const button = cva(
  ["rounded-full", "font-bold", "px-6", "duration-200", "text-[13px]"],
  {
    variants: {
      variant: {
        primary: ["text-white", "hover:bg-main-purple-hover", "bg-main-purple"],
        // **or**
        // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
        secondary: [
          "bg-main-purple/10",
          "text-main-purple",
          "hover:bg-main-purple/25",
        ],
        destructive: ["bg-red", "text-white", "hover:bg-red-hover"],
      },
      size: {
        sm: ["h-10"],
        lg: ["h-12"],
      },
      isFullWidth: {
        true: ["w-full"],
      },
      // `boolean` variants are also supported!
      isDisabled: {
        true: ["opacity-25", "cursor-not-allowed", "hover:bg-main-purple"],
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "lg",
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
