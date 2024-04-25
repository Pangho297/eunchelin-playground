export type Nullable<T> = T | null;

export type SelectOption = {
  label: string;
  value: string;
};

export type BaseResponse = {
  returnCode: number;
  returnMessage: Nullable<string>;
};
