const React = require("react");
// Logs when the client route changes
exports.onPreRouteUpdate = ({ prevLocation }) => {
  if (prevLocation) window.GATSBY_LOADED = true;
};
