import { Nullable } from "@/types/common";
import { makeVar } from "@apollo/client";

export const ciVar = makeVar<Nullable<string>>("");
