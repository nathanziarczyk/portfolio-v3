import "bootstrap/dist/css/bootstrap-grid.min.css";
import "@fontsource/orelega-one";
import "@fontsource/raleway";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ParallaxProvider } from "react-scroll-parallax";

import { ThemeContext } from "../../context/themeContext";
import { GlobalStyles } from "../../styles/global";
import { theme } from "../../styles/theme";
import Footer from "../Footer";
import Header from "../Header";
import SEO from "../SEO";
import SplashScreen from "./SplashScreen";

const Layout = ({ children, title, description }) => {
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
          <GlobalStyles />
          <SplashScreen />
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
