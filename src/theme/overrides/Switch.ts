import { Components, Theme } from "@mui/material";

export default function Switch(_: Theme) {
  return {
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: "6px",

          // size: small
          "&.MuiSwitch-sizeSmall": {
            padding: "2px",
            ".MuiSwitch-track": {
              borderRadius: "10px",
            },
          },
        },
        track: {
          borderRadius: "12px",
        },
      },
    },
  } as Components;
}
