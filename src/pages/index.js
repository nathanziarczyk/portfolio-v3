import * as React from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "../styles/base.scss";
import "../styles/typography.scss";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ImageText from "../components/ImageText";
import ContactForm from "../components/ContactForm";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <main>
        <Hero />
        <ImageText data={data.allSanityImageText.nodes[0]} />
        <ContactForm />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query ImageText {
    allSanityImageText {
      nodes {
        id
        image {
          ...ImageWithPreview
        }
        body {
          _type
          style
          children {
            text
            _key
            _type
            marks
          }
        }
      }
    }
  }
`;
