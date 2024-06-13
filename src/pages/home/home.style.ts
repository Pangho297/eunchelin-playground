import { Stack, styled } from "@mui/material";

export const DrawerPosition = styled(Stack)(() => ({
  position: "absolute",
  top: 0,
  height: "100%",
}));

export const DrawerWrapper = styled(Stack)(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(2),
}));
