import { Link } from "gatsby";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HeaderEl } from "./style";

const Header = () => {
  return (
    <Container>
      <Row>
        <Col>
          <HeaderEl>
            <h2>
              <Link to="/">Nathan</Link>
            </h2>
            <nav>
              <ul>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </nav>
          </HeaderEl>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
