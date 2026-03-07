import { AppContextType } from "@/types/types";
import { createContext, ReactNode, useContext, useState } from "react";

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [activeSideBar, setActiveSideBar] = useState<boolean>(false);
  const [activeOrderBar, setActiveOrderBar] = useState<boolean>(false);
  return (
    <AppContext.Provider
      value={{
        activeSideBar,
        setActiveSideBar,
        activeOrderBar,
        setActiveOrderBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must use within AppProvider");
  }
  return context;
};
