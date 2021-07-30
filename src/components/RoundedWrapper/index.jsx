import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { WrapperWrapper } from "./style";

const RoundedWrapper = (props) => {
  const { children } = props;
  return (
    <Container>
      <WrapperWrapper>{children}</WrapperWrapper>
    </Container>
  );
};

export default RoundedWrapper;
