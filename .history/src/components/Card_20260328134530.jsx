import { DataContext } from "@/DataContext";
import { produce } from "immer";
import { useContext, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

/**
 * @param {Object} props
 * @param {String} props.title
 * @param {String} props.description
 * @returns
 */

const Card = ({ title, columnId, taskId }) => {
  const { selectedBoardIndex, setData } = useContext(DataContext);
  const [isEditMode, setISEditMode] = useState(false);

  const onDeleteHandler = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setData((prev) => {
        const newData = [...prev];
        const newColumns = newData[selectedBoardIndex].columns.map((column) => {
          if (column.id === columnId) {
            const newTasks = column.tasks.filter((task) => task.id !== taskId);
            return {
              ...column,
              tasks: newTasks,
            };
          }
          return column;
        });
        newData[selectedBoardIndex] = {
          ...newData[selectedBoardIndex],
          columns: newColumns,
        };

        return newData;
      });
    }
  };

  //   const newColumns = newData[selectedBoardIndex].columns.map((column) => {
  //     return {
  //       ...column,
  //       tasks: column.tasks.filter((task) => task.title !== title),
  //     };
  //   });
  //   newData[selectedBoardIndex] = {
  //     ...newData[selectedBoardIndex],
  //     columns: newColumns,
  //   };
  //   return newData;
  // });

  const toggleEditMode = () => setISEditMode(true);
  const onFocusHandler = (e) => {
    e.target.select();
  };
  const onBlurHandler = (e) => {
    setISEditMode(false);
    if (e.target.value.trim() === title) return;

    setData((prev) =>
      produce(prev, (draft) => {
        const column = draft[selectedBoardIndex].columns.find(
          (col) => col.id === columnId,
        );
        const task = column.tasks.find((task) => task.id === taskId);
        task.title = e.target.value;
      }),
    );
  };
  const onkeydownHandler = (e) => {
    // e.key === "Enter" && onBlurHandler(); نفس الشي
    e.key === "Enter" && e.target.blur();
  };

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: taskId, data: { columnId } });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className="group/card relative min-h-16 overflow-y-hidden rounded-lg bg-white px-4 py-3 shadow-sm"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      {isEditMode ? (
        <textarea
          className="text-heading-m outline-light-grey h-full resize-none"
          defaultValue={title}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onKeyDown={onkeydownHandler}
          autoFocus
        ></textarea>
      ) : (
        <button
          className="text-heading-m peer h-full text-start"
          onClick={toggleEditMode}
        >
          {title} {taskId}
        </button>
      )}
      <button
        className="text-body-m text-red absolute top-0 right-0 bottom-0 bg-white p-2 opacity-0 shadow duration-300 group-hover/card:opacity-100 peer-focus:opacity-100 focus:opacity-100"
        onClick={onDeleteHandler}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Card;
