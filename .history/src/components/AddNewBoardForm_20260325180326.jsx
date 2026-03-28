import TextField from "./TextField";

const AddNewBoardForm = () => {
  return (
    <form>
      <div>
        <h3 className="text-body-m text-medium-grey pt-6 pb-2">Name </h3>
        <TextField placeholder="e.g. Web Design" name="boardName" required />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-body-m text-medium-grey pt-6">Columns </h3>
      </div>
      <div>
        <TextField placeholder="e.g. Web Design" name="columnName" required />
        <button onClick={false}></button>
      </div>
      <button className="bg-main-purple rounded px-4 py-2 text-white">
        Create Board
      </button>
    </form>
  );
};
export default AddNewBoardForm;
