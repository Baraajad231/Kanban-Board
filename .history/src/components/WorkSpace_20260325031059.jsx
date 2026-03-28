import Column from "./Column";

const WorkSpace = () => {
  return (
    <div className="bg-light-grey flex h-[calc(100vh-97px)] flex-1 gap-6 overflow-auto p-6">
      <Column />
      <Column />
      <button>+ Add New Column</button>
    </div>
  );
};

export default WorkSpace;
