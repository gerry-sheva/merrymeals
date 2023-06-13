import axios from "axios";
import { useEffect, useState } from "react";
import Meal from "./Meal";

const Member = () => {
  const [isOrderingFood, setIsAddingFood] = useState(false);
  const [meals, setMeals] = useState([]);
  const [mealId, setMealId] = useState("");
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/meal", config)
      .then((res) => setMeals(res.data.data));
  }, []);

  const handleOrder = (e) => {
    e.preventDefault();
    const bodyParameters = { menuId: mealId };
    console.log(bodyParameters);
    axios.post("http://localhost:3001/api/order", bodyParameters, config);
    setIsAddingFood(false);
  };

  const handleOrderButton = () => {
    setIsAddingFood(true);
  };

  const handleCare = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios.post("http://localhost:3001/api/care", {}, config);
  };

  return (
    <main className="h-screen w-full">
      <div className={isOrderingFood ? "hidden" : "block"}>
        {/* Food */}
        <section className="m-10 h-96 w-auto relative flex justify-center items-center rounded-xl shadow-xl">
          <div className="z-20 text-white text-center rounded-xl">
            <button
              className="btn btn-lg btn-primary mx-auto text-white font-bold bg-merrygreen-600 w-48 h-12 rounded-xl"
              onClick={handleOrderButton}
            >
              Request for Food
            </button>
          </div>
          <div className="absolute bg-food bg-cover top-0 w-full h-full rounded-xl"></div>
          {/* overlay */}
          <div className="absolute w-full h-full bg-merryblue-600/70 rounded-xl"></div>
        </section>
        {/* Care */}
        <section className="m-10 h-96 w-auto relative flex justify-center items-center rounded-xl shadow-xl">
          <div className="z-20 text-white text-center rounded-xl">
            <button
              className="btn btn-lg btn-primary mx-auto text-white font-bold bg-merrygreen-600 w-48 h-12 rounded-xl"
              onClick={handleCare}
            >
              Request for Care
            </button>
          </div>
          <div className="absolute bg-care bg-cover top-0 w-full h-full rounded-xl"></div>
          {/* overlay */}
          <div className="absolute w-full h-full bg-merryblue-600/70 rounded-xl"></div>
        </section>
      </div>
      <div className={isOrderingFood ? "block" : "hidden"}>
        <section className="flex justify-center">
          <div className="max-w-[500px] mt-20 rounded-md bg-slate-300 px-6 sm:p-[60px] flex flex-col items-center">
            <div className="flex flex-wrap">
              {meals.map((meal) => (
                <Meal
                  key={meal.id}
                  name={meal.name}
                  handleOrder={() => {
                    setMealId(meal.id);
                  }}
                />
              ))}
            </div>
            <button
              onClick={handleOrder}
              className="mt-5 bg-merryblue-400 w-32 h-10 rounded-md text-white hover:opacity-80 hover:cursor:pointer transition"
            >
              Order
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Member;
