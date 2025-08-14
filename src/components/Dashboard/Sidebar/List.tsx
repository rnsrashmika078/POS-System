import Widgets from "@/components/Widgets";
import { LogOut, Settings } from "lucide-react";
import React, { useState } from "react";
interface ListProps {
    listItem: [{ name: string; icon: JSX.Element }];
}
const List: React.FC<ListProps> = ({ listItem }) => {
    const [select, setSelect] = useState<string>("Dashboard");
    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] justify-between text-[var(--foreground)]">
            {select === "Settings" && <Widgets />}
            <div className="flex flex-col justify-between px-3 py-5 space-y-2">
                {listItem.map((item, i) => (
                    <div key={i} onClick={() => setSelect(item.name)}>
                        <ul
                            className={`${
                                select === item.name
                                    ? "bg-blue-950 text-white"
                                    : ""
                            } list-none flex gap-2 hover:bg-blue-950 justify-start items-center hover:text-white p-2 rounded-xl`}
                        >
                            <li>{item.icon}</li>
                            <p className="">{item.name}</p>
                        </ul>
                    </div>
                ))}
            </div>
            <div>
                {[
                    { name: "Settings", icon: <Settings /> },
                    { name: "Logout", icon: <LogOut /> },
                ].map((items, i) => (
                    <div
                        key={i}
                        className=" transition-all flex flex-col px-3 py-3 space-y-3"
                        onClick={() => setSelect(items.name)}
                    >
                        <div className="flex flex-col">
                            <li
                                className={`-mb-2 ${
                                    select === items.name
                                        ? "bg-blue-950 text-white"
                                        : ""
                                } list-none flex gap-2 hover:bg-blue-950 justify-start items-center hover:text-white p-2 rounded-xl`}
                            >
                                {items.icon}
                                <p className="">{items.name}</p>
                            </li>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
