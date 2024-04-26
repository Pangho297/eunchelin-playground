import { Components, Theme } from "@mui/material";

export default function FormHelperText(_: Theme) {
  return {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: "4px 12px",
          fontSize: "12px",
          fontWeight: 400,
        },
      },
    },
  } as Components;
}
