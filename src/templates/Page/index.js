import { graphql } from "gatsby";
import * as React from "react";
import { sliceResolver } from "../../../prismic/sliceResolver";
import Layout from "../../components/Layout";

const Page = (props) => {
  const { data } = props.data.allPrismicPage.edges[0].node;
  const { page_title, page_description, body } = data;
  const pageTitle = page_title.text;
  const pageDescription = page_description.text;
  return (
    <Layout title={pageTitle} description={pageDescription}>
      <main>{body.map(sliceResolver)}</main>
    </Layout>
  );
};

export const query = graphql`
  query PageQuery($uid: String) {
    allPrismicPage(filter: { uid: { eq: $uid }, lang: { eq: "nl-be" } }) {
      edges {
        node {
          data {
            page_title {
              text
            }
            body {
              ... on PrismicPageBodyIconBlocks {
                id
                slice_type
                primary {
                  title {
                    text
                  }
                  subtitle {
                    html
                  }
                }
                items {
                  title {
                    text
                  }
                  image {
                    alt
                    fluid {
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                    }
                  }
                  content {
                    html
                  }
                }
              }
              ... on PrismicPageBodyLogoBar {
                id
                slice_type
                primary {
                  theme
                  title {
                    text
                  }
                }
                items {
                  link {
                    type
                    url
                    uid
                    link_type
                    target
                  }
                  logo {
                    alt
                    fluid {
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                    }
                  }
                }
              }
              ... on PrismicPageBodyFocus {
                id
                slice_type
                primary {
                  theme
                  title {
                    text
                  }
                  content {
                    html
                  }
                }
                items {
                  button_link {
                    type
                    url
                    uid
                    link_type
                    target
                  }
                  button_text {
                    text
                  }
                }
              }
              ... on PrismicPageBodyUsp {
                id
                slice_type
                primary {
                  section_title {
                    text
                  }
                  theme
                }
                items {
                  content {
                    html
                  }
                  icon {
                    alt
                    fixed {
                      src
                      width
                      height
                    }
                  }
                  title {
                    text
                  }
                }
              }
              ... on PrismicPageBodyPageHeader {
                id
                slice_type
                primary {
                  body1 {
                    html
                  }
                  theme
                  title {
                    text
                  }
                }
              }
              ... on PrismicPageBodyRichText {
                id
                slice_type
                slice_label
                primary {
                  theme
                  size
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
                    text
                  }
                  hero_body {
                    html
                  }
                }
                items {
                  button_label {
                    text
                  }
                  button_link {
                    type
                    url
                    uid
                    link_type
                    target
                  }
                }
              }
              ... on PrismicPageBodyImageText {
                id
                slice_type
                primary {
                  theme
                  direction
                  image_alignment
                  content {
                    html
                  }
                  image {
                    alt
                    fluid {
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                      sizes
                    }
                    alt
                  }
                }
              }
              ... on PrismicPageBodyWidget {
                id
                slice_type
                primary {
                  theme
                  widget
                  title {
                    text
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
