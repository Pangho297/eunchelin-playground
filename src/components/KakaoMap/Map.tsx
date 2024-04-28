import { Stack, SxProps, Theme } from "@mui/material";
import {
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  useLayoutEffect,
  useState,
} from "react";
import * as K from "react-kakao-maps-sdk";

interface MapProps extends PropsWithChildren {
  id?: string;
  /** 지도 중심 좌표 */
  center: {
    lat: number;
    lng: number;
  };
  /** 지도 확대 축소 정도 */
  level?: number;
  sx?: SxProps<Theme>;
}

export default forwardRef(function Map(
  { children, id = "kakao-map", center, level = 8, sx }: MapProps,
  ref: ForwardedRef<kakao.maps.Map>
) {
  return (
    <Stack
      id={id}
      sx={{ position: "relative", width: "100%", height: "100%", ...sx }}
    >
      <K.Map
        center={center}
        style={{ width: "100%", height: "100%" }}
        level={level}
        isPanto
      >
        {children}
      </K.Map>
    </Stack>
  );
});
