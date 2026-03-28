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
      const newColumns = columns.map((column) => {
        if (column.id === activeColumnId) {
          const activeIdIndex = column.tasks.findIndex(
            (task) => task.id === activeId,
          );
          const overIdIndex = column.tasks.findIndex(
            (task) => task.id === overId,
          );
          const tasks = arrayMove(column.tasks, activeIdIndex, overIdIndex);

          return { ...column, tasks };
        }
        return column;
      });

      setData((prev) =>
        produce(prev, (draft) => {
          draft[selectedBoardIndex].columns = newColumns;
        }),
      );
    }
  };

  const onDragOverHandler = (event) => {
    const { active, over } = event;
    const activeId = active.id;
    const overId = over.id;

    const overColumnId =
      over?.data?.current?.columnId || // لو فوق task (لأننا مررنا columnId في بيانات الـ Card)
      columns.find((col) => col.id === overId)?.id; // لو فوق الـ Column نفسه
    const activeColumnId = active?.data?.current?.columnId;

    console.log(overColumnId);
    console.log(activeColumnId);

    if (overColumnId && activeColumnId !== overColumnId) {
      const newColumns = columns.map((column) => {
        // if the column is the column that the card is dragged to then add the task to the column
        if (column.id === overColumnId) {
          // get the active task from the active column's tasks
          const activeTask = columns
            .find((column) => column.id === activeColumnId)
            .tasks.find((task) => task.id === activeId);
          // add the active task to the end of the new column's tasks because the dnd lib will handle the reordering
          const tasks = [...column.tasks, activeTask];

          return { ...column, tasks };
        }

        // if the column is the column that the card is dragged from then remove the task from the column
        if (column.id === activeColumnId) {
          const tasks = column.tasks.filter((task) => task.id !== activeId);

          return { ...column, tasks };
        }

        return column;
      });

      setData((prev) =>
        produce(prev, (draft) => {
          draft[selectedBoardIndex].columns = newColumns;
        }),
      );
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={onDragEndHandler}
      onDragOver={onDragOverHandler}
    >
      <div className="bg-light-grey flex h-[calc(100vh-97px)] flex-1 gap-6 overflow-auto p-6">
        <SortableContext
          items={tasksIds}
          strategy={verticalListSortingStrategy}
        >
          {columns?.length &&
            columns.map((item, index) => (
              <Column
                key={`${item.id}${item.title}`}
                id={item.id}
                title={item.title}
                tasks={item.tasks}
                columnIndex={index}
              />
            ))}
        </SortableContext>
        <button
          className="bg-lines-light text-heading-l text-medium-grey w-72 shrink-0 self-start rounded-md p-3"
          onClick={addNewColumnHandler}
        >
          + New Column
        </button>
      </div>
    </DndContext>
  );
};

export default WorkSpace;
