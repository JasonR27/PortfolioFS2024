import React from "react";
import { createTheme, ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "rgba(56, 189, 248, 1)",
    },
    secondary: {
      main: "rgba(245, 158, 11, 1)",
    },
    default: {
      main: "rgba(17, 24, 39, 1)",
    },
    warning: {
      main: "rgba(255, 193, 7, 1)",
    },
    background: {
      paper: "rgba(255, 255, 255, 1)",
    },
  },
  typography: {
    fontFamily: "Poppins, Helvetica",
    h1: {
      fontSize: "44px",
      fontWeight: 700,
      color: "rgba(17, 24, 39, 1)",
    },
    h2: {
      fontSize: "92px",
      fontWeight: 700,
      color: "rgba(17, 24, 39, 1)",
    },
    h3: {
      fontSize: "38px",
      fontWeight: 700,
      color: "rgba(17, 24, 39, 1)",
    },
    h4: {
      fontSize: "28px",
      fontWeight: 500,
      color: "rgba(17, 24, 39, 1)",
    },
    body1: {
      fontSize: "24px",
      fontWeight: 400,
      color: "rgba(17, 24, 39, 1)",
    },
    body2: {
      fontSize: "14px",
      fontWeight: 300,
      color: "rgba(255, 255, 255, 1)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.h2,
        }),
        head: ({ theme }) => ({
          ...theme.typography.subtitle,
        }),
        body: ({ theme }) => ({
          ...theme.typography.body1,
        }),
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: ({ theme }) => ({
          ...theme.typography.h2,
        }),
        secondary: ({ theme }) => ({
          ...theme.typography.body1,
        }),
      },
    },
  },
});

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};