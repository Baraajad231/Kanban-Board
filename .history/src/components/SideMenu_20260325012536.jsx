import clsx from "clsx";
import { useState } from "react";
import DialogPrimitive from "./DialogPrimitive";

const DATA = [
  {
    title: "Home",
    id: "1",
  },
  {
    title: "About",
    id: "2",
  },
  {
    title: "Contact",
    id: "3",
  },
];

const SideMenu = () => {
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(0);
  const [open, setOpen] = useState(true);

  return (
    <aside className="side-menu border-lines-light -mt-px h-screen w-75 border-r bg-white">
      <p className="text-heading-s px-8 py-4">ALL BOARDS {DATA.length}</p>
      <ul>
        {DATA.map((item, index) => (
          <li key={item.id}>
            <button
              className={clsx(
                "text-heading-m text-medium-grey data-[isactive=false]:hover:bg-main-purple/10 data-[isactive=false]:hover:text-main-purple flex w-11/12 items-center gap-4 rounded-e-full px-8 py-4 transition",
                {
                  "bg-main-purple hover:bg-main-purple text-white!":
                    index === selectedBoardIndex,
                },
              )}
              onClick={() => setSelectedBoardIndex(index)}
            >
              {item.title}
            </button>
          </li>
        ))}
        <li>
          <DialogPrimitive
            isOpen={open}
            setOpen={setOpen}
            title="Add new board"
            triggerComponent={() => (
              <button className="text-main-purple hover:bg-main-purple/10 flex w-11/12 items-center gap-4 rounded-e-full px-8 py-4">
                + Create New Board
              </button>
            )}
          >
            Hello world
          </DialogPrimitive>
        </li>
      </ul>
    </aside>
  );
};
export default SideMenu;
