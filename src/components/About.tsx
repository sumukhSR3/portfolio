import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import Link from "@mui/material/Link"
import { CommonProps } from "../App.props"
import { BlueSpan } from "../styles/styledComponents"
import { aboutData, experience } from "../utils/data"
import SchoolIcon from "@mui/icons-material/School"
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium"
import { Player } from "@lottiefiles/react-lottie-player"
import { Variants, m } from "framer-motion"
import useMediaQuery from "@mui/material/useMediaQuery"
import { Theme } from "@mui/material/styles"

const About = ({ secHeight, navID }: CommonProps) => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  )
  let variants: Variants = isSmallScreen
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
      }
    : {
        initial: { opacity: 0, x: 50 },
        whileInView: {
          opacity: 1,
          x: 0,
          transition: { delay: 0.3 },
        },
      }

  return (
    <section id={navID}>
      <Grid container sx={{ minHeight: secHeight, alignContent: "flex-start" }}>
        <Grid item xs={12} py={3}>
          <Typography variant="h4" textAlign={"center"}>
            Let Me <BlueSpan>Introduce Myself</BlueSpan>
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Player
            src={
              "https://lottie.host/49f9657b-0967-40e8-a5cf-4a8835262ff8/3DV7zJE7j0.json"
            }
            autoplay
            loop
            className="lottie-player"
          />
        </Grid>
        <Grid item md={7} overflow={"hidden"}>
          <Typography
            variant="body1"
            component={m.p}
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <b>
            I'm Sumukh, a professional data analyst. I am a data wizard with a knack for building innovative solutions by leveraging data. My expertise spans cloud computing, data engineering, data analytics, and machine learning. This versatile skill set allows me to seamlessly integrate and manage data pipelines, analyze complex datasets, and develop predictive models. Proficient in R and Python, I utilize tools like pandas for data manipulation, numpy for numerical computations, Torch for deep learning models, and VS Code for seamless development.
            </b><b>
What excites me most is the interconnected nature of these fields—how cloud computing enables scalable data storage and processing, data engineering ensures robust data pipelines, data analytics uncovers actionable insights, and machine learning drives predictive power. My passion lies in exploring these intersections to unlock the full potential of data.
            </b><b>
I thrive in collaborative environments, driving impactful insights and decisions. My strong ethical foundation ensures integrity in all my work. I invite you to join me in this data journey, where curiosity and innovation lead to transformative solutions. Thank you!
            </b>
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            gap={{ xs: 2, md: 3 }}
            pt={2}
          >
            <Box sx={{ flex: 1 }}>
              <Paper variant="outlined" sx={{ p: 2, height: 1 }}>
                <Box
                  sx={{
                    display: "inline-flex",
                    gap: 1,
                    alignItems: "center",
                  }}
                >
                  <SchoolIcon color="primary" fontSize="large" />
                  <Typography variant="h6">Education</Typography>
                  </Box>
                  {aboutData?.education?.map((edu, index) => (
                   <Box key={index} sx={{ mt: 2 }}>
                    <Typography fontWeight={"bold"} gutterBottom>
                      {edu.title}
                      </Typography>
                      <Typography>
                        <Link
                        color={"inherit"}
                        underline="hover"
                        href={edu.link}
                        target="_blank"
                        rel="noopener"
                        >
                          {edu.subtitle}
                        </Link>
                      </Typography>
                   </Box>
                        ))}
                        </Paper>
                   </Box> 
          </Stack>
        </Grid>
      </Grid>
    </section>
  )
}

export default About
