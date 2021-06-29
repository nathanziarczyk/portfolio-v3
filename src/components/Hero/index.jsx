import { motion } from "framer-motion";
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ThemeContext } from "styled-components";
import { Wrapper } from "../../styles/base";
import { variants } from "./animations";
import { HeroWrapper } from "./style";

const Hero = ({ data }) => {
  const theme = useContext(ThemeContext);

  const { hero_title, hero_body } = data.primary;
  return (
    <Wrapper>
      <HeroWrapper>
        <Container>
          <Row>
            <Col></Col>
            <Col lg={8}>
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
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </HeroWrapper>
    </Wrapper>
  );
};

export default Hero;
