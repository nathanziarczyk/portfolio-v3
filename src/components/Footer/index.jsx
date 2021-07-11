import { Link } from "gatsby";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FooterTab, FooterWrapper } from "./style";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col lg={3}>
            <h2>
              <Link className="disable-global" href="/">
                Nathan
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
                  <b>Nathan Ziarcyk</b>
                </li>
                <li>
                  <a href="mailto:hello@nathanz.dev">hello@nathanz.dev</a>
                </li>
                <li>BTW: BE0733.981.776</li>
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
