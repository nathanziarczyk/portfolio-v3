import React from "react";
import { Container, Row } from "react-bootstrap";
import { HeaderEl } from "./style";

const Header = () => {
  return (
    <HeaderEl>
      <Container>
        <Row>
          <h1>Nathan</h1>
        </Row>
      </Container>
    </HeaderEl>
  );
};

export default Header;
