import { CheckboxGroup, CheckLabel, RadioGroup } from "@/components/Check";
import * as S from "../playground.style";
import { Stack } from "@mui/material";
import { useState } from "react";

export default function PlaygroundCheck() {
  const [easterEgg, setEasterEgg] = useState("");

  return (
    <S.CollapseContainer>
      <S.GridContainer>
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
            value={easterEgg}
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
      </S.GridContainer>
    </S.CollapseContainer>
  );
}
