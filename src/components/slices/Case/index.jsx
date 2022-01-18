import React from "react";
import { CaseWrapper, Content, ImageWrapper } from "./style";
import { Col, Row } from "react-bootstrap";
import { Button } from "../../Button/style";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { variants } from "./animations";

export default function Case({ data }) {
  const { image, title1, body1, quote, quotee, link } = data.primary;
  const [ref, controls] = useScrollAnimation(0);

  return (
    <div ref={ref}>
      <CaseWrapper className={"case-wrapper"} type="without_bg">
        <Row>
          <Col lg={7} xl={8}>
            <ImageWrapper>
              <motion.img
                src={image.fluid.src}
                srcSet={image.fluid.srcSet}
                width={1200}
                height={300}
                alt={image.alt}
                loading="lazy"
                variants={variants.image}
                initial="hidden"
                animate={controls}
              />
              {link?.url && (
                <Button>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    View website
                  </a>
                </Button>
              )}
            </ImageWrapper>
          </Col>
          <Col lg={5} xl={4}>
            <Content
              className="shadow--medium"
              variants={variants.content}
              initial="hidden"
              animate={controls}
            >
              {title1 && <h3>{title1}</h3>}
              <div
                className="body"
                dangerouslySetInnerHTML={{ __html: body1.html }}
              ></div>

              <div className="quote-container">
                <div
                  className="quote"
                  dangerouslySetInnerHTML={{ __html: quote.html }}
                ></div>
                <p className="quotee">{quotee}</p>
              </div>
            </Content>
          </Col>
        </Row>
      </CaseWrapper>
    </div>
  );
}
