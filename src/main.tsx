import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/GlobalStyles";
import Stretch from "./components/stretch";
import Homepage from "./components/homepage";
import Breathing from "./components/breathing";
import { ThemeProvider } from "./hooks/ThemeContext";
import { AutoplayProvider } from "./hooks/AutoplayContext";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <Homepage />,
  }, {
    path: "breathing",
    element: <Breathing />
  }, {
    path: ":mode",
    element: <Stretch/>,
    errorElement: <Homepage />
  }, {
    path: "*",
    element: <Homepage />
  }
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
