import { Theme } from "@mui/material";

export default function DatePicker(theme: Theme) {
  return {
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          minWidth: "320px",
          width: "100%",
          boxShadow: theme.shadows[10],
          borderRadius: 20,
        },
      },
    },
  };
}
