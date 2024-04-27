import { Button } from "@mui/material";
import * as S from "../playground.style";
import { useSnackbar } from "notistack";

export default function PlaygroundToast() {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <S.CollapseContainer>
      <S.GridContainer sx={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
        <Button
          onClick={() =>
            enqueueSnackbar({
              message: "Default Toast!",
              variant: "default",
            })
          }
        >
          Default
        </Button>
        <Button
          color="success"
          onClick={() =>
            enqueueSnackbar({
              message: "Success Toast!",
              variant: "success",
            })
          }
        >
          Success
        </Button>
        <Button
          color="error"
          onClick={() =>
            enqueueSnackbar({
              message: "Error Toast!",
              variant: "error",
            })
          }
        >
          Error
        </Button>
        <Button
          color="warning"
          onClick={() =>
            enqueueSnackbar({
              message: "Warning Toast!",
              variant: "warning",
            })
          }
        >
          Warning
        </Button>
        <Button
          color="info"
          onClick={() =>
            enqueueSnackbar({
              message: "Info Toast!",
              variant: "info",
            })
          }
        >
          Info
        </Button>
      </S.GridContainer>
    </S.CollapseContainer>
  );
}
