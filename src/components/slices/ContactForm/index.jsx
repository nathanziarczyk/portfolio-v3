import React from "react";
import { Col, Row } from "react-bootstrap";
import { FormWrapper } from "./style";

const ContactForm = (props) => {
  const { theme } = props.data.primary;
  const key = props.index;
  return (
    <div>
      <FormWrapper type={theme} index={key}>
        <Row>
          <Col></Col>
          <Col lg={8}>
            <iframe
              src="https://tally.so/embed/m6kde3?hideTitle=1&alignLeft=1&transparentBackground=1"
              width="100%"
              height="650"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="Contact form
"
            ></iframe>
          </Col>
          <Col></Col>
        </Row>
      </FormWrapper>
    </div>
  );
};

export default ContactForm;
