import React from "react";
import Hero from "../src/components/slices/Hero";
import ImageText from "../src/components/slices/ImageText";
import ContactForm from "../src/components/slices/ContactForm";
import Services from "../src/components/slices/Services";
import PageHeader from "../src/components/slices/PageHeader";

export const sliceResolver = (slice, key) => {
  switch (slice?.slice_type) {
    case "hero":
      return <Hero data={slice} key={key} />;

    case "image_text":
      return <ImageText data={slice} key={key} />;

    case "page_header":
      return <PageHeader data={slice} key={key} />;

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
