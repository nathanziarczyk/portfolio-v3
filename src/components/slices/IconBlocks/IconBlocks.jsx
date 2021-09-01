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
              {items.map((item) => {
                console.log(item);
                const { title, image, content } = item;
                return (
                  <div className="icon-block">
                    <picture>
                      <source srcset={image.fluid.srcWebp} type="image/webp" />
                      <source srcset={image.fluid.src} type="image/png" />
                      <img srcset={image.fluid.src} alt="" loading="lazy" />
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
