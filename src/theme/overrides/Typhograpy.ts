import { Theme } from "@mui/material";

export default function Typography(theme: Theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: theme.palette.grey[900],
        },
      },
    },
  };
}
