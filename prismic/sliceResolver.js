import React from "react";
import Hero from "../src/components/Hero";
import ImageText from "../src/components/ImageText";
import ContactForm from "../src/components/ContactForm";
import Services from "../src/components/Services";

export const sliceResolver = (slice, key) => {
  switch (slice?.slice_type) {
    case "hero":
      return <Hero data={slice} key={key} />;

    case "image_text":
      return <ImageText data={slice} key={key} />;

    case "widget":
      if (slice.primary.widget === "Contact form") {
        return <ContactForm data={slice} key={key} />;
      } else if (slice.primary.widget === "Services") {
        return <Services data={slice} key={key} />;
      }
      return;
    default:
      break;
  }
};
