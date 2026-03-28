import DropdownPrimitive from "./DropDownPrimitive";
import iconVerticalEllipsis from "@assets/icon-vertical-ellipsis.svg";
const Header = () => {
  return (
    <header className="flex h-24.25 shrink-0 items-center">
      <div className="border-lines-light flex w-75 items-center gap-4 self-stretch border-r border-b pl-8 text-[32px] font-bold">
        Kanban
      </div>
      <div className="border-lines-light flex flex-1 items-center justify-between self-stretch border-b pr-6 pl-6">
        <h2 className="text-heading-xl">Platform Launch</h2>
        <DropdownPrimitive
          items={{
            "edit ": {
              label: "Edit Board",
              onClick: () => console.log("Edit Board"),
            },
            "delete ": {
              label: "Delete Board",
              onClick: () => console.log("Delete Board"),
            },
          }}
          triggerComponent={() => (
            <button className="text-main-purple hover:bg-main-purple/10 flex items-center gap-1 rounded-full p-2">
              <img src={iconVerticalEllipsis} alt="icon vertical ellipsis" />
            </button>
          )}
        />
      </div>
    </header>
  );
};

export default Header;
