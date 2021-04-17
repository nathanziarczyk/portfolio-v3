import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Wrapper } from "../../styles/base";
import { Content, ImageTextWrapper, Image } from "./style";
import headshot from "../../images/me_web_2.png";

const ImageText = () => {
  return (
    <ImageTextWrapper>
      <Wrapper style={{ paddingBottom: 0 }}>
        <Container>
          <Row>
            <Col lg={6}>
              <Content>
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Content>
            </Col>
            <Col lg={6}>
              <Image>
                <img src={headshot} alt="" />
              </Image>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </ImageTextWrapper>
  );
};

export default ImageText;
