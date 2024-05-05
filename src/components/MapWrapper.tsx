import { Stack, SxProps, Theme } from "@mui/material";
import { PropsWithChildren } from "react";

type MapWrapperProps = {
  id?: string;
  width?: string | number;
  height?: string | number;
  sx?: SxProps<Theme>;
} & PropsWithChildren;

export default function MapWrapper({
  id = "kakao-map",
  width = "100%",
  height = "100%",
  sx,
  children,
}: MapWrapperProps) {
  return (
    <Stack
      id={id}
      sx={{
        position: "relative",
        width,
        height,
        ...sx,
      }}
    >
      {children}
    </Stack>
  );
}
