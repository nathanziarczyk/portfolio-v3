import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particles from "react-tsparticles";
import { ThemeContext } from "styled-components";
import { Wrapper } from "../../styles/base";
import { variants } from "./animations";
import { HeroWrapper } from "./style";

const Hero = ({ data }) => {
  const theme = useContext(ThemeContext);

  const particlesConfig = {
    background: {
      color: {
        value: theme.bg,
      },
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "parent",
      events: {
        onHover: {
          enable: true,
          mode: "bounce",
        },
      },
      modes: {
        bounce: {
          distance: 20000,
        },
      },
    },
    particles: {
      color: {
        value: theme.text,
      },
      links: {
        color: theme.text,
        distance: 150,
        enable: true,
        opacity: 0.1,
        width: 1,
      },
      collisions: {
        // enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 0.2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 600,
        },
        value: 80,
      },
      opacity: {
        value: 0.05,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
  };

  const { hero_title, hero_body } = data.primary;
  return (
    <Wrapper>
      <Particles options={particlesConfig} />
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
