import { Components, Theme } from "@mui/material";

export default function Radio(theme: Theme) {
  return {
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 6.5,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  } as Components;
}
