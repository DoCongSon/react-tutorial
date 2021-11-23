import React from "react";
import { ThemeProvider } from "./ThemeContext";
import UseContext from "./UseContext";
import "./index.css";

export default function Context() {
  return (
    <ThemeProvider>
      <UseContext />
    </ThemeProvider>
  );
}
