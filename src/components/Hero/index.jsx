import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Wrapper } from "../../styles/base";
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
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
