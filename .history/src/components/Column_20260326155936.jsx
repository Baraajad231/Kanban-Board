import Card from "./Card";
/**
 * @param {Object} props
 * @param {String} props.title
 * @param {Array} props.tasks
 * @returns
 */
const Column = ({ title, tasks = [] }) => {
  const addNewTaskHandler = () => {
    setData((prev) => {
      const newData = [...prev];
      newData[selectedBoardIndex].map((columns) => {});
    });
  };
  return (
    <div className="bg-lines-light flex w-72 shrink-0 flex-col self-start rounded-lg px-2 shadow">
      <h2 className="group/column bg-lines-light text-heading-s relative top-0 rounded px-2 py-4">
        {title}({tasks.length > 0 ? tasks.length : 0})
      </h2>
      <div className="mb-5 flex flex-col gap-5">
        {tasks.map((task) => (
          <Card
            key={task.id}
            title={task.title}
            description={task.description}
          />
        ))}
      </div>
      <button
        className="border-light-grey bg-lines-light text-heading-m text-medium-grey -mx-2 mt-auto border-t px-2 py-4"
        onClick={addNewTaskHandler}
      >
        + Add New Task
      </button>
    </div>
  );
};

export default Column;
