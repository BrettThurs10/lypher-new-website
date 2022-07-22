import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

export const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    mode: "dark",
  },
  typography: {
    h6: {
      fontFamily: "Dela Gothic One",
    },
    h3: {
      fontFamily: "Nunito Sans",
    },
  },
});
