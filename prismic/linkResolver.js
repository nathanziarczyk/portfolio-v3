const linkResolver = (link) => {
  if (link.link_type === "Document")
    return link.uid == "home" ? "/" : "/" + link.uid;
  if (link.link_type === "Web") return link.url;
  // Fallback for other types, in case new custom types get created
  return "/doc/" + link.id;
};
module.exports = linkResolver;
