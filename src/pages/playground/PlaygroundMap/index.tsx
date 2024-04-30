import * as K from "react-kakao-maps-sdk";
import * as S from "../playground.style";
import { useEffect, useRef, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import postcodeConfig from "@/utils/postcodeConfig";
import MapWrapper from "@/components/MapWrapper";
import Input from "@/components/Input";

export default function PlaygroundMap() {
  K.useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY,
    id: "test-kakao-map",
    libraries: ["services"],
  });

  const mapRef = useRef<kakao.maps.Map>(null);
  const [center, setCenter] = useState<{
    lat: number;
    lng: number;
  }>();
  const [level, setLevel] = useState(8);
  const open = useDaumPostcodePopup();

  const handleClick = (pos: { lat: number; lng: number }) => {
    setCenter(pos);
  };

  const onComplete = (address: Address) => {
    const geocoder = new kakao.maps.services.Geocoder();
    const keyword = address.address;

    geocoder.addressSearch(keyword, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const lat: number = parseFloat(result[0].y);
        const lng: number = parseFloat(result[0].x);

        setCenter({ lat, lng });
        setLevel(1);
      }
    });
  };

  const handleSearchAddress = () => {
    open({
      ...postcodeConfig,
      onComplete,
    });
  };

  useEffect(() => {
    if (!center) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        setCenter({ lat, lng });
      });
    }
  }, [center]);

  return (
    <S.CollapseContainer gap={2}>
      <Stack sx={{ height: "800px" }}>
        {center ? (
          <MapWrapper>
            <K.Map
              ref={mapRef}
              center={center}
              style={{ width: "100%", height: "100%" }}
              level={level}
              onZoomChanged={(target) => {
                const level = target.getLevel();
                setLevel(level);
              }}
              isPanto
            />
          </MapWrapper>
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
      <Stack direction="row" gap={1} sx={{ width: "100%" }}>
        <Stack sx={{ width: "100%" }} gap={0.5}>
          <Typography variant="bodySS" sx={{ color: "grey.400" }}>
            위도
          </Typography>
          <Input value={center?.lat} />
        </Stack>
        <Stack sx={{ width: "100%" }} gap={0.5}>
          <Typography variant="bodySS" sx={{ color: "grey.400" }}>
            경도
          </Typography>
          <Input value={center?.lng} />
        </Stack>
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
      <Button color="secondary" onClick={handleSearchAddress}>
        지도 검색 주소 좌표 지정
      </Button>
    </S.CollapseContainer>
  );
}
