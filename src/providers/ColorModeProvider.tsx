import { PaletteMode } from "@mui/material"
import React, { PropsWithChildren } from "react"
import { ColorModeProviderProps } from "../App.props"
const ColorModeContext = React.createContext<ColorModeProviderProps | null>(null)

const ColorModeProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [mode, setMode] = React.useState<PaletteMode>("dark")
  return (
    <ColorModeContext.Provider
      value={{
        mode,
        // The dark mode switch would invoke this method
        toggleColorMode: () =>
          setMode((prevMode: PaletteMode) => (prevMode === "light" ? "dark" : "light")),
      }}
    >
      {children}
    </ColorModeContext.Provider>
  )
}

export const useColorMode = () => {
  const context = React.useContext(ColorModeContext)
  if (!context) {
    throw new Error("useColorMode must be used within ColorModeProvider")
  }
  return context
}

export default ColorModeProvider
