import { Button, Stack } from "@mui/material";
import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as K from "react-kakao-maps-sdk";

import Drawer from "@/components/Drawer";
import MapWrapper from "@/components/MapWrapper";
import Sidebar from "./Sidebar";

export default function Home() {
  const [center, setCenter] = useState<{ lat: number; lng: number }>();
  const [level, setLevel] = useState<number>(6);

  const mapRef = useRef<kakao.maps.Map>(null);
  const navigate = useNavigate();

  K.useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY,
    id: "eumchelin-map",
    libraries: ["services"],
  });

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
        <Drawer>
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
        <MapWrapper width="100%" height="calc(100dvh - 88px)">
          <K.Map
            ref={mapRef}
            center={center || { lat: 37.5238506, lng: 126.9804702 }}
            style={{ width: "100%", height: "100%" }}
            level={level}
            onZoomChanged={(target) => {
              const level = target.getLevel();
              setLevel(level);
            }}
            isPanto
          />
        </MapWrapper>
      </Stack>
    </Stack>
  );
}
