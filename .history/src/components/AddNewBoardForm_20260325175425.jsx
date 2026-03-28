const AddNewBoardForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-heading-m font-bold">Add New Board</h2>
      <input
        type="text"
        placeholder="Board Name"
        className="rounded border border-gray-300 px-4 py-2"
      />
      <button className="bg-main-purple rounded px-4 py-2 text-white">
        Create Board
      </button>
    </div>
  );
};
export default AddNewBoardForm;
