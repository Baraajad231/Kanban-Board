import { useContext, useState } from "react";
import DialogPrimitive from "./DialogPrimitive";
import DropdownPrimitive from "./DropDownPrimitive";
import iconVerticalEllipsis from "@assets/icon-vertical-ellipsis.svg";
import { DataContext } from "@/DataContext";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { selectedBoardIndex, setData, setSelectedBoardIndex } =
    useContext(DataContext);

  const onEditBoard = () => setOpen(true);
  const onDeleteBoard = () => {
    if (window.confirm("Are you sure you want to delete this board?")) {
      setData((prev) =>
        prev.filter((_, index) => index !== selectedBoardIndex),
      );
      //   setData((prev) => {
      //     const newData = [...prev];
      //     newData.splice(selectedBoardIndex, 1);
      //     return newData;
      //   });
      // }
      setData((prev) => {
        prev.splice(selectedBoardIndex, 1);
        return newData;
      });
    }
    setSelectedBoardIndex(0);
  };
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
              onClick: onEditBoard,
            },
            "delete ": {
              label: "Delete Board",
              onClick: onDeleteBoard,
            },
          }}
          triggerComponent={() => (
            <button className="text-main-purple hover:bg-main-purple/10 flex items-center gap-1 rounded-full p-3">
              <img src={iconVerticalEllipsis} alt="icon vertical ellipsis" />
            </button>
          )}
        />

        <DialogPrimitive isOpen={open} setOpen={setOpen} title="Edit Board">
          Hello world
        </DialogPrimitive>
      </div>
    </header>
  );
};

export default Header;
