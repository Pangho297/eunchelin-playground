import { ModalPropsType } from "@/stores/modalStore";
import { ModalS } from "@/components/Modal/ModalContainer";
import * as S from "./Confirm.style";
import { Box, Button, Typography } from "@mui/material";
import { ReactNode } from "react";

export interface ConfirmModalProps extends ModalPropsType {
  message: ReactNode;
}
export default function ConfirmModal({
  message,
  onClose,
  onSubmit,
  closeText = "취소",
  submitText = "확인",
}: ConfirmModalProps) {
  const Content = () => {
    return (
      <S.ModalContent>
        <p>{message}</p>
      </S.ModalContent>
    );
  };

  const Footer = () => {
    return (
      <S.ModalFooter>
        <Button variant="text" onClick={onClose} fullWidth>
          {closeText}
        </Button>
        <Button color="secondary" onClick={onSubmit} fullWidth>
          {submitText}
        </Button>
      </S.ModalFooter>
    );
  };

  return (
    <ModalS.ModalWrapper sx={{ zIndex: 1301 }}>
      <ModalS.ModalBody>
        {/* 제목 */}
        <ModalS.ModalTitle sx={{ borderBottom: "none" }}>
          <Box />
          <ModalS.CloseButton onClick={onClose} />
        </ModalS.ModalTitle>
        {/* 내용 */}
        <ModalS.ModalContent sx={{ borderBottom: "none" }}>
          {Content()}
        </ModalS.ModalContent>
        {/* 푸터 */}
        <ModalS.ModalFooter>{Footer()}</ModalS.ModalFooter>
      </ModalS.ModalBody>
    </ModalS.ModalWrapper>
  );
}
