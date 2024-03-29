import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
const SEO = (props) => {
  const { title, description, image, article, langData } = props;
  const { pathname } = useLocation();
  const { site, href } = useStaticQuery(query);
  const {
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata;
  let lang = langData && langData?.lang ? langData.lang : "nl-be";

  const isHome = pathname === "/";

  const seo = {
    title: isHome ? `Nathan Ziarczyk · ${title}` : `${title} · Nathan Ziarczyk`,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };
  return (
    <>
      <Helmet
        title={seo.title}
        htmlAttributes={{
          lang: lang,
        }}
      >
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
          rel="preload"
          as="style"
          onload="this.rel='stylesheet'"
        />
        <link rel="alternate" href={href} hreflang={lang} />
        <meta name="description" content={seo.description} />
        <meta
          name="keywords"
          content="site, freelance, belgie, Belgie, België, belgië, belgium, websitebouwer, Wordpress, wordpress, wp, shopify, Shopify, gatsby, Gatsby, Prismic, prismic, web, websites, website, developer, design, web, web design, web developer, web designer, front, end, front-end, back-end, back, end, website maken, webshop maken, ontwikkellaar, ontwerper"
        />
        <meta name="image" content={seo.image} />
        {seo.url && <meta property="og:url" content={seo.url} />}
        {(article ? true : null) && (
          <meta property="og:type" content="article" />
        )}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={seo.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        {twitterUsername && (
          <meta name="twitter:creator" content={twitterUsername} />
        )}
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && <meta name="twitter:image" content={seo.image} />}
        <link
          rel="stylesheet"
          href="https://use.typekit.net/xkc3uag.css"
        ></link>
        {process.env.ENV !== "staging" && (
          <script
            defer
            data-domain="nathanz.dev"
            src="https://plausible.io/js/plausible.js"
          ></script>
        )}
        {process.env.ENV === "staging" && (
          <meta name="robots" content="noindex" />
        )}
      </Helmet>
    </>
  );
};
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};
export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`;
