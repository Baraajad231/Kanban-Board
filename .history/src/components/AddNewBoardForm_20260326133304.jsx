import { useContext, useState } from "react";
import Button from "./Button";
import TextField from "./TextField";
import iconCross from "@assets/icon-cross.svg";
import { DataContext } from "@/DataContext";

const AddNewBoardForm = ({
  boardId,
  toggleDialog,
  title,
  columns = [
    {
      id: crypto.randomUUID(),
    },
  ],
}) => {
  const [columnsArray, setColumnsArray] = useState(columns);
  const { setSelectedBoardIndex, setData } = useContext(DataContext);

  const addNewColumnHandler = () => {
    setColumnsArray((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title: "",
        tasks: [],
      },
    ]);
  };
  const removeColumnHandler = (id) => {
    // راجع طريقة ال index في ال filter
    setColumnsArray((prev) => prev.filter((column) => column.id !== id));
  };

  const creatNewColumnArray = (columnsArray, formData, boardId) => {


      return columnsArray.map((column) => {
            const tasksArray = boardId? columnsArray.tasks: []

        id: column.id,
        title: formData.get(column.id),
        tasks: tasksArray,
      });
    }
  };

  const updateBoardData = (boardName, newColumnArray, setData) => {
    setData((prev) => {
      setSelectedBoardIndex(prev.length);

      return [
        ...prev,
        {
          id: crypto.randomUUID(),
          title: boardName,
          columns: newColumnArray,
        },
      ];
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const boardName = formData.get("boardName");
    const newColumnArray = creatNewColumnArray(columnsArray, formData, boardId);
    updateBoardData(boardName, newColumnArray, setData);
    toggleDialog(false);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <h3 className="text-body-m text-medium-grey pt-6 pb-2">Name </h3>
        <TextField
          placeholder="e.g. Web Design"
          name="boardName"
          defaultValue={title}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-body-m text-medium-grey pt-6">Columns </h3>

        {columnsArray.map((column) => (
          <div className="flex items-center gap-4" key={column.id}>
            <TextField
              placeholder="e.g. Web Design"
              name={column.id}
              defaultValue={column.title}
              required
            />

            <button
              type="button"
              onClick={() => removeColumnHandler(column.id)}
            >
              <img src={iconCross} alt="icon cross" />
            </button>
          </div>
        ))}
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={addNewColumnHandler}
        >
          + Add New Column
        </Button>
      </div>

      <div className="mt-6">
        <Button type="submit" variant="primary" size="sm" isFullWidth>
          Create New Board
        </Button>
      </div>
    </form>
  );
};
export default AddNewBoardForm;
