import { TransitionGroup } from "react-transition-group";
import { ModalS } from "../ModalContainer";
import { Button, Stack, Typography, Zoom } from "@mui/material";
import { ModalPropsType } from "@/stores/modalStore";
import { Controller, useForm } from "react-hook-form";
import getResolverBySchemaName from "@/utils/formResolver";
import Input from "@/components/Input";
import useModal from "@/hooks/useModal";
import Login from "../Login";
import { useSnackbar } from "notistack";
import FormFieldWrapper from "@/components/FormFieldWrapper";

export default function FindPassword({ onClose }: ModalPropsType) {
  const { openModal } = useModal();
  const { enqueueSnackbar } = useSnackbar();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
    resolver: getResolverBySchemaName("findPasswordForm"),
  });

  const handleCancel = () => {
    onClose?.();
    openModal(Login);
  };

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    // FIXME: 이메일로 비밀번호 재설정 링크가 발송된 경우
    enqueueSnackbar("이메일 주소로 비밀번호 재설정 링크가 발송되었습니다", {
      variant: "success",
    });
    onClose?.();
  });

  const Content = () => {
    return (
      <ModalS.ContentWrapper minWidth="300px" maxWidth="300px">
        <Stack
          component="form"
          onSubmit={onSubmit}
          justifyContent="center"
          gap={3}
        >
          <Stack gap={1}>
            <Typography
              sx={{
                fontSize: "48px",
                fontWeight: 700,
                textAlign: "center",
                color: "grey.400",
              }}
            >
              Eunchelin
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                color: "grey.400",
              }}
            >
              우리끼리 맛집 공유
            </Typography>
          </Stack>
          <FormFieldWrapper title="이메일" require>
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <Input
                  placeholder="이메일 주소를 입력해 주세요"
                  value={field.value}
                  onChange={field.onChange}
                  errorMessage={error?.message}
                />
              )}
            />
          </FormFieldWrapper>
          <Stack direction="row" gap={1}>
            <Button
              variant="text"
              type="button"
              size="small"
              fullWidth
              onClick={handleCancel}
            >
              취소
            </Button>
            <Button type="submit" size="small" fullWidth disabled={!isValid}>
              비밀번호 재설정
            </Button>
          </Stack>
        </Stack>
      </ModalS.ContentWrapper>
    );
  };

  return (
    <ModalS.ModalWrapper>
      <TransitionGroup>
        <Zoom>
          <ModalS.ModalBody>
            <ModalS.ModalContent>{Content()}</ModalS.ModalContent>
          </ModalS.ModalBody>
        </Zoom>
      </TransitionGroup>
    </ModalS.ModalWrapper>
  );
}
