import { Nullable } from "@/types/common";
import { makeVar } from "@apollo/client";

export const mapVar = makeVar<Nullable<kakao.maps.Map>>(null);
export const createMapVar = makeVar((map: Nullable<kakao.maps.Map>) =>
  mapVar(map)
);
