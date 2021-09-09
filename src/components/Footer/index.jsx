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
                  src={logo}
                  alt="Logo"
                  loading="lazy"
                  width="160"
                  height="100"
                />
              </Link>
            </h2>
          </Col>
          <Col lg={3}>
            <FooterTab>
              <h3>Sitemap</h3>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </FooterTab>
          </Col>
          <Col lg={3}>
            <FooterTab>
              <h3>Contact</h3>
              <ul>
                <li>
                  <b>Nathan Ziarczyk</b>
                </li>
                <li>
                  <a href="mailto:hello@nathanz.dev">hello@nathanz.dev</a>
                </li>
                <li>BE0733.981.776</li>
              </ul>
            </FooterTab>
          </Col>
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
