import { FormControl, FormGroup, FormHelperText, SxProps } from "@mui/material";
import { Theme } from "@mui/system";
import { ChangeEvent, useEffect, useState } from "react";
import { CheckLabel } from ".";

interface RadioGroupProps {
  direction?: "row" | "column";
  items: { label: string; value: string }[];
  selectedRows?: string[];
  disabled?: boolean;
  errorMessage?: string;
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "default";
  gridColumns?: number;
  sx?: SxProps<Theme>;
  onChange?: (selectedRows: string[]) => void;
}

export default function _CheckboxGroup({
  direction = "row",
  items,
  selectedRows: _selectedRows = [],
  disabled,
  errorMessage,
  color,
  gridColumns,
  sx,
  onChange,
}: RadioGroupProps) {
  const [selectedRows, setSelectedRows] = useState<string[]>(_selectedRows);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target;
    if (checked) setSelectedRows((p) => [...p, name]);
    else setSelectedRows((p) => p.filter((id) => name !== id));
  };

  useEffect(() => {
    onChange?.(selectedRows);
  }, [selectedRows]);

  return (
    <FormControl
      component="fieldset"
      variant="standard"
      error={Boolean(errorMessage)}
    >
      <FormGroup
        row={direction === "row"}
        sx={(theme) => ({
          ...(gridColumns && {
            display: "grid",
            ...(direction === "row"
              ? { gridTemplateColumns: `repeat(${gridColumns}, 1fr)` }
              : { gridTemplateRows: `repeat(${gridColumns}, 1fr)` }),
          }),
          ...((typeof sx === "function" ? sx(theme) : sx) as any),
        })}
      >
        {items.map((item) => (
          <CheckLabel
            key={item.value}
            label={item.label}
            name={item.value}
            disabled={disabled}
            color={color}
            checked={selectedRows.includes(String(item.value))}
            onChange={handleChange}
          />
        ))}
      </FormGroup>
      {Boolean(errorMessage) && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}
