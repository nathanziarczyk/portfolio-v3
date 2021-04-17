import * as React from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "../styles/base.scss";
import "../styles/typography.scss";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ImageText from "../components/ImageText";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <Hero />
        <ImageText />
      </main>
    </Layout>
  );
};

export default IndexPage;
