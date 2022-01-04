import { Link } from "gatsby";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FooterTab, FooterWrapper } from "./style";

import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col lg={3}>
            <h2>
              <Link className="disable-global" to="/">
                <img
                  src={"/images/logo_gradient.svg"}
                  alt="Logo"
                  loading="lazy"
                  width="160"
                  height="42"
                />
              </Link>
            </h2>
          </Col>
          <Col lg={3}></Col>
          <Col lg={3}></Col>
          <Col lg={3}>
            <FooterTab>
              <p>© {new Date().getFullYear()} - Nathan Ziarczyk</p>
            </FooterTab>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
