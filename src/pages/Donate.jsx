import { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

/* eslint-disable react/no-unescaped-entities */
const Donate = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("jwtToken");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount > 1000) {
      console.log("Invalid amount");
      return;
    }
    const payload = {
      amount: amount,
      document: message,
    };
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    console.log(payload);
    axios.post("http://localhost:8080/createNewFund", payload, config);
    return navigate("/");
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <Header />
      <main className="h-[600px]">
        <div className="container mx-auto flex justify-around h-full w-full">
          {/* text */}
          <div className="flex flex-col justify-center w-11/12 pl-32 pr-16">
            <h1 className="text-6xl leading-[1] font-light mb-4">
              Any donation would come a long way
            </h1>
          </div>
          <div className="hidden lg:block h-full w-full">
            <div className="mx-auto mt-32 max-w-[500px] rounded-md bg-slate-300 py-10 px-6 sm:p-[60px]">
              <h3 className="mb-10 text-center text-2xl font-bold sm:text-3xl">
                Donate
              </h3>
              <div className="flex justify-between mb-4">
                <button
                  className="bg-merrygreen-600 w-20 h-10 text-center rounded-md text-white text-2xl p-1 hover:cursor-pointer hover:scale-110"
                  onClick={() => {
                    setAmount(5);
                  }}
                >
                  $5
                </button>
                <button
                  className="bg-merrygreen-600 w-20 h-10 text-center rounded-md text-white text-2xl p-1 hover:cursor-pointer hover:scale-110"
                  onClick={() => {
                    setAmount(10);
                  }}
                >
                  $10
                </button>
                <button
                  className="bg-merrygreen-600 w-20 h-10 text-center rounded-md text-white text-2xl p-1 hover:cursor-pointer hover:scale-110"
                  onClick={() => {
                    setAmount(25);
                  }}
                >
                  $25
                </button>
                <button
                  className="bg-merrygreen-600 w-20 h-10 text-center rounded-md text-white text-2xl p-1 hover:cursor-pointer hover:scale-110"
                  onClick={() => {
                    setAmount(50);
                  }}
                >
                  $50
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <label
                    htmlFor="amount"
                    className="mb-3 block text-sm font-medium"
                  >
                    Amount ($)
                  </label>
                  <input
                    type="number"
                    min={"1"}
                    step={"any"}
                    name="amount"
                    placeholder="Amount"
                    value={amount}
                    onChange={handleChange}
                    className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="mb-3 block text-sm font-medium"
                  >
                    Message
                  </label>
                  <input
                    type="text"
                    name="message"
                    placeholder="Message"
                    value={message}
                    onChange={handleMessageChange}
                    className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <button className="flex w-full items-center justify-center rounded-md bg-merrygreen-600 py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                    Donate
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Donate;
