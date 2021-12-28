import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        colors: {
            purple: string;
            purpleHoverd: string;
            green: string;
            purpleRed: string;
        };
    }
    interface ThemeOptions {
        colors?: {
            purple?: string;
            purpleHoverd?: string;
            green?: string;
            purpleRed?: string;
        };
    }
}

const theme = createTheme({
    colors: {
        purple: "#ad0cf8",
        purpleHoverd: "#7801af",
        green: "#13f5bd",
        purpleRed: "#f00372"
    },
});

export const Theme: React.FC = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
