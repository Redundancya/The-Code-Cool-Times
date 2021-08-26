import React from "react";
import Container from "./components/Container";
import { NewsProvider } from "./components/main/NewsContext";
import { CustomThemeProvider } from "./theme/ThemeContext";

export default function App() {
  return (
    <>
      <NewsProvider>
        <CustomThemeProvider>
          <Container />
        </CustomThemeProvider>
      </NewsProvider>
    </>
  );
}
