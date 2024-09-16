import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/GlobalStyles";
import StretchContainer from "./components/stretchContainer";
import IndexPage from "./components/index";
import BreathingContainer from "./components/breathingContainer";
import { BgProvider } from "./hooks/BgContext";
import { ThemeProvider } from "./hooks/ThemeContext";
import { AutoplayProvider } from "./hooks/AutoplayContext";
import { Route, RouterProvider, createHashRouter } from "react-router-dom";
import "./styles/index.css";
import Background from "./components/ui/Background";

const router = createHashRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "breathing",
    element: <BreathingContainer />,
  },
  {
    path: ":mode",
    element: <StretchContainer />,
    errorElement: <IndexPage />,
  },
  {
    path: "*",
    element: <IndexPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <AutoplayProvider>
        <BgProvider>
          <GlobalStyles />
          <RouterProvider router={router} />
          <Background />
        </BgProvider>
      </AutoplayProvider>
    </ThemeProvider>
  </React.StrictMode>
);
