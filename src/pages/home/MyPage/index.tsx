import {
  Button,
  ButtonBase,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import FormFieldWrapper from "@/components/FormFieldWrapper";
import Input from "@/components/Input";
import { useState } from "react";
import useModal from "@/hooks/useModal";
import ConfirmModal from "@/components/Modal/Confirm";
import MdiIcon from "@/components/MdiIcon";
import { mdiLogout } from "@mdi/js";

const originNickName = "창식이네 김창식";

export default function MyPage() {
  const [nickname, setNickname] = useState<string>("창식이네 김창식");

  const { openModal } = useModal();

  return (
    <Stack justifyContent="space-between" sx={{ height: "100%" }}>
      <Stack gap={3}>
        <Typography variant="h2">내 정보</Typography>
        <Stack direction="row" gap={3}>
          <FormFieldWrapper title="이메일">
            <Typography>test@gmail.com</Typography>
          </FormFieldWrapper>
          {/* FIXME: SNS 가입 수단이 null로 들어온 경우 표시하지 않음 */}
          {true && (
            <FormFieldWrapper title="SNS ">
              <Typography>Google</Typography>
            </FormFieldWrapper>
          )}
        </Stack>
        <FormFieldWrapper title="닉네임">
          <Stack direction="row" gap={1}>
            <Input
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <Button
              variant="outlined"
              size="small"
              sx={{ minWidth: "max-content" }}
              disabled={nickname === originNickName}
              onClick={() =>
                openModal(ConfirmModal, {
                  message: "닉네임을 변경하시겠습니까?",
                })
              }
            >
              닉네임 변경
            </Button>
          </Stack>
        </FormFieldWrapper>
      </Stack>
      <Stack gap={3}>
        <FormFieldWrapper title="회원가입 일자">
          <Typography>{dayjs().format("YYYY-MM-DD")}</Typography>
        </FormFieldWrapper>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Button variant="text" size="small" color="error">
            로그아웃
          </Button>
          <ButtonBase disableRipple>
            <Typography variant="bodySS" sx={{ color: "grey.300" }}>
              회원탈퇴
            </Typography>
          </ButtonBase>
        </Stack>
      </Stack>
    </Stack>
  );
}
