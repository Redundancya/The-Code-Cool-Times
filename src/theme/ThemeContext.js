import React, { useContext, useState, useEffect } from "react";
import { lightTheme, darkTheme } from "./GlobalStyles";

const ThemeContext = new React.createContext();
const ThemeUpdateContext = new React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function CustomThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [themeStyles, setThemeStyles] = useState({});

  useEffect(() => {
    setThemeStyles(theme === "dark" ? darkTheme : lightTheme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        themeStyles: themeStyles,
      }}
    >
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
