const Card = ({ data }) => {
  return (
    <div className="group/card relative min-h-16 overflow-y-hidden rounded-lg bg-white px-4 py-3 shadow-sm">
      <h3 className="text-lg font-bold">{data.title}</h3>
      <p className="text-gray-600">{data.description}</p>
    </div>
  );
};

export default Card;
