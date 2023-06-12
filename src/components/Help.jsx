import Volunteer from "../assets/volunteer.png";
import Partners from "../assets/partners.png";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Volunteer}
            alt="/"
          />
          <h2 className="text-2xl text-merrygreen-600 font-bold text-center py-3">
            Volunteers
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Lorem</p>
            <p className="py-2 border-b mx-8">Ipsum</p>
            <p className="py-2 border-b mx-8">Dolor</p>
          </div>
          <Link
            to={"/register"}
            className="bg-merrygreen-600 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
          >
            Become Volunteer
          </Link>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Partners}
            alt="/"
          />
          <h2 className="text-2xl text-merrygreen-600 font-bold text-center py-3">
            Partners
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Lorem</p>
            <p className="py-2 border-b mx-8">Ipsum</p>
            <p className="py-2 border-b mx-8">Dolor</p>
          </div>
          <Link
            to={"/register"}
            className="bg-merrygreen-600 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
          >
            Become Partner
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Help;
