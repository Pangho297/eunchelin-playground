import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  RadioGroup as MUIRadioGroup,
  Radio,
  SxProps,
} from "@mui/material";
import { Theme } from "@mui/system";
import { ChangeEventHandler } from "react";

interface RadioGroupProps {
  direction?: "row" | "column";
  items: { label: string; value: string }[];
  value: string;
  selectedRows?: string[];
  disabled?: boolean;
  errorMessage?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function _CheckboxGroup({
  direction = "row",
  items,
  value,
  disabled,
  errorMessage,
  onChange,
}: RadioGroupProps) {
  return (
    <FormControl
      component="fieldset"
      variant="standard"
      error={Boolean(errorMessage)}
    >
      <MUIRadioGroup
        row={direction === "row"}
        value={value}
        onChange={onChange}
      >
        {items.map((item) => (
          <FormControlLabel
            key={item.value}
            name={item.value}
            value={item.value}
            control={<Radio size="small" />}
            label={item.label}
            disabled={disabled}
          />
        ))}
      </MUIRadioGroup>
      {Boolean(errorMessage) && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}
