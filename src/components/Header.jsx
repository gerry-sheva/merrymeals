import { Link } from "react-router-dom";
import { BiDonateHeart } from "react-icons/bi";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className={"bg-merryblue-300 py-6 w-full"}>
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        {/* logo */}
        <Link to={"/"}>
          <img
            className="w-[160px]"
            src={Logo}
          />
        </Link>
        {/* nav */}
        <nav
          className={
            "text-primary flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8"
          }
        >
          <Link
            to={"/donate"}
            className="cursor-pointer text-white bg-merrygreen-600 font-semibold rounded-lg flex gap-x-1 items-center h-10 p-2"
          >
            <BiDonateHeart className="text-lg font-semibold" />
            <p>Donate</p>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
