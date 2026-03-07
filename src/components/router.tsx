import App from "@/app";
import { createBrowserRouter } from "react-router-dom";
import Receipt from "./Receipt/Receipt";
import DashboardPage from "../pages/DashboardPage";
import AboutPage from "@/pages/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <DashboardPage /> }],
  },
  { path: "/about", element: <AboutPage /> },
  { path: "/payment", element: <Receipt /> },
]);
