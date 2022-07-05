import { createGlobalStyle } from "styled-components";

import { createTheme } from "@mui/material/styles";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
    }

`;

export const theme = createTheme({
  palette: {
    primary: {
      main: "#EE685F",
    },
    secondary: {
      main: "#3d97b4",
    },
    text: {
      primary: "#1a1a1a",
    },
    background: {
      default: "#ffffff",
    },
    info: {
      main: "#F3F2F0",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});
