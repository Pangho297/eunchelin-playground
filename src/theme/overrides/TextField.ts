import { Components, Theme } from "@mui/material";

export default function TextField(theme: Theme) {
  return {
    MuiTextField: {
      defaultProps: {
        size: "medium",
      },
      styleOverrides: {
        root: {
          ".MuiInputBase-root": {
            ...theme.typography.bodySS,
            height: 34,

            "&.Mui-disabled": {
              backgroundColor: theme.palette.action.disabledBackground,
            },
            ".MuiInputBase-input": {
              padding: "8px 12px",
            },
            "&.MuiInputBase-multiline": {
              height: "auto",
            },
          },
        },
      },
    },
  } as Components;
}
