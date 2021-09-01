import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";

import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { variants } from "./animations";
import { Content, Image, ImageTextWrapper } from "./style";

const ImageText = ({ data }) => {
  let { content, direction, image, theme, image_alignment } = data.primary;
  const [ref, controls] = useScrollAnimation();
  return (
    <div ref={ref}>
      <ImageTextWrapper type={theme} imageAlignment={image_alignment}>
        <Row>
          <Col
            lg={6}
            className={[
              "order-1",
              direction ? "order-lg-1" : "order-lg-2 offset-lg-1",
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
            lg={5}
            className={[
              "order-1",
              direction ? "order-lg-2 offset-lg-2" : "order-lg-1",
            ].join(" ")}
          >
            <div className="image-wrapper">
              <Parallax y={[-2.5, 2.5]}>
                <Image className="image-wrap">
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
            </div>
          </Col>
        </Row>
      </ImageTextWrapper>
    </div>
  );
};

export default ImageText;
