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
    --default-light-transparent: #ffffff53;
    --accent: #92e723;
    --accent-transparent: #a2e72393;
    --accent-transparent2: #a2e7235b;
    --accent-dark: #73c507;
    --secondary-accent: #f1c23f;

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

    background-color: var(--default-light);
  }
`;