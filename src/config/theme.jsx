import { createTheme } from "@mui/material";
import React from "react";
import { TYPOGRAPHIES, BREAKPOINTS } from "./enums";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#78CEFF",
    },
    secondary: {
      main: "#FF4545",
    },
  },
  typography: {
    ...TYPOGRAPHIES,
  },
  breakpoints: {
    values: {
      ...BREAKPOINTS,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "#FFF",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#FFF",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "5px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "5px",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "large",
        color: "primary",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontSize: "18px",
          borderRadius: "5px",
          textTransform: "uppercase",
          boxShadow: "none",
          padding: "10px",
        },
      },
    },
    MuiStack: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(96.26deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);",
          backdropFilter: "blur(20px)",
          padding: "48px",
          borderRadius: "25px",
          maxHeight: "85vh",
          width: "100%",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "&.MuiPaper-elevation1": {
            display: "flex",
            flexDirection: "row",
            gap: '1rem',
            background: "transparent",
            boxShadow: "0 0 #0000",
            width: '100%'
          },
          "&.MuiPaper-elevation2": {
            display: "flex",
            flexDirection: "column",
            gap: '1rem',
            background: "transparent",
            boxShadow: "0 0 #0000",
          },
          "&.MuiPaper-elevation3": {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            gap: '3rem',
            background: "transparent",
            boxShadow: "0 0 #0000",
          },
        },
      },
    },
  },
});
