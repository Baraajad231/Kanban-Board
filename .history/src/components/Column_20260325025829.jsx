import Card from "./Card";

const Column = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-heading-s">TODO {3}</h2>
      <div className="flex flex-col gap-5">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Column;
