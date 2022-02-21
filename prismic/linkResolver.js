const linkResolver = (link) => {
  if (["Document", "page"].includes(link.link_type)) {
    const prefix = link.lang === "nl-be" ? "" : link.lang.slice(0, 2);
    return link.uid === "home"
      ? `/${prefix}`
      : `${prefix ? `/${prefix}` : ""}/${link.uid}`;
  }
  if (link.link_type === "Web") return link.url;

  // Fallback for other types, in case new custom types get created
  return "/doc/" + link.id;
};
module.exports = linkResolver;
