import { useContext, useMemo } from "react";
import Column from "./Column";
import { DataContext } from "@/DataContext";
import { produce } from "immer";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

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
  const { data, selectedBoardIndex, setData } = useContext(DataContext);
  const columns = data[selectedBoardIndex]?.columns || [];

  const newColumnObject = () => ({
    id: crypto.randomUUID(),
    title: "New Column",
    tasks: [],
  });
  const addNewColumnHandler = () => {
    const newColumn = newColumnObject();
    setData((prev) => {
      const newData = produce(prev, (draft) => {
        draft[selectedBoardIndex].columns.push(newColumn);
      });
      // const newData = [...prev];
      // newData[selectedBoardIndex] = {
      //   ...newData[selectedBoardIndex],
      //   columns: [...columns, newColumn],
      // };
      // newData[selectedBoardIndex].columns.push(newColumn);
      return newData;
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
  );
  const tasksIds = useMemo(() => {
    let tasksIds = [];

    if (!columns || columns.length === 0) return tasksIds;
    for (let column of columns) {
      tasksIds = [...tasksIds, ...column.tasks.map((task) => task.id)];
    }
    return tasksIds;
  }, [columns]);
  const onDragEndHandler = (event) => {
    const { active, over } = event;
    const activeId = active.id;
    const overId = over.id;
    const overColumnId = over.data.current.columnId;
    const activeColumnId = active.data.current.columnId;

    if (activeId === overId) return;
        if (activeColumnId === overColumnId) {
const newColumns = produce(columns, (draft) => {
  const column = draft.find((col) => col.id === activeColumnId);
  if (column) {
    const activeIndex = column.tasks.findIndex((task) => task.id === activeId);
    const overIndex = column.tasks.findIndex((task) => task.id === overId);
    if (activeIndex !== -1 && overIndex !== -1) {
      arrayMove(column.tasks, activeIndex, overIndex);
    }
  }
})}
  const onDragOverHandler = () => {};

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={onDragEndHandler}
      onDragOver={onDragOverHandler}
    >
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
          onClick={addNewColumnHandler}
        >
          + New Column
        </button>
      </div>
    </DndContext>
  );
};

export default WorkSpace;
