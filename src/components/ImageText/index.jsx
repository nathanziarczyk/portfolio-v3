import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Wrapper } from "../../styles/base";
import { Content, ImageTextWrapper, Image } from "./style";
import { Button } from "../Button/style";

const ImageText = ({ data }) => {
  return (
    <ImageTextWrapper>
      <Wrapper style={{ paddingBottom: 0, paddingTop: "4rem" }}>
        <Container>
          <Row>
            <Col lg={7}>
              <Content></Content>
            </Col>
            <Col lg={5}>
              <Image></Image>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </ImageTextWrapper>
  );
};

export default ImageText;
