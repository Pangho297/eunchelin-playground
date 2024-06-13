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
import { useNavigate } from "react-router-dom";

export default function Header({ children }: { children: ReactNode }) {
  const [token, setToken] = useState(false);

  const { openModal } = useModal();
  const navigate = useNavigate();

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
        <Stack direction="row" gap={2}>
          <Button onClick={() => navigate("/playground")}>
            Go to Playground
          </Button>
          {token ? null : (
            <Button onClick={() => openModal(Login)}>로그인</Button>
          )}
        </Stack>
      </Stack>
      {children}
    </Stack>
  );
}
