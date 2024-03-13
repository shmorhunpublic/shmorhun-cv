import { ThemeOptions } from "@mui/material";
import { ThemeMode } from "@/types/enums/theme";

const DARK_PALETTE: ThemeOptions["palette"] = {
    mode: ThemeMode.DARK,
    primary: {
        main: "#C2185B",
        dark: "#D32F2F",
        contrastText: "#FFFFFF"
    },
    secondary: {
        main: "#512DA8",
        dark: "#7B1FA2",
        contrastText: "#FFFFFF"
    },
    text: {
        primary: "#CE93D8",
        secondary: "#F3E5F5",
        disabled: "#9575CD"
    },
    background: {
        paper: "#311B92",
        default: "#4527A0"
    },
    success: {
        main: "#4CAF50",
        contrastText: "#FFFFFF"
    },
    error: {
        main: "#F44336",
        contrastText: "#FFFFFF"
    },
    warning: {
        main: "#FF9800",
        contrastText: "#FFFFFF"
    },
    info: {
        main: "#2196F3",
        contrastText: "#FFFFFF"
    },
    grey: {
        "50": "#311B92",
        "100": "#4527A0",
        "200": "#512DA8",
        "300": "#5E35B1",
        "400": "#673AB7",
        "500": "#7E57C2",
        "600": "#9575CD",
        "700": "#B39DDB",
        "800": "#D1C4E9",
        "900": "#EDE7F6"
    }
};

const LIGHT_PALETTE: ThemeOptions["palette"] = {
    mode: ThemeMode.LIGHT,
    primary: {
        main: "#D32F2F",
        dark: "#C2185B",
        contrastText: "#FFFFFF"
    },
    secondary: {
        main: "#7B1FA2",
        dark: "#512DA8",
        contrastText: "#FFFFFF"
    },
    text: {
        primary: "#F3E5F5",
        secondary: "#CE93D8",
        disabled: "#B39DDB"
    },
    background: {
        paper: "#4527A0",
        default: "#311B92"
    },
    success: {
        main: "#4CAF50",
        contrastText: "#FFFFFF"
    },
    error: {
        main: "#F44336",
        contrastText: "#FFFFFF"
    },
    warning: {
        main: "#FF9800",
        contrastText: "#FFFFFF"
    },
    info: {
        main: "#2196F3",
        contrastText: "#FFFFFF"
    },
    grey: {
        "50": "#EDE7F6",
        "100": "#D1C4E9",
        "200": "#B39DDB",
        "300": "#9575CD",
        "400": "#7E57C2",
        "500": "#673AB7",
        "600": "#5E35B1",
        "700": "#512DA8",
        "800": "#4527A0",
        "900": "#311B92"
    }
};

type MuiPalette = { [key in ThemeMode]: ThemeOptions["palette"] };
export const MUI_PALETTE: MuiPalette = {
    [ThemeMode.DARK]: DARK_PALETTE,
    [ThemeMode.LIGHT]: LIGHT_PALETTE
};
