import { useContext } from "react";
import Column from "./Column";
import { DataContext } from "@/DataContext";
import { produce } from "immer";
import { DragDropProvider } from "@dnd-kit/react";
import { arrayMove } from "@dnd-kit/sortable";
import { DragOverlay } from "@dnd-kit/react";
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

  const onDragEndHandler = (e) => {
    console.log(e);
    const { active, over } = event;

    // 1. إذا لم يكن هناك هدف أو أفلتنا البطاقة فوق نفسها، لا نفعل شيئاً
    if (!over || active.id === over.id) return;

    const activeId = active.id;
    const overId = over.id;

    setData((prev) =>
      produce(prev, (draft) => {
        const board = draft[selectedBoardIndex];

        // 2. البحث عن العمود الذي يحتوي على البطاقة المسحوبة (Active)
        // والعمود الذي يحتوي على المكان المستهدف (Over)
        let activeCol = board.columns.find((col) =>
          col.tasks.some((t) => t.id === activeId),
        );

        let overCol = board.columns.find(
          (col) => col.tasks.some((t) => t.id === overId) || col.id === overId,
        );

        if (!activeCol || !overCol) return;

        const activeTaskIndex = activeCol.tasks.findIndex(
          (t) => t.id === activeId,
        );

        // 3. الحالة الأولى: الترتيب داخل نفس العمود
        if (activeCol.id === overCol.id) {
          const overTaskIndex = overCol.tasks.findIndex((t) => t.id === overId);
          activeCol.tasks = arrayMove(
            activeCol.tasks,
            activeTaskIndex,
            overTaskIndex,
          );
        }
        // 4. الحالة الثانية: الانتقال من عمود لآخر
        else {
          const [movedTask] = activeCol.tasks.splice(activeTaskIndex, 1);
          // نحدد مكان الإضافة: إذا كان فوق تاسك معين نأخذ مكانه، وإذا كان فوق العمود نفسه نضيفه للآخر
          const overTaskIndex = overCol.tasks.findIndex((t) => t.id === overId);
          const newIndex =
            overTaskIndex >= 0 ? overTaskIndex : overCol.tasks.length;

          overCol.tasks.splice(newIndex, 0, movedTask);
        }
      }),
    );
  };

  return (
    <DragDropProvider onDragEnd={onDragEndHandler}>
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
    </DragDropProvider>
  );
};

export default WorkSpace;
