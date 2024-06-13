import { Box, Stack, styled, SwipeableDrawer, Theme } from "@mui/material";

type DrawerDir = { dir: "top" | "right" | "bottom" | "left" };

type DrawerBoxProps = {
  open: boolean;
  height?: string | number;
} & DrawerDir;

type DrawerProps = {
  width: number;
} & DrawerDir;

type SwipeButtonProps = {
  bleedingWidth: number;
} & DrawerDir;

const dirLeft = {
  root: (width: number, open?: boolean) => ({
    width: open ? `${width}px` : 0,
  }),
  paper: (width: number, open?: boolean) => ({
    width: open ? `${width}px` : 0,
  }),
  button: (theme: Theme, bleedingWidth: number) => ({
    width: bleedingWidth,
    height: 50,
    borderRadius: `0 ${theme.spacing(1)} ${theme.spacing(1)} 0`,
    right: -bleedingWidth,
    top: "calc(50%)",
    transform: "translateY(-50%)",
  }),
};

const dirRight = {
  root: (width: number, open?: boolean) => ({
    width: open ? `${width}px` : 0,
  }),
  paper: (width: number, open?: boolean) => ({
    width: open ? `${width}px` : 0,
    border: "none",
  }),
  button: (theme: Theme, bleedingWidth: number) => ({
    width: bleedingWidth,
    height: 50,
    borderRadius: `${theme.spacing(1)} 0 0 ${theme.spacing(1)}`,
    left: -bleedingWidth,
    top: "calc(50%)",
    transform: "translateY(-50%)",
    svg: {
      transform: "rotate(180deg)",
    },
  }),
};

export const DrawerBox = styled(Box)<DrawerBoxProps>(
  ({ open, dir, height }) => ({
    height: height || "auto",
    // ...(dir === "left" && { marginRight: open ? "24px" : 0 }),
    // ...(dir === "right" && { marginLeft: open ? "24px" : 0 }),
  })
);

export const DrawerWrapper = styled(Box, {
  shouldForwardProp: (props) => props !== "open",
})(() => ({
  position: "relative",
  height: "100%",
}));

export const CustomDrawer = styled(SwipeableDrawer)<DrawerProps>(
  ({ theme, open, width, dir }) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),

    ...(dir === "left" && dirLeft.root(width, open)),
    ...(dir === "right" && dirRight.root(width, open)),

    "& .MuiDrawer-paper": {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),

      position: "absolute",
      boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.30)",
      border: "none",

      ...(dir === "left" && dirLeft.paper(width, open)),
      ...(dir === "right" && dirRight.paper(width, open)),
    },
  })
);

export const SwipeButton = styled(Stack, {
  shouldForwardProp: (props) => props !== "bleedingWidth",
})<SwipeButtonProps>(({ theme, bleedingWidth, dir }) => ({
  ...(dir === "left" && dirLeft.button(theme, bleedingWidth)),
  ...(dir === "right" && dirRight.button(theme, bleedingWidth)),

  position: "absolute",
  backgroundColor: theme.palette.common.white,
  cursor: "pointer",
  // boxShadow: theme.shadows[10],
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1201,
}));
