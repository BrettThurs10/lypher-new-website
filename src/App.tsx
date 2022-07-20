import NavBar from "./components/NavBar";
import "./App.css";
import { Container, Paper, Typography, Toolbar, Box } from "@mui/material";

import Screenies from "./components/Screenies";

function App() {
  return (
    <Paper style={{ flex: 1, display: "flex", height: "100vh" }} square>
      <NavBar />
      <Container sx={{ position: "relative" }}>
        <Toolbar />
        <Screenies />
      </Container>
    </Paper>
  );
}

export default App;
