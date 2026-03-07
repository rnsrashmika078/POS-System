export type AppContextType = {
  activeSideBar: boolean;
  setActiveSideBar: React.Dispatch<React.SetStateAction<boolean>>;

  activeOrderBar: boolean;
  setActiveOrderBar: React.Dispatch<React.SetStateAction<boolean>>;
};
