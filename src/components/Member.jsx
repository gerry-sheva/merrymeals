import axios from "axios";

const Member = () => {
  const token = localStorage.getItem("token");

  const handleOrder = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const bodyParameters = { menuId: "08c50d62-7986-412a-a713-002a1192d7b9" };
    axios.post("http://localhost:3001/api/order", bodyParameters, config);
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
      {/* Food */}
      <section className="m-10 h-96 w-auto relative flex justify-center items-center rounded-xl shadow-xl">
        <div className="z-20 text-white text-center rounded-xl">
          <button
            className="btn btn-lg btn-primary mx-auto text-white font-bold bg-merrygreen-600 w-48 h-12 rounded-xl"
            onClick={handleOrder}
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
    </main>
  );
};

export default Member;
