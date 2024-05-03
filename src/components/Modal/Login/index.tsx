import { useRef } from "react";
import { TransitionGroup } from "react-transition-group";
import {
  Button,
  ButtonBase,
  Divider,
  Stack,
  Typography,
  Zoom,
} from "@mui/material";
import { ModalPropsType } from "@/stores/modalStore";
import { ModalS } from "@/components/Modal/ModalContainer";
import { useCloseClickOutside } from "@/hooks/useCloseClickOutside";
import { Controller, useForm } from "react-hook-form";
import { LoginRequestModel } from "@/types/login";
import getResolverBySchemaName from "@/utils/formResolver";
import Input from "@/components/Input";
import { GoogleLogin } from "@react-oauth/google";
import useModal from "@/hooks/useModal";
import Signup from "../Signup";

export default function Login({ onClose = () => {}, modalId }: ModalPropsType) {
  const modalRef = useRef<HTMLDivElement>(null);
  useCloseClickOutside(modalRef, onClose);

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginRequestModel>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: getResolverBySchemaName("loginForm"),
  });

  const { openModal } = useModal();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const handleSignup = () => {
    onClose?.();
    openModal(Signup);
  };

  const Content = () => {
    return (
      <ModalS.ContentWrapper minWidth="300px" maxWidth="400px">
        <Stack justifyContent="center" gap={3}>
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
          <Stack gap={2}>
            <Stack gap={0.5}>
              <Typography variant="bodySS">이메일</Typography>
              <Controller
                control={control}
                name="email"
                render={({ field, fieldState: { error } }) => (
                  <Input
                    placeholder="아이디를 입력해 주세요"
                    value={field.value}
                    onChange={field.onChange}
                    errorMessage={error?.message}
                  />
                )}
              />
            </Stack>
            <Stack gap={0.5}>
              <Typography variant="bodySS">비밀번호</Typography>
              <Controller
                control={control}
                name="email"
                render={({ field, fieldState: { error } }) => (
                  <Input
                    placeholder="비밀번호를 입력해 주세요"
                    value={field.value}
                    onChange={field.onChange}
                    errorMessage={error?.message}
                  />
                )}
              />
            </Stack>
            <Button type="submit">로그인</Button>
          </Stack>
          <Divider orientation="horizontal" />
          <GoogleLogin
            locale="ko"
            width="300px"
            onSuccess={(res) => {
              console.log(res);
            }}
          />
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={1}
          >
            <ButtonBase type="button" disableRipple>
              <Typography variant="bodySS" sx={{ color: "grey.400" }}>
                비밀번호 찾기
              </Typography>
            </ButtonBase>
            <Divider orientation="vertical" sx={{ height: "14px" }} />
            <ButtonBase type="button" disableRipple>
              <Typography
                variant="bodySS"
                sx={{ color: "grey.400" }}
                onClick={handleSignup}
              >
                회원가입
              </Typography>
            </ButtonBase>
          </Stack>
        </Stack>
      </ModalS.ContentWrapper>
    );
  };

  return (
    <ModalS.ModalWrapper>
      <TransitionGroup>
        <Zoom>
          <ModalS.ModalBody ref={modalRef}>
            <ModalS.ModalContent>{Content()}</ModalS.ModalContent>
          </ModalS.ModalBody>
        </Zoom>
      </TransitionGroup>
    </ModalS.ModalWrapper>
  );
}
