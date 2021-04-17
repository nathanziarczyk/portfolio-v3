import * as React from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "../styles/base.scss";
import "../styles/typography.scss";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ImageText from "../components/ImageText";
import ContactForm from "../components/ContactForm";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <Hero />
        <ImageText />
        <ContactForm />
      </main>
    </Layout>
  );
};

export default IndexPage;
