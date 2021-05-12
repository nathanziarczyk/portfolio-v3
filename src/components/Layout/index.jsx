import "bootstrap/dist/css/bootstrap-grid.min.css";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../../context/themeContext";
import { GlobalStyles } from "../../styles/global";
import { theme } from "../../styles/theme";
import Header from "../Header";
import SEO from "../SEO";

const Layout = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState("light");
  const toggleTheme = () => {
    selectedTheme === "light"
      ? setSelectedTheme("dark")
      : setSelectedTheme("light");
  };
  return (
    <ThemeContext.Provider value={[selectedTheme, toggleTheme]}>
      <ThemeProvider theme={theme[selectedTheme]}>
        <GlobalStyles />
        <SEO />
        <Header />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Layout;
