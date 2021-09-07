import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { variants } from "./animations";
import { HeroWrapper } from "./style";
import linkResolver from "../../../../prismic/linkResolver";
import { Link } from "gatsby";
import { Button } from "../../Button/style";
import grid from "../../../images/grid.svg";

const Hero = ({ data }) => {
  const {
    primary: { hero_title, hero_body },
    items,
  } = data;
  return (
    <HeroWrapper type={"without_bg"}>
      <div className="grid" style={{ backgroundImage: `url(${grid})` }}></div>
      <Row>
        <Col lg={8} className="offset-lg-2">
          <div className="content-wrapper">
            <h1>
              {hero_title.text.split(" ").map((word, i) => (
                <span className="overflow-hidden" key={i}>
                  <motion.span
                    className="word"
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={variants.h1.word}
                  >
                    {word + " "}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants.content}
              dangerouslySetInnerHTML={{ __html: hero_body.html }}
            ></motion.div>
            <motion.div
              className="buttons"
              initial={"hidden"}
              animate="visible"
              variants={variants.buttons}
            >
              {items.map((item, index) => {
                return (
                  <Button _type={index === 0 ? "primary" : "secondary"}>
                    <Link
                      target={
                        item.button_link.link_type === "Web" ? "_blank" : null
                      }
                      to={linkResolver(item.button_link)}
                    >
                      {item.button_label.text}
                    </Link>
                  </Button>
                );
              })}
            </motion.div>
          </div>
        </Col>
      </Row>
    </HeroWrapper>
  );
};

export default Hero;
