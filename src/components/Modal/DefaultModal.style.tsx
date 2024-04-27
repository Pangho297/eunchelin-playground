import { Box, IconButton, IconButtonProps, Paper } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import MdiIcon from "../MdiIcon";
import { mdiClose } from "@mdi/js";

export const ModalWrapper = styled(Paper)(({ theme }) => ({
  position: "fixed",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  backgroundColor: alpha(theme.palette.modalBg, 0.5),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1300,
}));

export const ModalBody = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
  height: "fit-content",
  borderRadius: 8,
  backgroundColor: theme.palette.common.white,
}));

export const ModalTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
  borderRadius: "8px 8px 0 0",
  borderBottom: "1px solid var(--border_primary)",
  backgroundColor: "white",
  ".MuiIconButton-root": {
    padding: 0,
  },
  ">.MuiTypography-root": {
    ...theme.typography.bodySS,
    color: "var(--Secondary)",
  },
}));

export const ModalContent = styled(Box)(({}) => ({
  padding: "0 16px 16px 16px",
}));

export const ModalFooter = styled(Box)(({}) => ({
  padding: 16,
}));

export const CloseButton = styled((props: IconButtonProps) => (
  <IconButton {...props} disableRipple>
    <MdiIcon path={mdiClose} size={1} color="black" />
  </IconButton>
))(() => ({
  padding: 0,
}));
