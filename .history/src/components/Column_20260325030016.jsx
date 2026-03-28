import Card from "./Card";

const Column = () => {
  return (
    <div className="bg-lines-light flex w-72 flex-col gap-6 rounded-lg px-2">
      <h2 className="text-heading-s px-2 py-4">TODO {3}</h2>
      <div className="flex flex-col gap-5">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Column;
