import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-merryblue-600 w-screen h-32 flex justify-center p-36">
      {" "}
      {/* logo */}
      <Link to={"/"}>
        <img
          className="w-[160px]"
          src={Logo}
        />
      </Link>
    </footer>
  );
};

export default Footer;
