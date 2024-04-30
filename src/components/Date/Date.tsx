import { Nullable } from "@/types/common";
import { FormControl, FormHelperText, styled } from "@mui/material";
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { ForwardedRef, forwardRef, useImperativeHandle, useState } from "react";
import { DatePickerRefType } from ".";

export type DatePickerProps = {
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

export default forwardRef(function DatePicker(
  {
    value = null,
    fullWidth,
    errorMessage,
    size = "medium",
    shouldDisableDate,
    onChange,
    onOpen,
    ...rest
  }: DatePickerProps,
  ref: ForwardedRef<DatePickerRefType>
) {
  const [open, setOpen] = useState<boolean>(false);

  const handleClear = () => {
    onChange?.(null);
  };

  const handleChange = (value: Nullable<Dayjs>) => {
    onChange?.(value);
    setOpen(false);
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
        width: fullWidth ? "100%" : "fit-content",

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
      <MUIDatePicker
        format="YYYY-MM-DD"
        value={value}
        open={open}
        shouldDisableDate={shouldDisableDate}
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
        {...rest}
        sx={{
          width: fullWidth ? "100%" : "fit-content",
        }}
      />
      {Boolean(errorMessage) && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
});
