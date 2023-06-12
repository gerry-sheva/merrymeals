import { Link } from "react-router-dom";

const CallToActions = () => {
  return (
    <section className="bg-merryblue-300 h-48 flex flex-col justify-center py-6">
      <Link
        to={"/login"}
        className="uppercase mx-auto my-3 text-white font-semibold bg-merrygreen-600 w-[512px] rounded-lg h-8 p-1 hover:cursor-pointer flex justify-center"
      >
        Ask for help
      </Link>
      <Link
        to={"/donate"}
        className="uppercase mx-auto my-3 text-white font-semibold bg-merrygreen-600 w-[512px] rounded-lg h-8 p-1 hover:cursor-pointer flex justify-center"
      >
        Donate
      </Link>
    </section>
  );
};

export default CallToActions;
