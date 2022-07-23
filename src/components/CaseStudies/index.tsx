import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import dragon from "../../img/dragon.jpeg";
import { green, grey, purple, red } from "@mui/material/colors";
import lyphernaut from "../../img/lyphernaut.png";
import AppleIcon from "@mui/icons-material/Apple";

type Props = {};

const CaseStudies = (props: Props) => {
  return (
    <>
      <Paper
        data-aos="fade-right"
        elevation={16}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          background: purple[500],
          mt: 20,
          mb: 20,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardContent
            sx={{
              width: "100%",
            }}
          >
            <Box sx={{ padding: 4 }}>
              <Typography gutterBottom variant="h5" component="div">
                Lypher can have a seat at any game table.
              </Typography>
              <Typography gutterBottom variant="body2" color="text">
                Keep track of players, their scores and their resources at board
                game night.
              </Typography>
              <Typography gutterBottom variant="body2" color="text">
                Game masters can keep track of players, NPCs, initiative order
                and all the resources in their D&D or tabletop session.
              </Typography>
              <Typography gutterBottom variant="body2" color="text">
                Solo gamers will find set up and tear down faster since Lypher
                can handle all the table management for you.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="caption">
                  Photo by{" "}
                  <a
                    style={{ color: "white" }}
                    href="https://unsplash.com/@clintbustrillos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                  >
                    Clint Bustrillos
                  </a>{" "}
                  on{" "}
                  <a
                    style={{ color: "white" }}
                    href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                  >
                    Unsplash
                  </a>
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
        <Box sx={{ flex: 1, position: "relative" }}>
          <CardMedia
            loading="lazy"
            component="img"
            height="400"
            image={dragon}
            alt="dragon rpg game"
          />
        </Box>
      </Paper>
      <Paper
        data-aos="fade-left"
        elevation={16}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row-reverse" },
          background: green[500],
          mt: 20,
          mb: 20,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardContent
            sx={{
              width: "100%",
            }}
          >
            <Box sx={{ padding: 4 }}>
              <Typography gutterBottom variant="h5" component="div">
                Download Lypher on App Store.
              </Typography>
              <Typography gutterBottom variant="body2" color="text">
                Download Lypher on the App Store today. Lypher is available to
                download for FREE. Unlock the full version forever for just
                $0.99.
              </Typography>
              <Typography gutterBottom variant="body2" color="text">
                Additional features are coming soon!
              </Typography>
              <Box sx={{ marginTop: 5 }}>
                <Button
                  color="secondary"
                  rel="noreferrer"
                  target="_blank"
                  href="https://apps.apple.com/us/app/lypher/id1526420861"
                  variant="contained"
                  startIcon={<AppleIcon />}
                >
                  Download
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Box>
        <Box sx={{ flex: 1, position: "relative" }}>
          <CardMedia
            loading="lazy"
            component="img"
            height="400"
            image={lyphernaut}
            alt="lyphernaut"
          />
        </Box>
      </Paper>
    </>
  );
};

export default CaseStudies;
