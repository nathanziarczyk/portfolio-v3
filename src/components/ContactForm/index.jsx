import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Form, FormRow, FormWrapper } from "./style";
import { Button } from "../Button/style";

const ContactForm = (props) => {
  const { theme } = props.data.primary;
  return (
    <FormWrapper bg={theme}>
      <Container>
        <Row>
          <Col></Col>
          <Col lg={8}>
            <h2>Let's work together!</h2>
            <Form bg={theme}>
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
