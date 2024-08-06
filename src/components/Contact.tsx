import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemText from "@mui/material/ListItemText"
import { CommonProps } from "../App.props"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import EmailIcon from "@mui/icons-material/Email"
import { emailID, linkedInProfile, myAddress } from "../utils/constants"
import { BlueSpan, CustomAvatar } from "../styles/styledComponents"
import Footer from "./Footer"
import { Variants, m } from "framer-motion"
import ListItemButton from "@mui/material/ListItemButton"
import List from "@mui/material/List"

const Contact = ({ secHeight, navID }: CommonProps) => {
  let variants: Variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section id={navID}>
      <Grid
        container
        sx={{
          minHeight: secHeight,
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Grid
          item
          container
          alignContent={"center"}
          justifyContent={"center"}
          flexGrow={1}
        >
          <Grid item xs={12} py={3} textAlign={"center"}>
            <Typography variant="h4">
              Let's <BlueSpan>connect!</BlueSpan>
            </Typography>
            <Typography mt={1}>
             Do you have a  <BlueSpan>Question</BlueSpan>
            </Typography>
            <Typography>
              or need a copy of my <BlueSpan>résumé</BlueSpan>? Reach out to me through the links below.
            </Typography>
          </Grid>
          <Grid item sx={{ bgcolor: "background.default" }}>
            <List
              component={m.ul}
              variants={variants}
              initial="initial"
              whileInView={"whileInView"}
              viewport={{ once: true, amount: 0.5 }}
            >
              <ListItemButton
                component={m.a}
                variants={variants}
                href={`mailto:${emailID}`}
                sx={{
                  border: 3,
                  borderRadius: 2,
                  borderColor: "transparent",
                  "&:hover": {
                    borderColor: "primary.main",
                  },
                }}
              >
                <ListItemAvatar>
                  <CustomAvatar>
                    <EmailIcon fontSize="large" />
                  </CustomAvatar>
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{ pl: 2, variant: "h6" }}
                  primary={"Send an Email"}
                />
              </ListItemButton>
              <ListItemButton
                component={m.a}
                variants={variants}
                href={linkedInProfile}
                target="_blank"
                rel="noopener"
                sx={{
                  border: 3,
                  borderRadius: 2,
                  borderColor: "transparent",
                  "&:hover": {
                    borderColor: "primary.main",
                  },
                }}
              >
                <ListItemAvatar>
                  <CustomAvatar>
                    <LinkedInIcon fontSize="large" />
                  </CustomAvatar>
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{ pl: 2, variant: "h6" }}
                  primary="Connect on LinkedIn"
                />
              </ListItemButton>
              <ListItemButton
                component={m.a}
                variants={variants}
                sx={{
                  border: 3,
                  borderRadius: 2,
                  borderColor: "transparent",
                  pointerEvents: "none",
                  "&:hover": {
                    borderColor: "primary.main",
                  },
                }}
              >
                <ListItemAvatar>
                  <CustomAvatar>
                    <LocationOnIcon fontSize="large" />
                  </CustomAvatar>
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{ pl: 2, variant: "h6" }}
                  primary={myAddress}
                />
              </ListItemButton>
            </List>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ height: "fit-content" }}>
          <Footer />
        </Grid>
      </Grid>
    </section>
  )
}

export default Contact
