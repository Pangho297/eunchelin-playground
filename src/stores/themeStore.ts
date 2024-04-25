import { create } from "zustand";

type ThemeModeType = "light" | "dark";
type ThemeDirectionType = "rt1" | "1tr";

type ThemeStoreType = {
  themeMode: ThemeModeType;
  themeDirection: ThemeDirectionType;
  setThemeMode: (themeMode: ThemeModeType) => void;
  setThemeDirection: (themeDirection: ThemeDirectionType) => void;
};

export const useThemeStore = create<ThemeStoreType>((set) => ({
  themeMode: "light",
  themeDirection: "1tr",
  setThemeMode: (themeMode) => set({ themeMode }),
  setThemeDirection: (themeDirection) => set({ themeDirection }),
}));
