import React, { createContext, useState } from "react";

// initiate context
const ThemeContext = createContext();

// provide context
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return <ThemeContext.Provider value = {{theme, setTheme}}>
      {children}
  </ThemeContext.Provider>;
}

export default ThemeContext;
