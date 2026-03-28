import * as React from "react";
import { DropdownMenu } from "radix-ui";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";

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
          <DropdownMenu.Item className="group text-violet11 data-highlighted:bg-violet9 data-disabled:text-mauve8 data-highlighted:text-violet1 relative flex h-6.25 items-center rounded-[3px] pr-1.25 pl-6.25 text-[13px] leading-none outline-none select-none data-disabled:pointer-events-none">
            New Tab{" "}
            <div className="text-mauve11 group-data-[disabled]:text-mauve8 ml-auto pl-5 group-data-[highlighted]:text-white">
              ⌘+T
            </div>
          </DropdownMenu.Item>


          <DropdownMenu.Separator className="bg-violet6 m-1.25 h-px" />

          <DropdownMenu.CheckboxItem
            className="group text-violet11 data-highlighted:bg-violet9 data-disabled:text-mauve8 data-highlighted:text-violet1 relative flex h-6.25 items-center rounded-[3px] pr-1.25 pl-6.25 text-[13px] leading-none outline-none select-none data-disabled:pointer-events-none"
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-6.25 items-center justify-center">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Bookmarks{" "}
            <div className="text-mauve11 group-data-disabled:text-mauve8 ml-auto pl-5 group-data-highlighted:text-white">
              ⌘+B
            </div>
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            className="text-violet11 data-highlighted:bg-violet9 data-disabled:text-mauve8 data-highlighted:text-violet1 relative flex h-6.25 items-center rounded-[3px] pr-1.25 pl-6.25 text-[13px] leading-none outline-none select-none data-disabled:pointer-events-none"
            checked={}
            onCheckedChange={}
          >
            <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-6.25 items-center justify-center">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Full URLs
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator className="bg-violet6 m-1.25 h-px" />

          <DropdownMenu.Label className="text-mauve11 pl-6.25 text-xs leading-6.25">
            People
          </DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenu.RadioItem
              className="text-violet11 data-highlighted:bg-violet9 data-disabled:text-mauve8 data-highlighted:text-violet1 relative flex h-6.25 items-center rounded-[3px] pr-1.25 pl-6.25 text-[13px] leading-none outline-none select-none data-disabled:pointer-events-none"
              value="pedro"
            >
              <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-6.25 items-center justify-center">
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Pedro Duarte
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem
              className="text-violet11 data-highlighted:bg-violet9 data-disabled:text-mauve8 data-highlighted:text-violet1 relative flex h-6.25 items-center rounded-[3px] pr-1.25 pl-6.25 text-[13px] leading-none outline-none select-none data-disabled:pointer-events-none"
              value="colm"
            >
              <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-6.25 items-center justify-center">
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Colm Tuite
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;
