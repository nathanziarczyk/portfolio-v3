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
                {`Professional, beautiful and easy-to-use digital experiences`
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
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants.content}
              >
                <p>
                  Hi! 👋 I'm Nathan. I'm a web developer, currently working at{" "}
                  <a target="_blank" href="https://xlab.be/en">
                    Experience Lab
                  </a>
                  <br />
                  In addition to my day job, I provide my knowledge and
                  expertise to people who need it as a freelance web developer.
                </p>
              </motion.div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </HeroWrapper>
    </Wrapper>
  );
};

export default Hero;
