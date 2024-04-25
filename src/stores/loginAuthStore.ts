import { useShallow } from "@/hooks/useShallow";
import { Nullable } from "@/types/common";
import { StateCreator } from "zustand";
import { PersistOptions, createJSONStorage, persist } from "zustand/middleware";
import { createWithEqualityFn } from "zustand/traditional";

type LoginAuthStoreType = {
  accessToken: Nullable<string>;
  refreshToken: Nullable<string>;

  setToken: (accessToken: string, refreshToken: string) => void;
  clear: () => void;
};

type PersistLoginAuthStoreType = (
  config: StateCreator<LoginAuthStoreType>,
  options: PersistOptions<LoginAuthStoreType>
) => StateCreator<LoginAuthStoreType>;

const store = createWithEqualityFn<LoginAuthStoreType>(
  (persist as PersistLoginAuthStoreType)(
    (set) => ({
      accessToken: null,
      refreshToken: null,

      setToken: (accessToken, refreshToken) => {
        set({ accessToken, refreshToken });
      },
      clear: () =>
        set({
          accessToken: null,
          refreshToken: null,
        }),
    }),

    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useAuthStore = <T extends keyof LoginAuthStoreType>(keys: T[]) => {
  return useShallow(store, keys);
};
