import { Nullable } from "@/types/common";
import { Dayjs } from "dayjs";

import DatePicker from "./Date";
import RangePicker from "./Range";
import TimePicker from "./Time";

export { DatePicker, RangePicker, TimePicker };

type RangeDateType = {
  start: Nullable<Dayjs>;
  end: Nullable<Dayjs>;
};

type DatePickerRefType = {
  closeDialog: () => void;
};

export type { RangeDateType, DatePickerRefType };
