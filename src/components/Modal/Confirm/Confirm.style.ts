import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ModalContent = styled(Box)(() => ({
  minWidth: "300px",
  maxWidth: "400px",
  whiteSpace: "pre",
  "& >p": {
    textAlign: "center",
    whiteSpace: "pre-line",
  },
}));

export const ModalFooter = styled(Stack)(() => ({
  flexDirection: "row",
  gap: 8,

  "& >button": {
    flex: 1,
  },
}));
