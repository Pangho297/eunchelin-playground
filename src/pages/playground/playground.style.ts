import { Stack, styled } from "@mui/material";

export const CollapseContainer = styled(Stack)(({ theme }) => ({
  padding: "24px",
  background: theme.palette.common.white,
  borderRadius: 8,
  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",
}));

export const GridContainer = styled(Stack)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: theme.spacing(2),
}));
