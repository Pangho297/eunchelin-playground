import { Button, Stack } from "@mui/material";
import Collapse from "@/components/Collapse";
import * as S from "./playground.style";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { CheckboxGroup, CheckLabel, RadioGroup } from "@/components/Check";
import { useState } from "react";

const dropdown = [
  { label: "안녕하세요", value: "타입은 string 입니다1" },
  { label: "반갑습니다", value: "타입은 string 입니다2" },
  { label: "이름이 뭐에요?", value: "타입은 string 입니다3" },
];

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
          <Button variant="contained" disabled size="large">
            Button
          </Button>
          <Button variant="outlined" disabled size="large">
            Button
          </Button>
          <Button variant="text" disabled size="large">
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
        <Stack
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          <Input placeholder="placeholder-text" />
          <Input placeholder="placeholder-text" disabled />
          <Input
            placeholder="placeholder-text"
            errorMessage="아이고 난 그것도 모르고 ㅠㅠ"
          />
        </Stack>
      </S.CollapseContainer>
    ),
  },
  {
    title: "Select",
    children: () => (
      <S.CollapseContainer>
        <Stack
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          <Select
            fullWidth
            items={dropdown}
            value={[]}
            placeholder="placeholder-text"
          />
          <Select
            fullWidth
            disabled
            items={dropdown}
            value={[
              "타입은 string 입니다1",
              "타입은 string 입니다2",
              "타입은 string 입니다3",
            ]}
          />
          <Select
            fullWidth
            items={dropdown}
            errorMessage="아이고 난 또 그것도 모르고 ㅠㅠ"
            value={[
              "타입은 string 입니다1",
              "타입은 string 입니다2",
              "타입은 string 입니다3",
            ]}
          />
        </Stack>
      </S.CollapseContainer>
    ),
  },
  {
    title: "Checkbox & Radio",
    children: (easterEgg?: string, setEasterEgg?: any) => (
      <S.CollapseContainer>
        <Stack
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          <CheckLabel
            label="제가 김창식입니다"
            onChange={() => console.log("사실 아닙니다")}
          />
          <CheckLabel label="Checkbox" disabled />
          <CheckboxGroup
            items={[
              { label: "Group 1", value: "group 1" },
              { label: "Group 2", value: "group 2" },
            ]}
          />
          <Stack sx={{ gridColumn: "1 / 4", alignItems: "center" }}>
            <RadioGroup
              items={[
                { label: "제가 김창식이오", value: "김아무개" },
                { label: "제가 김창식이오", value: "성진현" },
                { label: "제가 김창식이오", value: "김수한무" },
                { label: "제가 김창식이오", value: "김창식" },
                { label: "제가 김창식이오", value: "이은지" },
                { label: "제가 김창식이오", value: "백광호" },
                { label: "제가 김창식이오", value: "말숙이" },
              ]}
              value={`${easterEgg}`}
              onChange={(e) => setEasterEgg(e.target.value)}
              errorMessage={
                Boolean(easterEgg) && easterEgg !== "김창식"
                  ? "틀렸소"
                  : undefined
              }
            />
          </Stack>
          <Stack sx={{ gridColumn: "1 / 4", alignItems: "center" }}>
            <RadioGroup
              items={[
                { label: "제가 김창식이오", value: "김아무개" },
                { label: "제가 김창식이오", value: "성진현" },
                { label: "제가 김창식이오", value: "김수한무" },
                { label: "제가 김창식이오", value: "김창식" },
                { label: "제가 김창식이오", value: "이은지" },
                { label: "제가 김창식이오", value: "백광호" },
                { label: "제가 김창식이오", value: "말숙이" },
              ]}
              value={""}
              disabled
            />
          </Stack>
        </Stack>
      </S.CollapseContainer>
    ),
  },
];

export default function Playground() {
  const [easterEgg, setEasterEgg] = useState("");

  return (
    <Stack alignItems="center">
      <Stack sx={{ p: 3, maxWidth: "1200px", width: "100%" }}>
        {playList.map((item, i) => (
          <Collapse key={i} title={item.title}>
            {item.children(easterEgg, setEasterEgg)}
          </Collapse>
        ))}
      </Stack>
    </Stack>
  );
}
