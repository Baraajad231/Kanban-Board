import * as React from "react";
import { DropdownMenu } from "radix-ui";
// افهم كيف هاد بتوضح
/**
 *  @param {Object} props
 * @param {function} props.triggerComponent
 * @param {object} props.items
 * @param {string} props.items.label - The text to display in the dropdown
 * @param {function} props.items.onClick - The function to run when the item is clicked
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
                className="group text-violet11 data-highlighted:bg-violet9 data-disabled:text-mauve8 data-highlighted:text-violet1 relative flex h-6.25 items-center rounded-[3px] pr-1.25 pl-6.25 text-[13px] leading-none outline-none select-none data-disabled:pointer-events-none"
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
