import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "./hooks/ThemeContext";
import { AutoplayProvider } from "./hooks/AutoplayContext";
import Stretch from "./components/stretches/Stretch";
import Homepage from "./components/homepage/Homepage";
import Breathing from "./components/breathing/Breathing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


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
