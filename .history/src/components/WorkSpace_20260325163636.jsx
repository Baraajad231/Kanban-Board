import Column from "./Column";

/**
 *
 * @param {Object} props
 * @param {Array} columns
 * @param {Array} props.columns
 * @param {Object} props.columns.id
 * @param {Array} props.columns.tasks
 * @param {string} props.columns.title
 * @returns
 */

const WorkSpace = ({ columns = [] }) => {
  return (
    <div className="bg-light-grey flex h-[calc(100vh-97px)] flex-1 gap-6 overflow-auto p-6">
      {columns.map((column) => (
        <Column key={column.id} title={column.title} tasks={column.tasks} />
      ))}

      <button className="bg-lines-light text-heading-l text-medium-grey w-72 shrink-0 self-start rounded-md p-3">
        + New Column
      </button>
    </div>
  );
};

export default WorkSpace;
