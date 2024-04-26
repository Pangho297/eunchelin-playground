import { makeVar } from "@apollo/client";

type ThemeModeType = "light" | "dark";
type ThemeDirectionType = "rt1" | "1tr";

export const themeModeVar = makeVar<ThemeModeType>("light");
export const themeDirectionVar = makeVar<ThemeDirectionType>("1tr");
