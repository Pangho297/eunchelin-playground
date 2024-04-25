import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <Stack sx={{ height: "100dvh" }}>
      <Outlet />
    </Stack>
  );
}
