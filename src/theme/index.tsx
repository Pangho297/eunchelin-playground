import { useThemeStore } from "@/stores/themeStore";
import {
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { ReactNode, useMemo } from "react";
import palette from "./palette";
import typography from "./typography";
import { CssBaseline } from "@mui/material";
import componentsOverrides from "./overrides";

type ThemeProviderProps = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const { themeMode, themeDirection } = useThemeStore();

  // 테마 구분
  const isLight = themeMode === "light";

  // 테마 설정
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      // 테마 컬러 설정
      palette: isLight ? palette.light : palette.dark,

      // 반응형 분기점 설정
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },

      // 테마 폰트 설정
      typography,
    }),
    [themeMode, themeDirection]
  );

  const theme = createTheme(themeOptions);

  // MUI 컴포넌트 기본값 설정
  theme.components = componentsOverrides(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline>{children}</CssBaseline>
    </MUIThemeProvider>
  );
}
