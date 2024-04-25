import { Button, Stack } from "@mui/material";
import Collapse from "@/components/Collapse";
import * as S from "./playground.style";

const playList = [
  {
    title: "Button",
    children: () => (
      <S.CollapseContainer>
        <Stack
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
          }}
        >
          <Button variant="contained" size="small">
            Button
          </Button>
          <Button variant="outlined" size="small">
            Button
          </Button>
          <Button variant="text" size="small">
            Button
          </Button>
          <Button variant="contained"> Button</Button>
          <Button variant="outlined"> Button</Button>
          <Button variant="text"> Button</Button>
          <Button variant="contained" size="large">
            Button
          </Button>
          <Button variant="outlined" size="large">
            Button
          </Button>
          <Button variant="text" size="large">
            Button
          </Button>
        </Stack>
      </S.CollapseContainer>
    ),
  },
  {
    title: "Input",
    children: () => (
      <S.CollapseContainer>
        <Stack></Stack>
      </S.CollapseContainer>
    ),
  },
  {
    title: "Select",
    children: () => (
      <S.CollapseContainer>
        <Stack></Stack>
      </S.CollapseContainer>
    ),
  },
];

export default function Playground() {
  return (
    <Stack alignItems="center">
      <Stack sx={{ p: 3, maxWidth: "1200px", width: "100%" }}>
        {playList.map((item) => (
          <Collapse title={item.title}>{item.children()}</Collapse>
        ))}
      </Stack>
    </Stack>
  );
}
