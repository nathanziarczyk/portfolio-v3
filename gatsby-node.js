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
        }
      }
    }
  `);

  pages.data.allPrismicPage.nodes.forEach((page) => {
    createPage({
      path: page.uid === "home" ? "/" : page.uid,
      component: path.resolve(__dirname, "src/templates/Page/index.js"),
      context: { ...page },
    });
  });
};
