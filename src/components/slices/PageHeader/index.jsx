import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { variants } from "./animations";
import { Body, PageHeaderWrapper, Title } from "./style";

const PageHeader = (props) => {
  const { primary } = props.data;
  return (
    <PageHeaderWrapper>
      <Container>
        <Row>
          <Col>
            <Title>
              {primary.title.text.split(" ").map((word, i) => (
                <span className="overflow-hidden" key={i}>
                  <motion.span
                    className="word"
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={variants.title.word}
                  >
                    {word + " "}
                  </motion.span>
                </span>
              ))}
            </Title>
            {primary.body?.html && (
              <Body dangerouslySetInnerHTML={{ __html: primary.body.html }} />
            )}
          </Col>
        </Row>
      </Container>
    </PageHeaderWrapper>
  );
};

export default PageHeader;
