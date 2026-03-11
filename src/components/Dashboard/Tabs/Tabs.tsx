import WebSocket from "@/components/Websocket/web_socket";
import { useActiveTab } from "@/zustand/store";
import { MenuIcon, RefreshCcw, Search } from "lucide-react";

// interface TabProps {
//     setActiveTab: React.Dispatch<React.SetStateAction<string>>;
//     activeTab: string;
// }
const Tabs: React.FC = () => {
  const activeTab = useActiveTab((store) => store.tab);
  const setActiveTab = useActiveTab((store) => store.setActiveTab);
  const tabs = [
    {
      name: "Menu",
      icon: <MenuIcon size={20} />,
      width: 30,
      count: null,
    },
    { name: "All", icon: null, width: 38, count: 32 },
    { name: "Beverage", icon: null, width: 38, count: 32 },
    { name: "Dessert", icon: null, width: 38, count: 32 },
    { name: "Appetizer", icon: null, width: 38, count: 32 },
  ];
  return (
    <div className="flex justify-between gap-2 p-2 overflow-x-auto sticky bg-[var(--background)]">
      {/* <div className="flex gap-2  w-full">
        {tabs.map((t, i) => (
          <div
            key={i}
            className={`w-${t.width} bg-[var(--card)] text-[var(--foreground)] border border-[var(--border-color)] shadow-sm  rounded-xl px-2 py-1 gap-2 flex justify-start items-center active:scale-105 cursor-pointer transition-all hover:bg-blue-950 hover:text-white ${
              activeTab === t.name ? "bg-blue-950 text-white" : ""
            }`}
            onClick={() => setActiveTab(t.name)}
          >
            {t.icon && <span>{t.icon}</span>}
            <h1 className="text-sm">{t.name}</h1>
            {!t.name.startsWith("Dish") && (
              <p className="p-1  rounded-sm bg-gray-300 text-xs text-black">
                {t.count}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <div
          className={`text-[var(--foreground)] bg-[var(--card)] border border-[var(--border-color)]  shadow-xs rounded-xl px-2 py-1 gap-2 flex justify-start items-center active:scale-105 cursor-pointer transition-all hover:bg-blue-950 hover:text-white`}
          onClick={() => window.location.reload()}
        >
          <span className="flex gap-2 justify-center items-center">
            <RefreshCcw />
            <h1 className="text-sm">Refresh</h1>
          </span>
        </div>
        <div
          className={`text-[var(--foreground)] bg-[var(--card)]  border border-[var(--border-color)] shadow-md rounded-xl px-2 py-1 gap-2 flex justify-start items-center active:scale-105 cursor-pointer transition-all`}
        >
          <span className="flex gap-2">
            <Search />
            <input
              className="placeholder:text-[var(--foreground)] bg-[var(--card)] "
              placeholder="Search Menu"
            />
          </span>
        </div>
      </div> */}
      <div className="flex gap-2  w-full justify-between">
        <div className="flex gap-2">
          {tabs.map((t, i) => (
            <div
              key={i}
              className={`bg-[var(--card)] text-[var(--foreground)] border border-[var(--border-color)] shadow-sm  px-1 flex py-1 rounded-md items-center gap-2 w-fit cursor-pointer transition-all hover:bg-blue-950 hover:text-white ${
                activeTab === t.name ? "bg-blue-950 text-white" : ""
              }`}
              onClick={() => setActiveTab(t.name)}
            >
              {t.icon && <span>{t.icon}</span>}
              <h1 className="text-sm">{t.name}</h1>
              {!t.name.startsWith("Dish") && (
                <p className="p-1  rounded-sm bg-gray-300 text-xs text-black">
                  {t.count}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <div
            className={`text-[var(--foreground)] bg-[var(--card)] border border-[var(--border-color)]  shadow-xs rounded-md px-2 py-1 gap-2 flex justify-start items-center active:scale-105 cursor-pointer transition-all hover:bg-blue-950 hover:text-white`}
            onClick={() => window.location.reload()}
          >
            <span className="flex gap-2 justify-center items-center">
              <RefreshCcw />
              <h1 className="text-sm">Refresh</h1>
            </span>
          </div>
          <div
            className={`text-[var(--foreground)] bg-[var(--card)]  border border-[var(--border-color)] shadow-md rounded-md px-2 py-1 gap-2 flex justify-start items-center active:scale-105 cursor-pointer transition-all`}
          >
            <span className="flex gap-2">
              <Search />
              <input
                className="placeholder:text-[var(--foreground)] bg-[var(--card)] "
                placeholder="Search Menu"
              />
            </span>
            <WebSocket />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
