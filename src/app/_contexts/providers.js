"use client";
import React from "react";
import { LangProvider } from "./LangContext";
import { ThemeProvider } from "./ThemeContext";

export default function Providers({ children }) {
  return (
    <LangProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </LangProvider>
  );
}
