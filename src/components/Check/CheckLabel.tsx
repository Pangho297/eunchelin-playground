import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";

interface CheckLabelProps extends CheckboxProps {
  label: string;
}

export default function _CheckLabel({
  label,
  disabled,
  sx,
  ...rest
}: CheckLabelProps) {
  return (
    <FormControlLabel
      control={<Checkbox {...rest} disabled={disabled} />}
      label={label}
      sx={(theme) => ({
        flexShrink: 0,
        margin: "0 !important",
        ...((typeof sx === "function" ? sx(theme) : sx) as any),
      })}
    />
  );
}
