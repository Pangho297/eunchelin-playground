import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
  require?: boolean;
};

export default function FormFieldWrapper({ children, title, require }: Props) {
  return (
    <Stack gap={0.5}>
      <Typography variant="bodySS" sx={{ color: "grey.500" }}>
        {title}{" "}
        {require && (
          <Typography component="span" sx={{ color: "error.main" }}>
            *
          </Typography>
        )}
      </Typography>
      {children}
    </Stack>
  );
}
