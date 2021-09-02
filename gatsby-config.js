require("dotenv").config({
  path: `.env`,
});
const linkResolver = require("./prismic/linkResolver");

module.exports = {
  siteMetadata: {
    title: "Home",
    titleTemplate: "%s · Nathan",
    description:
      "I create great websites and webshops to boost your company's performance.",
    url: "https://nathanz.dev", // No trailing slash allowed!
    image: "/images/seo-image.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@zzznathan",
    siteUrl: "https://nathanz.dev",
  },
  plugins: [
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_TOKEN,
        linkResolver: () => linkResolver,
        schemas: {
          page: require("./prismic/types/page.json"),
          main_navigation: require("./prismic/types/main_navigation.json"),
          service: require("./prismic/types/services.json"),
        },
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.ANALYTICS_ID, // Google Analytics / GA
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sitemap",
      excludes: ["success", "404"],
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};
