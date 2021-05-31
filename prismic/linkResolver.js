export const linkResolver = function (link) {
  console.log(link);
  if (link.link_type === "Document") return "/" + link.uid;
  // Fallback for other types, in case new custom types get created
  return "/doc/" + link.id;
};
