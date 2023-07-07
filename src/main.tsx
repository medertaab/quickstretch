import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/GlobalStyles";
import StretchContainer from "./components/stretchContainer";
import IndexPage from "./components/index";
import BreathingContainer from "./components/breathingContainer";
import { ThemeProvider } from "./hooks/ThemeContext";
import { AutoplayProvider } from "./hooks/AutoplayContext";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./styles/index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <IndexPage />,
  }, {
    path: "breathing",
    element: <BreathingContainer />
  }, {
    path: ":mode",
    element: <StretchContainer/>,
    errorElement: <IndexPage />
  }, {
    path: "*",
    element: <IndexPage />
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
