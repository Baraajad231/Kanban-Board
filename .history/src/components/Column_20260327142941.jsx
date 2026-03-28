import { useContext } from "react";
import Card from "./Card";
import { DataContext } from "@/DataContext";
import { produce } from "immer";
/**
 * @param {Object} props
 * @param {String} props.title
 * @param {Array} props.tasks
 * @returns
 */
const Column = ({ id, title, tasks = [] }) => {
  const { setData, selectedBoardIndex, data } = useContext(DataContext);
  const [isEditMode, setIsEditMode] = useState(false);

  const creatNewTask = () => ({ id: crypto.randomUUID(), title: "New Task" });

  const creatNewColumnArray = (dataArray, boardIndex, newTask) => {
    // return dataArray[boardIndex].columns.map((column) => {
    //   if (column.id === id) {
    //     return {
    //       ...column,
    //       tasks: [...column.tasks, newTask],
    //     };
    //   }
    //   return column;
    // });
    const newColumns = produce(dataArray[boardIndex].columns, (draft) => {
      const column = draft.find((col) => col.id === id);
      if (column) {
        column.tasks.push(newTask);
      }
    });
    return newColumns;
  };

  const addNewTaskHandler = () => {
    setData((prev) => {
      const newTask = creatNewTask();

      const newColumns = creatNewColumnArray(data, selectedBoardIndex, newTask);

      // const newData = [...prev];
      // newData[selectedBoardIndex] = {
      //   ...newData[selectedBoardIndex],
      //   columns: newColumns,
      // };
      const newData = produce(prev, (draft) => {
        draft[selectedBoardIndex].columns = newColumns;
      });

      return newData;
    });
  };

  const onDeleteHandler = () => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      setData((prev) =>
        produce(prev, (draft) => {
          const board = draft[selectedBoardIndex];
          board.columns = board.columns.filter((col) => col.id !== id);
        }),
      );
    }
  };

  return (
    <div className="bg-lines-light flex w-72 shrink-0 flex-col self-start rounded-lg px-2 shadow">
      <h2 className="group/column bg-lines-light text-heading-s relative top-0 rounded px-2 py-4">
        {title}({tasks.length > 0 ? tasks.length : 0})
        <button
          className="text-body-m text-red absolute top-0 right-0 bottom-0 p-2 opacity-0 duration-300 group-hover/column:opacity-100 focus:opacity-100"
          onClick={onDeleteHandler}
        >
          Delete
        </button>
      </h2>

      <div className="mb-5 flex flex-col gap-5">
        {tasks.map((task) => (
          <Card
            key={task.id}
            taskId={task.id}
            title={task.title}
            columnId={id}
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
