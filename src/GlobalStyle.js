import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle({
  "*": {
    boxSizing: "border-box",
    userSelect: "none",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
    "&:hover": { color: "inherit" },
  },
});
