import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./hooks/ThemeContext";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Stretch from "./components/stretches/Stretch";
import GlobalStyles from "./styles/GlobalStyles";
import Breathing from "./components/breathing/Breathing";
import { AutoplayProvider } from "./hooks/AutoplayContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/breathing",
    element: <Breathing />,
  },
  {
    path: "/:mode",
    element: <Stretch />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <AutoplayProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </AutoplayProvider>
    </ThemeProvider>
  </React.StrictMode>
);
