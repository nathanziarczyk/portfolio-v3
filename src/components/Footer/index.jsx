import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FooterWrapper } from "./style";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col>
            <p>© {new Date().getFullYear()} - Nathan Ziarczyk</p>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
