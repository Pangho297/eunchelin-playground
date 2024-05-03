import { CSSObject, Components, Theme } from "@mui/material";

type ColorType = {
  main: string;
  text: string;
  hover: string;
  ripple: string;
};

export default function Button(theme: Theme) {
  const containedButton: (p: ColorType) => CSSObject = (p) => ({
    backgroundColor: p.main,
    color: p.text,
    ":hover": { backgroundColor: p.hover },
    "& .MuiTouchRipple-child": { backgroundColor: p.ripple },
  });

  const outlinedButton: (p: ColorType) => CSSObject = (p) => ({
    border: `1px solid ${p.main}`,
    backgroundColor: theme.palette.common.white,
    color: p.text,
    ":hover": { backgroundColor: p.hover },
    "& .MuiTouchRipple-child": { backgroundColor: p.ripple },
  });
  const textButton: (p: Omit<ColorType, "main">) => CSSObject = (p) => ({
    color: p.text,
    ":hover": { backgroundColor: p.hover },
    "& .MuiTouchRipple-child": { backgroundColor: p.ripple },
  });

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
        size: "medium",
      },
      variants: [
        {
          props: { size: "small" },
          style: { height: 34, ...theme.typography.buttonS },
        },
        {
          props: { size: "medium" },
          style: { height: 40, ...theme.typography.buttonM },
        },
        {
          props: { size: "large" },
          style: { height: 48, ...theme.typography.buttonL },
        },
        {
          props: { variant: "contained" },
          style: {
            "&.Mui-disabled": {
              border: "none !important",
            },
          },
        },
        {
          props: { variant: "text" },
          style: {
            "&.Mui-disabled": {
              backgroundColor: "transparent !important",
              border: "none !important",
            },
          },
        },
        //primary
        {
          props: { variant: "contained", color: "primary" },
          style: {
            ...containedButton({
              main: theme.palette.primary.main,
              text: theme.palette.primary.contrastText,
              hover: theme.palette.primary[600],
              ripple: theme.palette.primary[800],
            }),
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            ...outlinedButton({
              main: theme.palette.primary.main,
              text: theme.palette.primary.contrastText,
              hover: theme.palette.primary[100],
              ripple: theme.palette.primary[50],
            }),
          },
        },
        {
          props: { variant: "text", color: "primary" },
          style: {
            ...textButton({
              text: theme.palette.primary.contrastText,
              hover: theme.palette.primary[100],
              ripple: theme.palette.primary[50],
            }),
          },
        },
        // secondary
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            ...containedButton({
              main: theme.palette.secondary.main,
              text: theme.palette.secondary.contrastText,
              hover: theme.palette.secondary[200],
              ripple: theme.palette.secondary[100],
            }),
          },
        },
        {
          props: { variant: "outlined", color: "secondary" },
          style: {
            ...outlinedButton({
              main: theme.palette.secondary.main,
              text: theme.palette.secondary.contrastText,
              hover: theme.palette.secondary[100],
              ripple: theme.palette.secondary[50],
            }),
          },
        },
        {
          props: { variant: "text", color: "secondary" },
          style: {
            ...textButton({
              text: theme.palette.secondary.main,
              hover: theme.palette.secondary[100],
              ripple: theme.palette.secondary[50],
            }),
          },
        },
        // success
        {
          props: { variant: "contained", color: "success" },
          style: {
            ...containedButton({
              main: theme.palette.success.main,
              text: theme.palette.success.contrastText,
              hover: theme.palette.success[200],
              ripple: theme.palette.success[100],
            }),
          },
        },
        {
          props: { variant: "outlined", color: "success" },
          style: {
            ...outlinedButton({
              main: theme.palette.success.main,
              text: theme.palette.success.contrastText,
              hover: theme.palette.success[100],
              ripple: theme.palette.success[50],
            }),
          },
        },
        {
          props: { variant: "text", color: "success" },
          style: {
            ...textButton({
              text: theme.palette.success.main,
              hover: theme.palette.success[100],
              ripple: theme.palette.success[50],
            }),
          },
        },
        // info
        {
          props: { variant: "contained", color: "info" },
          style: {
            ...containedButton({
              main: theme.palette.info.main,
              text: theme.palette.info.contrastText,
              hover: theme.palette.info[100],
              ripple: theme.palette.info[50],
            }),
          },
        },
        {
          props: { variant: "outlined", color: "info" },
          style: {
            ...outlinedButton({
              main: theme.palette.info.main,
              text: theme.palette.info.contrastText,
              hover: theme.palette.info[100],
              ripple: theme.palette.info[50],
            }),
          },
        },
        {
          props: { variant: "text", color: "info" },
          style: {
            ...textButton({
              text: theme.palette.info.main,
              hover: theme.palette.info[100],
              ripple: theme.palette.info[50],
            }),
          },
        },
        // error
        {
          props: { variant: "contained", color: "error" },
          style: {
            ...containedButton({
              main: theme.palette.error.main,
              text: theme.palette.error.contrastText,
              hover: theme.palette.error[800],
              ripple: theme.palette.error[900],
            }),
          },
        },
        {
          props: { variant: "outlined", color: "error" },
          style: {
            ...outlinedButton({
              main: theme.palette.error.main,
              text: theme.palette.error.contrastText,
              hover: theme.palette.error[100],
              ripple: theme.palette.error[50],
            }),
          },
        },
        {
          props: { variant: "text", color: "error" },
          style: {
            ...textButton({
              text: theme.palette.error.main,
              hover: theme.palette.error[100],
              ripple: theme.palette.error[50],
            }),
          },
        },
        // warning
        {
          props: { variant: "contained", color: "warning" },
          style: {
            ...containedButton({
              main: theme.palette.warning.main,
              text: theme.palette.warning.contrastText,
              hover: theme.palette.warning[500],
              ripple: theme.palette.warning[600],
            }),
          },
        },
        {
          props: { variant: "outlined", color: "warning" },
          style: {
            ...outlinedButton({
              main: theme.palette.warning.main,
              text: theme.palette.warning.contrastText,
              hover: theme.palette.warning[100],
              ripple: theme.palette.warning[50],
            }),
          },
        },
        {
          props: { variant: "text", color: "warning" },
          style: {
            ...textButton({
              text: theme.palette.warning.main,
              hover: theme.palette.warning[100],
              ripple: theme.palette.warning[50],
            }),
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: "none",
          padding: "4px 12px",
          "&.Mui-disabled": {
            backgroundColor: theme.palette.grey[100],
            color: "#b0b8c6",
            border: "1px solid #b0b8c6",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          ":hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: "'Noto Sans KR', serif",
        },
      },
    },
  } as Components;
}
