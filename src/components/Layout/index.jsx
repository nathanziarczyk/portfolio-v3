import "bootstrap/dist/css/bootstrap-grid.min.css";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../../context/themeContext";
import { GlobalStyles } from "../../styles/global";
import { theme } from "../../styles/theme";
import Header from "../Header";
import SEO from "../SEO";

const Layout = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState("light");

  useEffect(() => {
    if (window.localStorage.getItem("nz-theme")) {
      setSelectedTheme(window.localStorage.getItem("nz-theme"));
    } else {
      window.localStorage.setItem("nz-theme", selectedTheme);
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem("nz-theme", selectedTheme);
  }, [selectedTheme]);

  const toggleTheme = () => {
    setSelectedTheme(selectedTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={[selectedTheme, toggleTheme]}>
      <div className="splash">
        <div class="balls">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
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
