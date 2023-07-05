import { createGlobalStyle } from "styled-components";
import { useTheme } from "../hooks/ThemeContext";

export default function GlobalStyles() {
  const {theme} = useTheme() as any
  if (theme === "light") {
    return <LightGlobalStyles />
  } else {
    return <DarkGlobalStyles />
  }
}

const LightGlobalStyles = createGlobalStyle`
  :root {
    --default-black: #353535;
    --default-light: #EBE9E5;
    --default-light-transparent: rgba(255, 255, 255, 0.5);
    --accent: #92e723;
    --accent-transparent: #a2e72393;
    --accent-transparent2: #a2e7235b;
    --accent-dark: #73c507;
    --accent-light: #beff68;
    --secondary-accent: #f1c23f;
    --backdrop: rgba(255, 255, 255, 0.25);
    --default-black-transparent: rgba(53, 53, 53, 0.3);
    --default-light-transparent: rgba(235, 233, 229, 0.5);


    background-color: var(--default-light);
  }
`;

const DarkGlobalStyles = createGlobalStyle`
  :root {
    --default-black: #EBE9E5;
    --default-light: #161616;
    --default-light-transparent: #35353545;
    --accent: #92e723;
    --accent-transparent: #a2e72393;
    --accent-transparent2: #a2e7235b;
    --accent-dark: #73c507;
    --secondary-accent: #f1c23f;
    --backdrop: rgba(0, 0, 0, 0.25);

    background-color: var(--default-light);
  }
`;