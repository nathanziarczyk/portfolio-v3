import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Wrapper } from "../../styles/base";
import { Content, ImageTextWrapper, Image } from "./style";
import { Button } from "../Button/style";

const ImageText = ({ data }) => {
  const { content, direction, image, theme } = data.primary;
  return (
    <ImageTextWrapper>
      <Wrapper bg={theme} style={{ paddingBottom: 0, paddingTop: "4rem" }}>
        <Container>
          <Row>
            <Col lg={7}>
              <Content
                dangerouslySetInnerHTML={{ __html: content.html }}
              ></Content>
            </Col>
            <Col lg={5}>
              <Image>
                <img src={image.fluid.src} alt={image.alt} />
              </Image>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </ImageTextWrapper>
  );
};

export default ImageText;
