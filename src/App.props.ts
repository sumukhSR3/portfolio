import { PaletteMode } from "@mui/material"

export interface CommonProps {
  secHeight: string
  navID: string
}

export interface ColorModeProviderProps {
  mode: PaletteMode
  toggleColorMode: () => void
}

export interface Skill {
  name: string
  imgURL: string
}
export interface Project {
  name: string
  imgURL: string
  description: string
  projectURL: string
  githubURL: string
}

export interface About {
  education: { 
    title: string; link: string; subtitle: string }[]
}
