import { TransitionGroup } from "react-transition-group";
import { ModalS } from "../ModalContainer";
import { Button, Collapse, Stack, Typography, Zoom } from "@mui/material";
import { useEffect, useState } from "react";
import { ModalPropsType } from "@/stores/modalStore";
import { Controller, useForm } from "react-hook-form";
import Input from "@/components/Input";
import { useSnackbar } from "notistack";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import getResolverBySchemaName from "@/utils/formResolver";
import useModal from "@/hooks/useModal";
import Login from "../Login";

dayjs.extend(duration);

export default function Signup({ onClose }: ModalPropsType) {
  const [startEmailVerify, setStartEmailVerify] = useState<boolean>(false);
  const [verifyEmailTime, setVerifyEmailTime] = useState<number>(600);
  const emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  const { openModal } = useModal();
  const { enqueueSnackbar } = useSnackbar();
  const {
    control,
    watch,
    setValue,
    clearErrors,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      emailVerify: "",
      password: "",
      passwordVerify: "",
      nickname: "",
      authToken: "",
    },
    resolver: getResolverBySchemaName("signupForm"),
  });

  const handleStartVerify = () => {
    clearErrors("emailVerify");

    if (!startEmailVerify) {
      setVerifyEmailTime(600);
    }
    // FIXME: 이메일 인증 코드 발송 api 추가
    // 이메일 인증 코드가 정상 발송된 경우
    enqueueSnackbar("이메일 인증번호가 발송되었습니다", { variant: "info" });
    setStartEmailVerify(true);

    return;

    // 이메일 인증 코드가 발송되지 않았을 경우
    enqueueSnackbar("이메일을 확인해 주세요", { variant: "error" });
  };

  const handleVerifyEmailCode = () => {
    // FIXME: 이메일 인증이 완료된 경우
    setValue("authToken", "dummyEmailCode");
    setStartEmailVerify(false);
    setVerifyEmailTime(0);
    return;

    // 이메일 인증이 실패한 경우
    setStartEmailVerify(false);
    setVerifyEmailTime(0);
    setValue("emailVerify", "");
  };

  const handleCancel = () => {
    onClose?.();
    openModal(Login);
  };

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    // FIXME: 회원가입 성공
    enqueueSnackbar("회원가입이 완료되었습니다", { variant: "success" });
    onClose?.();
    openModal(Login);
  });

  useEffect(() => {
    // 이메일 변경 시 인증시간 및 코드 초기화
    setStartEmailVerify(false);
    setValue("emailVerify", "");
    setVerifyEmailTime(600);
  }, [watch().email]);

  useEffect(() => {
    const handleTime = () => {
      if (verifyEmailTime === 0) {
        setStartEmailVerify(false);
        return;
      }

      if (!startEmailVerify) return;

      setVerifyEmailTime((prev) => prev - 1);
    };

    const timer = setTimeout(handleTime, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [verifyEmailTime, startEmailVerify]);

  const Content = () => {
    return (
      <ModalS.ContentWrapper minWidth="400px" maxWidth="400px">
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
          <Stack gap={2}>
            <Stack gap={0.5}>
              <Typography variant="bodySS">이메일</Typography>
              <Stack direction="row" gap={1}>
                <Controller
                  control={control}
                  name="email"
                  render={({ field, fieldState: { error } }) => (
                    <Input
                      placeholder="아이디를 입력해 주세요"
                      value={field.value}
                      onChange={field.onChange}
                      errorMessage={error?.message}
                      disabled={Boolean(watch("authToken"))}
                    />
                  )}
                />
                <Button
                  type="button"
                  variant="outlined"
                  size="small"
                  sx={{ minWidth: "120px", flexShrink: 0 }}
                  onClick={handleStartVerify}
                  // 이메일 형식 및 인증 진행중 또는 인증코드를 입력 중인 경우 재발송 방지
                  disabled={
                    !emailRegex.test(watch("email"))
                      ? true
                      : startEmailVerify ||
                        Boolean(watch("emailVerify") ? true : false)
                  }
                >
                  {!startEmailVerify &&
                  verifyEmailTime === 0 &&
                  !Boolean(watch("emailVerify"))
                    ? "인증번호 재발송"
                    : "인증번호 발송"}
                </Button>
              </Stack>
            </Stack>
            <Stack gap={0.5}>
              <Typography variant="bodySS">이메일 인증번호</Typography>
              <Stack direction="row" gap={1}>
                <Stack sx={{ position: "relative", width: "100%" }}>
                  <Controller
                    control={control}
                    name="emailVerify"
                    render={({ field, fieldState: { error } }) => (
                      <Input
                        placeholder="인증번호를 입력해 주세요"
                        value={field.value}
                        onChange={field.onChange}
                        errorMessage={error?.message}
                        disabled={Boolean(watch("authToken"))}
                      />
                    )}
                  />
                  {startEmailVerify && (
                    <Typography
                      color="error"
                      sx={{ position: "absolute", top: 6, right: 12 }}
                    >
                      {dayjs.duration(verifyEmailTime, "second").format("m:ss")}
                    </Typography>
                  )}
                </Stack>
                <Button
                  type="button"
                  variant="outlined"
                  size="small"
                  sx={{ minWidth: "120px", flexShrink: 0 }}
                  disabled={Boolean(watch("authToken"))}
                  onClick={handleVerifyEmailCode}
                >
                  확인
                </Button>
              </Stack>
            </Stack>
            <Collapse in={Boolean(watch("authToken"))}>
              <Stack gap={2}>
                <Stack gap={0.5}>
                  <Typography variant="bodySS">비밀번호</Typography>
                  <Controller
                    control={control}
                    name="password"
                    render={({ field, fieldState: { error } }) => (
                      <Input
                        type="password"
                        placeholder="비밀번호를 입력해 주세요"
                        value={field.value}
                        onChange={field.onChange}
                        errorMessage={error?.message}
                      />
                    )}
                  />
                </Stack>
                <Stack gap={0.5}>
                  <Typography variant="bodySS">비밀번호 확인</Typography>
                  <Controller
                    control={control}
                    name="passwordVerify"
                    render={({ field, fieldState: { error } }) => (
                      <Input
                        type="password"
                        placeholder="비밀번호를 입력해 주세요"
                        value={field.value}
                        onChange={field.onChange}
                        errorMessage={error?.message}
                      />
                    )}
                  />
                </Stack>
                <Stack gap={0.5}>
                  <Typography variant="bodySS">닉네임</Typography>
                  <Controller
                    control={control}
                    name="nickname"
                    render={({ field, fieldState: { error } }) => (
                      <Input
                        placeholder="닉네임을 입력해 주세요"
                        value={field.value}
                        onChange={field.onChange}
                        errorMessage={error?.message}
                      />
                    )}
                  />
                </Stack>
              </Stack>
            </Collapse>
          </Stack>
          <Stack direction="row" gap={1}>
            <Button
              variant="text"
              type="button"
              fullWidth
              onClick={handleCancel}
            >
              취소
            </Button>
            <Button fullWidth type="submit" disabled={!isValid}>
              회원가입
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
