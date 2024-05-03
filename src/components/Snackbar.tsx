import {
  SnackbarProvider as NotistackSnackbarProvider,
  MaterialDesignContent,
  VariantType,
} from "notistack";
import { styled } from "@mui/material";
import MdiIcon from "./MdiIcon";
import { mdiAlertCircleOutline, mdiCheck } from "@mdi/js";
import { ReactNode } from "react";

/** notistack 토스트 Provider 기본 스타일 지정 */
const StyledSnackbarProvider = styled(NotistackSnackbarProvider)(
  ({ theme }) => ({
    "&.notistack-MuiContent-default": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    "&.notistack-MuiContent-success": {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.success.contrastText,
    },
    "&.notistack-MuiContent-error": {
      backgroundColor: theme.palette.error.main,
    },
    "&.notistack-MuiContent-warning": {
      backgroundColor: theme.palette.warning.main,
      color: theme.palette.warning.contrastText,
    },
    "&.notistack-MuiContent-info": {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.info.contrastText,
    },
  })
);

/** notistack 토스트 알림 컴포넌트 */
const StyledSnackBar = styled(MaterialDesignContent)(({ theme }) => ({
  minWidth: "320px",
  width: "100%",
  fontSize: "16px",
  fontWeight: 400,
  borderRadius: 50,
  "& #notistack-snackbar": {
    width: "100%",
    display: "flex",
    padding: "12px 16px",
    justifyContent: "center",
    gap: theme.spacing(1),
  },
}));

/** notistack 토스트 알림 유형별 컴포넌트 지정 */
const components: { [key in VariantType]: any } = {
  default: StyledSnackBar,
  success: StyledSnackBar,
  error: StyledSnackBar,
  warning: StyledSnackBar,
  info: StyledSnackBar,
};

/** notistack 토스트 알림 유형별 아이콘 */
const iconVariant: { [key in VariantType]: ReactNode } = {
  default: <MdiIcon path={mdiCheck} />,
  success: <MdiIcon path={mdiCheck} />,
  error: <MdiIcon path={mdiAlertCircleOutline} />,
  warning: <MdiIcon path={mdiAlertCircleOutline} />,
  info: <MdiIcon path={mdiAlertCircleOutline} />,
};

export default function SnackbarProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <StyledSnackbarProvider
      disableWindowBlurListener={true}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      maxSnack={5}
      Components={components}
      iconVariant={iconVariant}
    >
      {children}
    </StyledSnackbarProvider>
  );
}
