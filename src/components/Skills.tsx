import { CommonProps } from "../App.props"
import { skillData } from "../utils/data"
import MotionStack from "../motion/MotionStack"
import { BlueSpan } from "../styles/styledComponents"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { Variants } from "framer-motion"
import useMediaQuery from "@mui/material/useMediaQuery"
import { Theme } from "@mui/material/styles"

const Skills = ({ secHeight, navID }: CommonProps) => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  )
  let variants: Variants = {
    initial: { opacity: 0, y: 20, x: -20 },
    whileInView: (i) => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: { delay: i * 0.2, duration: isSmallScreen ? 0.02 : 0.5 },
    }),
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id={navID}>
      <Grid
        container
        sx={{
          minHeight: secHeight,
          alignContent: "flex-start",
        }}
      >
        <Grid item xs={12} py={3}>
          <Typography variant="h4" textAlign={"center"}>
            My <BlueSpan>Skills</BlueSpan>
          </Typography>
        </Grid>
        <Grid item container spacing={2}>
          {skillData?.map(({ name, imgURL }, i) => (
            <Grid item key={name} xs={6} sm={3} lg={2}>
              <MotionStack
                gap={1}
                sx={{
                  height: 1,
                  p: 1,
                  "&:hover": {
                    boxShadow: (theme) =>
                      `0px 0px 4px 4px ${theme.palette.primary.main}`,
                  },
                }}
                custom={i}
                variants={variants}
                initial="initial"
                whileInView="whileInView"
                whileHover="whileHover"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Box
                  sx={{
                    height: 80,
                    width: 1,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component={"img"}
                    sx={{
                      maxInlineSize: "80%",
                      blockSize: "auto",
                      objectFit: "contain",
                    }}
                    src={imgURL}
                    alt={name}
                  />
                </Box>
                <Typography variant="h6" textAlign={"center"}>
                  {name}
                </Typography>
              </MotionStack>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </section>
  )
}

export default Skills
