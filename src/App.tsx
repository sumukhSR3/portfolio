import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material"

import Layout from "./components/Layout"
import React from "react"
import { getDesignTokens } from "./styles/theme"
import { useColorMode } from "./providers/ColorModeProvider"

function App() {
  const { mode } = useColorMode()
  // Update the theme only if the mode changes
  let theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode])
  theme = responsiveFontSizes(theme, {
    breakpoints: ["xs", "sm", "md", "lg", "xl"],
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Layout />
    </ThemeProvider>
  )
}

export default App
