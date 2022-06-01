import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  //create theme state variable
  const storedTheme = localStorage.theme;
  const initialTheme = !storedTheme ? "light" : storedTheme;
  const [theme, setTheme] = useState(initialTheme);

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return (
    <ThemeContext.Provider value={{ colorTheme, setTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
