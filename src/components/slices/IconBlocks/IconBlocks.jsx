import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IconBlocksContainer, IconBlocksWrapper } from "./style";

const IconBlocks = ({ data }) => {
  const {
    primary: { title, subtitle },
    items,
  } = data;
  return (
    <IconBlocksWrapper>
      <Container>
        <Row>
          <Col md={6} lg={4}>
            <h2>{title.text}</h2>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: subtitle.html }}
            ></div>
          </Col>
          <Col md={6} lg={8}>
            <IconBlocksContainer>
              {items.map((item, index) => {
                const { title, image, content } = item;
                return (
                  <div className="icon-block" key={index}>
                    <picture>
                      <source srcSet={image.fluid.srcWebp} type="image/webp" />
                      <source srcSet={image.fluid.src} type="image/png" />
                      <img
                        srcSet={image.fluid.src}
                        alt={image.alt}
                        loading="lazy"
                      />
                    </picture>
                    <h3>{title.text}</h3>
                    <div
                      className="content"
                      dangerouslySetInnerHTML={{ __html: content.html }}
                    ></div>
                  </div>
                );
              })}
            </IconBlocksContainer>
          </Col>
        </Row>
      </Container>
    </IconBlocksWrapper>
  );
};

export default IconBlocks;
