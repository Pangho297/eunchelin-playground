import * as S from "../playground.style";
import Input from "@/components/Input";

export default function PlaygroundInput() {
  return (
    <S.CollapseContainer>
      <S.GridContainer>
        <Input placeholder="placeholder-text" />
        <Input placeholder="placeholder-text" disabled />
        <Input
          placeholder="placeholder-text"
          errorMessage="아이고 난 그것도 모르고 ㅠㅠ"
        />
      </S.GridContainer>
    </S.CollapseContainer>
  );
}
