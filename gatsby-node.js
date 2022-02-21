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
    const prefix = page.lang === "nl-be" ? "" : page.lang.slice(0, 2);
    createPage({
      path:
        page.uid === "home"
          ? `/${prefix}`
          : `${prefix ? `${prefix}/` : ""}${page.uid}`,
      component: path.resolve(__dirname, "src/templates/Page/index.js"),
      context: { ...page },
    });
  });
};
