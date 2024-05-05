import {
  HandleChange,
  InputChange,
  Nullable,
  SelectChange,
} from "@/types/common";
import { Dayjs } from "dayjs";
import { useState } from "react";

type InputChangeHandler<T> = (e: InputChange) => void;
type SelectChangeHandler<T> = (e: SelectChange) => void;
type DateChangeHandler<T> = (
  type: "start" | "all" | "end",
  value: Nullable<Dayjs>
) => void;

export default function useOnChange<T extends Record<string, any>>(
  defaultReq: T
) {
  const [req, setReq] = useState<T>(defaultReq);

  const handleInputChange: InputChangeHandler<T> = (e) => {
    setReq({
      ...req,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange: SelectChangeHandler<T> = (e) => {
    setReq({
      ...req,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange: DateChangeHandler<T> = (type, value) => {
    if (type === "all") {
      console.log("test1");
      setReq({
        ...req,
        start: value?.format("YYYY-MM-DD") || "",
        end: value?.format("YYYY-MM-DD") || "",
      });
    } else {
      const p = type === "start" ? "start" : "end";
      setReq({
        ...req,
        [p]: value?.format("YYYY-MM-DD") || "",
      });
    }
  };

  return { req, handleInputChange, handleSelectChange, handleDateChange };
}
