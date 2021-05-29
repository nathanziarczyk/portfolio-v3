import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ImageText from "../components/ImageText";
import ContactForm from "../components/ContactForm";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <main>
        <Hero />
        <ContactForm />
      </main>
    </Layout>
  );
};

export default IndexPage;
