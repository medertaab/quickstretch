import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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

  html, body {
    background-color: var(--default-light);
  }
`;

export default GlobalStyles;
