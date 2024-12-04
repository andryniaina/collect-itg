import { frFR } from "@mui/material/locale";
import MainRoutes from "./routes/Routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthProvider } from "./services/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>      
        <AuthProvider>
          <MainRoutes />
        </AuthProvider>      
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
