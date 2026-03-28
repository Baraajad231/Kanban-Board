import Column from "./Column";

const WorkSpace = ({ columns }) => {
  return (
    <div className="bg-light-grey flex h-[calc(100vh-97px)] flex-1 gap-6 overflow-auto p-6">
      {data.map((item) => (
        <Column key={item.id} data={item} />
      ))}

      <button className="bg-lines-light text-heading-l text-medium-grey w-72 shrink-0 self-start rounded-md p-3">
        + New Column
      </button>
    </div>
  );
};

export default WorkSpace;
