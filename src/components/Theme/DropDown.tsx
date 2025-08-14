import React from "react";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { CiDesktop } from "react-icons/ci";

interface Theme {
  itemArray: string[];
  current: "light" | "dark" | "system";
  setIsSubMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSubMenuOpen: boolean;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  handleActionChanges: (theme: string) => void;
}

const DropDown: React.FC<Theme> = ({
  itemArray,
  current,
  setIsSubMenuOpen,
  isSubMenuOpen,
  dropdownRef,
  handleActionChanges,
}) => {
  const theme = {
    light: <CiLight size={25} />,
    dark: <CiDark size={25} />,
    system: <CiDesktop size={25} />,
  };
  return (
    <div className="relative " ref={dropdownRef}>
      <div
        className="rounded-2xl"
        onClick={() => setIsSubMenuOpen((prev) => !prev)}
      >
        <div className="items-center w-24 flex flex-row gap-2  border-gray-500 px-2 py-1 hover:cursor-pointer">
          <p className="dark:text-black">{theme[current]}</p>
          <h1 className="text-sm">
            {(current && current.charAt(0).toUpperCase() + current.slice(1)) ||
              "Drop Down Menu"}
          </h1>
        </div>
      </div>
      {isSubMenuOpen && (
        <ul
          className={`absolute w-full left-0 top-full mt-1 dark:bg-gray-800 border border-gray-500 rounded-md shadow-md z-10`}
        >
          {itemArray?.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => handleActionChanges(item)}
            >
              {item && item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default DropDown;
