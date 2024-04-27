import Select from "@/components/Select";
import * as S from "../playground.style";

const dropdown = [
  { label: "안녕하세요", value: "타입은 string 입니다1" },
  { label: "반갑습니다", value: "타입은 string 입니다2" },
  { label: "이름이 뭐에요?", value: "타입은 string 입니다3" },
];

export default function PlaygroundSelect() {
  return (
    <S.CollapseContainer>
      <S.GridContainer>
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
      </S.GridContainer>
    </S.CollapseContainer>
  );
}
