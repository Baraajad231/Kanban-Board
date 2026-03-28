import Button from "./Button";
import TextField from "./TextField";
import iconCross from "@assets/icon-cross.svg";
const AddNewBoardForm = () => {
  let newColumns = [
    {
      id: crypto.randomUUID(),
      name: "",
    },
  ];
  const addColumnHandler = () => {
    newColumns.push({
      id: crypto.randomUUID(),
      name: "",
    });
  };
  return (
    <form>
      <div>
        <h3 className="text-body-m text-medium-grey pt-6 pb-2">Name </h3>
        <TextField placeholder="e.g. Web Design" name="boardName" required />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-body-m text-medium-grey pt-6">Columns </h3>

        <div className="flex items-center gap-4">
          {newColumns.map((column) => (
            <TextField
              key={column.id}
              placeholder="e.g. Web Design"
              name="boardName"
              required
            />
          ))}

          <button onClick={false}>
            <img src={iconCross} alt="icon cross" />
          </button>
        </div>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          // eslint-disable-next-line react-hooks/immutability
          onClick={addColumnHandler}
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
