const Meal = ({ name, id, handleOrder }) => {
  return (
    <div
      className="w-36 h-28 m-4 bg-merryblue-300 rounded-md text-2xl font-semibold text-white flex justify-center items-center hover:cursor-pointer hover:opacity-80 transition"
      onClick={handleOrder}
    >
      {name}
    </div>
  );
};

export default Meal;
