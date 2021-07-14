import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";

import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Wrapper } from "../../styles/base";
import { variants } from "./animations";
import { Content, Image, ImageTextWrapper } from "./style";

const ImageText = ({ data }) => {
  let { content, direction, image, theme, image_alignment } = data.primary;
  const [ref, controls] = useScrollAnimation();
  return (
    <ImageTextWrapper bg={theme} imageAlignment={image_alignment} ref={ref}>
      <Container>
        <Row>
          <Col
            lg={7}
            className={[
              direction ? "order-lg-2 offset-lg-1" : "order-lg-1",
            ].join(" ")}
          >
            <motion.div
              initial="hidden"
              animate={controls}
              variants={variants.content}
              style={{ height: "100%" }}
            >
              <Content
                imageAlignment={image_alignment}
                dangerouslySetInnerHTML={{ __html: content.html }}
              ></Content>
            </motion.div>
          </Col>
          <Col
            lg={4}
            className={[
              direction ? "order-lg-1" : "offset-lg-1 order-lg-2",
            ].join(" ")}
          >
            <Parallax y={[-7.5, 7.5]}>
              <Image>
                <motion.img
                  src={image.fluid.src}
                  alt={image.alt}
                  initial="hidden"
                  animate={controls}
                  variants={variants.image}
                  width={600}
                  height={500}
                />
              </Image>
            </Parallax>
          </Col>
        </Row>
      </Container>
    </ImageTextWrapper>
  );
};

export default ImageText;
