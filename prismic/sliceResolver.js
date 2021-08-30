import React from "react";
import Hero from "../src/components/slices/Hero";
import ImageText from "../src/components/slices/ImageText";
import ContactForm from "../src/components/slices/ContactForm";
import Services from "../src/components/slices/Services";
import PageHeader from "../src/components/slices/PageHeader";
import Text from "../src/components/slices/Text";
import Usp from "../src/components/slices/Usp";
import Focus from "../src/components/slices/Focus";
import ExpandedServices from "../src/components/slices/ExpandedServices";

export const sliceResolver = (slice, key) => {
  switch (slice?.slice_type) {
    case "hero":
      return <Hero index={key} data={slice} key={key} />;

    case "image_text":
      return <ImageText index={key} data={slice} key={key} />;

    case "page_header":
      return <PageHeader index={key} data={slice} key={key} />;

    case "rich_text":
      return <Text index={key} data={slice} key={key} />;

    case "usp":
      return <Usp index={key} data={slice} key={key} />;

    case "focus":
      return <Focus index={key} data={slice} key={key} />;

    case "widget":
      console.log(slice.primary.widget);
      if (slice.primary.widget === "Contact form") {
        return <ContactForm index={key} data={slice} key={key} />;
      } else if (slice.primary.widget === "Services") {
        return <Services index={key} data={slice} key={key} />;
      } else if (slice.primary.widget === "Expanded services") {
        return <ExpandedServices index={key} data={slice} key={key} />;
      }
      return;
    default:
      break;
  }
};
