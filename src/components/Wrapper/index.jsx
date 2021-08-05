import React from "react";
import { Container } from "react-bootstrap";
import { WrapperWrapper } from "./style";

const Wrapper = ({ children, type = "without_bg", className }) => {
  if (type === "rounded")
    return (
      <Container>
        <WrapperWrapper className={className} type={type}>
          {children}
        </WrapperWrapper>
      </Container>
    );
  return (
    <WrapperWrapper className={className} type={type}>
      <Container>{children}</Container>
    </WrapperWrapper>
  );
};

export default Wrapper;
