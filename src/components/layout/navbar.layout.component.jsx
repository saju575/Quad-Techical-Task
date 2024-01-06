import { CiSearch } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="py-4">
      <div className="container mx-auto px-3">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-semibold">pit.</span>

          <div className="relative flex flex-nowrap items-stretch">
            <span className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 bg-white">
              <CiSearch className="text-[#FC6011]" />
            </span>
            <input
              type="text"
              className="outline-none relative m-0 block w-[50%] min-w-0 flex-auto rounded-r border border-l-0 border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700  focus:outline-none "
              placeholder="Search Audiobook"
            />
          </div>

          <div className="hidden sm:flex items-center justify-center h-10 w-10 bg-[#FC6011] rounded-full text-white font-bold">
            <LuUser2 className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
