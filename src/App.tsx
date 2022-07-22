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
import { grey } from "@mui/material/colors";
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

function App() {
  useEffect(() => {
    AOS.init({ startEvent: "load", once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lypher: Universal Game Companion | Download today</title>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
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
              <Typography variant="h3" sx={{ textAlign: "left" }}>
                Get this app
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "left" }}>
                Voluptas quo quibusdam corrupti aut rerum perspiciatis. Et nihil
                nulla libero modi ut et. Vero eveniet sequi delectus eius
                similique. Et magni a cumque assumenda iste.
              </Typography>

              <Typography
                variant="body1"
                sx={{ textAlign: "left", marginTop: 2 }}
              >
                Rem recusandae quisquam quam voluptatum iste sit est.
              </Typography>
              <Box sx={{ marginTop: 5 }}>
                <Button variant="contained" startIcon={<AppleIcon />}>
                  Download
                </Button>
              </Box>
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
        </Container>
      </Paper>
    </>
  );
}

export default App;
