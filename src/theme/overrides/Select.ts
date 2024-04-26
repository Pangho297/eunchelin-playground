import { Components, Theme } from "@mui/material";

export default function Select(theme: Theme) {
  return {
    MuiSelect: {
      defaultProps: {
        size: "medium",
      },

      styleOverrides: {
        root: {
          ...theme.typography.bodySS,
          height: 34,
          "& .MuiSelect-select": {
            padding: "8px 32px 8px 14px",
            "&.Mui-disabled": {
              backgroundColor: theme.palette.action.disabledBackground,
            },
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          ".Mui-focusVisible": {
            backgroundColor: "unset",
          },
        },
        list: {
          padding: 0,
        },
        paper: {
          marginTop: 8,
          boxShadow: "none",
          borderRadius: 8,
          border: "1px solid",
          borderColor: theme.palette.tertiary,
        },
      },
    },
  } as Components;
}
