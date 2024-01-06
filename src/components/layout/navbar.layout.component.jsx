import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import Select from "../select.component";

const items = [
  {
    value: "Home",
    title: "Home",
  },
  {
    value: "Details",
    title: "Details",
  },
  {
    value: "Category",
    title: "Category",
  },
  {
    value: "My Favorites",
    title: "My Favorites",
  },
  {
    value: "Profile",
    title: "Profile",
  },
  {
    value: "Login/Signup",
    title: "Login/Signup",
  },
];
/**
 * Navbar component
 *
 * Renders a navigation bar with a search input, select dropdown, and user icon.
 *
 * Props:
 * - items: array of items for the select dropdown
 *
 * State:
 * - selected: currently selected item in the select dropdown
 *
 * @returns JSX element
 */
const Navbar = () => {
  // State for the currently selected item in the select dropdown
  const [selected, setSelected] = useState("");

  return (
    <div className="py-4">
      <div className="container mx-auto px-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <span className="text-3xl  font-semibold">pit.</span>

          <div className="flex space-x-1 sm:w-[60%]">
            {/* Search input */}
            <div className="relative flex flex-nowrap sm:w-[60%]">
              <span className="flex items-center whitespace-nowrap rounded-l-lg border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 bg-white">
                <CiSearch className="text-[#FC6011]" />
              </span>
              <input
                type="text"
                className="outline-none relative m-0 block w-[100%] min-w-0 flex-auto rounded-r-lg border border-l-0 border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700  focus:outline-none "
                placeholder="Search Audiobook"
              />
            </div>

            {/* Select dropdown */}
            <Select
              selected={selected}
              setSelected={setSelected}
              items={items}
            />
          </div>

          {/* User icon */}
          <div className="hidden sm:flex items-center justify-center h-10 w-10 bg-[#FC6011] rounded-full text-white font-bold">
            <LuUser2 className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
