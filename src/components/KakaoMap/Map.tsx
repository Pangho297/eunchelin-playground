import { Nullable } from "@/types/common";
import { PropsWithChildren, useLayoutEffect, useRef, useState } from "react";
import useGetCurrentLocation from "./hooks/useGetCurrnetLocation";
import { Stack, SxProps, Theme } from "@mui/material";
import { useReactiveVar } from "@apollo/client";
import { createMapVar, mapVar } from "@/stores/mapStore";

interface MapProps
  extends Omit<kakao.maps.MapOptions, "center">,
    PropsWithChildren {
  center?: kakao.maps.MapOptions["center"];
  id?: string;
  sx?: SxProps<Theme>;
}

export default function _Map({
  children,
  center,
  id = "eunchelin-map",
  sx,
  ...rest
}: MapProps) {
  const createMap = useReactiveVar(createMapVar);
  const map = useReactiveVar(mapVar);

  const myLocation = useGetCurrentLocation();

  const initMap = () => {
    if (typeof myLocation === "string") return;

    const mapContainer = document.getElementById(id);

    const mapOptions: kakao.maps.MapOptions = {
      center:
        center !== undefined
          ? center
          : new kakao.maps.LatLng(myLocation.latitude, myLocation.longitude),
      level: 3,
      ...rest,
    };

    const _map = new kakao.maps.Map(mapContainer as HTMLElement, mapOptions);

    // 지도 축척 및 로고 위치 변경
    _map.setCopyrightPosition(kakao.maps.CopyrightPosition.BOTTOMRIGHT, true);

    // 지도 객체 전역 상태로 저장
    createMap(_map);
  };

  useLayoutEffect(() => {
    kakao.maps.load(() => initMap());
  }, [myLocation]);

  return (
    <Stack id={id} sx={{ height: "100%", ...sx }}>
      {map && <>{children}</>}
    </Stack>
  );
}
