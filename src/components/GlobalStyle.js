import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle({
  "*": {
    boxSizing: "border-box",
    userSelect: "none",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
    "&:hover": { color: "inherit" },
  },
});
