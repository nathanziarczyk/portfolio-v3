import "bootstrap/dist/css/bootstrap-grid.min.css";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ParallaxProvider } from "react-scroll-parallax";

import { ThemeContext } from "../../context/themeContext";
import { GlobalStyles } from "../../styles/global";
import { theme } from "../../styles/theme";
import Footer from "../Footer";
import Header from "../Header";
import SEO from "../SEO";

const Layout = ({ children, title, description }) => {
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
    <ParallaxProvider>
      <ThemeContext.Provider value={[selectedTheme, toggleTheme]}>
        <div className="splash">
          <div className="balls">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <ThemeProvider theme={theme[selectedTheme]}>
          <GlobalStyles />
          <SEO title={title} description={description} />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </ThemeContext.Provider>
    </ParallaxProvider>
  );
};

export default Layout;
