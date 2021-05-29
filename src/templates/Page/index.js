import { graphql } from "gatsby";
import * as React from "react";
import { sliceResolver } from "../../../prismic/sliceResolver";
import Layout from "../../components/Layout";

const Page = (props) => {
  const { data } = props.data.allPrismicPage.edges[0].node;
  const { pageTitle, pageDescription, body } = data;
  console.log(data);
  return (
    <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
      <main>{body.map(sliceResolver)}</main>
    </Layout>
  );
};

export const query = graphql`
  query PageQuery($uid: String) {
    allPrismicPage(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          data {
            page_title {
              text
            }
            body {
              ... on PrismicPageBodyRichText {
                id
                slice_type
                primary {
                  text {
                    html
                  }
                }
              }
              ... on PrismicPageBodyHero {
                id
                slice_type
                primary {
                  hero_title {
                    html
                  }
                  hero_body {
                    html
                  }
                }
              }
            }
            page_description {
              text
            }
          }
          uid
          prismicId
        }
      }
    }
  }
`;

export default Page;
