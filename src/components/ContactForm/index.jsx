import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Form, FormRow, FormWrapper } from "./style";
import { Button } from "../Button/style";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { variants } from "./animations";

const ContactForm = (props) => {
  const { theme, title } = props.data.primary;
  const [ref, controls] = useScrollAnimation(0.1);
  return (
    <FormWrapper bg={theme} ref={ref}>
      <Container>
        <Row>
          <Col></Col>
          <Col lg={8}>
            {title?.text && (
              <motion.h2
                initial="hidden"
                animate={controls}
                variants={variants}
              >
                {title.text}
              </motion.h2>
            )}
            <Form
              bg={theme}
              action="/success"
              name="contact"
              method="POST"
              data-netlify="true"
              initial="hidden"
              animate={controls}
              variants={variants}
              custom={1}
            >
              <input type="hidden" name="form-name" value="contact" />
              <FormRow>
                <label htmlFor="name">
                  Name *
                  <input required type="text" name="name" id="name" />
                </label>
                <label htmlFor="email">
                  E-mail *
                  <input required type="email" name="email" id="email" />
                </label>
              </FormRow>
              <FormRow>
                <label htmlFor="phone">
                  Phone
                  <input type="text" name="phone" id="phone" />
                </label>
                <label htmlFor="company">
                  Company
                  <input type="email" name="company" id="company" />
                </label>
              </FormRow>
              <FormRow>
                <label htmlFor="message">
                  Message *
                  <textarea required name="message" id="message"></textarea>
                </label>
              </FormRow>
              <Button type="submit">Submit</Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </FormWrapper>
  );
};

export default ContactForm;
