import { Button, Stack } from "@mui/material";
import * as S from "../playground.style";

export default function PlaygroundButton() {
  return (
    <S.CollapseContainer>
      <S.GridContainer>
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
        <Button variant="contained" disabled size="large">
          Button
        </Button>
        <Button variant="outlined" disabled size="large">
          Button
        </Button>
        <Button variant="text" disabled size="large">
          Button
        </Button>
      </S.GridContainer>
    </S.CollapseContainer>
  );
}
