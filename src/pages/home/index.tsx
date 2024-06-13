import { Button, Stack } from "@mui/material";

import Drawer from "@/components/Drawer";
import MapWrapper from "@/components/MapWrapper";
import Sidebar from "./Sidebar";
import { Map } from "@/components/KakaoMap";
import MyPage from "./MyPage";
import * as S from "./home.style";

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
          <S.DrawerPosition sx={{ left: 0 }}>
            <Drawer height="100%">
              <S.DrawerWrapper>
                <Sidebar />
              </S.DrawerWrapper>
            </Drawer>
          </S.DrawerPosition>
          {true && (
            <S.DrawerPosition sx={{ right: 0 }}>
              <Drawer width={300} height="100%" dir="right" defaultOpen={false}>
                <S.DrawerWrapper>
                  <MyPage />
                </S.DrawerWrapper>
              </Drawer>
            </S.DrawerPosition>
          )}
        </MapWrapper>
      </Stack>
    </Stack>
  );
}
