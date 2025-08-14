import React from "react";
import { BsOpencollective } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { CiDesktop } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";

interface Theme {
    itemArray: string[];
    current: "Closed" | "Open";
    setIsSubMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isSubMenuOpen: boolean;
    dropdownRef: React.RefObject<HTMLDivElement>;
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
        Closed: <CgClose size={20} />,
        Open: <BsOpencollective size={20} />,
    };
    return (
        <div
            className="relative flex justify-center items-center"
            ref={dropdownRef}
        >
            <div
                className="rounded-2xl"
                onClick={() => setIsSubMenuOpen((prev) => !prev)}
            >
                <div className="items-center w-24 flex flex-row gap-2  border-gray-500 px-2 py-1 hover:cursor-pointer">
                    <p className="dark:text-black">{theme[current]}</p>
                    <h1 className="text-sm">
                        {(current &&
                            current.charAt(0).toUpperCase() +
                                current.slice(1)) ||
                            "Drop Down Menu"}
                    </h1>
                </div>
            </div>
            {isSubMenuOpen && (
                <ul
                    className={`absolute w-full left-0 top-full mt-2 dark:bg-gray-800 border border-gray-200 rounded-md shadow-md z-[-1]`}
                >
                    {itemArray?.map((item, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 hover:bg-blue-950 hover:rounded-sm hover:text-white cursor-pointer"
                            onClick={() => handleActionChanges(item)}
                        >
                            {item &&
                                item.charAt(0).toUpperCase() + item.slice(1)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default DropDown;
