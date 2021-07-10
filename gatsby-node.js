const path = require("path");
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicPage {
        nodes {
          id
          uid
          lang
          type
          url
          lang
        }
      }
    }
  `);

  pages.data.allPrismicPage.nodes.forEach((page) => {
    const { lang } = page;
    let pagePath;
    if (lang === "nl-be") {
      if (page.uid === "home") {
        pagePath = "nl/";
      } else {
        pagePath = `nl/${page.uid}`;
      }
    } else if (lang === "en-gb") {
      if (page.uid === "home") {
        pagePath = "/";
      } else {
        pagePath = page.uid;
      }
    }
    console.log(pagePath);
    createPage({
      path: pagePath,
      component: path.resolve(__dirname, "src/templates/Page/index.js"),
      context: { ...page },
    });
  });
};
