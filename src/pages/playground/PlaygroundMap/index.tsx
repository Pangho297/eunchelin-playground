import * as S from "../playground.style";
import { useEffect, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import postcodeConfig from "@/utils/postcodeConfig";
import MapWrapper from "@/components/MapWrapper";
import Input from "@/components/Input";
import { Map } from "@/components/KakaoMap";
import { useReactiveVar } from "@apollo/client";
import { mapVar } from "@/stores/mapStore";

export default function PlaygroundMap() {
  const [center, setCenter] = useState<{
    lat: number;
    lng: number;
  }>();
  const open = useDaumPostcodePopup();
  const map = useReactiveVar(mapVar);

  const handleClick = (pos: { lat: number; lng: number }) => {
    const { lat, lng } = pos;
    if (!map) return;
    map.panTo(new kakao.maps.LatLng(pos.lat, pos.lng));
    setCenter({ lat, lng });
  };

  const handleZoom = (type: "zoom" | "zoomOut") => {
    if (!map) return;
    if (type === "zoom") {
      const currentLevel = map.getLevel();
      map.setLevel(currentLevel - 1);
      return;
    }

    if (type === "zoomOut") {
      const currentLevel = map.getLevel();
      map.setLevel(currentLevel + 1);
      return;
    }
  };

  const onComplete = (address: Address) => {
    if (!map) return;
    const geocoder = new kakao.maps.services.Geocoder();
    const keyword = address.address;
    geocoder.addressSearch(keyword, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const lat: number = parseFloat(result[0].y);
        const lng: number = parseFloat(result[0].x);
        map.panTo(new kakao.maps.LatLng(lat, lng));
        map.setLevel(1);
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
        <MapWrapper>
          <Map />
        </MapWrapper>
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
        <Button fullWidth color="success" onClick={() => handleZoom("zoom")}>
          확대
        </Button>
        <Button fullWidth color="error" onClick={() => handleZoom("zoomOut")}>
          축소
        </Button>
      </Stack>
      <Button color="secondary" onClick={handleSearchAddress}>
        지도 검색 주소 좌표 지정
      </Button>
    </S.CollapseContainer>
  );
}
