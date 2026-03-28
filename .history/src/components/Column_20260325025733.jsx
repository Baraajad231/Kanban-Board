import Card from "./Card";

const Column = () => {
  return (
    <div className="bg-lines-light flex w-72 shrink-0 flex-col self-start rounded-lg px-2 shadow">
      <h2 className="text-heading-s">TODO {3}</h2>
      <div>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Column;
