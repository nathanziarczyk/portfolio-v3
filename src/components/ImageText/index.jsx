import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Wrapper } from "../../styles/base";
import { variants } from "./animations";
import { Content, Image, ImageTextWrapper } from "./style";

const ImageText = ({ data }) => {
  const { content, direction, image, theme, image_alignment } = data.primary;
  const [ref, controls] = useScrollAnimation();
  return (
    <ImageTextWrapper bg={theme} imageAlignment={image_alignment} ref={ref}>
      <Container>
        <Row>
          <Col lg={7}>
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
          <Col lg={5}>
            <Image>
              <motion.img
                src={image.fluid.src}
                alt={image.alt}
                initial="hidden"
                animate={controls}
                variants={variants.image}
              />
            </Image>
          </Col>
        </Row>
      </Container>
    </ImageTextWrapper>
  );
};

export default ImageText;
