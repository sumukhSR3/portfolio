import { CommonProps } from "../App.props"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { projectData } from "../utils/data"
import GitHubIcon from "@mui/icons-material/GitHub"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import { BlueSpan } from "../styles/styledComponents"
import MotionCard from "../motion/MotionCard"
import { Variants, m } from "framer-motion"
import Box from "@mui/material/Box"

const Projects = ({ secHeight, navID }: CommonProps) => {
  let imgVariants: Variants = {
    initial: { x: -100, opacity: 0 },
    whileInView: {
      x: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: { type: "spring" },
    },
  }
  let textVariants: Variants = {
    initial: { y: 100, opacity: 0 },
    whileInView: {
      y: 0,
      opacity: 1,
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
            Personal <BlueSpan>Projects</BlueSpan>
          </Typography>
        </Grid>
        <Grid item container spacing={5}>
          {projectData?.map(
            ({ name, description, githubURL, projectURL, imgURL }, i) => (
              <Grid item key={name} xs={12} sm={6} md={4}>
                <MotionCard
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ staggerChildren: 0.5 }}
                  sx={{
                    display: "flex",
                    height: 1,
                    flexDirection: "column",
                    "&:hover": {
                      boxShadow: (theme) =>
                        `0px 0px 8px 8px ${theme.palette.primary.main}`,
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Box
                    component={m.img}
                    sx={{ width: 1, aspectRatio: "2.2" }}
                    title={name}
                    alt={name}
                    src={imgURL}
                    variants={imgVariants}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      component={m.h6}
                      variants={textVariants}
                      gutterBottom
                      variant="h6"
                    >
                      {name}
                    </Typography>
                    <Typography
                      component={m.p}
                      variants={textVariants}
                      variant="body2"
                      color="text.secondary"
                    >
                      {description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-evenly" }}>
                    <Button
                      disabled={!Boolean(projectURL)}
                      href={projectURL}
                      target="_blank"
                      rel="noopener"
                      color="primary"
                      startIcon={<OpenInNewIcon />}
                    >
                      Live Preview
                    </Button>
                    <Button
                      href={githubURL}
                      target="_blank"
                      rel="noopener"
                      color="primary"
                      startIcon={<GitHubIcon />}
                    >
                      View Code
                    </Button>
                  </CardActions>
                </MotionCard>
              </Grid>
            )
          )}
        </Grid>
      </Grid>
    </section>
  )
}

export default Projects
