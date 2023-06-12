import Settings from "../assets/settings.png";
import Care from "../assets/charity.png";
import Meal from "../assets/dinner.png";
import { useNavigate } from "react-router-dom";

const MemberSidebar = () => {
  return (
    <ul className="flex flex-col gap-y-3">
      <li className="flex px-11 justify-between items-center pb-3 border-b-2 text-white hover:scale-105 hover:cursor-pointer">
        <img
          src={Meal}
          alt="Meal"
          className="w-10"
        />
        <p className="text-3xl">Meals</p>
      </li>
      <li className="flex px-11 justify-between items-center pb-3 border-b-2 text-white hover:scale-105 hover:cursor-pointer">
        <img
          src={Care}
          alt="Care"
          className="w-10"
        />
        <p className="text-3xl">Care</p>
      </li>
      <li className="flex px-11 justify-between items-center pb-3 border-b-2 text-white hover:scale-105 hover:cursor-pointer">
        <img
          src={Settings}
          alt="Settings"
          className="w-10"
        />
        <p className="text-3xl">Settings</p>
      </li>
    </ul>
  );
};

const PartnerSidebar = () => {
  return (
    <ul className="flex flex-col gap-y-3">
      <li className="flex px-11 justify-between items-center pb-3 border-b-2 text-white hover:scale-105 hover:cursor-pointer">
        <img
          src={Meal}
          alt="Meal"
          className="w-10"
        />
        <p className="text-3xl">Meals Menu</p>
      </li>
      <li className="flex px-11 justify-between items-center pb-3 border-b-2 text-white hover:scale-105 hover:cursor-pointer">
        <img
          src={Settings}
          alt="Settings"
          className="w-10"
        />
        <p className="text-3xl">Settings</p>
      </li>
    </ul>
  );
};

const Sidebar = ({ name, role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("role");
    return navigate("/");
  };
  return (
    <aside className="h-screen w-64 bg-merryblue-300 hidden justify-between lg:flex lg:flex-col">
      <div className="mx-auto my-10 text-center flex flex-col text-white">
        <p className="text-lg">Hello,</p>
        <p className="text-2xl font-semibold">{name}</p>
        <p className="text-sm font-semibold uppercase">{role}</p>
      </div>
      {role === "User" && <MemberSidebar />}
      {role === "Partner" && <PartnerSidebar />}
      <button
        className="bg-merrypink-600 text-white h-10"
        onClick={handleLogout}
      >
        Log out
      </button>
    </aside>
  );
};

export default Sidebar;
