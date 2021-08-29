import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { variants } from "./animations";
import { HeroWrapper } from "./style";
import { Parallax } from "react-scroll-parallax";

const Hero = ({ data }) => {
  const { hero_title, hero_body, image } = data.primary;
  return (
    <HeroWrapper type={"without_bg"}>
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
          </div>
        </Col>
      </Row>
    </HeroWrapper>
  );
};

export default Hero;
