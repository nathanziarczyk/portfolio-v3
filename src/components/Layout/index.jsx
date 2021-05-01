import React from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/global";
import { theme } from "../../styles/theme";
import Header from "../Header";
import SEO from "../SEO";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyles />
      <SEO />
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
