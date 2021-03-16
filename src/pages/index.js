import * as React from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "../styles/base.scss";
import "../styles/typography.scss";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <Hero />
      </main>
    </Layout>
  );
};

export default IndexPage;
