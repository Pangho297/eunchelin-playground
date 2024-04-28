import { Box, Stack, Typography, useTheme } from "@mui/material";
import * as S from "../playground.style";

export default function PlaygroundTheme() {
  const theme = useTheme();
  const colorSchema: any[] = [
    "main",
    "900",
    "800",
    "700",
    "600",
    "500",
    "400",
    "300",
    "200",
    "100",
  ];

  console.log(theme.palette);

  return (
    <S.CollapseContainer gap={3}>
      <S.GridContainer sx={{ gridTemplateColumns: "repeat(10, 1fr)" }}>
        {/* Primary */}
        <Stack sx={{ gridColumn: "1 / 11" }}>
          <Typography variant="h2">Primary</Typography>
        </Stack>
        {colorSchema.map((item) => (
          <Stack key={item} gap={1}>
            <Box
              sx={{
                height: "50px",
                borderRadius: 2,
                // @ts-ignore
                backgroundColor: `${theme.palette.primary[item].toString()}`,
              }}
            />
            <Stack direction="row" gap={1}>
              <Typography variant="h5">{item}</Typography>
              {/* @ts-ignore */}
              <Typography>{theme.palette.primary[item]}</Typography>
            </Stack>
          </Stack>
        ))}
        {/* Secondary */}
        <Stack sx={{ gridColumn: "1 / 11" }}>
          <Typography variant="h2">Secondary</Typography>
        </Stack>
        {colorSchema.map((item) => (
          <Stack key={item} gap={1}>
            <Box
              sx={{
                height: "50px",
                borderRadius: 2,
                // @ts-ignore
                backgroundColor: `${theme.palette.secondary[item].toString()}`,
              }}
            />
            <Stack direction="row" gap={1}>
              <Typography variant="h5">{item}</Typography>
              {/* @ts-ignore */}
              <Typography>{theme.palette.secondary[item]}</Typography>
            </Stack>
          </Stack>
        ))}
        {/* Success */}
        <Stack sx={{ gridColumn: "1 / 11" }}>
          <Typography variant="h2">Success</Typography>
        </Stack>
        {colorSchema.map((item) => (
          <Stack key={item} gap={1}>
            <Box
              sx={{
                height: "50px",
                borderRadius: 2,
                // @ts-ignore
                backgroundColor: `${theme.palette.success[item].toString()}`,
              }}
            />
            <Stack direction="row" gap={1}>
              <Typography variant="h5">{item}</Typography>
              {/* @ts-ignore */}
              <Typography>{theme.palette.success[item]}</Typography>
            </Stack>
          </Stack>
        ))}
        {/* Error */}
        <Stack sx={{ gridColumn: "1 / 11" }}>
          <Typography variant="h2">Error</Typography>
        </Stack>
        {colorSchema.map((item) => (
          <Stack key={item} gap={1}>
            <Box
              sx={{
                height: "50px",
                borderRadius: 2,
                // @ts-ignore
                backgroundColor: `${theme.palette.error[item].toString()}`,
              }}
            />
            <Stack direction="row" gap={1}>
              <Typography variant="h5">{item}</Typography>
              {/* @ts-ignore */}
              <Typography>{theme.palette.error[item]}</Typography>
            </Stack>
          </Stack>
        ))}
        {/* Warning */}
        <Stack sx={{ gridColumn: "1 / 11" }}>
          <Typography variant="h2">Warning</Typography>
        </Stack>
        {colorSchema.map((item) => (
          <Stack key={item} gap={1}>
            <Box
              sx={{
                height: "50px",
                borderRadius: 2,
                // @ts-ignore
                backgroundColor: `${theme.palette.warning[item].toString()}`,
              }}
            />
            <Stack direction="row" gap={1}>
              <Typography variant="h5">{item}</Typography>
              {/* @ts-ignore */}
              <Typography>{theme.palette.warning[item]}</Typography>
            </Stack>
          </Stack>
        ))}
        {/* Info */}
        <Stack sx={{ gridColumn: "1 / 11" }}>
          <Typography variant="h2">Info</Typography>
        </Stack>
        {colorSchema.map((item) => (
          <Stack key={item} gap={1}>
            <Box
              sx={{
                height: "50px",
                borderRadius: 2,
                // @ts-ignore
                backgroundColor: `${theme.palette.info[item].toString()}`,
              }}
            />
            <Stack direction="row" gap={1}>
              <Typography variant="h5">{item}</Typography>
              {/* @ts-ignore */}
              <Typography>{theme.palette.info[item]}</Typography>
            </Stack>
          </Stack>
        ))}
        <Stack sx={{ gridColumn: "1 / 11" }}>
          <Typography variant="h2">Gray</Typography>
        </Stack>
        {colorSchema
          .filter((item) => item !== "main")
          .map((item) => (
            <Stack key={item} gap={1}>
              <Box
                sx={{
                  height: "50px",
                  borderRadius: 2,
                  // @ts-ignore
                  backgroundColor: `${theme.palette.grey[item]}`,
                }}
              />
              <Stack direction="row" gap={1}>
                <Typography variant="h5">{item}</Typography>
                {/* @ts-ignore */}
                <Typography>{theme.palette.grey[item]}</Typography>
              </Stack>
            </Stack>
          ))}
      </S.GridContainer>
      <Stack gap={2}>
        <Typography variant="h2">Background & Shadow</Typography>
        {/* Background Default */}
        <Stack direction="row" gap={2}>
          <Stack gap={1}>
            <Box
              sx={{
                minWidth: "200px",
                height: "50px",
                borderRadius: 2,
                backgroundColor: theme.palette.background.default,
              }}
            />
            <Stack direction="row" gap={1}>
              <Typography variant="h5">Default</Typography>
              <Typography>{theme.palette.background.default}</Typography>
            </Stack>
          </Stack>
          <Stack gap={1}>
            <Box
              sx={{
                minWidth: "200px",
                height: "50px",
                borderRadius: 2,
                backgroundColor: theme.palette.modalBg,
                opacity: 0.5,
              }}
            />
            <Stack direction="row" gap={1}>
              <Typography variant="h5">Modal Mask</Typography>
              <Typography>{theme.palette.modalBg} (alpha 0.5)</Typography>
            </Stack>
          </Stack>
          <Stack gap={1}>
            <Box
              sx={{
                minWidth: "200px",
                height: "50px",
                borderRadius: 2,
                backgroundColor: theme.palette.common.white,
                boxShadow: theme.shadows[10],
              }}
            />
            <Stack direction="row" gap={1}>
              <Typography variant="h5">Shadow</Typography>
              <Typography>{theme.shadows[10]}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack gap={2}>
        <Typography variant="h2">Typography</Typography>
        <Stack direction="row" gap={2}>
          <Typography variant="h1">H1</Typography>
          <Typography variant="h1">Title</Typography>
          <Stack direction="row" gap={1}>
            <Typography variant="h1">{theme.typography.h1.fontSize}</Typography>
            <Typography variant="h1">
              {theme.typography.h1.fontWeight}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" gap={2}>
          <Typography variant="h2">H2</Typography>
          <Typography variant="h2">Sub Title</Typography>
          <Stack direction="row" gap={1}>
            <Typography variant="h2">{theme.typography.h2.fontSize}</Typography>
            <Typography variant="h2">
              {theme.typography.h2.fontWeight}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" gap={2}>
          <Typography variant="h3">H3</Typography>
          <Typography variant="h3">Modal Title</Typography>
          <Stack direction="row" gap={1}>
            <Typography variant="h3">{theme.typography.h3.fontSize}</Typography>
            <Typography variant="h3">
              {theme.typography.h3.fontWeight}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" gap={2}>
          <Typography variant="h4">H4</Typography>
          <Typography variant="h4">Modal Sub Title</Typography>
          <Stack direction="row" gap={1}>
            <Typography variant="h4">{theme.typography.h4.fontSize}</Typography>
            <Typography variant="h4">
              {theme.typography.h4.fontWeight}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" gap={2}>
          <Typography variant="h5">H5</Typography>
          <Typography variant="h5">Bold Text</Typography>
          <Stack direction="row" gap={1}>
            <Typography variant="h5">{theme.typography.h5.fontSize}</Typography>
            <Typography variant="h5">
              {theme.typography.h5.fontWeight}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" gap={2}>
          <Typography variant="bodyL">Body L</Typography>
          <Typography variant="bodyL">Body Large</Typography>
          <Stack direction="row" gap={1}>
            <Typography variant="bodyL">
              {theme.typography.bodyL.fontSize}
            </Typography>
            <Typography variant="bodyL">
              {theme.typography.bodyL.fontWeight}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" gap={2}>
          <Typography variant="bodyM">Body M</Typography>
          <Typography variant="bodyM">Body Medium</Typography>
          <Stack direction="row" gap={1}>
            <Typography variant="bodyM">
              {theme.typography.bodyM.fontSize}
            </Typography>
            <Typography variant="bodyM">
              {theme.typography.bodyM.fontWeight}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" gap={2}>
          <Typography variant="bodyS">Body S</Typography>
          <Typography variant="bodyS">Body Small</Typography>
          <Stack direction="row" gap={1}>
            <Typography variant="bodyS">
              {theme.typography.bodyS.fontSize}
            </Typography>
            <Typography variant="bodyS">
              {theme.typography.bodyS.fontWeight}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" gap={2}>
          <Typography variant="bodySS">Body SS</Typography>
          <Typography variant="bodySS">Body Super Small</Typography>
          <Stack direction="row" gap={1}>
            <Typography variant="bodySS">
              {theme.typography.bodySS.fontSize}
            </Typography>
            <Typography variant="bodySS">
              {theme.typography.bodySS.fontWeight}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" gap={2}>
          <Typography variant="buttonL">Button L</Typography>
          <Typography variant="buttonL">Button Large</Typography>
          <Stack direction="row" gap={1}>
            <Typography variant="buttonL">
              {theme.typography.buttonL.fontSize}
            </Typography>
            <Typography variant="buttonL">
              {theme.typography.buttonL.fontWeight}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" gap={2}>
          <Typography variant="buttonM">Button M</Typography>
          <Typography variant="buttonM">Button Medium</Typography>
          <Stack direction="row" gap={1}>
            <Typography variant="buttonM">
              {theme.typography.buttonM.fontSize}
            </Typography>
            <Typography variant="buttonM">
              {theme.typography.buttonM.fontWeight}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" gap={2}>
          <Typography variant="buttonS">Button S</Typography>
          <Typography variant="buttonS">Button Small</Typography>
          <Stack direction="row" gap={1}>
            <Typography variant="buttonS">
              {theme.typography.buttonS.fontSize}
            </Typography>
            <Typography variant="buttonS">
              {theme.typography.buttonS.fontWeight}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack gap={2}>
        <Stack gap={2}>
          <Typography variant="h2">Font</Typography>
          <Typography variant="h3">Noto Sans KR</Typography>
          <Typography variant="h1">
            모든 인류 구성원의 천부의 존엄성과 동등하고 양도할 수 없는 권리를
            인정하는
          </Typography>
          <Typography variant="h1">
            Whereas recognition of the inherent dignity
          </Typography>
          <Typography variant="h1" fontWeight={500}>
            모든 인류 구성원의 천부의 존엄성과 동등하고 양도할 수 없는 권리를
            인정하는
          </Typography>
          <Typography variant="h1" fontWeight={500}>
            Whereas recognition of the inherent dignity
          </Typography>
          <Typography variant="h1" fontWeight={400}>
            모든 인류 구성원의 천부의 존엄성과 동등하고 양도할 수 없는 권리를
            인정하는
          </Typography>
          <Typography variant="h1" fontWeight={400}>
            Whereas recognition of the inherent dignity
          </Typography>
          <Typography variant="h1" fontWeight={300}>
            모든 인류 구성원의 천부의 존엄성과 동등하고 양도할 수 없는 권리를
            인정하는
          </Typography>
          <Typography variant="h1" fontWeight={300}>
            Whereas recognition of the inherent dignity
          </Typography>
        </Stack>
      </Stack>
    </S.CollapseContainer>
  );
}
