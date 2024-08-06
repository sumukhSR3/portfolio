import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import ColorModeProvider from "./providers/ColorModeProvider"
import "@fontsource/inter/300.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/700.css"
import "@fontsource/iceland"
import { LazyMotion, domAnimation } from "framer-motion"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ColorModeProvider>
      <LazyMotion features={domAnimation}>
        <App />
      </LazyMotion>
    </ColorModeProvider>
  </React.StrictMode>
)
