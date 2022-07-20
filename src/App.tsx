import NavBar from "./components/NavBar";
import "./App.css";
import { Container, Paper, Typography, Toolbar, Box } from "@mui/material";
import screen from "./img/screenshots/main.png";
import space from "./img/space.jpeg";
import menu from "./img/screenshots/menu.png";
import resources from "./img/screenshots/resources.png";
import { useWindowSize } from "./hooks/useWindowSize";

function App() {
  const size = useWindowSize();
  const wrapperHeight = {
    lg: size.width / 3,
    md: size.width / 2.2,
    sm: size.width / 2.2,
    xs: size.width - 50,
  };
  const wrapperWidth = {
    lg: size.width / 3,
    md: size.width / 2.2,
    sm: size.width / 2.2,
    xs: size.width - 50,
  };
  return (
    <Paper style={{ flex: 1, display: "flex", height: "100vh" }} square>
      <NavBar />
      <Container>
        <Toolbar />
        <Typography>hey</Typography>
        <Box
          sx={{
            backgroundImage: `url(${space})`,
            backgroundSize: "cover",
            height: wrapperHeight,
            width: wrapperWidth,
            borderRadius: "100%",
            position: "relative",
            display: "flex",
            alignSelf: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${screen})`,
              backgroundSize: "cover",
              height: {
                lg: size.width / 2.7,
                md: size.width / 2.2,
                sm: size.width / 2,
                xs: size.width / 1.06,
              },
              width: {
                lg: size.width / 5.8,
                md: size.width / 4.7,
                sm: size.width / 4.2,
                xs: size.width / 2.2,
              },
              borderRadius: 2,
              position: "absolute",
              zIndex: 10,
            }}
          />
          <Box
            sx={{
              backgroundImage: `url(${space})`,
              backgroundSize: "cover",
              height: {
                lg: size.width / 2.7,
                md: size.width / 2.2,
                sm: size.width / 2,
                xs: size.width / 1.06,
              },
              width: {
                lg: size.width / 5.8,
                md: size.width / 4.7,
                sm: size.width / 4.2,
                xs: size.width / 2.2,
              },
              borderRadius: "100%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${menu})`,
                backgroundSize: "cover",
                height: {
                  lg: size.width / 4,
                  md: size.width / 2.8,
                  sm: size.width / 3,
                  xs: size.width / 1.2,
                },
                width: {
                  lg: size.width / 8,
                  md: size.width / 6,
                  sm: size.width / 6.5,
                  xs: size.width / 2.8,
                },
                borderRadius: 2,
                position: "absolute",
                zIndex: 9,
                right: { xl: 200, lg: 160, md: 120, sm: 100, xs: 120 },
                top: { xl: 80, lg: 70, md: 60, sm: 35, xs: 20 },
              }}
            />
            <Box
              sx={{
                backgroundImage: `url(${resources})`,
                backgroundSize: "cover",
                height: {
                  lg: size.width / 4,
                  md: size.width / 2.8,
                  sm: size.width / 3,
                  xs: size.width / 1.2,
                },
                width: {
                  lg: size.width / 8,
                  md: size.width / 6,
                  sm: size.width / 6.5,
                  xs: size.width / 2.8,
                },
                borderRadius: 2,
                position: "absolute",
                zIndex: 9,
                left: { xl: 200, lg: 160, md: 120, sm: 100, xs: 120 },
                top: { xl: 80, lg: 70, md: 60, sm: 35, xs: 20 },
              }}
            />
          </Box>
        </Box>
      </Container>
    </Paper>
  );
}

export default App;
