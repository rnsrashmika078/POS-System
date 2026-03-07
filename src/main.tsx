import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/router.tsx";
import { AppProvider } from "./context/appContext.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
      <App />
    </AppProvider>
  </React.StrictMode>
);

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
