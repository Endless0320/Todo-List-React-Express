import { createContext, useState, ReactNode } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import ThemeContextPropsTypes from "../types/theme/ThemeContextProps.types";

export const ThemeContext = createContext<ThemeContextPropsTypes | undefined>(undefined);

export const ThemeProviderComponent = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
