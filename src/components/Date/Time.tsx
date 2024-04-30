import { Nullable } from "@/types/common";
import { Dayjs } from "dayjs";
import { ForwardedRef, forwardRef, useImperativeHandle, useState } from "react";
import { DatePickerRefType } from ".";
import { FormControl, FormHelperText } from "@mui/material";
import { TimePicker as MUITimePicker } from "@mui/x-date-pickers";

export type TimePickerProps = {
  value?: Nullable<Dayjs>;
  fullWidth?: boolean;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  disabled?: boolean;
  errorMessage?: string;
  size?: "medium" | "small";
  shouldDisableDate?: (day: Nullable<Dayjs>) => boolean;
  onChange?: (value: Nullable<Dayjs>) => void;
  onOpen?: () => void;
};

export default forwardRef(function TimePicker(
  {
    value = null,
    fullWidth,
    disabled,
    errorMessage,
    size = "medium",
    onChange,
    onOpen,
  }: TimePickerProps,
  ref: ForwardedRef<DatePickerRefType>
) {
  const [open, setOpen] = useState<boolean>(false);

  const handleClear = () => {
    onChange?.(null);
  };

  const handleChange = (value: Nullable<Dayjs>) => {
    onChange?.(value);
  };

  const handleOpen = () => {
    setOpen((prev) => {
      const _open = !prev;
      if (_open) onOpen?.();
      return _open;
    });
  };

  useImperativeHandle(ref, () => ({
    closeDialog: () => setOpen(false),
  }));

  return (
    <FormControl
      error={Boolean(errorMessage)}
      sx={{
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& fieldset": {
            borderColor: Boolean(errorMessage) ? "error.main" : "",
          },
        },
        "& .MuiOutlinedInput-root:hover": {
          "& fieldset": {
            borderColor: Boolean(errorMessage) ? "error.main" : "",
          },
        },
        "& .MuiOutlinedInput-root:focus": {
          "& fieldset": {
            borderColor: Boolean(errorMessage) ? "error.main" : "",
          },
        },
        "& fieldset": {
          borderColor: Boolean(errorMessage) ? "error.main" : "",
        },
      }}
    >
      <MUITimePicker
        value={value}
        open={open}
        disabled={disabled}
        ampm={false}
        slotProps={{
          field: {
            clearable: true,
            onClear: handleClear,
            onKeyDown: (e) => e.preventDefault(),
          },
          textField: {
            onClick: handleOpen,
          },
          openPickerButton: {
            onClick: (e) => {
              e.preventDefault();
              handleOpen();
            },
          },
        }}
        onChange={handleChange}
        onAccept={() => setOpen(false)}
        sx={(theme) => ({
          width: fullWidth ? "100%" : "fit-content",
        })}
      />
      {Boolean(errorMessage) && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
});
