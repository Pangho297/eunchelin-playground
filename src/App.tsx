import { RouterProvider } from "react-router-dom";
import router from "@/routers";
import ThemeProvider from "./theme";
import SnackbarProvider from "./components/Snackbar";

function App() {
  return (
    <ThemeProvider>
      <SnackbarProvider>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
