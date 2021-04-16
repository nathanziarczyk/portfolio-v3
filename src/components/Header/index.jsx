import { Link } from "gatsby";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { HeaderEl } from "./style";

const Header = () => {
  return (
    <Container>
      <Row>
        <HeaderEl>
          <h1>
            <Link to="/">Nathan</Link>
          </h1>
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
      </Row>
    </Container>
  );
};

export default Header;
