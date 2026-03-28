import { cva } from "class-variance-authority";
 
const button = cva(["font-semibold", "border", "rounded"], {
  variants: {
    intent: {
      primary: ["bg-blue-500", "text-white", "border-transparent"],
      // **or**
      // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
      secondary: ["bg-white", "text-gray-800", "border-gray-400"],
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
});
 
const Button = ({ children,variant, size, isDisabled, className }) => {
  return <button className={}>{children}</button>;
};
export default Button;
