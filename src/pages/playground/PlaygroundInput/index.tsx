import { DatePicker, RangePicker, TimePicker } from "@/components/Date";
import * as S from "../playground.style";
import Input from "@/components/Input";
import { Stack, Typography } from "@mui/material";
import { Nullable } from "@/types/common";
import { useState } from "react";
import { Dayjs } from "dayjs";

export default function PlaygroundInput() {
  const [start, setStart] = useState<Nullable<Dayjs>>(null);
  const [end, setEnd] = useState<Nullable<Dayjs>>(null);
  return (
    <S.CollapseContainer>
      <S.GridContainer>
        <Input placeholder="placeholder-text" />
        <Input placeholder="placeholder-text" disabled />
        <Input
          placeholder="placeholder-text"
          errorMessage="아이고 난 그것도 모르고 ㅠㅠ"
        />
        <Stack sx={{ gridColumn: "1 / 4" }}>
          <Typography variant="h3">DatePicker</Typography>
        </Stack>
        <DatePicker fullWidth />
        <DatePicker fullWidth disabled />
        <DatePicker fullWidth errorMessage="Error_Message" />
        <TimePicker fullWidth />
        <TimePicker fullWidth disabled />
        <TimePicker fullWidth errorMessage="Error_Message" />
        <Stack sx={{ gridColumn: "1 / 4" }}>
          <RangePicker
            fullWidth
            start={start}
            end={end}
            onChange={(type, value) => {
              if (type === "start") return setStart(value);
              if (type === "end") return setEnd(value);
            }}
          />
        </Stack>
      </S.GridContainer>
    </S.CollapseContainer>
  );
}
