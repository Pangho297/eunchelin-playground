import { RouterProvider } from "react-router-dom";
import router from "@/routers";
import { useAxiosInterceptor } from "./utils/axiosInstance";
import ThemeProvider from "./theme";

function App() {
  useAxiosInterceptor();

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
