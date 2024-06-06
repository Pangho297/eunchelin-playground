import { Button, Stack } from "@mui/material";

import Drawer from "@/components/Drawer";
import MapWrapper from "@/components/MapWrapper";
import Sidebar from "./Sidebar";
import { Map } from "@/components/KakaoMap";

export default function Home() {
  return (
    <Stack
      sx={{
        p: 2,
        pt: 0,
        minHeight: "calc(100dvh - 72px)",
        height: "100%",
      }}
    >
      <Stack
        direction="row"
        sx={(theme) => ({
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: theme.shadows[10],
        })}
      >
        <MapWrapper width="100%" height="calc(100dvh - 88px)">
          <Map />
          <Stack sx={{ position: "absolute", top: 0, left: 0, height: "100%" }}>
            <Drawer height="100%">
              <Stack
                sx={{
                  width: "100%",
                  height: "100%",
                  bgcolor: "common.white",
                  p: 2,
                }}
              >
                <Sidebar />
              </Stack>
            </Drawer>
          </Stack>
        </MapWrapper>
      </Stack>
    </Stack>
  );
}
