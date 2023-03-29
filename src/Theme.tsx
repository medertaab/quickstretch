import { ThemeProvider } from "styled-components";

const lightTheme = {
  defaultBlack: "#353535",
  defaultLight: "#EBE9E5",
  lightTransparent: "#ebe9e554",
};

const darkTheme = {
  defaultBlack: "#EBE9E5",
  defaultLight: "#353535",
  defaultLightTransparent: "#35353554",
};

function Theme({ children }: any) {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
}

export default Theme;
