import { ThemeOptions } from "@mui/material";
import { ThemeMode } from "../../types/enums/theme";
import { MUI_PALETTE } from "./mui.palette.config";
import { MUI_TYPOGRAPHY_STYLES } from "./mui.typography.config";
import { MUI_COMPONENTS_STYLES } from "./mui.components.config";

const DARK_THEME: ThemeOptions = {
    components: MUI_COMPONENTS_STYLES,
    typography: MUI_TYPOGRAPHY_STYLES,
    palette: MUI_PALETTE[ThemeMode.DARK]
};

const LIGHT_THEME: ThemeOptions = {
    components: MUI_COMPONENTS_STYLES,
    typography: MUI_TYPOGRAPHY_STYLES,
    palette: MUI_PALETTE[ThemeMode.LIGHT]
};

type MuiThemes = { [key in ThemeMode]: ThemeOptions };
export const MUI_THEMES: MuiThemes = {
    [ThemeMode.DARK]: DARK_THEME,
    [ThemeMode.LIGHT]: LIGHT_THEME
};
