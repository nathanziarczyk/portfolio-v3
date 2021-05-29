import React from "react";
import Hero from "../src/components/Hero";
import ImageText from "../src/components/ImageText";

export const sliceResolver = (slice, key) => {
  switch (slice.slice_type) {
    case "hero":
      return <Hero data={slice} key={key} />;

    case "image_text":
      return <ImageText data={slice} key={key} />;
    default:
      break;
  }
};
