import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="font-custom text-[var(--foreground)] overflow-y-hidden">
      <Outlet />
    </div>
  );
}
