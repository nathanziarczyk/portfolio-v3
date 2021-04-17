import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Wrapper } from "../../styles/base";
import { Form, FormRow, FormWrapper } from "./style";

const ContactForm = () => {
  return (
    <FormWrapper>
      <Wrapper>
        <Container>
          <Row>
            <Col></Col>
            <Col lg={8}>
              <h2>Let's work together!</h2>
              <Form>
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
                <button type="submit">Submit</button>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Wrapper>
    </FormWrapper>
  );
};

export default ContactForm;
