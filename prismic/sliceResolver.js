import React from "react";
import Hero from "../src/components/Hero";

export const sliceResolver = (slice, key) => {
  switch (slice.slice_type) {
    case "hero":
      return <Hero data={slice} key={key} />;

    default:
      break;
  }
};
