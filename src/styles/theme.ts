import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#E87461",
    },
    secondary: {
      main: "#E0C879",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
