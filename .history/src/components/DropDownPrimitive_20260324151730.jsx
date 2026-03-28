import * as React from "react";
import { DropdownMenu } from "radix-ui";
import clsx from "clsx";
// طريقة بتخلينا نعمل document لل component تاعنا
// jsdocs
/**
 * @param {Object} props
 * @param {Function} props.triggerComponent - a function that returns the component that will be used as the trigger for the dropdown
 * @param {Object} props.items - an object that contains the items that will be shown in the dropdown
 * @param {string} props.items.label -- the text that will be shown in the dropdown item
 * @param {Function} props.items.onClick -- the function that will be called when the dropdown item is clicked
 * @returns {JSX.Element}
 */
const DropdownPrimitive = ({ triggerComponent, items }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {triggerComponent && triggerComponent()}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade min-w-55 rounded-md bg-white p-1.25 shadow-[0px_10px_38px_-10px_rgba(22,23,24,0.35),0px_10px_20px_-15px_rgba(22,23,24,0.2)] will-change-[opacity,transform]"
          sideOffset={32}
        >
          {items &&
            Object.keys(items).map((item) => (
              <DropdownMenu.Item
                key={items[item].label}
                onClick={items[item].onClick}
                className={clsx(
                  "group text-body-l data-highlighted:bg-light-grey cursor-pointer p-4 leading-none outline-none",
                  {
                    "text-red": items[item].label.includes("Delete"),
                  },
                )}
              >
                {items[item].label}
              </DropdownMenu.Item>
            ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownPrimitive;
