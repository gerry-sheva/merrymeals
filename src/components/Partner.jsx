import { useState } from "react";
import axios from "axios";

const Partner = () => {
  const [isAddingFood, setIsAddingFood] = useState(false);
  const [menu, setMenu] = useState({
    meal1: "",
    meal2: "",
    meal3: "",
  });

  const token = localStorage.getItem("jwtToken");

  const handleSubmit = (e) => {
    e.preventDefault();
    const time = Date.now();
    console.log(menu);
    setIsAddingFood(false);
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const bodyParameters = { ...menu, frozen: true, planDate: time };
    axios.post("http://localhost:8080/createFoodBatch", bodyParameters, config);
    setMenu({
      meal1: "",
      meal2: "",
      meal3: "",
    });
  };

  const handleChange = (e) => {
    setMenu({
      ...menu,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="h-screen w-full relative">
      {/* Food */}
      <section
        className={`${
          isAddingFood ? "hidden" : "flex"
        } m-10 h-96 w-auto relative justify-center items-center rounded-xl shadow-xl`}
      >
        <div className="z-20 text-white text-center rounded-xl">
          <button
            className="btn btn-lg btn-primary mx-auto text-white font-bold bg-merrygreen-600 w-48 h-12 rounded-xl"
            onClick={() => {
              setIsAddingFood(true);
            }}
          >
            Add food
          </button>
        </div>
        <div className="absolute bg-menu bg-cover top-0 w-full h-full rounded-xl"></div>
        {/* overlay */}
        <div className="absolute w-full h-full bg-merryblue-600/70 rounded-xl"></div>
      </section>
      <section className={isAddingFood ? "block" : "hidden"}>
        {" "}
        <div className="mx-auto mt-32 max-w-[500px] rounded-md bg-slate-300 py-10 px-6 sm:p-[60px]">
          <h3 className="mb-24 text-center text-2xl font-bold sm:text-3xl">
            Add Food
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <label
                htmlFor="meal1"
                className="mb-3 block text-sm font-medium"
              >
                Meal #1
              </label>
              <input
                name="meal1"
                placeholder="Enter Meal #1"
                value={menu.meal1}
                onChange={handleChange}
                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="meal2"
                className="mb-3 block text-sm font-medium"
              >
                Meal #2
              </label>
              <input
                name="meal2"
                placeholder="Enter Meal #2"
                value={menu.meal2}
                onChange={handleChange}
                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="meal3"
                className="mb-3 block text-sm font-medium"
              >
                Meal #3
              </label>
              <input
                name="meal3"
                placeholder="Enter Meal #3"
                value={menu.meal3}
                onChange={handleChange}
                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
              />
            </div>
            <div className="mb-6">
              <button className="flex w-full items-center justify-center rounded-md bg-merrygreen-600 py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                Add meal
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Partner;
