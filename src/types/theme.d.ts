import { PaletteColor, PaletteColorOptions, Color } from "@mui/material";

declare module "@mui/material/styles" {
  // Palette Extend

  interface PaletteColor extends Color {}

  // 추가 컬러 타입
  interface Palette {
    tertiary: string;
  }

  interface PaletteOptions {
    tertiary: string;
  }

  interface TypographyVariants {
    bodyL: CSSProperties;
    bodyM: CSSProperties;
    bodyS: CSSProperties;
    bodySS: CSSProperties;
    buttonL: CSSProperties;
    buttonM: CSSProperties;
    buttonS: CSSProperties;
  }

  interface TypographyVariantsOptions {
    bodyL: CSSProperties;
    bodyM: CSSProperties;
    bodyS: CSSProperties;
    bodySS: CSSProperties;
    buttonL: CSSProperties;
    buttonM: CSSProperties;
    buttonS: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bodyL: true;
    bodyM: true;
    bodyS: true;
    bodySS: true;
    buttonL: true;
    buttonM: true;
    buttonS: true;
  }
}
