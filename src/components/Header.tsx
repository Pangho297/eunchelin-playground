import {
  Button,
  ButtonBase,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { ReactNode, useState } from "react";
import MdiIcon from "./MdiIcon";
import { mdiSilverwareForkKnife } from "@mdi/js";
import PathConstants from "@/routers/pathConstants";
import useModal from "@/hooks/useModal";
import Login from "./Modal/Login";

export default function Header({ children }: { children: ReactNode }) {
  const [token, setToken] = useState(false);

  const { openModal } = useModal();

  const theme = useTheme();
  return (
    <Stack sx={{ width: "100%" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={(theme) => ({
          px: 3,
          py: 2,
          backgroundColor: theme.palette.primary[700],
        })}
      >
        <Link href={PathConstants.Home} underline="none">
          <Stack direction="row" gap={2} alignItems="center">
            <Typography variant="h1" sx={{ color: "mainText" }}>
              Eunchelin
            </Typography>
            <MdiIcon
              size={"32px"}
              path={mdiSilverwareForkKnife}
              color={theme.palette.mainText}
            />
          </Stack>
        </Link>
        <Stack>
          {token ? (
            <Stack direction="row" gap={2}>
              <Link>
                <Typography>내 그룹</Typography>
              </Link>
              <Link>
                <Typography>FIXME: 계정이름</Typography>
              </Link>
            </Stack>
          ) : (
            <Button onClick={() => openModal(Login)}>로그인</Button>
          )}
        </Stack>
      </Stack>
      {children}
    </Stack>
  );
}
