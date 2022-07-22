import NavBar from "./components/NavBar";
import "./App.css";
import {
  Container,
  Paper,
  Typography,
  Toolbar,
  Box,
  Stack,
  Button,
} from "@mui/material";
import React, { useEffect } from "react";
import AppleIcon from "@mui/icons-material/Apple";
import Screenies from "./components/Screenies";
import screen from "./img/screenshots/main.png";
import editPlayer from "./img/screenshots/editPlayer.png";
import resources from "./img/screenshots/resources.png";
import dice from "./img/screenshots/dice.png";
import tutorial from "./img/screenshots/tutorial.png";
import archiveGame from "./img/screenshots/archiveGame.png";
import settings from "./img/screenshots/settings.png";
import menu from "./img/screenshots/menu.png";
import { Helmet } from "react-helmet";
import Feature from "./components/Feature";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import CaseStudies from "./components/CaseStudies";
import PrivacyPolicyModal from "./components/PrivacyPolicyModal";
import MailDialog from "./components/MailDialog";
import { Icon } from "@iconify/react";

function App() {
  useEffect(() => {
    AOS.init({ startEvent: "load", once: true });
    AOS.refresh();
  }, []);
  const [open, setOpen] = React.useState(false);
  const [mailOpen, setMailOpen] = React.useState(false);
  const handleMailClose = () => {
    setMailOpen(!mailOpen);
  };
  const handleClose = () => {
    setOpen(!open);
  };
  React.useEffect(() => {
    if (window.location.href.indexOf("privacy-policy") !== -1) {
      setOpen(true);
    }
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lypher: Universal Game Companion | Download today</title>
        <meta
          name="description"
          content=" Lypher is a companion app to board games or tabletop sessions.
                Get into the game faster with this handy dandy tool. Track
                resources/score, arrange player list, color coordinate players,
                roll dice and archive game sessions."
        />
        <meta property="og:title" content="Lypher: Universal Game Companion" />
        <meta
          property="og:description"
          content="Lypher is a companion app to board games or tabletop sessions.
                Get into the game faster with this handy dandy tool. Track
                resources/score, arrange player list, color coordinate players,
                roll dice and archive game sessions."
        />

        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <Paper
        style={{
          flex: 1,
          display: "flex",
          height: "100vh",
          flexDirection: "column",
        }}
        square
      >
        <NavBar />
        <Container
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <Toolbar />
          <Stack
            sx={{
              display: "flex",
              flex: 1,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Screenies />
            </Box>
            <Stack
              sx={{
                flex: 1,
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Typography gutterBottom variant="h4" sx={{ textAlign: "left" }}>
                Meet your new game buddy
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "left" }}>
                Lypher is a companion app to board games or tabletop sessions.
                Get into the game faster with this handy dandy tool. Track
                resources/score, arrange player list, color coordinate players,
                roll dice and archive game sessions.
              </Typography>

              <Stack sx={{ marginTop: 5, flexDirection: "row" }}>
                <Button
                  color="secondary"
                  sx={{ mr: 2 }}
                  rel="noreferrer"
                  target="_blank"
                  href="https://apps.apple.com/us/app/lypher/id1526420861"
                  variant="contained"
                  startIcon={<AppleIcon />}
                >
                  Download
                </Button>
                <Button
                  rel="noreferrer"
                  target="_blank"
                  href="https://discord.gg/Dydu9FHU"
                  variant="contained"
                  startIcon={<Icon icon="simple-icons:discord" />}
                >
                  Join the Discord
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Paper>
      <Paper>
        <Container sx={{ pt: 2, pb: 2 }}>
          <Stack
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              flexWrap: "wrap",
            }}
          >
            <Feature
              l
              src={screen}
              text="Keep track of your players and their resources."
              alt="Main counter screenshot"
            />
            <Feature
              r
              src={editPlayer}
              text="Edit player names, colors and order."
              alt="Edit player mode screenshot"
            />
          </Stack>
          <Stack
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              flexWrap: "wrap",
            }}
          >
            <Feature
              l
              src={resources}
              text="Choose from a variety of resources."
              alt="Resources screenshot"
            />
            <Feature
              r
              src={dice}
              text="Roll d4 to d20 dice."
              alt="Dice roller screenshot"
            />
          </Stack>
          <Stack
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              flexWrap: "wrap",
            }}
          >
            <Feature
              l
              src={tutorial}
              text="Let Lyphernaut give you a tutorial."
              alt="Tutorial screenshot"
            />
            <Feature
              r
              src={archiveGame}
              text="Archive your game sessions."
              alt="Archive games screenshot"
            />
          </Stack>
          <Stack
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              flexWrap: "wrap",
            }}
          >
            <Feature
              l
              src={settings}
              text="Toggle features on and off with Settings."
              alt="Tutorial screenshot"
            />

            <Feature
              r
              src={menu}
              // textOnly
              text="More features to come!"
              alt="More features to comes."
            />
          </Stack>
          <CaseStudies />
          <Stack
            sx={{
              flexDirection: { xs: "column-reverse", sm: "row" },
              justifyContent: "space-between",
              paddingBottom: 10,

              alignItems: { xs: "center", sm: "flex-start" },
            }}
          >
            <Typography variant="body2">
              Made in a super secret lair at Super Moon Base.
            </Typography>
            <Stack flexDirection="row">
              <Button
                color="secondary"
                onClick={() => setOpen(!open)}
                variant="text"
              >
                Privacy policy
              </Button>
              <Button
                color="secondary"
                onClick={() => setMailOpen(!mailOpen)}
                variant="text"
              >
                Contact{" "}
              </Button>
            </Stack>
          </Stack>
        </Container>
        <PrivacyPolicyModal open={open} handleClose={handleClose} />
        <MailDialog open={mailOpen} handleClose={handleMailClose} />
      </Paper>
    </>
  );
}

export default App;
