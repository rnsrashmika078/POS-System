import ShadcnLogo from "@/assets/shadcn-logo.png";
import { useAppContext } from "@/context/appContext";

const Sitelogo = () => {
  const { activeSideBar, setActiveSideBar } = useAppContext();
  return (
    <div className="flex gap-2 justify-start items-center px-3 py-2 w-60">
      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center ">
        <img
          onClick={() => setActiveSideBar((prev) => !prev)}
          src={ShadcnLogo}
          className="w-10 h-10 rounded-full flex-shrink-0"
          alt="Logo"
        />
      </div>
      <div
        className={`flex-col ${activeSideBar ? "opacity-100" : "opacity-0"}`}
      >
        <h1 className="font-bold text-xl">Ozone</h1>
        <p className="text-[var(--secondary)] text-sm ">
          Cashier Daily Assistant
        </p>
      </div>
    </div>
  );
};

export default Sitelogo;
