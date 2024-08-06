import Box from "@mui/material/Box"
import Fade from "@mui/material/Fade"
import useScrollTrigger from "@mui/material/useScrollTrigger"

function ScrollToTop({ children }: React.PropsWithChildren<{}>) {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 200,
  })

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#home")

    console.log(anchor)
    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      })
    }
  }

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: "fixed",
          bottom: { xs: 75, sm: 25 },
          right: 25,
        }}
      >
        {children}
      </Box>
    </Fade>
  )
}

export default ScrollToTop
