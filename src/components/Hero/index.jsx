import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Wrapper } from "../../styles/base";
import { variants } from "./animations";
import { HeroWrapper } from "./style";

const Hero = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <Container>
          <Row>
            <Col></Col>
            <Col lg={8}>
              <h1>
                {`Lorem ipsum dolor sit amet, consectetur`
                  .split(" ")
                  .map((word, i) => (
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </HeroWrapper>
    </Wrapper>
  );
};

export default Hero;
