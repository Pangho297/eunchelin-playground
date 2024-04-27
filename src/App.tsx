import { RouterProvider } from "react-router-dom";
import router from "@/routers";
import ThemeProvider from "./theme";
import SnackbarProvider from "./components/Snackbar";
import ModalContainer from "./components/Modal/ModalContainer";

function App() {
  return (
    <ThemeProvider>
      <SnackbarProvider>
        <RouterProvider router={router} />
        <ModalContainer />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
