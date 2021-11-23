import React, { useContext } from "react";
import Content from "./Content";
import ThemeContext from "./ThemeContext";

export default function UseContext() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h2>Use Context</h2>
      <button
        onClick={() =>
          theme.setTheme(theme.theme === "light" ? "dank" : "light")
        }
      >
        Change Theme
      </button>
      <Content />
    </div>
  );
}
