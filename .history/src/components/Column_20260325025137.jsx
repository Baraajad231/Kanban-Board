import Card from "./Card";

const Column = () => {
  return (
    <div className="bg-lines-light flex w-72 shrink-0 flex-col self-start rounded-lg px-2 shadow">
      <Card />{" "}
    </div>
  );
};

export default Column;
