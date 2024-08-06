import { PaletteMode, ThemeOptions } from "@mui/material"

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => {
  return {
    palette: {
      mode,
      primary: { main: "#3ea6ff" },
      ...(mode === "light"
        ? {
            // palette values for light mode
            text: {
              primary: "#666666",
              secondary: "#42446E",
            },
          }
        : {
            // palette values for dark mode
            background: {
              default: "#191919",
              paper: "#191919",
            },
            text: {
              primary: "#A7A7A7",
              secondary: "#CCCCCC",
            },
          }),
    },
    typography: {
      fontFamily: "sans-serif",
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 700,
      },
      h4: {
        fontWeight: 700,
      },
      h5: {
        fontWeight: 700,
      },
      h6: {
        fontWeight: 600,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
          },
        },
      },
    },
  }
}
