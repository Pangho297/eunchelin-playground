import { PaletteOptions, alpha } from "@mui/material";

type ThemeMode = "light" | "dark";

const _additional: { [key in ThemeMode]: any } = {
  // 추가적인 테마 컬러 설정 시 이곳에서 사용
  // 추가하는 값은 types/theme.d.ts 파일에 타입 지정 필요
  light: {
    tertiary: "#b0b8c6",
    modalBg: "#37404a",
    modalBorderColor: "#dee2e6",
    mainText: "#44360c",
    gradient: "linear-gradient(90deg, #ffeb3b  0%, #fef075 100%)",
  },
  dark: {},
};

const _palette: { [key in ThemeMode]: PaletteOptions } = {
  light: {
    ..._additional.light,
    mode: "light",
    //  primary 컬러 색상 설정
    primary: {
      main: "#ffeb3b",
      "50": "#fffde7",
      "100": "#fff9c4",
      "200": "#fff59d",
      "300": "#fef075",
      "400": "#fceb55",
      "500": "#ffeb3b",
      "600": "#fdd835",
      "700": "#fbc02d",
      "800": "#f9a825",
      "900": "#f57f16",
      contrastText: "#16181d",
    },
    secondary: {
      main: "#7eafdf",
      "50": "#e6f1f9",
      "100": "#c2dbf2",
      "200": "#9ec5ea",
      "300": "#7eafdf",
      "400": "#6a9ed9",
      "500": "#578fd6",
      "600": "#5181c8",
      "700": "#4870b6",
      "800": "#3f60a5",
      "900": "#314387",
      contrastText: "#f2f2f2",
    },
    success: {
      main: "#7edc9c",
      "50": "#e8f9ed",
      "100": "#c9efd4",
      "200": "#a5e5b8",
      "300": "#7edc9c",
      "400": "#5dd385",
      "500": "#3dca6f",
      "600": "#34ba64",
      "700": "#28a657",
      "800": "#1f954c",
      "900": "#0b7438",
      contrastText: "#16181d",
    },
    info: {
      main: "#7edccb",
      "50": "#e0f6f3",
      "100": "#b2e9df",
      "200": "#7edccb",
      "300": "#48ccb5",
      "400": "#1fbfa4",
      "500": "#00b194",
      "600": "#00a387",
      "700": "#009276",
      "800": "#008167",
      "900": "#00644b",
      contrastText: "#16181d",
    },
    warning: {
      main: "#fc974b",
      "50": "#fdeae3",
      "100": "#ffd0b2",
      "200": "#ffb380",
      "300": "#fc974b",
      "400": "#f88319",
      "500": "#f57200",
      "600": "#ea6b00",
      "700": "#dd6300",
      "800": "#d05b00",
      "900": "#b84e00",
      contrastText: "#f2f2f2",
    },
    error: {
      main: "#e55d66",
      "50": "#ffe8ec",
      "100": "#ffc5cd",
      "200": "#e69fa6",
      "300": "#da7a83",
      "400": "#e55d67",
      "500": "#dc4750",
      "600": "#c93f49",
      "700": "#c93f49",
      "800": "#bc3942",
      "900": "#ac3238",
      contrastText: "#f2f2f2",
    },
    grey: {
      "50": "#f0f1f4",
      "100": "#e2e4e8",
      "200": "#c5c8d2",
      "300": "#a8adbc",
      "400": "#8b92a6",
      "500": "#585f73",
      "600": "#424757",
      "700": "#2d2f39",
      "800": "#24262f",
      "900": "#16181d",
    },
    action: {
      active: alpha("#000", 0.54),
      hover: alpha("#000", 0.04),
      hoverOpacity: 0.4,
      selected: alpha("#000", 0.08),
      selectedOpacity: 0.08,
      disabled: alpha("#000", 0.15),
      disabledBackground: alpha("#000", 0.05),
      disabledOpacity: 0.38,
      focus: alpha("#000", 0.12),
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
    background: {
      default: "#fbc02d",
    },
  },
  dark: {
    ..._additional.dark,
    mode: "dark",
  },
};

export default _palette;
