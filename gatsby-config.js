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
    image: "/images/seo-image.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@zzznathan",
    siteUrl: "https://nathanz.dev",
  },
  plugins: [
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        mode: "async",
        enableListener: true,
        preconnect: ["https://fonts.gstatic.com"],
        /* Web fonts. File link should point to font CSS file. */
        web: [
          {
            name: "Orelega One",
            file: "https://fonts.googleapis.com/css2?family=Orelega+One",
          },
          {
            name: "Raleway",
            file:
              "https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;900&display=swap",
          },
        ],
      },
    },
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
        trackingId: process.env.ANALYTICS_ID,
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
