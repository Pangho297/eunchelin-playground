import { Box, Stack } from "@mui/material";
import DatePicker from "./Date";
import { Nullable } from "@/types/common";
import dayjs, { Dayjs } from "dayjs";
import {
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { DatePickerRefType } from ".";

export type DateRangePickerProps = {
  start?: Nullable<Dayjs>;
  end?: Nullable<Dayjs>;
  fullWidth?: boolean;
  limit?: { value: number; unit: dayjs.ManipulateType };
  disabled?: boolean;
  onChange?: (type: "all" | "start" | "end", value: Nullable<Dayjs>) => void;
};

type InputRefType = {
  clear: () => void;
};

export default forwardRef(function RangePicker(
  { start, end, fullWidth, limit, disabled, onChange }: DateRangePickerProps,
  ref: ForwardedRef<InputRefType>
) {
  const startRef = useRef<DatePickerRefType>(null);
  const endRef = useRef<DatePickerRefType>(null);

  const handleStartChange = (value: Nullable<Dayjs>) => {
    onChange?.("start", value);
  };

  const handleEndChange = (value: Nullable<Dayjs>) => {
    onChange?.("end", value);
  };

  useImperativeHandle(ref, () => ({
    clear: () => {
      onChange?.("all", null);
    },
  }));

  return (
    <Stack direction="row" alignItems="center" gap={2} sx={{ width: "100%" }}>
      <DatePicker
        ref={startRef}
        value={start}
        shouldDisableDate={(day) => {
          if (!end) return false;
          return dayjs(day).isAfter(end);
        }}
        onChange={handleStartChange}
        onOpen={() => endRef.current?.closeDialog()}
        fullWidth={fullWidth}
        disabled={disabled}
        {...(limit && {
          minDate: end ? dayjs(end).add(-limit?.value, limit?.unit) : undefined,
        })}
      />
      <Box
        component="span"
        sx={(theme) => ({
          width: "10px",
          height: "2px",
          backgroundColor: theme.palette.grey[500],
        })}
      />
      <DatePicker
        ref={endRef}
        value={end}
        shouldDisableDate={(day) => {
          if (!start) return false;
          return dayjs(day).isBefore(start);
        }}
        onChange={handleEndChange}
        onOpen={() => startRef.current?.closeDialog()}
        fullWidth={fullWidth}
        disabled={disabled}
        {...(limit && {
          maxDate: start
            ? dayjs(start).add(limit?.value, limit?.unit)
            : undefined,
        })}
      />
    </Stack>
  );
});
