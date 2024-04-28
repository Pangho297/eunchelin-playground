import { Map } from "@/components/KakaoMap";
import * as S from "../playground.style";
import { useEffect, useRef, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";

export default function PlaygroundMap() {
  const mapRef = useRef<kakao.maps.Map>(null);
  const [center, setCenter] = useState<{
    lat: number;
    lng: number;
  }>();
  const [level, setLevel] = useState(8);

  const handleClick = (pos: { lat: number; lng: number }) => {
    setCenter(pos);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      setCenter({ lat, lng });
    });
  }, []);

  return (
    <S.CollapseContainer gap={2}>
      <Stack sx={{ height: "800px" }}>
        {center ? (
          <Map ref={mapRef} center={center} level={level} />
        ) : (
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ height: "100%" }}
          >
            <Typography variant="h3" color="error">
              위치 정보 제공을 허용해주세요!
            </Typography>
          </Stack>
        )}
      </Stack>
      <Stack direction="row" gap={2}>
        <Button
          fullWidth
          onClick={() =>
            handleClick({
              lat: 37.5008958,
              lng: 126.6746475,
            })
          }
        >
          좌표이동1
        </Button>
        <Button
          fullWidth
          onClick={() =>
            handleClick({
              lat: 37.4603678,
              lng: 126.6746191,
            })
          }
        >
          좌표이동2
        </Button>
        <Button
          fullWidth
          onClick={() =>
            handleClick({
              lat: 37.5352519,
              lng: 126.7228935,
            })
          }
        >
          좌표이동3
        </Button>
      </Stack>
      <Stack direction="row" gap={2}>
        <Button
          fullWidth
          color="success"
          onClick={() => setLevel((prev) => prev - 1)}
        >
          확대
        </Button>
        <Button
          fullWidth
          color="error"
          onClick={() => setLevel((prev) => prev + 1)}
        >
          축소
        </Button>
      </Stack>
    </S.CollapseContainer>
  );
}
