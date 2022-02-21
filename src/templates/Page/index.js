import { graphql } from "gatsby";
import * as React from "react";
import { sliceResolver } from "../../../prismic/sliceResolver";
import Layout from "../../components/Layout";

const Page = (props) => {
  const {
    data,
    lang,
    alternate_languages,
  } = props.data.allPrismicPage.edges[0].node;
  const { page_title, page_description, body } = data;
  const pageTitle = page_title.text;
  const pageDescription = page_description.text;
  return (
    <Layout
      title={pageTitle}
      description={pageDescription}
      langData={{ lang, altLangs: alternate_languages }}
      navigationData={props.data.prismicMainNavigation}
    >
      <main>{body.map(sliceResolver)}</main>
    </Layout>
  );
};

export const query = graphql`
  query PageQuery($uid: String, $lang: String) {
    prismicMainNavigation(lang: { eq: $lang }) {
      data {
        links {
          link {
            id
            link_type
            uid
            url
            target
            lang
          }
          label {
            text
          }
        }
      }
    }
    allPrismicPage(filter: { uid: { eq: $uid }, lang: { eq: $lang } }) {
      edges {
        node {
          lang
          alternate_languages {
            id
            type
            lang
            uid
            link_type
          }
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
                    lang
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
                    lang
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
              ... on PrismicPageBodyCase {
                id
                slice_type
                primary {
                  body1 {
                    html
                  }
                  image {
                    fluid {
                      src
                      srcSet
                      srcSetWebp
                      srcWebp
                    }
                    alt
                  }
                  link {
                    type
                    url
                    uid
                    link_type
                    target
                    lang
                  }
                  quotee
                  title1
                  quote {
                    html
                  }
                }
              }
              ... on PrismicPageBodyPageHeaderWithContactForm {
                id
                slice_type
                primary {
                  body1 {
                    html
                  }
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
                    lang
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
