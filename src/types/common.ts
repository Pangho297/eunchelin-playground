import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent } from "react";

export type Nullable<T> = T | null;

export type SelectOption = {
  label: string;
  value: string;
};

export type BaseResponse = {
  returnCode: number;
  returnMessage: Nullable<string>;
};

export type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
export type SelectChange = SelectChangeEvent<string[]>;
export type HandleChange<A extends InputChange | SelectChange> = (e: A) => void;
