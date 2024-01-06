import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

/**
 * A component for rendering a select dropdown menu.
 *
 * @param {Array} items - The list of items to display in the dropdown menu.
 * @param {string} selected - The currently selected item.
 * @param {function} setSelected - A function to set the selected item.
 * @returns {JSX.Element} - The rendered select component.
 */
const Select = ({ items, selected, setSelected }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative sm:w-48 font-medium">
      {/* Dropdown button */}
      <div
        onClick={() => setOpen(!open)}
        className={`rounded-lg bg-white w-full p-2 flex items-center justify-between ${
          !selected && "text-gray-700"
        }`}
      >
        {/* Display the selected item or default text */}
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Menu"}
        {/* Dropdown arrow */}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      {/* Dropdown menu */}
      <ul
        className={`absolute top-9 left-0 right-0 bg-white mt-2 overflow-y-auto rounded-lg ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        {/* Render each item in the dropdown menu */}
        {items?.map((item, index) => (
          <li
            key={index}
            className={`p-2 mb-1 text-sm hover:bg-gray-200 hover:text-[#FC6011] cursor-pointer text-[#333] 
        ${
          item?.value?.toLowerCase() === selected?.toLowerCase() &&
          "bg-gray-200 text-[#FC6011]"
        }
        `}
            onClick={() => {
              // Set the selected item and close the dropdown menu
              if (item?.value?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(item?.value);
              }
              setOpen(false);
            }}
          >
            {item?.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
