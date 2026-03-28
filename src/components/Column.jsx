import { useContext } from "react";
import Card from "./Card";
import { DataContext } from "@/DataContext";
import { produce } from "immer";
// 1. الاستيراد الصحيح لـ useDroppable
import { useDroppable } from "@dnd-kit/core";

const Column = ({ id, title, tasks = [] }) => {
  const { setData, selectedBoardIndex, data } = useContext(DataContext);

  // 2. تفعيل استخدام useDroppable للعمود
  const { setNodeRef } = useDroppable({
    id: id,
    data: {
      type: "Column",
      columnId: id,
    },
  });

  const creatNewTask = () => ({ id: crypto.randomUUID(), title: "New Task" });

  const creatNewColumnArray = (dataArray, boardIndex, newTask) => {
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
    /* 3. ربط setNodeRef بالحاوية الرئيسية للعمود */
    <div
      ref={setNodeRef}
      className="bg-lines-light flex w-72 shrink-0 flex-col self-start rounded-lg px-2 shadow"
    >
      <h2 className="group/column bg-lines-light text-heading-s relative top-0 rounded px-2 py-4">
        {title}({tasks.length > 0 ? tasks.length : 0})
        <button
          className="text-body-m text-red absolute top-0 right-0 bottom-0 p-2 opacity-0 duration-300 group-hover/column:opacity-100 focus:opacity-100"
          onClick={onDeleteHandler}
        >
          Delete
        </button>
      </h2>

      <div className="mb-5 flex min-h-10 flex-col gap-5 transition-colors">
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
