import "bootstrap/dist/css/bootstrap-grid.min.css";
import "../../styles/fonts.css";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ParallaxProvider } from "react-scroll-parallax";

import { ThemeContext } from "../../context/themeContext";
import { GlobalStyles } from "../../styles/global";
import { theme } from "../../styles/theme";
import Footer from "../Footer";
import Header from "../Header";
import SEO from "../SEO";
import Gradient from "../Gradient";

const Layout = ({ children, title, description, langData, navigationData }) => {
  const [selectedTheme, setSelectedTheme] = useState("dark");

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
        <ThemeProvider theme={theme["light"]}>
          <Gradient />
          <GlobalStyles />
          <SEO title={title} description={description} langData={langData} />
          <Header langData={langData} navigationData={navigationData} />
          {children}
          <Footer />
        </ThemeProvider>
      </ThemeContext.Provider>
    </ParallaxProvider>
  );
};

export default Layout;
