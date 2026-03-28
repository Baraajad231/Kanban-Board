/**
 * @param {Object} props
 * @param {String} props.title
 * @param {String} props.description
 * @returns
 */

const Card = ({ title, description }) => {
  return (
    <div className="group/card relative min-h-16 overflow-y-hidden rounded-lg bg-white px-4 py-3 shadow-sm">
      <h3 className="text-heading-m font-bold">{title}</h3>
      <button
        className="text-body-m text-red absolute top-0 right-0 bottom-0 bg-white p-2 opacity-0 shadow duration-300 group-hover/card:opacity-100 peer-focus:opacity-100 focus:opacity-100"
        onClick={onDeleteHandler}
      >
        Delete
      </button>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
