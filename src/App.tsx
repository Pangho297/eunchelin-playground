import { RouterProvider } from "react-router-dom";
import router from "@/routers";
import ThemeProvider from "./theme";
import SnackbarProvider from "./components/Snackbar";
import ModalContainer from "./components/Modal/ModalContainer";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { koKR } from "@mui/x-date-pickers/locales/koKR";
import "dayjs/locale/ko";

function App() {
  return (
    <ThemeProvider>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale="ko"
        localeText={
          koKR.components.MuiLocalizationProvider.defaultProps.localeText
        }
      >
        <SnackbarProvider>
          <RouterProvider router={router} />
          <ModalContainer />
        </SnackbarProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
