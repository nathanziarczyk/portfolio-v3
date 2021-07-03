import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Wrapper } from "../../styles/base";
import { Content, ImageTextWrapper, Image } from "./style";
import { Button } from "../Button/style";
import { motion, useAnimation } from "framer-motion";
import { variants } from "./animations";
import { useInView } from "react-intersection-observer";

const ImageText = ({ data }) => {
  const { content, direction, image, theme } = data.primary;

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <ImageTextWrapper ref={ref}>
      <Wrapper bg={theme} style={{ paddingBottom: 0, paddingTop: "4rem" }}>
        <Container>
          <Row>
            <Col lg={7}>
              <motion.div
                initial="hidden"
                animate={controls}
                variants={variants.content}
              >
                <Content
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
      </Wrapper>
    </ImageTextWrapper>
  );
};

export default ImageText;
