import { Components, Theme } from "@mui/material";

export default function Checkbox(theme: Theme) {
  return {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 6.5,
          "&:hover": {
            backgroundColor: theme.palette.grey[100],
          },
        },
      },
    },
  } as Components;
}
