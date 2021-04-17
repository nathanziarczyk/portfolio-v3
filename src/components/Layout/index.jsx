import React from "react";
import Header from "../Header";
import SEO from "../SEO";

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Header />
      {children}
    </>
  );
};

export default Layout;
