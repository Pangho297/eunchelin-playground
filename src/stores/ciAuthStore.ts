import { Nullable } from "@/types/common";
import { create } from "zustand";

type LoginAuthStoreType = {
  ci: Nullable<string>;

  setCi: (ci: string) => void;
};

export const useCiAuthStore = create<LoginAuthStoreType>((set) => ({
  ci: null,
  setCi: (ci: Nullable<string>) => {
    set({ ci });
  },
}));
