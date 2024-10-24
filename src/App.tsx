import { frFR } from "@mui/material/locale";
import MainRoutes from "./routes/Routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#454A52",
      },
    },
  },
  frFR
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainRoutes />
    </ThemeProvider>
  );
}

export default App;
