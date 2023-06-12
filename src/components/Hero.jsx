/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Image from "../assets/eat3.png";

const Hero = () => {
  return (
    <section className="h-[600px]">
      <div className="container mx-auto flex justify-around h-full w-full">
        {/* text */}
        <div className="flex flex-col justify-center w-11/12 pl-32 pr-16">
          <div className="font-semibold uppercase">
            <div>Thanks to you,</div>
          </div>
          <h1 className="text-[70px] leading-[1] font-light mb-4 bg">
            Alfred doesn't have to starve
          </h1>
          <Link
            to={"/"}
            className="uppercase text-white font-semibold bg-merrygreen-600 w-48 rounded-lg h-8 p-1 hover:cursor-pointer flex justify-center"
          >
            Learn how to help
          </Link>
        </div>
        {/* image */}
        <div className="hidden lg:block h-full w-full">
          <img
            src={Image}
            alt=""
            className="h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
