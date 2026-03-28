/**
 * @param {Object} props
 * @param {String} props.title
 * @param {String} props.description
 * @returns
 */

import { DataContext } from "@/DataContext";
import { useContext, useState } from "react";

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

  return (
    <div className="group/card relative min-h-16 overflow-y-hidden rounded-lg bg-white px-4 py-3 shadow-sm">
      {isEditMode ? (
        <textarea></textarea>
      ) : (
        <button className="text-heading-m font-bold">{title}</button>
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
