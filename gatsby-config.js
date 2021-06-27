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
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
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
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "123", //TODO: FIX THIS
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
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
