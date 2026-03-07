import Sitelogo from "./Sitelogo";
import HR from "@/components/Common/HR";
import List from "./List";
import { RxDashboard } from "react-icons/rx";
import { BiMoneyWithdraw } from "react-icons/bi";
import { TbMenuOrder, TbDeviceAnalytics } from "react-icons/tb";

const Sidebar = () => {
  const iconSize = 20;
  const listItem = [
    { name: "Dashboard", icon: <RxDashboard size={iconSize} /> },
    { name: "MenuOrder", icon: <TbMenuOrder size={iconSize} /> },
    { name: "Analytics", icon: <TbDeviceAnalytics size={iconSize} /> },
    { name: "Withdrawal", icon: <BiMoneyWithdraw size={iconSize} /> },
    // { name: "Settings", icon:  },
  ];
  return (
    <div className="w-full flex-shrink bg-white h-full border-r border-gray-200 overflow-hidden">
      <Sitelogo />
      <HR />
      {/* @ts-ignore */}
      <List listItem={listItem} />
    </div>
  );
};

export default Sidebar;
