import { Button } from "@mui/material";
import * as S from "../playground.style";
import useModal from "@/hooks/useModal";
import ConfirmModal from "@/components/Modal/Confirm";
import { useSnackbar } from "notistack";

export default function PlaygroundModal() {
  const { openModal } = useModal();
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    openModal(ConfirmModal, {
      message: "Modal Test",
      onClose: () => enqueueSnackbar("모달 닫기", { variant: "error" }),
      onSubmit: () => enqueueSnackbar("모달 확인", { variant: "success" }),
    });
  };

  return (
    <S.CollapseContainer>
      <Button onClick={handleClick}>Modal Test</Button>
    </S.CollapseContainer>
  );
}
