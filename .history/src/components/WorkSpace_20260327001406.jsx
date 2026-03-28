import { useContext } from "react";
import Column from "./Column";
import { DataContext } from "@/DataContext";

/**
 *
 * @param {Object} props
 * @param {Array} props.columns
 * @param {Number} props.columns.id
 * @param {Array} props.columns.tasks
 * @param {string} props.columns.title
 * @returns {JSX.Element}
 */

const WorkSpace = () => {
  const { data, selectedBoardIndex } = useContext(DataContext);
  const columns = data[selectedBoardIndex]?.columns || [];

  const addNewColumnHandler = () => {};

  return (
    <div className="bg-light-grey flex h-[calc(100vh-97px)] flex-1 gap-6 overflow-auto p-6">
      {columns.map((column) => (
        <Column
          key={column.id}
          id={column.id}
          title={column.title}
          tasks={column.tasks}
        />
      ))}

      <button
        className="bg-lines-light text-heading-l text-medium-grey w-72 shrink-0 self-start rounded-md p-3"
        type="button"
        onClick="addNewColumnHandler"
      >
        + New Column
      </button>
    </div>
  );
};

export default WorkSpace;
