import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import React from "react"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import MenuIcon from "@mui/icons-material/Menu"
import HomeIcon from "@mui/icons-material/Home"
import HandymanIcon from "@mui/icons-material/Handyman"
import PersonIcon from "@mui/icons-material/Person"
import LayersIcon from "@mui/icons-material/Layers"
import CallIcon from "@mui/icons-material/Call"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import { LightTooltip } from "../styles/styledComponents"
import { useDimensions } from "../hooks/useDimentions"
import Home from "./Home"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"
import About from "./About"
import ScrollToTop from "../motion/ScrollToTop"
import {
  navItems,
  drawerWidth,
  linkedInProfile,
  githubProfile,
  myName,
} from "../utils/constants"
import { useColorMode } from "../providers/ColorModeProvider"
import { useTheme } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Container from "@mui/material/Container"
import Fab from "@mui/material/Fab"
import useMediaQuery from "@mui/material/useMediaQuery"

const Layout = () => {
  const navIcons = [
    <HomeIcon />,
    <PersonIcon />,
    <HandymanIcon />,
    <LayersIcon />,
    <CallIcon />,
  ]

  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { toggleColorMode } = useColorMode()
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))
  const appBarRef = React.useRef(null)

  let { height } = useDimensions(appBarRef)
  let secHeight = React.useMemo(() => `calc(100vh - ${height}px)`, [height])

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }
  return (
    <Box sx={{ width: 1 }}>
      {/*Navigation For small screens */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "initial", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Stack
            spacing={3}
            sx={{
              py: 4,
              px: 2,
              width: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {navItems.map((item, i) => (
              <Button
                key={i}
                onClick={handleDrawerToggle}
                href={`#${item.toLowerCase()}`}
                variant="outlined"
                startIcon={navIcons[i]}
                sx={{ width: 0.7, borderRadius: 20, py: 1 }}
              >
                {item}
              </Button>
            ))}
          </Stack>
        </Drawer>
      </Box>
      <Stack sx={{ width: 1 }}>
        {/* Navigation For large screens */}
        <AppBar
          position="sticky"
          color="transparent"
          component="nav"
          ref={appBarRef}
          sx={{ backdropFilter: "blur(14px)", px: { xs: 0, md: 4 } }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: { xs: 0, sm: 2 }, display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h4" fontFamily={"Iceland"} color="primary">
                {isSmallScreen ? myName.split(" ")[0] : myName}
              </Typography>
              <Stack
                direction={"row"}
                spacing={1}
                ml={3}
                sx={{ display: { xs: "none", md: "initial" } }}
              >
                {navItems.map((item, index) => (
                  <Button
                    key={index}
                    href={`#${item}`}
                    sx={{ fontSize: "1rem" }}
                  >
                    {item}
                  </Button>
                ))}
              </Stack>
            </Box>
            <Stack direction={"row"} spacing={1}>
              <LightTooltip title="LinkedIn Profile">
                <IconButton
                  color="primary"
                  target="_blank"
                  rel="noopener"
                  href={linkedInProfile}
                >
                  <LinkedInIcon />
                </IconButton>
              </LightTooltip>
              <LightTooltip title="Github Profile">
                <IconButton
                  color="primary"
                  href={githubProfile}
                  target="_blank"
                  rel="noopener"
                >
                  <GitHubIcon />
                </IconButton>
              </LightTooltip>
              <LightTooltip title="Toggle mode">
                <IconButton color="primary" onClick={toggleColorMode}>
                  {theme.palette.mode === "dark" ? (
                    <DarkModeOutlinedIcon />
                  ) : (
                    <LightModeIcon />
                  )}
                </IconButton>
              </LightTooltip>
            </Stack>
          </Toolbar>
        </AppBar>
        <Container sx={{ "&>section": { scrollMarginTop: `${height}px` } }}>
          <Home secHeight={secHeight} navID={navItems[0]} />
          <About secHeight={secHeight} navID={navItems[1]} />
          <Skills secHeight={secHeight} navID={navItems[2]} />
          <Projects secHeight={secHeight} navID={navItems[3]} />
          <Contact secHeight={secHeight} navID={navItems[4]} />
          <ScrollToTop>
            <Fab
              size="medium"
              aria-label="scroll back to top"
              title="Scroll to Top"
              color="primary"
            >
              <ArrowUpwardIcon />
            </Fab>
          </ScrollToTop>
        </Container>
      </Stack>
    </Box>
  )
}

export default Layout
