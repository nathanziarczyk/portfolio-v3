import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { variants } from "../PageHeader/animations";
import { Title, PageHeaderWrapper, Body } from "./style";
import ContactForm from "../ContactForm/index";

const PageHeaderContact = (props) => {
  const { primary } = props.data;
  return (
    <PageHeaderWrapper>
      <Row>
        <Col lg={5}>
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
          {primary.body1?.html && (
            <Body dangerouslySetInnerHTML={{ __html: primary.body1.html }} />
          )}
        </Col>
        <Col lg={6} className="offset-lg-1">
          <ContactForm />
        </Col>
      </Row>
    </PageHeaderWrapper>
  );
};

export default PageHeaderContact;
