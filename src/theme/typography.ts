import { Palette } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const _typography:
  | TypographyOptions
  | ((palette: Palette) => TypographyOptions) = {
  h1: {
    fontSize: "32px",
    fontWeight: 700,
  },
  h2: {
    fontSize: "24px",
    fontWeight: 700,
  },
  h3: {
    fontSize: "20px",
    fontWeight: 700,
  },
  h4: {
    fontSize: "16px",
    fontWeight: 700,
  },
  h5: {
    fontSize: "14px",
    fontWeight: 700,
  },
  h6: {
    fontSize: "13px",
    fontWeight: 700,
  },
  body1: {},
  // MUI에서 지정한 typography 값이 아닌 경우 type/theme.d.ts 에서 별도로 타입 지정 필요
  bodyL: {
    fontSize: "18px",
    fontWeight: 400,
  },
  bodyM: {
    fontSize: "16px",
    fontWeight: 400,
  },
  bodyS: {
    fontSize: "14px",
    fontWeight: 400,
  },
  bodySS: {
    fontSize: "12px",
    fontWeight: 400,
  },
  buttonL: {
    fontSize: "18px",
    fontWeight: 700,
  },
  buttonM: {
    fontSize: "16px",
    fontWeight: 500,
  },
  buttonS: {
    fontSize: "14px",
    fontWeight: 400,
  },

  fontFamily: "'Noto Sans KR', serif",
  fontSize: 12,
};

if (_typography.bodyS) {
  _typography.body1 = _typography.bodyS;
}

export default _typography;
