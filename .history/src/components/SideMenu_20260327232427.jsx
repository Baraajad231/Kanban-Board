import clsx from "clsx";
import { useContext, useState } from "react";
import DialogPrimitive from "./DialogPrimitive";
import boardIcon from "@assets/icon-board.svg";
import { DataContext } from "@/DataContext";
import AddNewBoardForm from "./AddNewBoardForm";

/**
 * @param {Object} props
 * @param {Number} props.selectedBoardIndex
 * @param {Function} props.setSelectedBoardIndex
 * @returns {JSX.Element}
 */

const SideMenu = () => {
  const [open, setOpen] = useState(false);
  const onAddNewBoard = () => setOpen(true);
  const { data, selectedBoardIndex, setSelectedBoardIndex } =
    useContext(DataContext);
  return (
    <aside className="side-menu border-lines-light -mt-px h-[calc(100vh-97px)] w-75 border-r bg-white">
      <p className="text-heading-s px-8 py-4">ALL BOARDS {data.length}</p>
      <ul>
        {data.map((item, index) => (
          <li key={item.id}>
            <button
              data-isActive={index === selectedBoardIndex}
              className={clsx(
                "text-heading-m text-medium-grey data-[isactive=false]:hover:bg-main-purple/10 data-[isactive=false]:hover:text-main-purple flex w-11/12 items-center gap-4 rounded-e-full px-8 py-4 transition",
                {
                  "bg-main-purple hover:bg-main-purple text-white!":
                    index === selectedBoardIndex,
                },
              )}
              onClick={() => setSelectedBoardIndex(index)}
            >
              <img src={boardIcon} alt="boardIcon" />
              {item.title}
            </button>
          </li>
        ))}
        <li className="px-8 py-4">
          <DialogPrimitive
            isOpen={open}
            setOpen={setOpen}
            title="Create new board"
            triggerComponent={() => (
              <button
                onClick={onAddNewBoard}
                className="text-main-purple flex w-full items-center gap-4"
              >
                <img src={boardIcon} alt="boardIcon" />+ Create New Board
              </button>
            )}
          >
            <AddNewBoardForm toggleDialog={setOpen} />
          </DialogPrimitive>
        </li>
      </ul>
    </aside>
  );
};
export default SideMenu;
