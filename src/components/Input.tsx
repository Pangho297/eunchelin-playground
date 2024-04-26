import { TextFieldProps, SxProps, TextField, Theme } from "@mui/material";

interface InputProps
  extends Omit<TextFieldProps, "variant" | "fullWidth" | "sx"> {
  errorMessage?: string;
  sx?: SxProps<Theme>;
}

export default function Input({
  errorMessage,
  error,
  sx,
  ...rest
}: InputProps) {
  return (
    <TextField
      variant="outlined"
      fullWidth
      rows={rest.multiline ? 5 : undefined}
      error={Boolean(errorMessage) || error}
      helperText={errorMessage}
      {...rest}
      sx={(theme) => ({
        bgcolor: "common.white",
        ".MuiInputBase-multiline": {
          padding: 0,
        },
        ...((typeof sx === "function" ? sx(theme) : sx) as any),
      })}
    />
  );
}
